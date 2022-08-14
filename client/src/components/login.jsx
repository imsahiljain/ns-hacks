import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Center,
  useToast,
} from "@chakra-ui/react";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const toast = useToast();
  let navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const sendAuthentication = async () => {
    await Axios.post("http://localhost:5000/api/login/checkloguser", {
      loginEmail: loginEmail,
      loginPassword: loginPassword,
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
    <Flex align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          backdropFilter="blur(18px) brightness(1.3) "
          border="2px solid #363636"
          boxShadow={"lg"}
          p={8}
          w="460px"
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel color="#efefef">Email address</FormLabel>
              <Input
                type="email"
                borderColor="#363636"
                _hover={{ borderColor: "#363636" }}
                _active={{ borderColor: "#363636  " }}
                className="loginEmail"
                color="#efefef"
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel color="#efefef">Password</FormLabel>
              <InputGroup>
                <Input
                  type="password"
                  borderColor="#363636"
                  _hover={{ borderColor: "#363636" }}
                  _active={{ borderColor: "#363636  " }}
                  className="loginPassword"
                  color="#efefef"
                  onChange={(e) => {
                    setLoginPassword(e.target.value);
                  }}
                />
                <InputRightElement h={"full"}></InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={() => sendAuthentication()}
                loadingText="Submitting"
                size="lg"
                bg={"blue.500"}
                color={"white"}
                _hover={{
                  bg: "blue.600",
                }}
                _active={{ bg: "blue.600" }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
