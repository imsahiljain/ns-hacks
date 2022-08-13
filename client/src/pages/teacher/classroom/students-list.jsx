import React, { useEffect } from "react";
import {
  Flex,
  Heading,
  Text,
  Icon,
  Button,
  VStack,
  HStack,
  Link,
  Avatar,
  useToast
} from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";
import ClassSidebar from "../../../components/teacher/classroom/class-sidebar";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Axios from "axios";
import { useState } from "react";

export default function StudentList() {
  let userEmail = Cookies.get("email");
  let userName = Cookies.get("username");
  let userType = Cookies.get("usertype");
  let navigate = useNavigate();
  let userAuthenticated = Cookies.get("usertype");
  let toast = useToast();
  const { classID, className } = useParams();
  const classInfo = {
    classID,
    className,
  };
  const [studentList, setStudentList] = useState([]);

  const retrieveUserList = async () => {
   await Axios.get(`http://localhost:5000/api/singleclass/teacher/getclasstudents/?classId=${classID}`, {
    })
      .then((res) => {
        setStudentList(res.data);
      })
      .catch((err) => {
        console.log(`Error message ${err}`);
      });
  };
  useEffect(() => {
    if (userAuthenticated != "teacher") {
      toast({
        title: "Unallowed to access page!",
        position: "bottom",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      navigate("/");
    } else {
      retrieveUserList();
    }
  }, []);
  const handleRedirection = () => {
    navigate(`/teacher/classes`);
  };

  return (
    <Flex
      h={[null, null, "100vh"]}
      maxW="2000px"
      flexDir={["column", "column", "row"]}
      overflow="hidden"
    >
      {/* Column 1 */}

      <ClassSidebar classID="students" />

      {/* Column 2 */}
      <Flex
        w="90%"
        p="3%"
        mt={-2}
        bgColor="#fafafa"
        flexDir="column"
        overflow="auto"
        minH="100vh"
      >
        <Heading
          fontWeight="normal"
          letterSpacing="tight"
          fontFamily="Europa-Reg"
          fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
          alignItems="center"
          color="#2e2e2e"
        >
          Welcome to the classroom,{" "}
          <Flex display="inline-flex" fontWeight="bold">
            {userName}
          </Flex>
        </Heading>
        <VStack
          borderRadius="lg"
          w="100%"
          maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
          alignItems="stretch"
          mt="7"
        >
          <Heading
            // fontWeight="normal"
            // letterSpacing="tight"
            // fontFamily="Europa-Bold"
            // fontSize="4xl"
            // alignItems="center"
            // color="#e6e6e6"
            mt="5"
            mb="5"
            // mt="100px"
            // mb="4"
            fontWeight="normal"
            letterSpacing="tight"
            fontFamily="Europa-Reg"
            fontSize="3xl"
            // alignItems="left"
            textAlign="left"
            color="#2e2e2e"
          >
            All students
          </Heading>
          {/* {console.log("all classes", allclasses)} */}
          {/* Students list */}
          <HStack
          // key={task.id}
          // opacity={task.check == true ? "0.2" : "1"}
          // mb="10px"
          >
           
            <Link
              // to={`/teacher/class/${task.body[1]}/${task.body[0]}/students`}
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              color="#2e2e2e"
            >
              <Flex
                // id={task.id}
                gridGap={2}
                as="a"
                align="left"
                w="400px"
                rounded="md"
                py={3}
                px={5}
                mr="10"
                // mx={7}
                mb="5"
                bgColor="#ededed"
                flexDirection="column"
              >
                {/* <Icon as={link.icon} fontSize="3xl" className="active-icon" /> */}
               
                <Flex flexDirection="row" alignItems="center">
                  <Avatar size="lg" name="john doe" />
                  {studentList.map((student) => {
                  let i = 0;
                  <Flex flexDirection="column" ml="5">
                    <Text className="active" fontSize="xl">
                      Student name: <b>{student.name[i]}</b>
                    </Text>
                    <Text className="active" fontSize="xl">
                      Student email: <b>{student.email[i]}</b>
                    </Text>
                  </Flex>
                     i++;
                    })};
                </Flex>
              </Flex>
            </Link>
          </HStack>
           
        </VStack>
      </Flex>

      {/* Column 3 */}

      <Flex
        w="16%"
        bgColor="#fafafa"
        p="3%"
        mt={-2}
        flexDir="column"
        overflow="auto"
      >
        <Flex alignContent="center">
          <Button
            size="lg"
            p="5"
            backgroundColor="#4d4d4d"
            color="#fafafa"
            _hover={{ bgColor: "#595959" }}
            _active={{
              bg: "#525252",
            }}
            onClick={() => handleRedirection()}
          >
            <Icon
              as={MdOutlineLogout}
              fontSize="3xl"
              className="active-icon"
              px="1"
            />{" "}
            <Text fontSize="xl" fontFamily="Europa-Reg">
              Home
            </Text>{" "}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
