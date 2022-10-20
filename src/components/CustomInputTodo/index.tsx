import { createRef } from "react";
import { useRef } from "react";
import { useState } from "react";
import { TextInput } from "react-native";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

const plusIcon = require("../../assets/images/plusIcon.png");

type CustomInputTodoProps = {
  onAdd: (todoContent: string) => void;
};

export function CustomInputTodo({ onAdd }: CustomInputTodoProps) {
  const [todoContent, setTodoContent] = useState("");

  const theme = useTheme();

  function handleAddTodo() {
    if (todoContent) {
      onAdd(todoContent);
      setTodoContent("");
    }
  }

  const isAddButtonDisabled = todoContent.length === 0;
  return (
    <S.InputWrapper>
      <S.CustomTextInput
        placeholderTextColor={theme["--gray-200"]}
        placeholder="Adicione um nova tarefa"
        value={todoContent}
        onChangeText={setTodoContent}
        onSubmitEditing={handleAddTodo}
      />
      <S.Button onPress={handleAddTodo} disabled={isAddButtonDisabled}>
        <S.ButtonIcon source={plusIcon} />
      </S.Button>
    </S.InputWrapper>
  );
}
