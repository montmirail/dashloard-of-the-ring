import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

import SessionMenu from './SessionMenu';
import { sidebarActivate } from '../actions/sidebar';

class NavSidebar extends Component {

    constructor() {
        super();
        this._onClose = this._onClose.bind(this);
    }

    _onClose() {
        this.props.sidebarActivate(false);
    }

    render() {
        const { _onClose, props: { sidebar: { items } } } = this;

        return (
            <Sidebar colorIndex="neutral-4-t" fixed={true}>
                <Header size="large" justify="between" pad={{ horizontal: 'medium' }}>
                    <Title>
                        <span>Dashloard</span>
                    </Title>
                </Header>
                <Menu fill={true} primary={true}>
                    {items.map(page => (
                        <Anchor key={page.label} path={page.path} label={page.label} />
                    ))}
                </Menu>
                <Footer pad={{ horizontal: 'medium', vertical: 'small' }}>
                    <SessionMenu dropAlign={{ bottom: 'bottom' }}/>
                </Footer>
            </Sidebar>
        )
    }

}

const mapStateToProps = (state) => ({
    sidebar: state.sidebar
});

export default connect(mapStateToProps, { sidebarActivate })(NavSidebar);

