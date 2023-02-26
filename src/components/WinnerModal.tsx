import { Square } from "./square";

interface WinnerModalProps {
  resetGame: () => void;
  winner?: boolean | null | string;
}

export function WinnerModal({ winner, resetGame }: WinnerModalProps) {
  if (winner === null) return null;
  const winnerText = winner ? "Ganó" : "Empato";
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}
