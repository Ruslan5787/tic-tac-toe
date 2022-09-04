import React, {FC, memo} from "react";
import {getInfoText} from "../helpers";

interface GameInfoProps {
  activeFigure: string;
  isGameOver: boolean;
}

export const GameInfo: FC<GameInfoProps> = memo((props) => {
  const {activeFigure, isGameOver} = props;

  return (
    <div className="game-info">
      {isGameOver ? (
        <span className="game-over__notification">Игра окончена</span>
      ) : (
        <span>
          Сейчас ходят <b>{getInfoText(activeFigure)}</b>
        </span>
      )}
    </div>
  );
});
