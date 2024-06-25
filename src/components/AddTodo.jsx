import { useState, useRef } from "react";
import styles from "./TodoItem.module.css";
import { MdLibraryAdd } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

import { useContext } from "react";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");

  const todoNameElement = useRef(0);
  const dueDateElement = useRef(0);

  const handleNameChange = (event) => {
    
    if(event.key.value==="Enter"){
      console.log(event);
      setTodoName(event.target.value);
    }
    
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    // console.log(event);
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    console.log(todoName, dueDate);

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    addNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");
  };

  return (
    <form className="container text-center" onSubmit={handleAddButtonClicked}>
      <div className={`${styles.kgRow} row `}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            // value={todoName}
            // onKeyDown={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className={`${styles.kgButton} btn btn-success`}
            
          >
            <MdLibraryAdd />
          </button>
        </div>
      </div>
    </form>
  );
}
export default AddTodo;
