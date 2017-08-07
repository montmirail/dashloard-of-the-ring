import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import LoginForm from 'grommet/components/LoginForm';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Footer from 'grommet/components/Footer';
import Logo from 'grommet/components/icons/Grommet';

import { login } from '../actions/session';
import pageLoaded from '../utils/pageLoaded';

class Login extends Component {

    constructor(props) {
        super(props);

        this._onSubmit = this._onSubmit.bind(this);
    }

    componentWillMount() {
        const { props: { session }, context: { router }} = this;
        if(session.token) {
            router.history.push('/');
        }
    }

    componentDidMount() {
        pageLoaded('Login');
    }

    _onSubmit(fields) {
        const { props: { login }, context: { router }} = this;
        login(fields, () => {
            router.history.push('/dashboard');
        });
    }

    render() {
        const {session : { error }} = this.props;

        return (
            <Split flex='left' separator={true}>

                <Article>
                    <Section full={true} colorIndex='brand' texture='url(img/splash.png)' pad='large' justify='center' align='center'>
                        <Heading tag='h1'><strong>Dashloard Of The Ring</strong></Heading>
                        <Paragraph align='center' size='large'>
                            Open-source dashboard based on React anf Grommet.
                        </Paragraph>
                    </Section>
                </Article>

                <Sidebar justify='between' align='center' pad='none' size='large'>
                    <span />
                    <LoginForm align='start'
                               logo={<Logo className='logo' colorIndex='brand' />}
                               title='Dashloard Of The Ring' errors={[error]}
                               onSubmit={this._onSubmit}  usernameType='text' />
                    <Footer direction='row' size='small'
                            pad={{ horizontal: 'medium', vertical: 'small' }}>
                        <span className='secondary'>&copy; 2017 Nucleos Labs</span>
                    </Footer>
                </Sidebar>

            </Split>
        )
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired
};

Login.contextTypes = {
    router: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    session: state.session
});

export default connect(mapStateToProps, { login })(Login);