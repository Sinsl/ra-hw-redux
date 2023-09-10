import {
  combineReducers,
  compose,
  legacy_createStore
} from "redux";

import notesReducer from './notesReducer';
import formsReducer from './formsReducer';
// import numberReducer from './numberReducer';


declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __REDUX_DEVTOOLS_EXTENSION__: any,
  }
}

// eslint-disable-next-line react-refresh/only-export-components
const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      forms: formsReducer,
      notes: notesReducer,
      // number: numberReducer,
    }),
    undefined,
    compose(
      ReactReduxDevTools,
    )
  );
}

export default configureStore;