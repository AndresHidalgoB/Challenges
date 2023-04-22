export const TodoAdd = ({ onNewTodo }) => {
  const onFormSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      description: "Hacer el proyecto",
      done: false,
    };

    onNewTodo(newTodo);
  };
  return (
    <form action="" onSubmit={(e)=> onFormSubmit(e)}>
      <input type="text" placeholder="Tarea" />
      <button type="submit">Agregar</button>
    </form>
  );
};
