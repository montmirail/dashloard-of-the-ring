import { SESSION_LOAD, SESSION_LOGIN, SESSION_LOGOUT } from '../actions';

export default (state = {}, action = {}) => {
    switch (action.type) {
        case SESSION_LOAD:
            return action.payload;
        case SESSION_LOGIN:
            if (!action.error) {
                return action.payload
            } else {
                console.log(action.payload);
                return { error: action.payload.message }
            }
        default:
            return state;
    }
}