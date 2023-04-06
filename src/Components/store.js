import { createContext, useState } from "react";

export const Global = createContext();

function Wraper({ children }) {
  const [todoArr, setTodoArr] = useState([]);
  const [upDateTodo, setUpdateTodo] = useState();

  console.log(todoArr);
  return (
    <Global.Provider value={{ todoArr, setTodoArr, upDateTodo, setUpdateTodo }}>
      {children}
    </Global.Provider>
  );
}

export default Wraper;
