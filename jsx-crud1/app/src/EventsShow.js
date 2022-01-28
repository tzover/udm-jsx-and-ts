import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link, withRouter } from "react-router-dom";

import { getEvents, deleteEvents, putEvents } from "./actions";

class EventsShow extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        if (id) this.props.getEvents(id);
    }
    renderField(field) {
        const {
            input,
            label,
            type,
            meta: { touched, error },
        } = field;
        return (
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched && error && <span>{error}</span>}
            </div>
        );
    }

    async onSubmit(values) {
        await this.props.putEvents(values);
        this.props.history.push("/");
    }

    async onDeleteClick() {
        console.log(this.props.match);
        const { id } = this.props.match.params;
        console.log(id);
        await this.props.deleteEvents(id);
        this.props.history.push("/");
    }
    render() {
        const { handleSubmit, pristine, submitting, invalid } = this.props;
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
                    <div>
                        <input
                            type="submit"
                            value="Submit"
                            disabled={pristine || submitting || invalid}
                        />
                        <Link to="/">Cancel</Link>
                        <Link to="/" onClick={this.onDeleteClick}>
                            Delete
                        </Link>
                    </div>
                </form>
                <h1>aaaa</h1>
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

const mapStateToProps = (state, ownProps) => {
    const event = state.events[ownProps.match.params.id];
    return { initialValues: event, event };
};
const mapDispatchToProps = { deleteEvents, getEvents, putEvents };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    reduxForm({ validate, form: "eventShowForm", enableReinitialize: true })(
        withRouter(EventsShow)
    )
);
