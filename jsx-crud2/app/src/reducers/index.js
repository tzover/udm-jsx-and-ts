import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import { events } from "./events";
// import { count } from "./count";

// export default combineReducers({ count });
export default combineReducers({ events, form });

// export default combineReducers({ count, foo, bar, buzz });
