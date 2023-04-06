export function deleteTodoList(id, todoArr, setTodoArr) {
  setTodoArr(todoArr.filter((ele) => ele.id !== id));
}

export function updateTodo(id, task, ele, setUpdateTodo, todoArr, setTodoArr) {
  setUpdateTodo(task);
  deleteTodoList(id, todoArr, setTodoArr);
}
