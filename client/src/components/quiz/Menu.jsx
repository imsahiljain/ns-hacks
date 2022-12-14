import { useContext } from "react";
import { GameStateContext } from "./data/Contexts";
import { Flex, Text } from "@chakra-ui/react";
import { Quizzes } from "./data/Quizzes";

function Menu() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GameStateContext);

  return (
    <>
      <Flex flexDirection="row" pt="10" w="100%">
        {Quizzes.map((quiz) => (
          <Flex
            id="{task.id}"
            gridGap={2}
            as="a"
            align="left"
            w="300px"
            rounded="md"
            py={3}
            px={5}
            mr="10"
            mt="10"
            bgColor="#e4e4e4"
            color="#141414"
            flexDirection="column"
            cursor="pointer"
            onClick={() => {
              setGameState("playing");
            }}
          >
            <Text className="active" fontSize="xl">
              Subject: <b>{quiz.quizName}</b>
            </Text>
            <Text className="active" fontSize="xl">
              Questions: <b>{quiz.questions.length}</b>
            </Text>
          </Flex>
        ))}
      </Flex>
    </>
  );
}

export default Menu;
