import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { loggedReducer } from "./loggedReducer";


const Reducers = combineReducers({counter :counterReducer,logged :loggedReducer});

export default Reducers;