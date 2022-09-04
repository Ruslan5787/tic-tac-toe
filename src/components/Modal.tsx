import React, {FC, useEffect, useState} from "react";

interface ModalProps {
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = (props) => {
  const {children} = props;
  const [isVisible, setVisible] = useState<any>(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  }, []);

  return (
    isVisible && (
      <div className="modal">
        <div className="modal__wrapper">{children}</div>
      </div>
    )
  );
};
