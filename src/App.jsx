import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import style from "./components/TodoItems.module.css";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  // const [todoItems, setTodoItems] = useState([]);

  // const newTodoItems = [
  //   ...todoItems,
  //   { name: itemName, dueDate: itemDueDate },
  // ];
  // setTodoItems(newTodoItems);

  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />;
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
