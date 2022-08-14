import React from "react";
import { Flex, Heading, Text, Icon, Button, VStack } from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";
import ClassSidebar from "../../../components/teacher/classroom/class-sidebar";
import Sidebar from "../../../components/teacher/dashboard/sidebar";
// import JoinMeeting from "../../components/meetings/join";
import Todo from "../../../components/meetings/create/todo";

export default function TeacherMeetings() {
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
          Meetings
        </Heading>
        {/* <VStack
          borderRadius="lg"
          w="100%"
          maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
          alignItems="stretch"
          mt="7"
        > */}
        <Todo />
        {/* </VStack> */}
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
            bgColor="#262626"
            // colorScheme="gray"
            color="#e6e6e6"
            _focus={{ bgColor: "#363636" }}
            _hover={{ bgColor: "#363636" }}
            size="lg"
            p="5"
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
