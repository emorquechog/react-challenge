import { combineReducers } from "redux";
import user from "store/users/reducer";

const appReducer = combineReducers({
  user,
});

export const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};
