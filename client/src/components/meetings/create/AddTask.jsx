import React from "react";
import { useState } from "react";
import {
  Button,
  HStack,
  Input,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input as ChakraInput,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";

function AddTask({ addTask }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
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
          variant="filled"
          placeholder="Enter meeting ID"
          type="number"
          fontSize="lg"
          value={meetID}
          onChange={(e) => setmeetID(e.target.value)}
          // mr="10px"
          bgColor="#1d1d1d"
          color="#e6e6e6"
          _placeholder={{ color: "#4f4f4f" }}
          _focus={{ bgColor: "#212121" }}
          _hover={{ bgColor: "#212121" }}
          _active={{ bgColor: "#212121" }}
          isRequired
        />
        <Input
          h="50px"
          variant="filled"
          placeholder="Enter password"
          fontSize="lg"
          value={meetPass}
          onChange={(e) => setmeetPass(e.target.value)}
          // mr="10px"
          bgColor="#1d1d1d"
          color="#e6e6e6"
          _placeholder={{ color: "#4f4f4f" }}
          _focus={{ bgColor: "#212121" }}
          _hover={{ bgColor: "#212121" }}
          _active={{ bgColor: "#212121" }}
          isRequired
        />
        <Input
          h="50px"
          variant="filled"
          placeholder="Enter meeting link"
          fontSize="lg"
          type="link"
          value={meetLink}
          onChange={(e) => setmeetLink(e.target.value)}
          // mr="10px"
          bgColor="#1d1d1d"
          color="#e6e6e6"
          _placeholder={{ color: "#4f4f4f" }}
          _focus={{ bgColor: "#212121" }}
          _hover={{ bgColor: "#212121" }}
          _active={{ bgColor: "#212121" }}
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
