import { React } from "react";
import { Flex, Heading, Text, Icon, useToast } from "@chakra-ui/react";
import { NavLink, useParams } from "react-router-dom";
import {
  MdOutlineAssignment,
  MdOutlineQuiz,
  MdDateRange,
  MdInfoOutline,
} from "react-icons/md";
import ProfileCard from "../../profile-card";

const LinkItems = [
  {
    id: 4,
    name: "Class Info",
    icon: MdInfoOutline,
    href: "/info",
  },
  {
    id: 1,
    name: "Assignments",
    icon: MdOutlineAssignment,
    href: "/assignments",
  },
  {
    id: 2,
    name: "Quiz",
    href: "/quiz",
    icon: MdOutlineQuiz,
  },
  {
    id: 6,
    name: "Schedule",
    icon: MdDateRange,
    href: "/schedule",
  },
];

export default function StudentClassSidebar(props) {
  const toast = useToast();
  const { classID, className } = useParams();

  return (
    // Main area

    <Flex w="16%" flexDir="column" backgroundColor="#141414" color="#ededed">
      <Flex
        flexDir="column"
        h={[null, null, "100vh"]}
        justifyContent="space-between"
      >
        <Flex flexDir="column" as="nav">
          <Heading
            mt={50}
            mx={10}
            pt="2"
            mb="20"
            fontSize="3xl"
            alignItems="center"
            letterSpacing="tight"
            fontFamily="Europa-Bold"
          >
            {className} Class
          </Heading>
          <Flex
            flexDir={["row", "row", "column", "column", "column"]}
            align={["center", "center", "center", "flex-start", "flex-start"]}
            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
            justifyContent="center"
          >
            {/* Link Items */}

            {LinkItems.map((link) => (
              <NavLink
                to={`/student/class/${classID}/${className}${link.href}`}
              >
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
                  _hover={{ bgColor: "#2e2e2e", textDecoration: "none" }}
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
        <ProfileCard bg="#2e2e2e" />
      </Flex>
    </Flex>
  );
}
