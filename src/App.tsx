import React from "react";
import axios from "axios";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export interface ITodoItem {
  title: string;
  completed: boolean;
  id: number;
}

function App() {
  const [todoList, setTodoList] = React.useState<ITodoItem[]>([
    {
      title: "Learn React",
      completed: false,
      id: 1,
    },
    {
      title: "Learn TypeScript",
      completed: false,
      id: 2,
    },
    {
      title: "Learn Angular",
      completed: false,
      id: 3,
    },
  ]);

  const onAddTodo = (title: string) => {
    setTodoList(
      todoList.concat({ title, completed: false, id: todoList.length + 1 })
    );
  };

  // const [todoListFromServer, setTodoListFromServer] = React.useState<
  //   ITodoItem[]
  // >([]);

  // React.useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json() as Promise<ITodoItem[]>)
  //     .then((data) => {
  //       setTodoListFromServer(data);
  //     });
  // }, []);

  const removeTodo = (id: number) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const toggleTodo = (id: number) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <TodoInput onAddTodo={onAddTodo} />
      <TodoList
        removeTodo={removeTodo}
        todoList={todoList}
        toggleTodo={toggleTodo}
      />
    </div>
  );
}

export default App;
