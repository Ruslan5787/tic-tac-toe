import React, { FC, useState } from "react";
import "./styles/style.scss";

import { GameInfo } from "./components/GameInfo";
import { GameField } from "./components/GameField";

export const App: FC = () => {
  const [activeFigure, setActiveFigure] = useState("X");
  const [arrayField1, setArrayField] = useState<string[][]>([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const handleReset = () => {
    setArrayField([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setActiveFigure("X");
  };

  return (
    <div className="content">
      <div className="content__wrapper">
        <button className="button button--reset" onClick={handleReset}>
          Очистить поле
        </button>

        <GameField
          activeFigure={activeFigure}
          setActiveFigure={setActiveFigure}
          arrayField={arrayField1}
          setArrayField={setArrayField}
        />

        <GameInfo activeFigure={activeFigure} />
      </div>
    </div>
  );
};
