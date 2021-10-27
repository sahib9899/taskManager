import { combineReducers, createStore } from "redux";
import { addNewTask } from "./MainReducer";

const rootReducer = combineReducers({
    addNewTask,
})

export const store = createStore(rootReducer);
 