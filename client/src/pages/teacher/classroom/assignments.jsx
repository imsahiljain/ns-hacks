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
  useToast,
  Grid,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";
import ClassSidebar from "../../../components/teacher/classroom/class-sidebar";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Axios from "axios";
import { useState } from "react";

export default function TeacherAssignments() {
  let userEmail = Cookies.get("email");
  let userName = Cookies.get("username");
  let userType = Cookies.get("usertype");
  let navigate = useNavigate();
  let userAuthenticated = Cookies.get("usertype");
  let toast = useToast();
  // const [mainList, setMainList] = useState([]);
  const { classID, className } = useParams();
  const classInfo = {
    classID,
    className,
  };
  const [studentList, setStudentList] = useState([]);

  const retrieveUserList = async () => {
    await Axios.get(
      `http://localhost:5000/api/singleclass/teacher/getclasstudents/?classId=${classID}`,
      {}
    )
      .then((res) => {
        const { name } = res.data;
        console.log(name);
        // setStudentList((prevValue) => prevValue.concat([name[0]]));
        // setStudentList(name);
        setStudentList((prevValue) => prevValue.concat(name));
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
          fontFamily="Europa-Bold"
          fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
          alignItems="center"
          color="#2e2e2e"
        >
          Assignments
        </Heading>
        <VStack
          borderRadius="lg"
          w="100%"
          maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
          alignItems="stretch"
          mt="7"
        >
          <Heading
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
            Create an assignment
          </Heading>
          {/* {console.log("all classes", allclasses)} */}
          {/* Students list */}
          <Input
            placeholder="Enter assignment name"
            bgColor="#ebebeb"
            _placeholder={{ opacity: 0.7, color: "#9c9c9c" }}
            color="#2e2e2e"
            size="lg"
          />

          <Textarea
            placeholder="Enter description"
            bgColor="#ebebeb"
            _placeholder={{ opacity: 0.7, color: "#9c9c9c" }}
            color="#2e2e2e"
            size="lg"
            mb="7"
            // size="sm"
          />
          <Button
            bg={"green.500"}
            color={"white"}
            _hover={{
              bg: "green.600",
            }}
            _active={{ bg: "green.600" }}
            variant="solid"
            mt="8"
            mb="5"
            size="md"
          >
            Create Assignment
          </Button>
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
