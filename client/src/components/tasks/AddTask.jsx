import { useState } from "react";
import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";

function AddTask({ addTask }) {
  const toast = useToast();
  const [content, setContent] = useState("");
  const [statusInput, setStatusInput] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    const taskText = content.trim();

    if (!taskText) {
      toast({
        title: "Add a task",
        position: "bottom",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });

      return setContent("");
    } else {
      toast({
        title: "Added the task",
        position: "bottom",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }

    const task = {
      id: nanoid(),
      body: taskText,
      check: false,
    };

    addTask(task);
    setContent("");
  }

  if (content && !statusInput) {
    setStatusInput(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="4" mb="10" w="70%">
        <Input
          h="50px"
          variant="filled"
          placeholder="Enter task"
          fontSize="lg"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          mr="10px"
          _focus={{ borderColor: "#4a4a4a" }}
        />
        <Button colorScheme="blue" px="8" h="44px" type="submit">
          Add
        </Button>
      </HStack>
    </form>
  );
}

export default AddTask;
