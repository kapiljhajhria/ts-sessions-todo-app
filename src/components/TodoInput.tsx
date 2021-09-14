import React, { FC, useState } from "react";

interface Props {
  onAddTodo: (todo: string) => void;
}

const TodoInput: FC<Props> = (props) => {
  const [title, setTitle] = useState<string>("");

  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (title.length === 0) {
      return;
    }
    props.onAddTodo(title);
    setTitle("");
  };

  const onInputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setTitle(e.target.value);
  };
  return (
    <div className="todo__input">
      <input
        type="text"
        placeholder="What needs to be done?"
        onChange={onInputChangeHandler}
        value={title}
      />
      <button onClick={onClickHandler}>Add</button>
    </div>
  );
};

export default TodoInput;
