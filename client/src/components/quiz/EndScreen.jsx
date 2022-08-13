import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { GameStateContext } from "./data/Contexts";
import { Questions } from "./data/Questions";

const EndScreen = () => {
  const { score, setScore, setGameState, userName } =
    useContext(GameStateContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <Heading
        fontWeight="normal"
        letterSpacing="tight"
        fontFamily="Europa-Bold"
        fontSize="3xl"
        mt="10"
        pt="10"
        alignItems="center"
        color="#404040"
      >
        Quiz Completed
      </Heading>
      <Heading
        fontWeight="normal"
        letterSpacing="tight"
        fontFamily="Europa-Bold"
        fontSize="2xl"
        mt="4"
        alignItems="center"
        color="#404040"
      >
        Correct answers:{" "}
        <i>
          {score} out of {Questions.length}
        </i>
      </Heading>
      <Button onClick={restartQuiz} colorScheme="blue" w="200px" mt="5" mb="2">
        Restart Quiz
      </Button>
    </div>
  );
};

export default EndScreen;
