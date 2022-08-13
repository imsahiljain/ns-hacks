import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  Flex,
  Heading,
  Text,
  Icon,
  Button,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  IconButton,
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useToast,
  Wrap,
  WrapItem,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import Sidebar from "../../../components/teacher/dashboard/sidebar";
import Editor from "@monaco-editor/react";

export default function TeacherWebsite() {
  const navigate = useNavigate();
  const toast = useToast();
  const [websiteName, setwebsiteName] = useState("");
  const [websiteID, setwebsiteID] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [code, setCode] = useState("");

  const createClassId = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setwebsiteID(id);
    toast({
      title: "Website ID generated",
      position: "bottom",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const taskText = [websiteName.trim(), websiteID.trim()];

    if (!websiteName || !websiteID) {
      toast({
        title: "Add all the fields",
        position: "bottom",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: "Website created successfully",
      position: "bottom",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    setwebsiteName("");
    setwebsiteID("");

    // navigate(`/teacher/class/${websiteID}/${websiteName}/students`, {
    //   state: {
    //     websiteName,
    //     websiteID,
    //   },
    // });

    setTimeout(() => {
      navigate(`/teacher/website/${websiteID}`, {
        state: {
          websiteName,
          websiteID,
          code,
        },
      });
    }, 1000);
  }

  const defaultCode = `<!DOCTYPE html>
  <html lang="en">
  <head>
  <title>Page Title</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
  * {
    box-sizing: border-box;
  }
  
  /* Style the body */
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }
  
  h2,h3,h4,h5 {
  color: black;
  font-weight: bold;
  font-size: 20px;
  }
  
  p {
  color: black;
  }
  
  /* Header/logo Title */
  .header {
    padding: 80px;
    text-align: center;
    background: #1abc9c;
    color: white;
  }
  
  /* Increase the font size of the heading */
  .header h1 {
    font-size: 40px;
  }
  
  /* Style the top navigation bar */
  .navbar {
    overflow: hidden;
    background-color: #333;
  }
  
  /* Style the navigation bar links */
  .navbar a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
  }
  
  /* Right-aligned link */
  .navbar a.right {
    float: right;
  }
  
  /* Change color on hover */
  .navbar a:hover {
    background-color: #ddd;
    color: black;
  }
  
  /* Column container */
  .row {  
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
  }
  
  /* Create two unequal columns that sits next to each other */
  /* Sidebar/left column */
  .side {
    -ms-flex: 30%; /* IE10 */
    flex: 30%;
    background-color: #f1f1f1;
    padding: 20px;
  }
  
  /* Main column */
  .main {   
    -ms-flex: 70%; /* IE10 */
    flex: 70%;
    background-color: white;
    padding: 20px;
  }
  
  /* Fake image, just for this example */
  .fakeimg {
    background-color: #aaa;
    width: 100%;
    padding: 20px;
  }
  
  /* Footer */
  .footer {
    padding: 20px;
    text-align: center;
    background: #ddd;
  }
  
  /* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 700px) {
    .row {   
      flex-direction: column;
    }
  }
  
  /* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */
  @media screen and (max-width: 400px) {
    .navbar a {
      float: none;
      width: 100%;
    }
  }
  </style>
  </head>
  <body>
  
  <div class="header">
    <h1>My Website</h1>
    <p>A website created by me.</p>
  </div>
  
  <div class="navbar">
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#" class="right">Link</a>
  </div>
  
  <div class="row">
    <div class="side">
      <h2>About Me</h2>
      <h5>Photo of me:</h5>
      <div class="fakeimg" style="height:200px;">Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      <h3>More Text</h3>
      <p>Lorem ipsum dolor sit ame.</p>
      <div class="fakeimg" style="height:60px;">Image</div><br>
      <div class="fakeimg" style="height:60px;">Image</div><br>
      <div class="fakeimg" style="height:60px;">Image</div>
    </div>
    <div class="main">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Dec 7, 2017</h5>
      <div class="fakeimg" style="height:200px;">Image</div>
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      <br>
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <div class="fakeimg" style="height:200px;">Image</div>
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
  </div>
  
  <div class="footer">
    <h2>Footer</h2>
  </div>
  
  </body>
  </html>
  
`;

  function handleEditorChange(value, event) {
    setCode(value);
  }
  // function livePreview() {

  // }
  return (
    <Flex
      h={[null, null, "100vh"]}
      maxW="2000px"
      flexDir={["column", "column", "row"]}
      overflow="hidden"
    >
      {/* Column 1 */}

      <Sidebar dashFor="teachers" />

      {/* Column 2 */}
      <Flex
        w="90%"
        p="3%"
        mt={-2}
        bgColor="#141414"
        flexDir="column"
        overflow="auto"
        minH="100vh"
      >
        <Flex flexDirection="row" w="100%">
          <Heading
            fontWeight="normal"
            letterSpacing="tight"
            fontFamily="Europa-Bold"
            fontSize="4xl"
            alignItems="center"
            color="#e6e6e6"
            mb="50px"
          >
            Build Website
          </Heading>
        </Flex>
        {/* <MonacoEditor
          marginTop="100px"
          width="50%"
          height="500px"
          language="html"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            console.log(e.target.value);
          }}
          options={{
            theme: "vs-dark",
          }}
        /> */}
        <Flex flexDirection="row">
          <Editor
            height="70vh"
            width="700px"
            theme="vs-dark"
            defaultLanguage="html"
            defaultValue={defaultCode}
            onChange={handleEditorChange}
          />
          <div id="preview" ml="10">
            <iframe
              title="preview"
              srcDoc={code}
              frameBorder="0"
              width="650px"
              height="100%"
            />
          </div>
        </Flex>
        <Button w="20%" mt="10" onClick={onOpen}>
          Publish the website
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent w="90%" bgColor="#212121">
            <ModalHeader>Publish the website</ModalHeader>
            <ModalBody>
              <VStack mt="4" pb="7" w="100%">
                <Input
                  h="50px"
                  bgColor="#1d1d1d"
                  variant="filled"
                  placeholder="Website Name"
                  fontSize="lg"
                  value={websiteName}
                  onChange={(e) => setwebsiteName(e.target.value)}
                  // mr="10px"
                  _focus={{ borderColor: "#4a4a4a" }}
                  isRequired
                />
                <Input
                  h="50px"
                  bgColor="#1d1d1d"
                  variant="filled"
                  placeholder="Website ID"
                  fontSize="lg"
                  value={websiteID}
                  onChange={(e) => setwebsiteID(e.target.value)}
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
                    Create Website
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
                    Auto generate ID
                  </Button>
                </WrapItem>
              </Wrap>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>

      {/* Column 3 */}

      <Flex
        w="16%"
        bgColor="#141414"
        p="3%"
        mt={-2}
        flexDir="column"
        overflow="auto"
      >
        <Flex alignContent="center">
          <Button colorScheme="gray" size="lg" p="5">
            <Icon
              as={MdOutlineLogout}
              fontSize="3xl"
              className="active-icon"
              px="1"
            />{" "}
            <Text fontSize="xl" fontFamily="Europa-Reg">
              Logout
            </Text>{" "}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
