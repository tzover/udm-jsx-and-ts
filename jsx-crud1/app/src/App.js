import React, { Component } from "react";
import PropTypes from "prop-types";

import { User } from "./User";
import { Counter } from "./Counter";

import { connect } from "react-redux";
import { increment, decrement } from "./actions";

class App extends Component {
    render() {
        const props = this.props;
        const profiles = [
            { name: "Taro", age: 18 },
            { name: "Hanako", age: 24 },
            { name: "NoName" },
        ];

        return (
            <React.Fragment>
                <h1>Hello World</h1>
                <label htmlFor="bar">bar</label>
                <input
                    type="text"
                    onClick={() => {
                        console.log("I am clicked!");
                    }}
                />
                {profiles.map((profile, idx) => {
                    return (
                        <User key={idx} name={profile.name} age={profile.age} />
                    );
                })}
                <h1>props :{props.value}</h1>
                <button type="button" onClick={props.increment}>
                    Counter +
                </button>
                <button type="button" onClick={props.decrement}>
                    Counter -
                </button>
                <Counter props={props} />
            </React.Fragment>
        );
    }
}

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
};

User.defaultProps = {
    age: 0,
};

const mapStateToProps = (state) => ({ value: state.count.value });
const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
