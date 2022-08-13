import React,{useEffect} from "react";
import { Flex, Heading, Text, Icon, Button,useToast } from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";
import StudentClassSidebar from "../../../components/student/classroom/student-class-sidebar";
import { useLocation, useParams,useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Schedule from "../../../components/schedule";

export default function StudentSchedulePage() {
  let userEmail = Cookies.get("email");
  let userName = Cookies.get("username");
  let userType = Cookies.get("usertype");
  let currUser = Cookies.get("username");
  let navigate = useNavigate();
  let toast = useToast();
  let userAuthenticated = Cookies.get("usertype");
  const { classID, className } = useParams();
  const classInfo = {
    classID,
    className,
  };
  useEffect(() => {
    if (userAuthenticated != "student"){
      toast({
        title: "Unallowed to access page!",
        position: "bottom",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      navigate("/");
    }
  },[]);
  const handleRedirection = () => {
    navigate(`/student/classes`);
  };

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
          fontFamily="Europa-Bold"
          fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
          alignItems="center"
          color="#141414"
        >
          Schedule
        </Heading>
        <Schedule />
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
