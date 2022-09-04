import React, {FC, useEffect} from "react";

import classNames from "classnames";

import {SmallField} from "./SmallField";

interface GameFieldProps {
  arrayField: string[];
  setArrayField: (newArray: string[]) => void;
  activeFigure: string;
  setActiveFigure: (figure: string) => void;
  isGameOver: boolean;
  setGameOver: (flag: boolean) => void;
}

export const GameField: FC<GameFieldProps> = (props) => {
  const {
    arrayField,
    setArrayField,
    activeFigure,
    setActiveFigure,
    isGameOver,
    setGameOver,
  } = props;

  useEffect(() => {
    areAllFieldsFilled();
  }, [arrayField]);

  const areAllFieldsFilled = () => {
    let counter = arrayField.length;

    arrayField.forEach((figure) => {
      if (figure) {
        counter--;
      }
    });

    if (counter === 0) {
      setGameOver(true);
    }
  };

  return (
    <div className={classNames("field", {"block-click": isGameOver})}>
      {arrayField.map((field, index) => (
        <SmallField
          key={index}
          fieldIndex={index}
          arrayField={arrayField}
          setArrayField={setArrayField}
          activeFigure={activeFigure}
          setActiveFigure={setActiveFigure}
          figureForThisField={arrayField[index]}
        />
      ))}
    </div>
  );
};
