import React from "react";

export const User = (props) => {
    return (
        <div>
            <h1>
                Hi, I am {props.name}, and {props.age} years old
            </h1>
        </div>
    );
};
