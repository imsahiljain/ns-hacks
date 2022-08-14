import React from "react";
import UpdateTask from "./UpdateTask";
import { DeleteTask, DeleteAllTask } from "./DeleteTask";
import { HStack, VStack, Flex, Text } from "@chakra-ui/react";

function TaskList({ tasks, updateTask, deleteTask, deleteTaskAll, checkTask }) {
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
      >
        {tasks.map((task) => (
          <HStack
            key={task.id}
            opacity={task.check == true ? "0.2" : "1"}
            mb="10px"
          >
            <Text
              w="100%"
              p="8px"
              borderRadius="lg"
              borderColor="#242424"
              borderWidth="2px"
              as={task.check == true ? "s" : ""}
              cursor="pointer"
              fontSize="lg"
              color="#e6e6e6"
              onClick={() => checkTask(task.id)}
            >
              {task.body}
            </Text>
            <DeleteTask
              task={task}
              deleteTask={deleteTask}
              deleteTaskAll={deleteTaskAll}
            />
            <UpdateTask task={task} updateTask={updateTask} />
          </HStack>
        ))}
      </VStack>

      <Flex>
        <DeleteAllTask deleteTaskAll={deleteTaskAll} />
      </Flex>
    </>
  );
}

export default TaskList;
