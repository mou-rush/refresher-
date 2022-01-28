import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import reduxPromise from "redux-promise";
import async from "./middlewares/async";
import reducers from "./reducers";
import stateValidator from "./middlewares/stateValidator";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, stateValidator)
  );

  return <Provider store={store}>{children}</Provider>;
};
