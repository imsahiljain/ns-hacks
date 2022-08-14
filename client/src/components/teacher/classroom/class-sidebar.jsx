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
    id: 1,
    name: "All Students",
    href: "/students",
    icon: MdPeopleOutline,
  },
  {
    id: 2,
    name: "Assignments",
    icon: MdOutlineAssignment,
    href: "/assignments",
  },
  {
    id: 3,
    name: "Chat",
    icon: MdOutlineQuestionAnswer,
    href: "/students",
  },
  {
    id: 4,
    name: "Meetings",
    icon: MdOutlineVideoCameraFront,
    href: "/meetings",
  },
  {
    id: 5,
    name: "Schedule",
    icon: MdDateRange,
    href: "/schedule",
  },
];

export default function ClassSidebar(props) {
  const toast = useToast();
  const { classID, className } = useParams();

  async function copyClassID() {
    try {
      await navigator.clipboard.writeText(classID);
      toast({
        title: "Class ID copied.",
        status: "success",
        position: "bottom",
        duration: 2000,
        isClosable: true,
      });

      console.log(classID);
    } catch (err) {
      // toast.error("Could not copy the Room ID");
      console.error(err);
    }
  }
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
            pt="2"
            mx={10}
            mb="20"
            fontSize="3xl"
            alignItems="center"
            letterSpacing="tight"
            fontFamily="Europa-Bold"
          >
            {className} Class
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
              <NavLink
                to={`/teacher/class/${classID}/${className}${link.href}`}
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

        {/* Profile */}
        <Flex direction="column">
          <Button
            backgroundColor="#4d4d4d"
            color="#fafafa"
            _hover={{ bgColor: "#595959" }}
            _active={{
              bg: "#525252",
            }}
            w="80%"
            mx="7"
            px={5}
            p="5"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            fontSize="lg"
            fontWeight="normal"
            onClick={copyClassID}
          >
            Copy Class ID
          </Button>
          <ProfileCard bg="#2e2e2e" />
        </Flex>
      </Flex>
    </Flex>
  );
}
