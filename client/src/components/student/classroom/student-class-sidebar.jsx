import { React } from "react";
import {
  Flex,
  Heading,
  Avatar,
  Text,
  Icon,
  useToast,
  Box,
  Button,
} from "@chakra-ui/react";
import { NavLink, useParams, useLocation } from "react-router-dom";
import {
  MdWeb,
  MdTask,
  MdOutlineClass,
  MdPeopleOutline,
  MdOutlineVideoCameraFront,
  MdOutlineAssignment,
  MdOutlineQuiz,
  MdOutlineQuestionAnswer,
  MdDateRange,
} from "react-icons/md";
import ProfileCard from "../../profile-card";

const LinkItems = [
  {
    id: 4,
    name: "Student Info",
    icon: MdOutlineQuestionAnswer,
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
    id: 5,
    name: "Meetings",
    icon: MdOutlineVideoCameraFront,
    href: "/meetings",
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
            mb="20"
            fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
            alignItems="center"
            letterSpacing="tight"
            fontFamily="Europa-Bold"
          >
            Your Class
          </Heading>
          {/* <Text
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
          </Text> */}
          <Flex
            flexDir={["row", "row", "column", "column", "column"]}
            align={["center", "center", "center", "flex-start", "flex-start"]}
            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
            justifyContent="center"
          >
            {/* Link Items */}

            {LinkItems.map((link) => (
              <NavLink to={`/student/class/${classID}${link.href}`}>
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

        {/* Profile */}
        {/* <Flex direction="column">
          <Flex
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
            bgColor="#c7c7c7"
          >
            <Avatar my={2} src="https://bit.ly/dan-abramov" />

            <Text textAlign="center" fontSize="xl" mx="9">
              John Doe
            </Text>
          </Flex>
        </Flex> */}
        <ProfileCard bg="#2e2e2e" />
      </Flex>
    </Flex>
  );
}
