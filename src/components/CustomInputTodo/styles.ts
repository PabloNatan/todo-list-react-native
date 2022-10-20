import React from "react";
import second, { TextInput, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const InputWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: -27px;
`;

export const CustomTextInput = styled(TextInput)`
  flex: 1;
  background-color: ${({ theme }) => theme["--gray-500"]};
  color: ${({ theme }) => theme["--gray-100"]};
  border-radius: 8px;
  padding-left: 16px;
`;

type ButtonProps = {
  disabled: boolean;
};

export const Button = styled(TouchableOpacity)<ButtonProps>`
  height: 54px;
  width: 54px;
  background-color: ${({ theme }) => theme["--blue-700"]};

  justify-content: center;
  align-items: center;
  border-radius: 8px;

  margin-left: 10px;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme["--gray-200"]};
    `}
`;

export const ButtonIcon = styled.Image`
  width: 20px;
  height: 20px;
`;
