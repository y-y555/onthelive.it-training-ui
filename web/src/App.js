import React from "react";
import HomeTopBar from "./views/top/HomeTopBar";
import TopBar from "./views/top/TopBar";
import Home from "./views/Home/Home";
import Rooms from "./views/myRoom/Rooms";
import {withStyles} from "@material-ui/core/styles";
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from "react-router-dom";
import Login from "./views/Home/Login";
import SignUp from "./views/Home/singup/SignUp";
import SocialAgreeComponent from "./views/Home/singup/SocialAgreeComponent";
import SignUpDialogComponent from "./views/Home/singup/SignUpDialogComponent";
import PasswordFindComponent from "./views/Home/password/PasswordFindComponent";
import PasswordResetComponent from "./views/Home/password/PasswordResetComponent";
import PasswordResetCompleteComponent from "./views/Home/password/PasswordResetCompleteComponent";
import ServiceCenter from "./views/serviceCenter/ServiceCenter";
import ClassMainComponent from "./views/Class/ClassMainComponent";
import ProfileSettingsComponent from "./views/ProfileSettings/ProfileSettingsComponent";
import ProfileViewComponent from "./views/ProfileSettings/ProfileViewComponent";
import RoomTypeComponent from "./views/myRoom/RoomTypeComponent";
import RoomCreateComponent from "./views/myRoom/RoomCreateComponent";
import RoomModifyComponent from "./views/setting/RoomModifyComponent";
import SearchComponent from "./views/search/SearchComponent";
import ClassScheduleDetailContentComponent from "./views/Class/ClassScheduleDetailContentComponent";
import InvitationComponent from "./views/invitation/InvitationComponent";
import ContentLectureComponent from "./views/contentLecture/ContentLectureComponent";
import RoomsSearchComponent from "./views/myRoom/RoomsSearchComponent";
import ClassWindowComponent from "./views/classWindow/ClassWindowComponent";
import {inject, observer} from "mobx-react";
import {LoginState} from "./stores/AuthStore";

const styles = _theme => ({
    root:{
        "& *": {
            fontFamily: 'NanumSquareRoundOTF' ,
        }
    },

});

const ROUTES = {
    private : [
        {path : "/", component : <Rooms/>},
        {path : "/rooms", component : <Rooms/>},
        {path : "/serviceCenter", component : <ServiceCenter/>},
        {path : "/search", component : <SearchComponent/>},
        {path : "/contentLecture", component : <ContentLectureComponent/>},
        {path : "/classWindow", component : <ClassWindowComponent/>},
        {path : "/scheduleDetail", component : <ClassScheduleDetailContentComponent/>},
        {path : "/serviceCenter", component : <ServiceCenter/>},
        {path : "/profileSettings", component : <ProfileSettingsComponent/>},
        {path : "/profileView", component : <ProfileViewComponent/>},
        {path : "/roomType", component : <RoomTypeComponent/>},
        {path : "/roomCreate", component : <RoomCreateComponent/>},
        {path : "/roomModify", component : <RoomModifyComponent/>},
        {path : "/invitation", component : <InvitationComponent/>},
        {path : "/class", component : <ClassMainComponent/>},
    ],
    public : [
        {path : "/", component : <Home/>},
        {path : "/serviceCenter", component : <ServiceCenter/>},
        {path : "/roomSearch", component : <RoomsSearchComponent/>},
        {path : "/login", component : <Login/>},
        {path : "/signup", component : <SignUp/>},
        {path : "/signupDialog", component : <SignUpDialogComponent/>},
        {path : "/socialAgree", component : <SocialAgreeComponent/>},
        {path : "/passwordFind", component : <PasswordFindComponent/>},
        {path : "/passwordReset", component : <PasswordResetComponent/>},
        {path : "/passwordComplete", component : <PasswordResetCompleteComponent/>},
        {path : "/classWindow", component : <ClassWindowComponent/>},
    ]
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.props.authStore.checkLogin();
    }

    getRoutes = () => {
        const { authStore } = this.props;
        const routes = authStore.loginState === LoginState.Authenticated ? ROUTES.private : ROUTES.public;
        if(routes.length) {
            return routes.map((route, index) => {
                return <Route key={`${route.path}_${index}`} exact path={route.path} render={() => route.component} />;
            });
        }

        return [];

    }

    render() {
        const {classes, authStore } = this.props;
        const renderRoutes = this.getRoutes();

        return (
            <div className={classes.root}>

                <Router>
                    {
                        authStore.loginState === LoginState.Authenticated
                            ? <TopBar/>
                            : <HomeTopBar/>
                    }
                    <Switch>
                        {renderRoutes}
                        <Redirect path={"/*"} to="/" />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(inject('authStore')(observer(App))));
