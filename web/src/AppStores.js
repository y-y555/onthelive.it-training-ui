import {serverContextPath} from "./AppConstants";
import AuthRepository from "./repositories/AuthRepository";
import AuthStore from "./stores/AuthStore";
import UserRepository from "./repositories/UserRepository";
import UserStore from "./stores/UserStore";

const repositoryProps = {
    serverContextPath: serverContextPath,
}

const authRepository = new AuthRepository(repositoryProps);
const userRepository = new UserRepository(repositoryProps);

export const stores = {
    authStore : new AuthStore({authRepository}),
    userStore : new UserStore({userRepository}),
}