export const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECORD":
      // const store = JSON.parse(localStorage.getItem("records"));
      // store.push(action.payload);
      // localStorage.setItem("records", JSON.stringify(store));
      return { ...state, records:[...state.records,action.payload] };
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "TODO_COMPLETE":
      return {
        ...state,
        todos: state.todos.map((t) =>
          t._id === action.payload._id ? { ...t, pending: false } : t
        ),
      };
    default:
      return state;
  }
};
