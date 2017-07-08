import {createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

export default compose(applyMiddleware(thunk))(createStore)(reducers);