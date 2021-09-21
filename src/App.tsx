import Home from "./components/Home";

export interface ITodoItem {
  title: string;
  completed: boolean;
  id: number;
}

function App() {
  return <Home />;
}

export default App;
