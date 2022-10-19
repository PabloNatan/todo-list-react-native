import { Header } from "../../components/Header";
import * as S from "./styles";

export interface ITodo {
  id: number;
  content: string;
  isDone: boolean;
}

export function Home() {
  return (
    <S.Wrapper>
      <Header />
    </S.Wrapper>
  );
}
