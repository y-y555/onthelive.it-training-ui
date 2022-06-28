import axios from "axios";

export const SessionStorageTokenKey = '_BASKITOP_AUTHENTICATION_TOKEN_';


export class Repository {
    getRequestPromise = (method, url, data) => {
        const token = sessionStorage.getItem(SessionStorageTokenKey);
        const headers = Boolean(token) ? {'X-Auth-Token' : token} : {};

        return new Promise((resolve, reject) => {
            const config = {
                method : method,
                url : url,
                headers: headers,
                data: data,
            };

            axios.request(config)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                })
        })
    }

    setAuthTokenToStorage = (token) => {
        sessionStorage.setItem(SessionStorageTokenKey, token);
    }

    removeAuthTokenFromStorage = () => {
        sessionStorage.removeItem(SessionStorageTokenKey);
    }
}