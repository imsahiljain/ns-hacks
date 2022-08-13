import { VStack, useToast, HStack } from "@chakra-ui/react";
import TaskList from "./tasks";
import CreateClass from "./create";
import { useState, useEffect } from "react";

function ClassLayout() {
  const toast = useToast();
  const [allclasses, setAllclasses] = useState(
    () => JSON.parse(localStorage.getItem("classes")) || []
  );

  useEffect(() => {
    localStorage.setItem("classes", JSON.stringify(allclasses));
  }, [allclasses]);

  function deleteTask(id) {
    const newTasks = allclasses.filter((task) => {
      return task.id !== id;
    });
    setAllclasses(newTasks);
  }

  function deleteTaskAll() {
    setAllclasses([]);
  }

  function checkTask(id) {
    const newTasksCheck = allclasses.map((task, index, array) => {
      if (task.id === id) {
        task.check = !task.check;
      }
      return task;
    });

    setAllclasses(newTasksCheck);
  }

  function updateTask(id, body, onClose) {
    const info = body.trim();

    if (!info) {
      toast({
        title: "Enter some task",
        position: "bottom",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });

      return;
    } else {
      toast({
        title: "Task is updated",
        position: "bottom",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
    const newTasksUpdate = allclasses.map((task, index, array) => {
      if (task.id === id) {
        task.body = body;
        task.check = false;
      }
      return task;
    });

    setAllclasses(newTasksUpdate);

    onClose();
  }

  function addTask(task) {
    setAllclasses([...allclasses, task]);
  }
  console.log(allclasses);

  return (
    <VStack pb={28} alignItems="left">
      <CreateClass addTask={addTask} />
      <TaskList
        allclasses={allclasses}
        updateTask={updateTask}
        deleteTask={deleteTask}
        // deleteTaskAll={deleteTaskAll}
        checkTask={checkTask}
      />
    </VStack>
  );
}

export default ClassLayout;
