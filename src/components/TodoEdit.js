import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { update_Todos } from "../store/actions";

export const TodoEdit = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const [editname, setEditName] = useState("");
  const { id } = useParams();
  // console.log("id,", id);
  const currTodo = data.find((curr) => curr.id === parseInt(id));
  // console.log("currTodo", currTodo);
  useEffect(()=>{
    if(currTodo){
      setEditName(currTodo.todos)
    }
  },[currTodo])

  return (
    <div>
      {currTodo ? (
        <ul style={{ listStyle: "none", textAlign: "center" }}>
          {data
            .filter((el) => el.id === parseInt(id))
            .map((el, id) => {
              return (
                <div key={id}>
                  <li>
                    <div className="row justify-content-md-center mt-5 ">
                      <div className="col-md-auto mt-1">{el.todos}</div>
                      <div className="col-md-auto">
                        <input
                          type="text"
                          name="editname"
                          value={editname}
                          onChange={(e) => setEditName(e.target.value)}
                          className="form-control mb-2"
                          required
                        />
                      </div>

                      <div className="col col-lg-4 btn-group">
                        <div className="col col-lg-4">
                          {editname === "" ? <Link to="/">
                            <button
                              type="button"
                              className="btn btn-info"
                            >
                              Update
                            </button>
                          </Link> : <Link to="/">
                            <button
                              type="button"
                              className="btn btn-info"
                              onClick={() => {
                                dispatch(
                                  update_Todos({
                                    id: el.id,
                                    todos: editname,
                                  })
                                )
                              }
                              }
                            >
                              Update
                            </button>
                          </Link>}
                        </div>
                        <div className="col col-lg-2">
                          <Link to="/">
                            <button type="button" className="btn btn-dark">
                              Cancel
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
              );
            })}
        </ul>
      ) : (
        <p>Not valid id</p>
      )}
    </div>
  );
};
