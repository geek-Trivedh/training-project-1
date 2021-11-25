import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/actionTypes";

let id = 1;

export default todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: ++id,
          todo: action.todo,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
  }
  return state;
};
