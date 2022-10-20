import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme["--gray-600"]};
`;

export const ContentWrapper = styled.View`
  padding: 0 16px;
`;
