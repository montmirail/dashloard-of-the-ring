import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Heading from 'grommet/components/Heading';

import { getMessage } from 'grommet/utils/Intl';

class Main extends Component {
    render() {
        const { intl } = this.context;
        console.log(intl);

        return (
            <App inline={true}>
                <Heading>
                    {getMessage(intl, 'Welcome')} from Montmirail
                </Heading>
            </App>
        )
    }
}

Main.contextTypes = {
    intl: PropTypes.object
};

export default connect(null, { })(Main);