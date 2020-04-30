import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
// import { AppActions } from "../../types/Actions";

export const rootReducer = combineReducers({ null: null });

const composeEnhancer =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export type AppState = ReturnType<typeof rootReducer>;

//configure action types

// export const store = createStore(
//   rootReducer,
//   composeEnhancer(
//     applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
//   )
// );
