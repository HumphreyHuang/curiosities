import fetch from 'isomorphic-unfetch';
import { host } from '../services/host';

export default async data => {
    await fetch(`${host}/api/events/save-like`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};
