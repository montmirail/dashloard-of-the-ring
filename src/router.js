import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from 'grommet/components/App';
import Login from './screen/Login';
import Main from './components/Main';

import secure from "./hocs/secure";

export default () => (
    <App centered={false}>
        <Router>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/" component={secure(Main)}/>
            </Switch>
        </Router>
    </App>
)