import Menu from "./Menu";
import Quiz from "./Quiz";
import EndScreen from "./EndScreen";
import { useState } from "react";
import { GameStateContext } from "./data/Contexts";
// ['menu', 'playing', 'finished']
function StudentQuiz() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default StudentQuiz;
