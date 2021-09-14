import React from "react";
import { ITodoItem } from "../App";

interface Props {
  todoItem: ITodoItem;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoListItem: React.FC<Props> = ({
  todoItem: { completed, title, id },
  removeTodo,
  toggleTodo,
}: Props) => {
  const removeTodoItem: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log("remove todo");
    removeTodo(id);
  };

  const toggleTodoItemStatus: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    toggleTodo(id);
  };

  return (
    <div className="todo__item">
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={toggleTodoItemStatus}
        />
        <span>{title}</span>
      </li>
      <button onClick={removeTodoItem}>Remove</button>
    </div>
  );
};

export default TodoListItem;
