import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Heading,
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
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import Axios from "axios";

function CreateClass({ addTask }) {
  const navigate = useNavigate();
  const toast = useToast();
  const [className, setClassName] = useState("");
  const [classID, setClassID] = useState("");
  let currentUser = Cookies.get("username");

  const createClassId = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setClassID(id);
    toast({
      title: "Class ID generated",
      position: "bottom",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleSubmit = async () => {
    const taskText = [className.trim(), classID.trim()];
    const task = {
      id: nanoid(),
      body: taskText,
      check: false,
    };
    addTask(task);
    setClassName("");
    setClassID("");
    await Axios.post("http://localhost:5000/api/class/createclass", {
      className: className,
      classId: classID,
      classSchedule: "12/12/2022",
      currentUser: currentUser,
    })
      .then((res) => {
        toast({
          title: res.data.additional,
          position: "bottom",
          status: res.data.toaststatus,
          duration: 2000,
          isClosable: true,
        });
        navigate(`${res.data.url}`);
      })
      .catch((err) => {
        console.log(`Error message ${err}`);
        toast({
          title: "Server connection error",
          position: "bottom",
          status: "danger",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  // navigate(`/teacher/class/${classID}/${className}/students`, {
  //   state: {
  //     className,
  //     classID,
  //   },
  // });

  return (
    <>
      <Heading
        mt="100px"
        mb="4"
        fontWeight="normal"
        letterSpacing="tight"
        fontFamily="Europa-Reg"
        fontSize="3xl"
        // alignItems="left"
        textAlign="left"
        color="#e6e6e6"
      >
        Create a class
      </Heading>

      <VStack mt="4" pb="7" w="50%" pr="100px">
        <Input
          h="50px"
          bgColor="#1d1d1d"
          variant="filled"
          placeholder="Class Name"
          fontSize="lg"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          // mr="10px"
          _focus={{ borderColor: "#4a4a4a" }}
          isRequired
        />
        <Input
          h="50px"
          variant="filled"
          placeholder="Class ID"
          fontSize="lg"
          value={classID}
          onChange={(e) => setClassID(e.target.value)}
          // mr="10px"
          _focus={{ borderColor: "#4a4a4a" }}
          isRequired
        />
        {/* <Input
            h="50px"
            variant="filled"
            placeholder="Enter meeting link"
            fontSize="lg"
            type="link"
            value={meetLink}
            onChange={(e) => setmeetLink(e.target.value)}
            // mr="10px"
            _focus={{ borderColor: "#4a4a4a" }}
            isRequired
          /> */}
      </VStack>

      <Wrap spacing={4}>
        <WrapItem>
          <Button
            colorScheme="blue"
            px="8"
            h="44px"
            type="submit"
            alignItems="center"
            mb="10"
            onClick={handleSubmit}
          >
            Create Class
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            colorScheme="red"
            px="8"
            h="44px"
            alignItems="center"
            mb="10"
            onClick={createClassId}
          >
            Auto generate code
          </Button>
        </WrapItem>
      </Wrap>
    </>
  );
}

export default CreateClass;
