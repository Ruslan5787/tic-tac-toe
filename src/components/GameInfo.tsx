import React, { FC, memo } from "react";

interface GameInfoProps {
  activeFigure: string;
}

export const GameInfo: FC<GameInfoProps> = memo((props) => {
  const { activeFigure } = props;

  const getInfoText = () => {
    return activeFigure === "X" ? "крестики" : "нолики";
  };

  return (
    <span className="game-info">
      <>Сейчас ходят {getInfoText()}</>
    </span>
  );
});
