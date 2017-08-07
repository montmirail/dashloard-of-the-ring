import { combineReducers } from 'redux';

import session from './session';
import navbar from './navbar';
import sidebar from './sidebar';

export default combineReducers({
    session,
    navbar,
    sidebar
})