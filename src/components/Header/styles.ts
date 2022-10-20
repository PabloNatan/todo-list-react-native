import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  background-color: ${({ theme }) => theme["--gray-700"]};
  height: 173px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 32px;
  width: 110px;
`;
