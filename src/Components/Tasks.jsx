import React, { useContext } from "react";
import { Global } from "./store";
import "./task.css";
import { deleteTodoList, updateTodo } from "./functions";

const Tasks = () => {
  const { todoArr, setTodoArr, setUpdateTodo } = useContext(Global);

  return (
    <div className="taskContainer">
      {todoArr.length > 0 &&
        todoArr.map((ele) => {
          return (
            <div className="listContainer">
              <div className="upperContainer">
                <p>{ele.task}</p>
              </div>
              <div className="buttonContainer">
                <button
                  onClick={() => {
                    updateTodo(
                      ele.id,
                      ele.task,
                      ele,
                      setUpdateTodo,
                      todoArr,
                      setTodoArr
                    );
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    deleteTodoList(ele.id, todoArr, setTodoArr);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Tasks;
