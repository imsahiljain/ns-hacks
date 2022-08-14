import React from "react";
// import UpdateTask from "./UpdateTask";
import { DeleteTask, DeleteAllTask } from "./DeleteTask";
import { HStack, VStack, Flex, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function TaskList({ allclasses, updateTask, deleteTask, checkTask }) {
  if (!allclasses.length) {
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
          // fontWeight="normal"
          // letterSpacing="tight"
          // fontFamily="Europa-Bold"
          // fontSize="4xl"
          // alignItems="center"
          // color="#e6e6e6"
          mt="3"
          mb="3"
          // mt="100px"
          // mb="4"
          fontWeight="normal"
          letterSpacing="tight"
          fontFamily="Europa-Reg"
          fontSize="3xl"
          // alignItems="left"
          textAlign="left"
          color="#e6e6e6"
        >
          Created classes
        </Heading>
        {console.log("all classes", allclasses)}
        {allclasses.map((task) => (
          <HStack
            key={task.id}
            opacity={task.check == true ? "0.2" : "1"}
            // mb="10px"
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
              to={`/teacher/class/${task.body[1]}/${task.body[0]}/students`}
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
                color="#e4e4e4"
                flexDirection="column"
              >
                {/* <Icon as={link.icon} fontSize="3xl" className="active-icon" /> */}
                <Text className="active" fontSize="xl">
                  Class name: <b>{task.body[0]}</b>
                </Text>
                <Text className="active" fontSize="xl">
                  Class code: <b>{task.body[1]}</b>
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
    </>
  );
}

export default TaskList;
