import React, { useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Icon,
  Button,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";
import StudentClassSidebar from "../../../components/student/classroom/student-class-sidebar";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
// import Cookies from "js-cookie";
import Axios from "axios";

export default function CourseInfo() {
  const toast = useToast();
  let currUser = Cookies.get("username") || "Teacher";
  let userEmail = Cookies.get("email");
  let userName = Cookies.get("username");
  let userType = Cookies.get("usertype");
  const { classID, className } = useParams();
  const classInfo = {
    classID,
    className,
  };

  let userAuthenticated = Cookies.get("usertype");
  const [studentList, setStudentList] = useState([]);
  const [teacherList, setTeacherList] = useState("");

  const getStudentsAndTeacherList = async () => {
    await Axios.get(
      `http://localhost:5000/api/singleclass/student/getclasstudents/?classId=${classID}`,
      {}
    )
      .then((res) => {
        setStudentList(res.data.students);
        setTeacherList(res.data.teacher);
        console.log(res.data.teacher);
      })
      .catch((err) => {
        console.log(`Error message ${err}`);
      });
  };

  useEffect(() => {
    if (userAuthenticated != "student") {
      toast({
        title: "Unallowed to access page!",
        position: "bottom",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      navigate("/");
    } else {
      getStudentsAndTeacherList();
    }
  }, []);
  let navigate = useNavigate();
  const handleRedirection = () => {
    navigate(`/student/classes`);
  };
  console.log(studentList);
  console.log(teacherList);
  return (
    <Flex
      h={[null, null, "100vh"]}
      maxW="2000px"
      flexDir={["column", "column", "row"]}
      overflow="hidden"
    >
      {/* Column 1 */}

      <StudentClassSidebar classID="students" />

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
          color="#141414"
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
            Teacher Details
          </Heading>
          <Text>teacher details here</Text>
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
            All students enrolled
          </Heading>
          <Text>student details here</Text>
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
