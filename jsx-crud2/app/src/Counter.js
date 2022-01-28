import React from "react";

import { connect } from "react-redux";
import { increment, decrement } from "./actions";

// なぜか効かない。。。App.jsだと効く

export const Counter = (props) => {
    return (
        <div>
            <h1>props :{props.value}</h1>
            <button type="button" onClick={props.increment}>
                Counter +
            </button>
            <button type="button" onClick={props.decrement}>
                Counter -
            </button>
        </div>
    );
};

const mapStateToProps = (state) => ({ value: state.count.value });
const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
