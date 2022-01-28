import React, { Component } from "react";

import { connect } from "react-redux";
import _ from "lodash";
import { Link, withRouter } from "react-router-dom";

// import {} from "@material-ui/core";
import { readEvents } from "./actions";

class EventsIndex extends Component {
    componentDidMount() {
        console.log("Hi");
        this.props.readEvents();
    }
    renderEvents() {
        return _.map(this.props.events, (event) => (
            <tr key={event.id}>
                <td>{event.id}</td>
                <td>
                    <Link to={`/events/${event.id}`}>{event.title}</Link>
                </td>
                <td>{event.body}</td>
            </tr>
        ));
    }
    render() {
        // const props = this.props;

        return (
            <React.Fragment>
                {/* <h1>{console.log(props.events)}</h1> */}
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderEvents()}</tbody>
                </table>
                <Link to="/events/new">New Event</Link>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({ events: state.events });
const mapDispatchToProps = { readEvents };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(EventsIndex));
