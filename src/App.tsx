import React, {FC, useEffect, useState} from "react";

import "./styles/style.scss";

import {calculateWinner, getModal} from "./helpers";

import {GameInfo} from "./components/GameInfo";
import {GameField} from "./components/GameField";
import {ButtonReset} from "./components/ButtonReset";

export const App: FC = () => {
  const [arrayField, setArrayField] = useState<string[]>(Array(9).fill(null));
  const [activeFigure, setActiveFigure] = useState<string>("X");
  const [isGameOver, setGameOver] = useState<boolean>(false);
  const winner = calculateWinner(arrayField);

  useEffect(() => {
    if (winner) {
      setGameOver(true);
    }
  }, [winner]);

  return (
    <div className="content">
      <div className="content__wrapper">
        {getModal(winner, isGameOver)}

        <ButtonReset
          setArrayField={setArrayField}
          setActiveFigure={setActiveFigure}
          setGameOver={setGameOver}
        />

        <GameField
          arrayField={arrayField}
          setArrayField={setArrayField}
          activeFigure={activeFigure}
          setActiveFigure={setActiveFigure}
          isGameOver={isGameOver}
          setGameOver={setGameOver}
        />

        <GameInfo activeFigure={activeFigure} isGameOver={isGameOver}/>
      </div>
    </div>
  );
};
