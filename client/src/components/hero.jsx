// import React from "react";
// import { Center, Heading, Text, Image } from "@chakra-ui/react";

// const Hero = () => {
//   return (
//     <div>
//       <Center pt="60px">
//         <Heading
//           fontFamily="Europa-Bold"
//           fontSize="9xl"
//           letterSpacing="-7px"
//           color="#efefef"
//         >
//           Teachit
//         </Heading>
//       </Center>
//       <Center>
//         <Text fontFamily="Europa-Bold" fontSize="5xl" color="#efefef">
//           Breaking barriers
//         </Text>
//       </Center>
//       <Center>
//         <Text
//           fontFamily="Europa-Reg"
//           fontSize="xl"
//           w="40%"
//           ml="40px"
//           mt="10px"
//           color="#efefef"
//         >
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, et?
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, et?
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, et?
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
//         </Text>
//       </Center>
//       <Center>
//         <Image src="/d.png" alt="Dan Abramov" w="1100px" mt="90px" />
//       </Center>
//     </div>
//   );
// };

// export default Hero;

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container maxW={"8xl"} h="100vh" fontFamily="Europa-Reg" mt="5">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            fontFamily="Europa-Bold"
            letterSpacing="-4px"
          >
            <Text
              as={"span"}
              fontSize="8xl"
              position={"relative"}
              color="#e4e4e4"
            >
              Lorem ipsum
            </Text>
            <br />
            <Text color="#5e5e5e" fontSize="5xl" letterSpacing="-3px">
              breaking barriers.
            </Text>
          </Heading>
          <Text color="#e4e4e4" fontSize="2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
            quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Sed, quidem. Lorem ipsum dolor sit amet consectetur, adipisicing.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              // rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              bg="#212123"
              color="#e4e4e4"
              // opacity={0.8}
              _hover={{ bg: "#303033" }}
              _active={{ bg: "#212123" }}

              // _hover={{ bg: "red.500" }}
            >
              Get started
            </Button>
            <Button
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              bg="#212123"
              color="#e4e4e4"
              // opacity={0.8}
              _hover={{ bg: "#303033" }}
              _active={{ bg: "#212123" }}
            >
              Know more
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          {/* <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue("red.50", "red.400")}
          /> */}
          <Box
            position={"relative"}
            height={"450px"}
            rounded={"2xl"}
            // boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              // fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"450px"}
              src="/computer.jpg"
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
