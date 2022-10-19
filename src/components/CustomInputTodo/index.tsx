import React from "react";
import { TextInput } from "react-native";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

const plusIcon = require("../../assets/plus.png");

export function CustomInputTodo() {
  const theme = useTheme();
  return (
    <S.InputWrapper>
      <S.TextInput placeholderText={theme["--gray-300"]} />
    </S.InputWrapper>
  );
}
