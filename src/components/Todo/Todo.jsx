import "./todo.css";
import { Sidebar } from "../Sidebar/Sidebar";
import { useState } from "react";
import { useData } from "../../contexts";
import { v4 as uuid } from "uuid";
export const Todo = () => {
  const [todo, setTodo] = useState("");
  const { data, dispatch } = useData();

  return (
    <div className="main">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content flex">
        <div className="add-todo">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />{" "}
          <button
            className="p-1.5 text-xl bg-green-600 rounded-lg hover:bg-green-500 border-2 border-indigo-600"
            onClick={() => {
              setTodo(" ");
              dispatch({
                type: "ADD_TODO",
                payload: { _id: uuid(), todo: todo, pending: true },
              });
            }}
          >
            Add Todo
          </button>
        </div>
        <div className="todo-container text-base">
          <div className="heading-1 flex text-xl border-b-2 border-r-2 border-black">
            Pending
          </div>
          <div className="pending border-r-2 border-black flex-center flex-col">
            {data.todos?.length > 0 ? (
              <ol>
                {data.todos.map((t) => {
                  return (
                    t.pending && (
                      <>
                      <li
                        className="cursor-pointer"
                        key={t._id}
                        onClick={() =>
                          dispatch({
                            type: "TODO_COMPLETE",
                            payload: {
                              _id: t._id,
                              todo: t.todo,
                              pending: false,
                            },
                          })
                        }
                      >
                        {t.todo}
                      </li>
                      </>
                    )
                  );
                })}
              </ol>
            ) : (
              <h1>No Todos Pending</h1>
            )}
          </div>
          <div className="heading-2 flex text-xl border-b-2 border-black">
            Completed
          </div>
          <div className="completed flex-center flex-col">
            {data.todos?.length > 0 ? (
              <ol>
                {data.todos.map((t) => {
                  return (
                    !t.pending && (
                      <li className="cursor-pointer" key={t._id}>
                        {t.todo}
                      </li>
                    )
                  );
                })}
              </ol>
            ) : (
              <h1>Todos Cleared</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
