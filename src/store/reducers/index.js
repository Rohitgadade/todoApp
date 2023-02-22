import { ADD_TODOS, DELETE_TODOS, UPDATE_TODOS } from "../actionTypes";

const initialState = [
  // {
  //   id: 1,
  //   todos: "Get up early morning",
  // },
  // {
  //   id: 2,
  //   todos: "Travelling to Delhi",
  // },
  // {
  //   id: 3,
  //   todos: "Call to friend",
  // },
];


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      state = [...state, action.payload];
      return state;
    case DELETE_TODOS:
      const delete_Todos = state.filter((el) =>
        el.id === action.payload ? null : el
      );
      state = delete_Todos;
      return state;
    case UPDATE_TODOS:
      const update_Todos = state.filter((el) =>
        el.id === action.payload.id 
          ? Object.assign(el, { todos: action.payload.todos })
          : el
      );

      // console.log("update state", update_Todos);
      // console.log("action.payload.id", action.payload);
      state = update_Todos;
      return state;
    default:
      return state;
  }
};

export default rootReducer;
