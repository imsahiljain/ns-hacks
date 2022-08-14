import React, { useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Icon,
  Button,
  useToast,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";
import StudentClassSidebar from "../../../components/student/classroom/student-class-sidebar";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Axios from "axios";

export default function StudentAssignments() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let currUser = Cookies.get("username") || "Teacher";
  let userEmail = Cookies.get("email");
  let userName = Cookies.get("username");
  let userType = Cookies.get("usertype");
  let toast = useToast();
  let navigate = useNavigate();
  let userAuthenticated = Cookies.get("usertype");
  const { classID, className } = useParams();
  const classInfo = {
    classID,
    className,
  };

  useEffect(() => {
    if (userAuthenticated != "student") {
      toast({
        title: "Unallowed to access page!",
        position: "bottom",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      navigate("/");
    }
  }, []);
  const handleRedirection = () => {
    navigate(`/student/classes`);
  };
  return (
    <Flex
      h={[null, null, "100vh"]}
      maxW="2000px"
      flexDir={["column", "column", "row"]}
      overflow="hidden"
    >
      {/* Column 1 */}

      <StudentClassSidebar classID="students" />

      {/* Column 2 */}
      <Flex
        w="90%"
        p="3%"
        mt={-2}
        bgColor="#fafafa"
        flexDir="column"
        overflow="auto"
        minH="100vh"
      >
        <Heading
          fontWeight="normal"
          letterSpacing="tight"
          fontFamily="Europa-Bold"
          fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
          alignItems="center"
          color="#141414"
        >
          Assignments
        </Heading>
        <VStack
          borderRadius="lg"
          w="100%"
          maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
          alignItems="stretch"
          mt="7"
        >
          <Heading
            // fontWeight="normal"
            // letterSpacing="tight"
            // fontFamily="Europa-Bold"
            // fontSize="4xl"
            // alignItems="center"
            // color="#e6e6e6"
            mt="5"
            mb="5"
            // mt="100px"
            // mb="4"
            fontWeight="normal"
            letterSpacing="tight"
            fontFamily="Europa-Reg"
            fontSize="3xl"
            // alignItems="left"
            textAlign="left"
            color="#2e2e2e"
          >
            All Assignments
          </Heading>
          <Flex
            onClick={onOpen}
            gridGap={2}
            as="a"
            align="left"
            w="500px"
            rounded="md"
            py={3}
            px={5}
            mr="10"
            // mx={7}
            mb="5"
            bgColor="#e4e4e4"
            color="#141414"
            flexDirection="column"
            cursor="pointer"
          >
            {/* <Icon as={link.icon} fontSize="3xl" className="active-icon" /> */}
            <Text className="active" fontSize="xl">
              Assignment name:
            </Text>
            <Text className="active" fontSize="xl">
              Posted on: {new Date().toLocaleDateString()}
            </Text>
            <Button
              bg={"green.500"}
              color={"white"}
              _hover={{
                bg: "green.600",
              }}
              _active={{ bg: "green.600" }}
              variant="solid"
              size="lg"
              mt="5"
            >
              <Text fontSize="lg">View assignment</Text>
            </Button>
          </Flex>

          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent w="90%" bgColor="#212121" color="#e4e4e4">
              <ModalHeader>Assignment name here</ModalHeader>
              <ModalBody>
                <Text>assignment description here</Text>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" onClick={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </VStack>
      </Flex>

      {/* Column 3 */}

      <Flex
        w="16%"
        bgColor="#fafafa"
        p="3%"
        mt={-2}
        flexDir="column"
        overflow="auto"
      >
        <Flex alignContent="center">
          <Button
            size="lg"
            p="5"
            backgroundColor="#4d4d4d"
            color="#fafafa"
            _hover={{ bgColor: "#595959" }}
            _active={{
              bg: "#525252",
            }}
            onClick={() => handleRedirection()}
          >
            <Icon
              as={MdOutlineLogout}
              fontSize="3xl"
              className="active-icon"
              px="1"
            />{" "}
            <Text fontSize="xl" fontFamily="Europa-Reg">
              Home
            </Text>{" "}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
