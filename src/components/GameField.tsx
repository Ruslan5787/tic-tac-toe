import { Row } from "./Row";
import React, { FC } from "react";

interface GameFieldProps {
  arrayField: string[][];
  activeFigure: string;
  setActiveFigure: (figure: string) => void;
  setArrayField: (newArray: string[][]) => void;
}

export const GameField: FC<GameFieldProps> = (props) => {
  const { activeFigure, setActiveFigure, arrayField, setArrayField } = props;

  const toggleActiveGameFigure = (orderRow: number, orderBlock: number) => {
    if (activeFigure === "X") {
      setActiveFigure("0");
    } else {
      setActiveFigure("X");
    }

    arrayField[orderRow][orderBlock] = activeFigure;
    setArrayField(arrayField);
  };

  return (
    <div className="field">
      <div className="field__wrapper">
        <Row
          orderRow={0}
          row={arrayField[0]}
          toggleActiveGameFigure={toggleActiveGameFigure}
        />

        <Row
          orderRow={1}
          row={arrayField[1]}
          toggleActiveGameFigure={toggleActiveGameFigure}
        />

        <Row
          orderRow={2}
          row={arrayField[2]}
          toggleActiveGameFigure={toggleActiveGameFigure}
        />
      </div>
    </div>
  );
};
