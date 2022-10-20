import { useTheme } from "styled-components";
import * as S from "./styles";

type TodoSummaryProps = {
  total: number;
  doneTotal: number;
};

export function TodoSummary({ doneTotal, total }: TodoSummaryProps) {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <S.TagWrapper>
        <S.TagText color={theme["--blue-700"]}>Criadas</S.TagText>
        <S.TagValue>{total}</S.TagValue>
      </S.TagWrapper>

      <S.TagWrapper>
        <S.TagText color={theme["--purple-700"]}>Concluídas</S.TagText>
        <S.TagValue>{doneTotal}</S.TagValue>
      </S.TagWrapper>
    </S.Wrapper>
  );
}
