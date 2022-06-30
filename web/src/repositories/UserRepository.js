import {Repository} from "./Repository";

export default class UserRepository extends Repository {
    constructor(props) {
        super();

        this.requestPrefix = props.serverContextPath + "/api/v1/users";
    }

    getUserConfigs = (userId) => {
        return new Promise((resolve, reject) => {
            this.getRequestPromise('get', this.requestPrefix + `/${userId}/configs`)
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                })
        })
    };
}