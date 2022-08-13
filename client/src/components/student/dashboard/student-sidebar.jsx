import React from "react";
import { Flex, Heading, Avatar, Text, Icon, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {
  MdWeb,
  MdTask,
  MdOutlineClass,
  MdPeopleOutline,
  MdPerson,
  MdOutlineVideoCameraFront,
  MdOutlineBook,
} from "react-icons/md";
import Cookies from "js-cookie";
import ProfileCard from "../../profile-card";

const LinkItems = [
  {
    id: 1,
    name: "Classes",
    href: "/classes",
    icon: MdOutlineClass,
  },
  // {
  //   id: 2,
  //   name: "My Teacher",
  //   icon: MdPerson,
  //   href: "/my-teacher",
  // },
  {
    id: 3,
    name: "More Courses",
    href: "/courses",
    icon: MdOutlineBook,
  },
  {
    id: 5,
    name: "Meetings",
    icon: MdOutlineVideoCameraFront,
    href: "/meetings",
  },
];

export default function StudentSidebar(props) {
  let currUser = Cookies.get("username") || "Student";
  return (
    // Main area

    <Flex w="16%" flexDir="column" backgroundColor="#1c1c1c" color="#e6e6e6">
      <Flex
        flexDir="column"
        h={[null, null, "100vh"]}
        justifyContent="space-between"
      >
        <Flex flexDir="column" as="nav">
          <Heading
            mt={50}
            mx={10}
            fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
            alignItems="center"
            letterSpacing="tight"
            fontFamily="Europa-Bold"
          >
            Teachit
          </Heading>
          <Text
            fontSize="lg"
            fontFamily="Europa-Reg"
            mx={10}
            mb="20"
            color="#919191"
            alignItems="center"
          >
            Dashboard for{" "}
            <Flex display="inline-flex" fontWeight="bold">
              {props.dashFor}
            </Flex>
          </Text>
          <Flex
            flexDir={["row", "row", "column", "column", "column"]}
            align={["center", "center", "center", "flex-start", "flex-start"]}
            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
            justifyContent="center"
          >
            {/* Link Items */}

            {LinkItems.map((link) => (
              <NavLink to={`/student${link.href}`}>
                <Flex
                  id={link.id}
                  gridGap={3}
                  as="a"
                  align="center"
                  w="250px"
                  rounded="md"
                  py={3}
                  px={5}
                  mx={7}
                  mb="5"
                  _hover={{ bgColor: "#333333", textDecoration: "none" }}
                >
                  <Icon as={link.icon} fontSize="3xl" className="active-icon" />
                  <Text className="active" fontSize="xl">
                    {link.name}
                  </Text>
                </Flex>
              </NavLink>
            ))}
          </Flex>
        </Flex>

        {/* Profile */}

        {/* <Flex
          flexDir="row"
          alignItems="center"
          mb={10}
          mt={5}
          mx="7"
          as="a"
          align="center"
          w="80%"
          rounded="md"
          py={1}
          px={5}
          bgColor="#333333"
        >
          <Avatar my={2} src="https://bit.ly/dan-abramov" />
          <Text textAlign="center" fontSize="xl" mx="9">
            {currUser}
          </Text>
        </Flex> */}
        <ProfileCard bg="#333333" />
      </Flex>
    </Flex>
  );
}
