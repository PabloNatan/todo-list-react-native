import { FlatList } from "react-native";
import { ITodo } from "../../screens/Home";
import { TodoItem } from "../TodoItem";
import { EmptyList } from "./EmptyList";
import * as S from "./styles";

type TodoListProps = {
  todos: ITodo[];
  onDelete: (todoId: number) => void;
  onToggleTodoStatus: (todoId: number) => void;
};

export function TodoList({
  todos = [],
  onDelete,
  onToggleTodoStatus,
}: TodoListProps) {
  return (
    <S.TodoListWrapper>
      <FlatList
        data={todos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onDeleteTodo={onDelete}
            onToggleTodoStatus={onToggleTodoStatus}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyList}
      />
    </S.TodoListWrapper>
  );
}
