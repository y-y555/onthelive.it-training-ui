import {makeAutoObservable} from "mobx";
import {LOADING_STATE} from "../common/States";

const UserConfigKey = {
    Language : 'Language',
    Zone : 'Zone',
    PenMacAddress : 'PenMacAddress',
    TestVideoSrc :'TestVideoSrc',
    VMAccessUrl : 'VMAccessUrl',
    RoomEntranceUrl : 'RoomEntranceUrl',
}

export default class UserStore {
    constructor(props) {
        this.userRepository = props.userRepository;

        this.userConfigs = [];
        this.loadingState = LOADING_STATE.READY;

        makeAutoObservable(this);
    };

    get videoSrc() {
        if(!this.userConfigs.length) {
            return '';
        }

        return this.findConfig(UserConfigKey.TestVideoSrc);
    };

    get vmAccessUrl() {
        if(!this.userConfigs.length) {
            return '';
        }

        return this.findConfig(UserConfigKey.VMAccessUrl);

    };

    get roomEntranceUrl() {
        if(!this.userConfigs.length) {
            return '';
        }

        return this.findConfig(UserConfigKey.RoomEntranceUrl);

    };

    findConfig = (key) => {
        console.log('Start find config key = ', key);
        console.log('Start find config userConfigs = ', this.userConfigs);

        const findConfig = this.userConfigs.find(userConfig => userConfig.configKey === key);
        console.log('finding config = ', findConfig)
        if(findConfig) {
            return findConfig.value;
        }

        return '';
    };


    *getUserConfigs(userId) {
        console.log(`Start getUserConfigs userId = ${userId}`);
        this.loadingState = LOADING_STATE.PENDING;

        try {
            const data = yield this.userRepository.getUserConfigs(userId);

            this.userConfigs = data;
            this.loadingState = LOADING_STATE.SUCCESS;

            console.log('Success getUserConfigs')
            console.log('Result = ', this.userConfigs);
        } catch (e) {
            this.loadingState = LOADING_STATE.FAILED;
            this.userConfigs = [];
        } finally {
            this.loadingState = LOADING_STATE.READY;
        }
    };

}