import React from "react";
import {
  HStack,
  Flex,
  Avatar,
  Text,
  Link,
  Image,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import courses from "./courses";
const CoursesList = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={2} mt="100px">
      {/* <VStack
        // key={task.id}
        // opacity={task.check == true ? "0.2" : "1"}
        mt="100px"
        w="100%"
      > */}
      {courses.map((course) => {
        return (
          <Link
            // to={`/teacher/class/${task.body[1]}/${task.body[0]}/students`}
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            color="#e4e4e4"
          >
            <Flex
              // id={task.id}
              gridGap={2}
              as="a"
              align="left"
              w="400px"
              rounded="md"
              py={3}
              px={5}
              mr="10"
              // mx={7}
              mb="5"
              bgColor="#2e2e2e"
              flexDirection="column"
            >
              {/* <Icon as={link.icon} fontSize="3xl" className="active-icon" /> */}
              <Flex flexDirection="row" alignItems="center">
                <Avatar size="2xl" name={course.teacher} />
                <Flex flexDirection="column" ml="5">
                  <Text className="active" fontSize="xl">
                    Teacher: <b>{course.teacher}</b>
                  </Text>
                  <Text className="active" fontSize="xl">
                    Subject: <b>{course.subject}</b>
                  </Text>
                  <Text className="active" fontSize="xl">
                    Days: <b>{course.days}</b>
                  </Text>
                  <Text className="active" fontSize="xl">
                    Fees: <b>{course.fees}</b>
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Link>
        );
      })}
      {/* </VStack> */}
    </Grid>
  );
};

export default CoursesList;
