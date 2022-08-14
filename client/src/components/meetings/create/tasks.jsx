import React from "react";
import { DeleteTask } from "./DeleteTask";
import { HStack, VStack, Flex, Text, Link, Heading } from "@chakra-ui/react";

function TaskList({ tasks, deleteTask }) {
  if (!tasks.length) {
    return <></>;
  }
  return (
    <>
      <VStack
        borderRadius="lg"
        w="100%"
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
        alignItems="stretch"
        mt="4"
      >
        <Heading
          fontWeight="normal"
          letterSpacing="tight"
          fontFamily="Europa-Bold"
          fontSize="4xl"
          alignItems="center"
          color="#2e2e2e"
          mt="3"
          mb="4"
        >
          Scheduled meetings
        </Heading>
        {tasks.map((task) => (
          <HStack
            key={task.id}
            opacity={task.check == true ? "0.2" : "1"}
            mb="10px"
          >
            <Link
              href={task.body[2]}
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              <Flex
                id={task.id}
                gridGap={2}
                as="a"
                align="left"
                w="500px"
                rounded="md"
                py={3}
                px={5}
                mr="10"
                mb="5"
                bgColor="#e4e4e4"
                color="#333333"
                flexDirection="column"
              >
                <Text className="active" fontSize="xl">
                  Meeting ID: <b>{task.body[0]}</b>
                </Text>
                <Text className="active" fontSize="xl">
                  Meeting Password: <b>{task.body[1]}</b>
                </Text>
              </Flex>
            </Link>

            <DeleteTask task={task} deleteTask={deleteTask} />
          </HStack>
        ))}
      </VStack>
    </>
  );
}

export default TaskList;
