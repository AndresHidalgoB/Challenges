import { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { TodoReducer } from "../Reducers/TodoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Hacer los challenges :L",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  const handleNewTodo = (todo) => dispatch({ type: "ADD TODO", payload: todo });

  return (
    <>
      <h1>
        TodoApp: 10, <small>pendientes:2</small>
      </h1>
      <hr />

      <div>
        <div>
          <TodoList todos={todos} />
        </div>
        <div>
          <TodoAdd onNewTodo={handleNewTodo}/>
        </div>
      </div>
    </>
  );
};
