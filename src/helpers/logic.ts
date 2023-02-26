import { WINNER_COMBOS } from "../constants";

export function checkEndGame(board: Array<string | null>) {
  return board.every((item: string | null) => item !== null);
}

export function checkWinner(board: Array<string | null>) {
  for (let combo of WINNER_COMBOS) {
    const [p1, p2, p3] = combo;
    if (board[p1] && board[p1] === board[p2] && board[p2] === board[p3]) {
      return board[p1];
    }
  }
  return null;
}
