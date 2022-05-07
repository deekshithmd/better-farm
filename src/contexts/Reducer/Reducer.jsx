export const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECORD":
      const store = JSON.parse(localStorage.getItem("records"));
      if (store !== null) {
        console.log("entered", store);
        const r = store.push(action.payload);
        localStorage.setItem("records", JSON.stringify(r));
      } else {
          const a=new Array(0)
          a.push(action.payload)
          console.log("push",a)
        localStorage.setItem("records", JSON.stringify(a));
      }
      return { ...state, records: [...state.records, action.payload] };
    default:
      return state;
  }
};
