import counterReducer from "./counterReducer";
import loggedRecords from "./loggedReducer";
import { combineReducers } from "redux"

const reducer = combineReducers({
  counter: counterReducer,
  logged: loggedRecords
})

export default reducer