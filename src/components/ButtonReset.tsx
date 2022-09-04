import React, {FC} from "react";

interface ButtonResetProp {
  setArrayField: (arrayField: string[]) => void;
  setActiveFigure: (activeFigure: string) => void;
  setGameOver: (value: boolean) => void;
}

export const ButtonReset: FC<ButtonResetProp> = (props) => {
  const {setArrayField, setActiveFigure, setGameOver} = props;

  const handleClick = () => {
    setArrayField(Array(9).fill(null));
    setActiveFigure("X");
    setGameOver(false);
  };

  return (
    <button className="button button--reset" onClick={handleClick}>
      Очистить поле
    </button>
  );
};
