import { combineReducers } from "redux";
import { MainReducer } from "./MainReducer";
import {PopupReducer} from "./PopupReducer";

const rootReducer = combineReducers({
  MainReducer,
  PopupReducer,
});

export default rootReducer;
