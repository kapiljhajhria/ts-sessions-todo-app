import React from "react";
import { ITodoItem } from "../App";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
  todoList: ITodoItem[];
  removeTodo: (index: number) => void;
  toggleTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  return (
    <div className="todo__list">
      <ul>
        {props.todoList.map((item) => (
          <TodoListItem
            removeTodo={props.removeTodo}
            todoItem={item}
            toggleTodo={props.toggleTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
