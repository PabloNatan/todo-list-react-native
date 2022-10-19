import * as S from "./styles";

const imageLogo = require("../../assets/images/logo.png");

export function Header() {
  return (
    <S.HeaderContainer>
      <S.Logo source={imageLogo} />
    </S.HeaderContainer>
  );
}
