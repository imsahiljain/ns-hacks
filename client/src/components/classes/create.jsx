import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Heading,
  Input,
  useToast,
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

  return (
    <>
      <Heading
        mt="100px"
        mb="4"
        fontWeight="normal"
        letterSpacing="tight"
        fontFamily="Europa-Reg"
        fontSize="3xl"
        textAlign="left"
        color="#e6e6e6"
      >
        Create a class
      </Heading>

      <VStack mt="4" pb="7" w="50%" pr="100px">
        <Input
          h="50px"
          variant="filled"
          placeholder="Class Name"
          fontSize="lg"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
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
          placeholder="Class ID"
          fontSize="lg"
          value={classID}
          onChange={(e) => setClassID(e.target.value)}
          bgColor="#1d1d1d"
          color="#e6e6e6"
          _placeholder={{ color: "#4f4f4f" }}
          _focus={{ bgColor: "#212121" }}
          _hover={{ bgColor: "#212121" }}
          _active={{ bgColor: "#212121" }}
          isRequired
        />
      </VStack>

      <Wrap spacing={4}>
        <WrapItem>
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
            onClick={handleSubmit}
          >
            Create Class
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            bg={"red.500"}
            color={"white"}
            _hover={{
              bg: "red.600",
            }}
            _active={{ bg: "red.600" }}
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
