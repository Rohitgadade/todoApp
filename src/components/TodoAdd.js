import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_Todos } from "../store/actions";
import TodoList from "./TodoList";

export const TodoAdd = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const [input, setInput] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      add_Todos({
        id: data.length > 0 ? data[data.length - 1].id + 1 : 0,
        todos: input,
      })
    );
    setInput("");

  };


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-md-center mt-5 ">
          <div className="col-md-auto mt-2">
            <h6>Total todos : {data.length}</h6>
          </div>
          <div className="col-md-auto">
            <input
              type="text"
              name="input"
              placeholder="Enter todos..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="form-control mb-2"
              required
            />
          </div>
          <div className="col-md-auto">
            <button type="submit" className="btn btn-primary mb-2">
              Add
            </button>
          </div>
        </div>
      </form>
      {data.length === 0 ? (
        <h4 className="mb-5 mt-5 text-center">Please add first todo task</h4>
      ) : (
        <TodoList />
      )}
    </div>
  );
};

export default TodoAdd;
