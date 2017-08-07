import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import { getCurrentLocale, getLocaleData, setLocale } from 'grommet/utils/Locale';
import { Provider } from 'react-redux';
import store from './store';
import Router from './router';
import setDefaultUrl from './utils/setDefaultUrl';
import config from './config';
import {initialize} from "./actions/session";

const locale = getCurrentLocale();
addLocaleData(en);

let messages;
try {
    messages = require(`./messages/${locale}`);
} catch(e) {
    messages = require('./messages/en-US');
}

const localeData = getLocaleData(messages, locale);

store.dispatch(initialize(window.location.pathname));

setDefaultUrl(config.apiUrl);

export default () => (
    <Provider store={store}>
        <IntlProvider locale={localeData.locale} messages={localeData.messages}>
            <Router />
        </IntlProvider>
    </Provider>
);