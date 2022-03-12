import { combineReducers } from "redux";

import filtersReducer from "../components/Filters/FiltersSlice";
import todosListReducer from "../components/TodoList/TodosSlice";

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todosListReducer,
})

export default rootReducer