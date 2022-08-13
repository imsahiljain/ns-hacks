import React, { useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Icon,
  Button,
  Avatar,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Box,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  VStack,
  Divider,
  propNames,
} from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function ProfileCard(props) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  let currUser = Cookies.get("username") || "Teacher";
  let userEmail = Cookies.get("email");
  let userName = Cookies.get("username");
  let userType = Cookies.get("usertype");

  let navigate = useNavigate();
  const handleLogout = () => {
    navigate(`/logout`);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      flexDir="row"
      alignItems="center"
      mb={10}
      mt={5}
      mx="auto"
      as="a"
      align="center"
      w="80%"
      rounded="md"
      py={1}
      px={5}
      bgColor={props.bg}
      ref={btnRef}
      //   colorScheme="teal"
      cursor="pointer"
      onClick={onOpen}
    >
      <Avatar mx="4" my={2} name={userName} />
      <Text textAlign="center" fontSize="xl" mx="4">
        {userName}
      </Text>
      {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button> */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="#212121">
          <DrawerCloseButton />
          <DrawerHeader mt="10" fontSize="2xl">
            Your Profile
            <Divider mt="4" />
          </DrawerHeader>

          <DrawerBody>
            <VStack>
              <Avatar my={2} name={currUser} size="2xl" />
              <Flex align={"center"} justify={"center"}>
                <Stack spacing={4} mx={"auto"} w="260px" maxW={"xl"} py={12}>
                  {/* <Box
                    rounded={"lg"}
                    backdropFilter="blur(18px) brightness(1.3) "
                    border="2px solid #363636"
                    boxShadow={"lg"}
                    p={8}
                    w="460px"
                  > */}
                  <Stack spacing={4}>
                    <FormControl id="name" isRequired>
                      <FormLabel color="#efefef">Name</FormLabel>
                      <Input
                        isDisabled
                        type="name"
                        className="loginName"
                        color="#efefef"
                        value={userName}
                        onChange={(e) => {
                          setLoginEmail(e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormControl id="email" isRequired>
                      <FormLabel color="#efefef">Email address</FormLabel>
                      <Input
                        isDisabled
                        type="email"
                        className="loginEmail"
                        color="#efefef"
                        value={userEmail}
                        onChange={(e) => {
                          setLoginEmail(e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormControl id="password" isRequired>
                      <FormLabel color="#efefef">Role</FormLabel>
                      <InputGroup>
                        <Input
                          isDisabled
                          className="loginPassword"
                          color="#efefef"
                          value={userType}
                          onChange={(e) => {
                            setLoginPassword(e.target.value);
                          }}
                        />
                        <InputRightElement h={"full"}></InputRightElement>
                      </InputGroup>
                    </FormControl>
                  </Stack>
                  {/* </Box> */}
                </Stack>
              </Flex>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button onClick={onClose} colorScheme="gray">
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
