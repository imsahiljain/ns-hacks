import React from "react";
import { DeleteTask } from "./DeleteTask";
import { HStack, VStack, Flex, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function TaskList({ allclasses, deleteTask }) {
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
          mt="3"
          mb="3"
          fontWeight="normal"
          letterSpacing="tight"
          fontFamily="Europa-Reg"
          fontSize="3xl"
          textAlign="left"
          color="#e6e6e6"
        >
          Created classes
        </Heading>
        {console.log("all classes", allclasses)}
        {allclasses.map((task) => (
          <HStack key={task.id} opacity={task.check == true ? "0.2" : "1"}>
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
                mb="5"
                bgColor="#333333"
                color="#e4e4e4"
                flexDirection="column"
              >
                <Text className="active" fontSize="xl">
                  Class name: <b>{task.body[0]}</b>
                </Text>
                <Text className="active" fontSize="xl">
                  Class code: <b>{task.body[1]}</b>
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
