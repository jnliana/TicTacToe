import { ReactNode } from "react";

interface SquareProps {
  children: ReactNode;
  index?: number;
  updateBoard?: (position: number) => void;
  isSelected?: boolean;
}
export function Square({
  children,
  isSelected,
  index = 0,
  updateBoard,
}: SquareProps) {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = () => {
    if (updateBoard) updateBoard(index);
  };
  return (
    <div
      className={className}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
