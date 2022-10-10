import React from "react";

interface IButton {
  type: string;
  btnClasses?: string[];
  btnTitle?: string;
  children?: React.ReactNode;
}
const Button: React.FC<IButton> = ({
  type,
  btnClasses,
  btnTitle,
  children,
}: IButton) => {
  switch (type) {
    case "outline":
    case "block":
      return <button className={btnClasses?.join("")}>{btnTitle}</button>;
    case "withImageTitle":
      return (
        <>
          <button className={btnClasses?.join("")}>
            {children}
            {btnTitle}
          </button>
        </>
      );
    default:
      return <></>;
  }
  return <button></button>;
};

export { Button };
