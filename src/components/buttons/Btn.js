import { Button } from "antd";
import React from "react";

const Btn = ({
  size = "large",
  text,
  style,
  value,
  type = "primary",
  handleClick = () => console.log("you clicked me"),
}) => {
  const hasText = text ? true : false;

  return (
    <Button
      onClick={handleClick}
      size={size}
      style={{ ...style }}
      shape="round"
      type={type}
      value={value}
    >
      {hasText && text}
    </Button>
  );
};

export default Btn;
