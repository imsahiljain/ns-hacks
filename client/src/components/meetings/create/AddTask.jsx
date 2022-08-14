import React from "react";
import { useState } from "react";
import {
  Button,
  Input,
  useToast,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";

function AddTask({ addTask }) {
  const toast = useToast();
  const [meetID, setmeetID] = useState("");
  const [meetPass, setmeetPass] = useState("");
  const [meetLink, setmeetLink] = useState("");
  const [statusInput, setStatusInput] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    const taskText = [meetID.trim(), meetPass.trim(), meetLink.trim()];

    if (!taskText) {
      toast({
        title: "Add meeting creds",
        position: "bottom",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });

      return setmeetID("");
    } else {
      toast({
        title: "Meeting scheduled",
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
    setmeetID("");
    setmeetPass("");
    setmeetLink("");
  }

  if (meetID && !statusInput) {
    setStatusInput(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <VStack mt="4" mb="10" w="100%" mr="100px" pr="100px">
        <Input
          h="50px"
          placeholder="Enter meeting ID"
          type="number"
          fontSize="lg"
          value={meetID}
          onChange={(e) => setmeetID(e.target.value)}
          bgColor="#ebebeb"
          _placeholder={{ opacity: 0.7, color: "#9c9c9c" }}
          color="#2e2e2e"
          isRequired
        />
        <Input
          h="50px"
          placeholder="Enter password"
          fontSize="lg"
          value={meetPass}
          onChange={(e) => setmeetPass(e.target.value)}
          bgColor="#ebebeb"
          _placeholder={{ opacity: 0.7, color: "#9c9c9c" }}
          color="#2e2e2e"
          isRequired
        />
        <Input
          h="50px"
          placeholder="Enter meeting link"
          fontSize="lg"
          type="link"
          value={meetLink}
          onChange={(e) => setmeetLink(e.target.value)}
          bgColor="#ebebeb"
          _placeholder={{ opacity: 0.7, color: "#9c9c9c" }}
          color="#2e2e2e"
          isRequired
        />
      </VStack>
      <Button
        bg={"blue.500"}
        color={"white"}
        _hover={{
          bg: "blue.600",
        }}
        _active={{ bg: "blue.600" }}
        px="8"
        h="44px"
        type="submit"
        alignItems="center"
        mb="10"
      >
        Schedule the meeting
      </Button>
    </form>
  );
}

export default AddTask;
