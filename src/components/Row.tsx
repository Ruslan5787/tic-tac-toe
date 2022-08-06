import React, { FC } from "react";
import { CircleFigure, CrossFigure } from "../images";
import winLineIcon from "../images/winLine.svg";

interface RowProps {
  orderRow: number;
  row: string[];
  toggleActiveGameFigure: (orderRow: number, orderBlock: number) => void;
}

export const Row: FC<RowProps> = (props) => {
  const { orderRow, row, toggleActiveGameFigure } = props;

  const handleClick = (orderBlock: number) => {
    toggleActiveGameFigure(orderRow, orderBlock);
  };

  const getActiveFigure = (figure: string) => {
    if (figure === "X") {
      return <CrossFigure />;
    } else if (figure === "0") {
      return <CircleFigure />;
    }
    return null;
  };

  return (
    <div className="row">
      <img className="win-line" src={winLineIcon} alt="" />
      {row.map((value, index) => (
        <div
          className="block"
          key={index}
          onClick={() => {
            handleClick(index);
          }}
        >
          {getActiveFigure(value)}
        </div>
      ))}
    </div>
  );
};
