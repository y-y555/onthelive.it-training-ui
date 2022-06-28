import {makeAutoObservable} from "mobx";

const EmptyLogin = {
    email: '',
    password: '',
}

const EmptyUser = {
    id: '',
    email: '',
    name: '',
    type: '',
    enabled: true,
    shouldChangePassword: false,
    createdDatetime: '',
    updatedDatetime: '',
};

export const LoginState = {
    None: 'None',
    Authenticating: 'Authenticating',
    Authenticated: 'Authenticated',
    NotAuthenticated: 'NotAuthenticated',
};

export const UserType = {
    Admin : 'Admin',
    User : 'User',
    Guest : 'Guest',
}

export default class AuthStore {
    constructor(props) {
        this.authRepository = props.authRepository;

        this.login = {...EmptyLogin};
        this.loginUser = {...EmptyUser};
        this.loginState = LoginState.None;

        makeAutoObservable(this);
    }

    changeLoginEmail = (value) => {
        this.login.email = value;
    }

    changeLoginPassword = (value) => {
        this.login.password = value;
    }

    get isGuestUser() {
        if(this.loginState === LoginState.Authenticated && this.loginUser.id !== '') {
            return this.loginUser.type === UserType.Guest;
        }

        return false;
    }

    *doLogin(callbacks) {
        this.loginState = LoginState.Authenticating;

        try {
            const param = {...this.login};
            const data = yield this.authRepository.signIn(param);

            this.loginState = LoginState.Authenticated;
            this.loginUser = data.user;

            this.login = {...EmptyLogin};

            callbacks && callbacks.successAction()
        } catch (e) {
            this.loginState = LoginState.NotAuthenticated;
            this.loginUser = {...EmptyUser};
        }
    }

    *checkLogin() {
        console.log('checkLogin')
        try {
            const user = yield this.authRepository.signCheck();

            if(user) {
                this.loginState = LoginState.Authenticated;
                this.loginUser = user;
            } else {
                this.loginState = LoginState.NotAuthenticated;
                this.loginUser = {...EmptyUser};
            }
        } catch (e) {
            this.loginState = LoginState.NotAuthenticated;
            this.loginUser = {...EmptyUser};
        }
    }

    *doLogout() {
        try {
            yield this.authRepository.signOut();

            this.login = {...EmptyLogin};
            this.loginState = LoginState.Authenticated;
            this.loginUser = {...EmptyUser};
        } catch(error) {
            this.login = Object.assign({}, EmptyLogin);
            this.loginState = LoginState.NotAuthenticated;
            this.loginUser = {...EmptyUser};
        }
    }

}