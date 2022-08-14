import { Questions } from "./data/Questions";
import { Quizzes } from "./data/Quizzes";
import { useState } from "react";
import { Heading, Button, Flex, useToast } from "@chakra-ui/react";
import { useContext } from "react";
import { GameStateContext } from "./data/Contexts";

function Quiz() {
  const toast = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, gameState, setGameState } =
    useContext(GameStateContext);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
    toast({
      title: "Quiz completed.",
      position: "bottom",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <>
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
        {Quizzes[0].quizName} Quiz
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
        {Questions[currentQuestion].prompt}
      </Heading>

      <div className="questions">
        <Flex flexDirection="column" mt="5">
          <Button
            colorScheme="blue"
            w="200px"
            mb="2"
            onClick={() => {
              chooseOption("optionA");
            }}
          >
            {Questions[currentQuestion].optionA}
          </Button>
          <Button
            colorScheme="blue"
            w="200px"
            mb="2"
            onClick={() => {
              chooseOption("optionB");
            }}
          >
            {Questions[currentQuestion].optionB}
          </Button>
          <Button
            colorScheme="blue"
            w="200px"
            mb="2"
            onClick={() => {
              chooseOption("optionC");
            }}
          >
            {Questions[currentQuestion].optionC}
          </Button>
          <Button
            colorScheme="blue"
            w="200px"
            mb="2"
            onClick={() => {
              chooseOption("optionD");
            }}
          >
            {Questions[currentQuestion].optionD}
          </Button>
        </Flex>
      </div>

      {currentQuestion == Questions.length - 1 ? (
        <Button
          colorScheme="green"
          w="200px"
          mt="5"
          onClick={finishQuiz}
          id="nextQuestion"
        >
          Finish Quiz
        </Button>
      ) : (
        <Button
          colorScheme="green"
          mt="5"
          w="200px"
          onClick={nextQuestion}
          id="nextQuestion"
        >
          Next Question
        </Button>
      )}
    </>
  );
}

export default Quiz;
