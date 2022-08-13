import React from "react";
import { Flex, Heading, Text, Icon, Button } from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";
import Sidebar from "../../../components/teacher/dashboard/sidebar";
import Todo from "../../../components/tasks/todo";

export default function TeacherTasks() {
  return (
    <Flex
      h={[null, null, "100vh"]}
      maxW="2000px"
      flexDir={["column", "column", "row"]}
      overflow="hidden"
    >
      {/* Column 1 */}

      <Sidebar dashFor="teachers" />

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
          fontFamily="Europa-Bold"
          fontSize="4xl"
          alignItems="center"
          color="#e6e6e6"
        >
          Tasks
        </Heading>
        <Todo />
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
          <Button colorScheme="gray" size="lg" p="5">
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
