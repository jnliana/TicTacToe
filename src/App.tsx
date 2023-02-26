import confetti from "canvas-confetti";
import { useState } from "react";
import { Square } from "./components/square";
import { WinnerModal } from "./components/WinnerModal";
import { TURNS } from "./constants";
import { checkEndGame, checkWinner } from "./helpers/logic";

const INITIAL_BOARD = new Array(9).fill(null);

function App() {
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [turn, setTurn] = useState(TURNS.x);
  const [winner, setWinner] = useState<boolean | null | string>(null);
  const updateBoard = (position: number) => {
    const newBoard = [...board];
    if (board[position]) return;
    newBoard[position] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.x ? TURNS.y : TURNS.x;
    setTurn(newTurn);

    if (checkWinner(newBoard)) {
      setWinner(turn);
      confetti();
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(INITIAL_BOARD);
    setWinner(null);
  };

  return (
    <main className="board">
      <h1>Tic Tac toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className="game">
        {board.map((square, index) => (
          <Square
            key={index}
            updateBoard={updateBoard}
            index={index}
          >
            {square}
          </Square>
        ))}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.y}>{TURNS.y}</Square>
      </section>
      <WinnerModal
        winner={winner}
        resetGame={resetGame}
      />
    </main>
  );
}

export default App;
