import React, {FC, useEffect, useState} from "react";

export const WinModal: FC = () => {
  const [isVisible, setVisible] = useState<any>(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  }, []);

  return (
    isVisible && (
      <div className="win-modal">
        <div className="win-modal__wrapper">
          <span>Победили </span>
          <br/>
          <b>крестики</b>!
        </div>
      </div>
    )
  );
};
