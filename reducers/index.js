import { combineReducers } from "redux";
import counterReducer from "./counter";
import productReducer from "./product";
import settingsReducer from "./setting";

const rootReducer = combineReducers({
  counterState: counterReducer,
  productState: productReducer,
  settingState: settingsReducer
});

export default rootReducer;
