import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";

import { TextField, Button } from "@material-ui/core";
import { postEvents } from "./actions";

class EventsNew extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    renderField(field) {
        const {
            input,
            label,
            type,
            meta: { touched, error },
        } = field;
        return (
            <TextField
                id="standard-basic"
                label={label}
                type={type}
                {...input}
                fullWidth={true}
            >
                {touched && error && <span>{error}</span>}
            </TextField>
        );
    }

    async onSubmit(values) {
        await this.props.postEvents(values);
        this.props.history.push("/");
    }
    render() {
        const { handleSubmit, pristine, submitting, invalid } = this.props;
        const style = { margin: 12 };
        return (
            <React.Fragment>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <div>
                        <Field
                            label="Title"
                            name="title"
                            type="text"
                            component={this.renderField}
                        />
                    </div>
                    <div>
                        <Field
                            label="Body"
                            name="body"
                            type="text"
                            component={this.renderField}
                        />
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        style={style}
                        disabled={pristine || submitting || invalid}
                    >
                        Submit
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        style={style}
                        onClick={() => this.props.history.push("/")}
                    >
                        Cancel
                    </Button>
                </form>
            </React.Fragment>
        );
    }
}

const validate = (values) => {
    const errors = {};

    if (!values.title) errors.title = "Enter a title, Please.";
    if (!values.body) errors.body = "Enter a body, Please.";
    return errors;
};

const mapDispatchToProps = { postEvents };
export default connect(
    null,
    mapDispatchToProps
)(reduxForm({ validate, form: "eventNewForm" })(withRouter(EventsNew)));
