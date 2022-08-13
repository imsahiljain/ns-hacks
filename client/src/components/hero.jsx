import React from "react";
import { Center, Heading, Text, Image } from "@chakra-ui/react";

const Hero = () => {
  return (
    <div>
      <Center pt="60px">
        <Heading
          fontFamily="Europa-Bold"
          fontSize="9xl"
          letterSpacing="-7px"
          color="#efefef"
        >
          Teachit
        </Heading>
      </Center>
      <Center>
        <Text fontFamily="Europa-Bold" fontSize="5xl" color="#efefef">
          Breaking barriers
        </Text>
      </Center>
      <Center>
        <Text
          fontFamily="Europa-Reg"
          fontSize="xl"
          w="40%"
          ml="40px"
          mt="10px"
          color="#efefef"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, et?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, et?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, et?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
        </Text>
      </Center>
      <Center>
        <Image src="/d.png" alt="Dan Abramov" w="1100px" mt="90px" />
      </Center>
    </div>
  );
};

export default Hero;
