import RequestWatcher from './request-watcher';

let _headers = {
    Accept: 'application/json',
    'Content-type': 'application/json'
};

export const headers = () => {
    return _headers;
};

export function updateHeaders(newHeaders) {
    _headers = { ..._headers, newHeaders };
    Object.keys(_headers).forEach((key) => {
        if (undefined === _headers[key]) {
            delete _headers[key];
        }
    });
}