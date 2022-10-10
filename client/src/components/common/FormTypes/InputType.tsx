import React from "react";

interface IInput {
  type: string;
  placeholder: string;
  name: string;
  classes?: string[];
  onChange?: () => void;
}
const InputType: React.FC<IInput> = ({
  type,
  name,
  placeholder,
  classes,
}: IInput) => {
  switch (type) {
    case "text":
    case "search":
    case "email":
    case "number":
    case "password":
      return (
        <input
          type={type}
          name={name}
          aria-label={name}
          placeholder={placeholder}
          className={classes?.join("")}
        />
      );
    default:
      return <></>;
  }
};

export { InputType };
