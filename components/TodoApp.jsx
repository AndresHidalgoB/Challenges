import React from "react";
import Todo from "./Todo.jsx";
import AddTodo from "./AddTodo.jsx";
import { useTodo } from "../hooks/todo";

export const TodoApp = () => {
  const [state, count, pending, dispatch] = useTodo();

  return (<>
  <h1>Cantidad: {count}</h1>
  <h1>Pendientes: {pending}</h1>
    <AddTodo
      add={text => dispatch({type: "add", text: text})}
    />
    {state.todos.map(todo => (
      <Todo
        key={todo.id}
        todo={todo}
        check={() => dispatch({type: "check", id: todo.id})}
        remove={() => dispatch({type: "remove", id: todo.id})}
        edit={text => dispatch({type: "edit", id: todo.id, text: text})}
      />
    ))}
  </>);
}