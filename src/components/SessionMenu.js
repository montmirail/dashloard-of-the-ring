import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import UserIcon from 'grommet/components/icons/base/User';

import { logout } from '../actions/session';

class SessionMenu extends Component {

    constructor() {
        super();
        this._onLogout = this._onLogout.bind(this);
    }

    _onLogout(e) {
        e.preventDefault();
        const { session, logout } = this.props;
        logout(session);
    }

    render() {
        const { _onLogout, props : {dropAlign, colorIndex, session: { name: userName }} } = this;

        return(
            <Menu icon={<UserIcon />} dropAlign={dropAlign} colorIndex={colorIndex} a11yTitle="Session">
                <Box pad="medium">
                    <Heading tag="h3" margin="none">Paul-Emile</Heading>
                </Box>
                <Anchor href="#" onClick={_onLogout} label="Logout"/>
            </Menu>
        )
    }
}

const mapStateToProps = (state) => ({
    session: state.session
});

export default connect(mapStateToProps, { logout })(SessionMenu);