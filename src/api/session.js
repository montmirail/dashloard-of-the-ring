import axios from  'axios';
import { headers } from './utils';

export const postSession = (email, password) => {
    const options = {
        headers: headers(),
        method: 'post',
        data: {
            email,
            password
        }
    };

    return axios('/signin', options)
        .then(res => res.data);
};