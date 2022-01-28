import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";

import "./index.css";
import reducer from "./reducers";
import EventsIndex from "./EventsIndex";
import EventsNew from "./EventsNew";
import EventsShow from "./EventsShow";
// import App from "./App";
const enhancer =
    process.env.NODE_ENV === "development"
        ? composeWithDevTools(applyMiddleware(thunk))
        : applyMiddleware(thunk);
const store = createStore(reducer, enhancer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => <EventsIndex />} />
                    <Route
                        exact
                        path="/events"
                        render={() => <EventsIndex />}
                    />
                    <Route path="/events/new" render={() => <EventsNew />} />
                    <Route
                        path="/events/:id"
                        // location={this.props.location}
                        // key={this.props.location.key}
                        render={(props) => (
                            <EventsShow
                                {...props}
                                // key={this.props.location.key}
                            />
                        )}
                    />
                    {/* <App /> */}
                    {/* <EventsIndex /> */}
                </Switch>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
