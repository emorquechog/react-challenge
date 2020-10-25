import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { rootReducer } from "./reducers";
import { IUserState } from "store/users/reducer";
import apiService from "api";

export interface IAppState {
  user: IUserState;
}

export const mockStore = createStore(rootReducer);

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(apiService)))
);

export const makeStore = (initialState: any, options: any) => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(apiService)))
  );
};
