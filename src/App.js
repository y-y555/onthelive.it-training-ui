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
import RoomsSearchComponent from "./views/myRoom/RoomSearchAllClassComponent";

const styles = theme => ({
    root:{
        "& *": {
            fontFamily: 'NanumSquareRoundOTF' ,
        }
    },

});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>

                <Router>
                    {/*<HomeTopBar/>*/}
                    <TopBar/>
                    <Switch>
                        <Route exact path="/" render={() =><Home/>}/>
                        <Route exact path="/rooms" render={() =><Rooms/>}/>
                        <Route exact path="/roomSearch" render={() =><RoomsSearchComponent/>}/>
                        <Route exact path="/contentLecture" render={() =><ContentLectureComponent/>}/>
                        <Route exact path="/search" render={() =><SearchComponent/>}/>
                        <Route exact path="/scheduleDetail" render={() =><ClassScheduleDetailContentComponent/>}/>
                        <Route exact path="/serviceCenter" render={() =><ServiceCenter/>}/>
                        <Route exact path="/profileSettings" render={() =><ProfileSettingsComponent/>}/>
                        <Route exact path="/profileView" render={() =><ProfileViewComponent/>}/>
                        <Route exact path="/roomType" render={() =><RoomTypeComponent/>}/>
                        <Route exact path="/roomCreate" render={() =><RoomCreateComponent/>}/>
                        <Route exact path="/roomModify" render={() =><RoomModifyComponent/>}/>
                        <Route exact path="/login" render={() =><Login/>}/>
                        <Route exact path="/signup" render={() =><SignUp/>}/>
                        <Route exact path="/signupDialog" render={() =><SignUpDialogComponent/>}/>
                        <Route exact path="/socialAgree" render={() =><SocialAgreeComponent />}/>
                        <Route exact path="/passwordFind" render={() =><PasswordFindComponent/>}/>
                        <Route exact path="/passwordReset" render={() =><PasswordResetComponent/>}/>
                        <Route exact path="/passwordComplete" render={() =><PasswordResetCompleteComponent/>}/>
                        <Route exact path="/invitation" render={() =><InvitationComponent/>}/>

                        {/* Class */}
                        <Route exact path="/class" render={() =><ClassMainComponent/>}/>

                        <Redirect path={"/"} to="/" />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default withStyles(styles)(App);
