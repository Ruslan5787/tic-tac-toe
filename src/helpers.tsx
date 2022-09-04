import {Modal} from "./components/Modal";
import React from "react";

export function calculateWinner(fields: any) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
      return fields[a];
    }
  }

  return null;
}

export const getInfoText = (figure?: string | null) => {
  return figure === "X" ? "крестики" : "нолики";
};

export const toggleActiveFigure = (
  setActiveFigure: (figure: string) => void,
  figure: string
) => {
  if (figure === "X") {
    setActiveFigure("0");
  } else if (figure === "0") {
    setActiveFigure("X");
  }

  return null;
};

export const getModal = (winner: string | null, isGameOver: boolean) => {
  if (winner) {
    return (
      <Modal>
        <span>Победили </span>
        <br/>
        <b>{getInfoText(winner)}</b>!
      </Modal>
    );
  } else if (winner === null && isGameOver) {
    return (
      <Modal>
        <b>Ничья</b>
      </Modal>
    );
  }
};
