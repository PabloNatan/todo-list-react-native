import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  background-color: ${({ theme }) => theme["--gray-700"]};
  height: 173;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 32;
  width: 110;
`;
