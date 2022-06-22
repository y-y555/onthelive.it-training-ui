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
            classTab: 0
        };
    }

    handleChangeTabs = (event, classTab) => {
        this.setState({ classTab });
    };

    render() {
        const { classes } = this.props;
        const { classTab } = this.state;

        return (
            <div className={classes.root}>
                <MyRoomTopComponent handleChangeTabs={this.handleChangeTabs} classTab={classTab}/>
                {classTab === 0 &&
                    <>
                        <MyRoomComponent/>
                        <TodayScheduleComponent/>
                    </>
                }
                <Footer/>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(Rooms));