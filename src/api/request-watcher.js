import { headers, parseJSON } from './utils';

function _getRequest(request) {
    if (!request.pollBusy) {
        request.pollBusy = true;
    }

    const options = { method: 'GET', headers: headers() };

}