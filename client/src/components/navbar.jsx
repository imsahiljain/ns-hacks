import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      py={3}
      px={10}
      h="10vh"
      w="100vw"
    >
      <Text fontFamily="Europa-Bold" fontSize="3xl" color="#efefef">
        learnr.
      </Text>
      <Flex fontWeight={500} fontSize="sm" gridGap={10}>
        <Link to="/">
          <Text as="a" fontSize="lg" color="#efefef">
            Home
          </Text>
        </Link>
        <Link to="/login">
          <Text as="a" fontSize="lg" color="#efefef">
            Login
          </Text>
        </Link>
        <Link to="/register">
          <Text as="a" fontSize="lg" color="#efefef">
            Register
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}
