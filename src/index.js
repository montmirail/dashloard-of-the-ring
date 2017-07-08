import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'grommet/scss/vanilla/index';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();

document.body.classList.remove('loading');
