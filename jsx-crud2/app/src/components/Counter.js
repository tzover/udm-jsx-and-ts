import React from "react";
import CounterContext from "../contexts/Counter";

export const Counter = () => (
    <CounterContext.Consumer>
        {({ count, increment, decrement }) => {
            return (
                <React.Fragment>
                    <div>count: {count}</div>
                    <button type="button" onClick={increment}>
                        +1
                    </button>
                    <button type="button" onClick={decrement}>
                        -1
                    </button>
                </React.Fragment>
            );
        }}
    </CounterContext.Consumer>
);
