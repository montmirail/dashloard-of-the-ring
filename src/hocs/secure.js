import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Secure = Page => class SecurePage extends Component {

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    componentWillMount() {
        if(!this.props.token) {
            console.log(this.context);
            this.context.router.history.push('/login');
        }
    }

    render() {
        return <Page {...this.props}/>
    }
};

const mapStateToProps = (state) => ({
    token: state.session.token
});

export default Page => connect(mapStateToProps)(Secure(Page));