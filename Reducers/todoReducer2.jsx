export const initial = {
  counter: 2,
  todos: [{
    id: 1,
    done: false,
    text: "One",
  }, {
    id: 2,
    done: false,
    text: "Two",
  }],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      {
        const id = state.counter + 1;
        const todo = {
          id: id,
          done: false,
          text: action.text,
        };
        return {
          counter: id,
          done: false,
          todos: [...state.todos, todo],
        };
      }
    case "edit":
      {
        const found = state.todos.find(t => t.id === action.id);
        found.text = action.text;

        return {
          counter: state.counter,
          todos: state.todos,
        };
      }
    case "check":
      {
        const found = state.todos.find(t => t.id === action.id);
        found.done = !found.done;

        return {
          counter: state.counter,
          todos: state.todos,
        };
      }
    case "remove":
      {
        const idx = state.todos.findIndex(
          t => t.id === action.id
        );

        const todos = [...state.todos];
        todos.splice(idx, 1);

        return {
          counter: state.counter,
          todos: todos,
        };
      }
    default:
      return state;
  }
};