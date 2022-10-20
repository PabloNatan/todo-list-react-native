import { Image, Text, View } from "react-native";
import styled, { css } from "styled-components/native";

export const Wrapper = styled(View)`
  background-color: ${({ theme }) => theme["--gray-500"]};
  margin-bottom: 10px;
  padding: 12px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

type ContentProps = {
  isDone: boolean;
};

export const Content = styled(Text)<ContentProps>`
  color: ${({ theme }) => theme["--gray-100"]};
  flex: 1;
  margin: 0 10px;

  ${({ isDone }) =>
    isDone &&
    css`
      text-decoration: line-through;
    `}
`;

export const CustomImage = styled(Image)`
  width: 24px;
  height: 24px;
`;

export const TrashIcon = styled(Image)`
  width: 16.5px;
  height: 18px;
`;
