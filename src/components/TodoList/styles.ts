import { Image, Text, View } from "react-native";
import styled, { css } from "styled-components/native";

export const TodoListWrapper = styled(View)`
  margin-top: 20px;
`;

export const EmptyListWrapper = styled(View)`
  justify-content: center;
  align-items: center;

  border-top-color: ${({ theme }) => theme["--gray-300"]};
  border-top-width: 2px;
`;

type EmptyListTextProps = {
  bold?: boolean;
};

export const EmptyListText = styled(Text)<EmptyListTextProps>`
  color: ${({ theme }) => theme["--gray-200"]};

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
      font-size: 15px;
    `}
`;

export const EmptyListIcon = styled(Image)`
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
  margin-top: 48px;
`;
