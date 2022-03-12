import { combineReducers } from "redux";

import filtersReducer from "../components/Filters/filtersSlice";
import todosListReducer from "../components/TodoList/todosSlice";

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todosListReducer,
})

export default rootReducer