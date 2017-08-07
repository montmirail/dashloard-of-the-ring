import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import LinkNext from 'grommet/components/icons/base/LinkNext';
import { sidebarActivate } from "../actions/sidebar"

const NavControl = (props) => (
    <Button
        icon={props.sidebar.active ? <CloseIcon /> : <LinkNext/> }
        onClick={() => props.sidebarActivate(!props.sidebar.active)}
        plain={true}
        a11yTitle="Toggle Menu"
    />
);

const mapStateToProps = (state) => ({
    sidebar: state.sidebar
});

export default connect(mapStateToProps, { sidebarActivate })(NavControl);