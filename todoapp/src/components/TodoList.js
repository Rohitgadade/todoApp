import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { delete_Todos } from "../store/actions";
import { TodoEdit } from "./TodoEdit";

export const TodoList = () => {
  const data = useSelector((state) => state);
  const [isEdit, setEdit] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      {!isEdit ? (
        data.map((el, id) => {
          return (
            <div key={id}>
              <div className="row justify-content-md-center mt-2">
                <div className="col ">
                  <div className="list-group list-group-horizontal">
                    <p className="list-group-item mb-2 ">{el.todos}</p>
                  </div>
                </div>
                <div className="col col-lg-3 btn-group ">
                  <div className="col col-lg-3">
                    <Link to={`/todoedit/${el.id}`}>
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => {
                          setEdit(true);
                        }}
                      >
                        Edit
                      </button>
                    </Link>
                  </div>
                  <div className="col col-lg-5">
                    <button
                      type="button"
                      onClick={() => dispatch(delete_Todos(el.id))}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <TodoEdit />
      )}
    </div>
  );
};

export default TodoList;
