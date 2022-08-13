import React from "react";
import Hero from "../components/hero";
import { Box, Heading } from "@chakra-ui/react";
import Navbar from "../components/navbar";

const Page404 = () => {
  return (
    <>
      <Box
        h="100vh"
        bgImage="url(/bg.svg)"
        bgPosition="center"
        bgSize="cover"
        w="full"
        overflowX="hidden"
        overflowY="hidden"
      >
        <Navbar />
        <Heading
          fontWeight="normal"
          textAlign="center"
          mt="160px"
          letterSpacing="tight"
          fontFamily="Europa-Bold"
          fontSize="8xl"
          alignItems="center"
          color="#cccccc"
        >
          OOPS!
        </Heading>
        <Heading
          fontWeight="normal"
          textAlign="center"
          letterSpacing="tight"
          fontFamily="Europa-Bold"
          fontSize="7xl"
          alignItems="center"
          color="#cccccc"
          mb="50px"
        >
          Page not found
        </Heading>
      </Box>
    </>
  );
};

export default Page404;
