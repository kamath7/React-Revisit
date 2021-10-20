import NewTodo from "./components/NewTodo";
import { TodosContextProvider } from "./store/todos-context";
import Todos from "./components/Todos";
function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
