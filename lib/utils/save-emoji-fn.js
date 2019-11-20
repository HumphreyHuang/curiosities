import fetch from 'isomorphic-unfetch';

export default async data => {
    await fetch(`/api/events/save-emoji`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};
