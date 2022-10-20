import { useState } from "react";
import { CustomInputTodo } from "../../components/CustomInputTodo";
import { Header } from "../../components/Header";
import { TodoList } from "../../components/TodoList";
import { TodoSummary } from "../../components/TodoSummary";
import * as S from "./styles";

export interface ITodo {
  id: number;
  content: string;
  isDone: boolean;
}

export function Home() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  function handleAddTodo(content: string) {
    setTodos((oldState) => [
      ...oldState,
      { id: new Date().getTime(), content, isDone: false },
    ]);
  }

  function handleRemoveTodo(todoId: number) {
    setTodos((oldState) => oldState.filter((todo) => todo.id !== todoId));
  }

  function handleToggleTodoStatus(todoId: number) {
    setTodos((oldState) =>
      oldState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
  }

  const todosTotal = todos.length;
  const todosDoneTotal = todos.reduce(
    (prevValue, currTodo) => prevValue + (currTodo.isDone ? 1 : 0),
    0
  );
  return (
    <S.Wrapper>
      <Header />
      <S.ContentWrapper>
        <CustomInputTodo onAdd={handleAddTodo} />
        <TodoSummary total={todosTotal} doneTotal={todosDoneTotal} />
        <TodoList
          todos={todos}
          onDelete={handleRemoveTodo}
          onToggleTodoStatus={handleToggleTodoStatus}
        />
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
