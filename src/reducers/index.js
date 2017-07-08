import { combineReducers } from 'redux';

import session from './session';
import navbar from './navbar';

export default combineReducers({
    session,
    navbar
})