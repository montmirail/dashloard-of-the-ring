import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Button from 'grommet/components/Button';
import LinkNext from 'grommet/components/icons/base/LinkNext';

import NavSidebar from './NavSidebar';
import { getMessage } from 'grommet/utils/Intl';
import { sidebarActivate } from "../actions/sidebar"
import Users from '../screen/Users';

class Main extends Component {

    constructor(props) {
        super(props);
        this._toggleMenu = this._toggleMenu.bind(this);
    }
    _toggleMenu() {
        const { sidebarActivate, sidebar } = this.props;
        sidebarActivate(!sidebar.active);
    }

    render() {
        const { intl } = this.context;

        // Sidebar
        const {
            sidebar: { active: sidebarActive, enabled: sidebarEnabled, responsive }
        } = this.props;
        let sidebar;
        if ( sidebarActive && sidebarEnabled ) {
            sidebar = <NavSidebar />;
        }

        return (
            <Split flex="right">
                { sidebar }



                <Switch>
                    <Route path="/" component={() => <div><Link to="/login">Login</Link></div>} exact/>
                    <Route path="/orders" component={() => <div></div>}/>
                    <Route path="/users" component={Users}/>
                </Switch>
            </Split>
        )
    }
}

Main.contextTypes = {
    intl: PropTypes.object
};

const mapStateToProps = (state) => ({
    sidebar: state.sidebar
});

export default connect(mapStateToProps, { sidebarActivate })(Main);