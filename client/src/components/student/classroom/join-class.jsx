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
import Cookies from "js-cookie";
import Axios from "axios";

function CreateClass({ addTask }) {
  const navigate = useNavigate();
  const toast = useToast();
  const [classID, setclassID] = useState("");
  let currentUser = Cookies.get("username");
  let currentEmail = Cookies.get("email");
  const handleSubmit = async () => {
    await Axios.patch("http://localhost:5000/api/class/enrollclass", {
      classId: classID,
      currentUser: currentUser,
      currentEmail: currentEmail,
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
        Join a class
      </Heading>

      <VStack mt="4" pb="7" w="50%" pr="100px">
        <Input
          h="50px"
          variant="filled"
          placeholder="Enter Class ID"
          fontSize="lg"
          value={classID}
          onChange={(e) => setclassID(e.target.value)}
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
            px="8"
            h="44px"
            type="submit"
            alignItems="center"
            mb="10"
            onClick={handleSubmit}
            bg={"blue.500"}
            color={"white"}
            _hover={{
              bg: "blue.600",
            }}
            _active={{ bg: "blue.600" }}
          >
            Join Class
          </Button>
        </WrapItem>
      </Wrap>
    </>
  );
}

export default CreateClass;
