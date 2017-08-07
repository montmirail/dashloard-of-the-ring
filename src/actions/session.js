import { SESSION_LOAD, SESSION_LOGIN, SESSION_LOGOUT } from "./index"
import axios from 'axios';
import { updateHeaders } from '../api/utils';
import { postSession, deleteSession } from "../api/session";

const localStorage = window.localStorage;

export const initialize = () => {
    return dispatch => {
        const { token } = localStorage;
        if ( token ) {
            dispatch({
                type: SESSION_LOAD,
                payload: { token }
            });
        } else if ( window.location.pathname !== '/login' ) {
            window.location = '/login';
        }
    }
};

export function login({ username, password }, done) {
    return dispatch => {
        postSession(username, password)
            .then( payload => {
            // Update headers to send token at each request
            updateHeaders({ Auth: payload.token });
            // Dispatch the session login action
            dispatch({
                type: SESSION_LOGIN,
                payload
            });
            // Save token to localStorage
            try {
                localStorage.token = payload.token
            } catch (e) {
                alert (
                    'Unable to preserve session, probably due to being in private browsing mode.'
                );
            }
            done();
        }).catch( payload  => dispatch({
            type: SESSION_LOGIN,
            error: true,
            payload
        }));
    }
}

export function logout() {
    return dispatch => {
        // Dispatch the session logout action
        dispatch({
            type: SESSION_LOGOUT
        });
        updateHeaders({ Auth: undefined });
        // Delete token to localStorage
        try {
            localStorage.removeItem('token');
        } catch (e) {
            // Ignore
        }
        window.location.href = '/login';
    }
}