import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import MyRoomComponent from "./MyRoomComponent";
import TodayScheduleComponent from "./TodayScheduleComponent";
import {withRouter} from "react-router-dom";
import MyRoomTopComponent from "./MyRoomTopComponent";
import Footer from "../footer/Footer";

const styles = theme => ({
    root:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    },
});

class Rooms extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <MyRoomTopComponent/>
                <MyRoomComponent/>
                <TodayScheduleComponent/>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(Rooms));