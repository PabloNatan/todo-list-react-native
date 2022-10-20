import * as S from "./styles";
import { ITodo } from "../../screens/Home";
import { TouchableOpacity } from "react-native";

const trashIcon = require("../../assets/images/trash.png");
const checkIcon = require("../../assets/images/check.png");
const checkFilledIcon = require("../../assets/images/checkFilled.png");

type TodoItemProps = {
  todo: ITodo;
  onDeleteTodo: (todoId: number) => void;
  onToggleTodoStatus: (todoId: number) => void;
};

export function TodoItem({
  onDeleteTodo,
  onToggleTodoStatus,
  todo,
}: TodoItemProps) {
  return (
    <S.Wrapper>
      <TouchableOpacity onPress={() => onToggleTodoStatus(todo.id)}>
        <S.CustomImage source={todo.isDone ? checkFilledIcon : checkIcon} />
      </TouchableOpacity>

      <S.Content isDone={todo.isDone}>{todo.content}</S.Content>

      <TouchableOpacity onPress={() => onDeleteTodo(todo.id)}>
        <S.TrashIcon source={trashIcon} />
      </TouchableOpacity>
    </S.Wrapper>
  );
}
