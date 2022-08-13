import React, {useEffect} from "react";
import { Flex, Heading, Text, Icon, Button } from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";
// import Sidebar from "../../components/sidebar";
// import ClassLayout from "../../components/classes/todo";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import StudentSidebar from "../../../components/student/dashboard/student-sidebar";
import JoinClass from "../../../components/student/classroom/join-class";

export default function StudentClasses() {
  let currUser = Cookies.get("username");
  let userAuthenticated = Cookies.get("usertype");
  let navigate = useNavigate();
  useEffect(() => {
      if (userAuthenticated != "student"){
        navigate("/");
      }
    },[]);
  const handleLogout = () => {
    navigate(`/logout`);
  };

  return (
    <Flex
      h={[null, null, "100vh"]}
      maxW="2000px"
      flexDir={["column", "column", "row"]}
      overflow="hidden"
    >
      {/* Column 1 */}

      <StudentSidebar dashFor="students" />

      {/* Column 2 */}
      <Flex
        w="90%"
        p="3%"
        mt={-2}
        bgColor="#141414"
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
          color="#e6e6e6"
        >
          Welcome back,{" "}
          <Flex display="inline-flex" fontWeight="bold">
          {currUser}
          </Flex>
        </Heading>

        <JoinClass />
      </Flex>

      {/* Column 3 */}

      <Flex
        w="16%"
        bgColor="#141414"
        p="3%"
        mt={-2}
        flexDir="column"
        overflow="auto"
      >
        <Flex alignContent="center">
          <Button
            colorScheme="gray"
            size="lg"
            p="5"
            onClick={() => handleLogout()}
          >
            <Icon
              as={MdOutlineLogout}
              fontSize="3xl"
              className="active-icon"
              px="1"
            />{" "}
            <Text fontSize="xl" fontFamily="Europa-Reg">
              Logout
            </Text>{" "}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
