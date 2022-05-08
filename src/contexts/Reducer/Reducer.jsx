export const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECORD":
      return { ...state, records: [...state.records, action.payload] };
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "TODO_COMPLETE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id ? { ...todo, pending: false } : todo
        ),
      };
    case "DELETE_RECORD":
      return {
        ...state,
        records: state.records.filter(
          (record) => record._id !== action.payload._id
        ),
      };
    case "LOAD_NEWS":
      return { ...state, news: action.payload };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.pending !== false),
      };
    default:
      return state;
  }
};
