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
  Text,
  Checkbox,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const toast = useToast();
  const [value, setValue] = useState("1");

  let navigate = useNavigate();
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerType, setRegisterType] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const sendAuthentication = async () => {
    await Axios.post("http://localhost:5000/api/register/checkreguser", {
      registerFirstName: registerFirstName,
      registerLastName: registerLastName,
      registerEmail: registerEmail,
      registerPassword: registerPassword,
      registerType: registerType,
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
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel color="#efefef">First Name</FormLabel>
                  <Input
                    type="text"
                    borderColor="#363636"
                    _hover={{ borderColor: "#363636" }}
                    _active={{ borderColor: "#363636  " }}
                    className="registerFirstName"
                    color="#efefef"
                    onChange={(e) => {
                      setRegisterFirstName(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel color="#efefef">Last Name</FormLabel>
                  <Input
                    type="text"
                    borderColor="#363636"
                    _hover={{ borderColor: "#363636" }}
                    _active={{ borderColor: "#363636  " }}
                    className="registerLastName"
                    color="#efefef"
                    onChange={(e) => {
                      setRegisterLastName(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel color="#efefef">Email address</FormLabel>
              <Input
                type="email"
                borderColor="#363636"
                _hover={{ borderColor: "#363636" }}
                _active={{ borderColor: "#363636  " }}
                className="registerEmail"
                color="#efefef"
                onChange={(e) => {
                  setRegisterEmail(e.target.value);
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
                  className="registerPassword"
                  color="#efefef"
                  onChange={(e) => {
                    setRegisterPassword(e.target.value);
                  }}
                />
                <InputRightElement h={"full"}></InputRightElement>
              </InputGroup>
            </FormControl>

            <RadioGroup value={value}>
              <Stack direction="row">
                <input
                  type="radio"
                  name="type"
                  value="teacher"
                  onChange={(e) => {
                    setRegisterType(e.target.value);
                  }}
                />{" "}
                <FormLabel color="#efefef">Teacher</FormLabel>
                <input
                  type="radio"
                  name="type"
                  value="student"
                  onChange={(e) => {
                    setRegisterType(e.target.value);
                  }}
                />{" "}
                <FormLabel color="#efefef">Student</FormLabel>
              </Stack>
            </RadioGroup>

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
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
