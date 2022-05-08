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
                {data.todos.map((todo) => {
                  return (
                    todo.pending && (
                      <li
                        className="cursor-pointer my-1"
                        key={todo._id}
                        onClick={() =>
                          dispatch({
                            type: "TODO_COMPLETE",
                            payload: {
                              _id: todo._id,
                              todo: todo.todo,
                              pending: false,
                            },
                          })
                        }
                      >
                        {todo.todo}{" "}
                        <button
                        className="p-1 bg-green-500 border-2 rounded-md border-black text-sm"
                          onClick={() =>
                            dispatch({
                              type: "TODO_COMPLETE",
                              payload: {
                                _id: todo._id,
                                todo: todo.todo,
                                pending: false,
                              },
                            })
                          }
                        >Mark Done</button>
                      </li>
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
                {data.todos.map((todo) => {
                  return (
                    !todo.pending && (
                      <li className="cursor-pointer my-1" key={todo._id}>
                        {todo.todo}
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
        <button
          className="p-1.5 text-xl bg-red-600 rounded-lg hover:bg-red-700 border-2 border-indigo-600 mt-8"
          onClick={() => {
            dispatch({
              type: "CLEAR_COMPLETED",
            });
          }}
        >
          Clear Completed Todos
        </button>
      </div>
    </div>
  );
};
