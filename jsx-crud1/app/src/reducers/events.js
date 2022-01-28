import _ from "lodash";
import {
    CREATE_EVENT,
    READ_EVENTS,
    DELETE_EVENT,
    READ_EVENT,
    UPDATE_EVENT,
} from "../actions";

export const events = (events = {}, action) => {
    switch (action.type) {
        case CREATE_EVENT:
        case READ_EVENT:
        case UPDATE_EVENT:
            const data = action.response.data;
            console.log(action.response.data);
            return { ...events, [data.id]: data };
        case READ_EVENTS:
            console.log(action.response.data);
            console.log(_.mapKeys(action.response.data, "id"));
            return _.mapKeys(action.response.data, "id");
        case DELETE_EVENT:
            console.log(action.id);
            delete events[action.id];
            return { ...events };
        default:
            return events;
    }
};
