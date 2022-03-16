import "./styles.css";
import { useState } from "react";

const ToDoElement = ({ value, idx, onCompleteToDo, removeToDoItem }) => {
  return (
    <>
      <li
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "Center",
          margin: "10px",
          color: "black"
        }}
      >
        <div id="values-container">
          {value.todo}
          <div
            style={{
              textAlign: "center",
              border: "none",
              color: "White",
              backgroundColor: value.isCompleted ? "green" : "red",
              margin: "10px",
              width: "10px",
              height: "10px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "coulmn"
            }}
          />
        </div>

        <div id="buttons">
          <button
            style={{
              textAlign: "center",
              border: "none",
              color: "White",
              backgroundColor: "lightblue",
              margin: "10px",
              borderRadius: "16px"
            }}
            onClick={() => onCompleteToDo(idx)}
          >
            {!value.isCompleted ? "Complete Task" : "Uncomplete Task"}
          </button>
          <button
            style={{
              textAlign: "center",
              border: "none",
              color: "White",
              backgroundColor: "lightblue",
              margin: "10px",
              borderRadius: "20px"
            }}
            onClick={() => removeToDoItem(idx)}
          >
            Remove Task
          </button>
        </div>
      </li>
    </>
  );
};
export default function App() {
  const [inputValue, setToDo] = useState({
    todo: "",
    isCompleted: false
  });

  const [todos, updateToDosList] = useState([]);

  const addToDo = () => {
    if (inputValue.todo) {
      updateToDosList([...todos, inputValue]);
      setToDo({
        todo: "",
        isCompleted: false
      });
    }
  };

  const onCompleteToDo = (idx) => {
    const ourItem = todos[idx];
    const mTodos = [...todos];
    const updatedItem = {
      ...ourItem,
      isCompleted: !ourItem.isCompleted
    };
    mTodos[idx] = updatedItem;
    updateToDosList(mTodos);
  };

  const removeToDoItem = (idx) => {
    const mTodos = [...todos];
    mTodos.splice(idx, 1);
    updateToDosList(mTodos);
  };

  return (
    <div className="App">
      <h1 style={{ textDecoration: "underline" }}>To Do List</h1>

      <input
        className="inputField"
        type="text"
        value={inputValue.todo}
        placeholder="add to do item"
        onChange={(e) =>
          setToDo({
            todo: e.target.value,
            isCompleted: false
          })
        }
      />
      <button onClick={addToDo}>Add Task</button>
      <ul
        style={{
          textAlign: "center",
          border: "none",
          color: "white",
          boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
          margin: "10px",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "row"
        }}
      >
        {todos.length > 0 &&
          todos.map((value, idx) => {
            return (
              <ToDoElement
                key={value.todo + idx}
                value={value}
                idx={idx}
                onCompleteToDo={onCompleteToDo}
                removeToDoItem={removeToDoItem}
              />
            );
          })}
      </ul>
    </div>
  );
}
