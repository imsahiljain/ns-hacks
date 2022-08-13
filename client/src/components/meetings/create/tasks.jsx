import React from "react";
// import UpdateTask from "./UpdateTask";
import { DeleteTask, DeleteAllTask } from "./DeleteTask";
import { HStack, VStack, Flex, Text, Link, Heading } from "@chakra-ui/react";

function TaskList({ tasks, updateTask, deleteTask, checkTask }) {
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
          color="#e6e6e6"
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
            {/* <Text
              w="100%"
              p="8px"
              borderRadius="lg"
              borderColor="#242424"
              borderWidth="2px"
              as={task.check == true ? "s" : ""}
              cursor="pointer"
              fontSize="lg"
              onClick={() => checkTask(task.id)}
            >
              {task.body[0]}
              {/* {task.body[1]}
              {task.body[2]} */}
            {/* </Text> */}

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
                // mx={7}
                mb="5"
                bgColor="#333333"
                flexDirection="column"
              >
                {/* <Icon as={link.icon} fontSize="3xl" className="active-icon" /> */}
                <Text className="active" fontSize="xl">
                  Meeting ID: <b>{task.body[0]}</b>
                </Text>
                <Text className="active" fontSize="xl">
                  Meeting Password: <b>{task.body[1]}</b>
                </Text>
              </Flex>
            </Link>

            <DeleteTask
              task={task}
              deleteTask={deleteTask}

              // deleteTaskAll={deleteTaskAll}
            />
            {/* <UpdateTask task={task} updateTask={updateTask} /> */}
          </HStack>
        ))}
      </VStack>

      <Flex>{/* <DeleteAllTask deleteTaskAll={deleteTaskAll} /> */}</Flex>
    </>
  );
}

export default TaskList;
