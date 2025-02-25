import React from "react";
import { ButtonContainer } from "./style";
import { IButtonProps } from "./types";

const Button = ({ title, onClick }: IButtonProps) => {
  return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
