import * as S from "./styles";

const clipboardIcon = require("../../assets/images/clipboard.png");

export function EmptyList() {
  return (
    <S.EmptyListWrapper>
      <S.EmptyListIcon source={clipboardIcon} />
      <S.EmptyListText bold>
        Você ainda não tem tarefas cadastradas
      </S.EmptyListText>
      <S.EmptyListText>
        Crie tarefas e organize seus itens a fazer
      </S.EmptyListText>
    </S.EmptyListWrapper>
  );
}
