import React, { useContext, useState } from "react";
import "./todo.css";
import { Global } from "./store";

const Todo = () => {
  const { todoArr, setTodoArr, upDateTodo, setUpdateTodo } = useContext(Global);
  const [list, setList] = useState("");
  return (
    <div className="todo">
      <input placeholder="Add Your Task Here 😎"
        onChange={(e) => {
          setUpdateTodo(e.target.value);
          setList(e.target.value);
        }}
        type="text"
        value={upDateTodo}
      />
      <button
        onClick={() => {
          if (list === "") {
            alert("Enter Yo Work !!! 😎");
            return;
          }
          setTodoArr([...todoArr, { task: list, id: Date.now() }]);
        }}
      >
        Add List
      </button>
    </div>
  );
};

export default Todo;
