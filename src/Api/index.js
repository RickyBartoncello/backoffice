const ENDPOINT = 'http://localhost:5000/'

export default class Http {
    static async get(url) {
        const response = await fetch(`${ENDPOINT}${url}`, {
            credentials: 'same-origin',
            headers: {
                referrer: ENDPOINT,
                Authorization: `Bearer ${window.localStorage.getItem('id_token')}`,
            }
        });
        return response.json();
    }

    static async post(url, body) {
        const response = await fetch(`${ENDPOINT}${url}`, {
            method: 'post',
            credentials: 'same-origin',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json',
                referrer: ENDPOINT,
                Authorization: `Bearer ${window.localStorage.getItem('id_token')}`,
            }
        });
        return response.json();
    }

    static async put(url, body) {
        const response = await fetch(`${ENDPOINT}${url}`, {
            method: 'put',
            credentials: 'same-origin',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json',
                referrer: ENDPOINT,
                Authorization: `Bearer ${window.localStorage.getItem('id_token')}`,
            }
        });
        return response.json();
    }

    static async delete(url, body) {
        const response = await fetch(`${ENDPOINT}${url}`, {
            method: 'delete',
            credentials: 'same-origin',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json',
                referrer: ENDPOINT,
                Authorization: `Bearer ${window.localStorage.getItem('id_token')}`,
            }
        });
        return response.json();
    }

    static async postFile(url, file) {
        const data = new FormData();
        data.append('file', file);

        const response = await fetch(`${ENDPOINT}${url}`, {
            method: 'POST',
            credentials: 'same-origin',
            body: data,
            headers: {
                referrer: ENDPOINT,
                Authorization: `Bearer ${window.localStorage.getItem('id_token')}`,
            }
        });
        return response.json();
    }
}
