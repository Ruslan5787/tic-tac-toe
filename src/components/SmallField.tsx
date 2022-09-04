import React, {FC, useEffect, useRef, useState} from "react";

import {CircleFigure, CrossFigure} from "../images";

import {toggleActiveFigure} from "../helpers";

import classNames from "classnames";

interface SmallFieldProps {
  fieldIndex: number;
  arrayField: string[];
  setArrayField: (arrayField: string[]) => void;
  activeFigure: string;
  setActiveFigure: (figure: string) => void;
  figureForThisField: string;
}

export const SmallField: FC<SmallFieldProps> = (props) => {
  const {
    fieldIndex,
    arrayField,
    setArrayField,
    activeFigure,
    setActiveFigure,
    figureForThisField,
  } = props;

  const [isFieldFilled, setFieldFilled] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    const arrayFieldCopy = [...arrayField];
    arrayFieldCopy[fieldIndex] = activeFigure;
    setArrayField(arrayFieldCopy);

    toggleActiveFigure(setActiveFigure, activeFigure);
  };

  useEffect(() => {
    if (ref.current?.innerHTML) {
      setFieldFilled(true);
    }
  }, []);

  const getActiveFigure = (figure: string) => {
    if (figure === "X") {
      return <CrossFigure/>;
    } else if (figure === "0") {
      return <CircleFigure/>;
    } else if (figure === null) {
      return null;
    }
  };

  return (
    <div
      className={classNames("block", {
        "block-click": isFieldFilled,
      })}
      ref={ref}
      onClick={handleClick}
    >
      {getActiveFigure(figureForThisField)}
    </div>
  );
};
