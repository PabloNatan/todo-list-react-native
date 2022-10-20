import { Text } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`;

export const TagWrapper = styled.View`
  flex-direction: row;
`;

type TagTextProps = {
  color: string;
};

export const TagText = styled(Text)<TagTextProps>`
  color: ${({ color }) => color};
  font-weight: bold;
  font-size: 14px;
  margin-right: 5px;
`;

export const TagValue = styled.Text`
  color: ${({ theme }) => theme["--gray-100"]};
  background-color: ${({ theme }) => theme["--gray-300"]};
  padding: 2px 8px;
  border-radius: 24px;
`;
