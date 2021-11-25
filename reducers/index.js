import { combineReducers } from "redux";

import todosReducer from "./todosReducer";
import filterTodosReducer from "./filterTodosReducer";
import signUpDetailReducer from "./signUpDetailReducer";

export default combineReducers({
  todosReducer,
  filterTodosReducer,
  signUpDetailReducer,
});
