export const TodoItem = ({ todo }) => {
  return (
    <li>
      <span>{todo.description}</span>
      <button>Borrar</button>
    </li>
  );
};
