import React, {Component} from 'react';
import {
    Box,
    Button
} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import CalendarShape from "../dialog/calendar/CalendarShape";
import Deadline from "./Deadline";
// import MeetingTime from "./MeetingTime";


const style = theme => ({
    root:{
        padding:15,
        borderRadius:10,
        "& .MuiButton-root":{
            minWidth:0
        }
    },
});

class CalendarComponent extends Component {
    render() {
        const { classes } = this.props;


        return (
            <div className={classes.root}>
                <CalendarShape/>
                <Box mt={2}>
                    <Deadline/>
                </Box>

            </div>
        );
    }
}

export default withStyles(style)( CalendarComponent);