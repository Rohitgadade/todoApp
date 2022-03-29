import { ADD_TODOS, DELETE_TODOS, UPDATE_TODOS } from "../actionTypes";

export const add_Todos = (todos) => ({
  type: ADD_TODOS,
  payload: todos,
});

export const delete_Todos = (id) => ({
  type: DELETE_TODOS,
  payload: id,
});

export const update_Todos = (id, todos) => ({
  type: UPDATE_TODOS,
  payload: id,
  todos,
});
