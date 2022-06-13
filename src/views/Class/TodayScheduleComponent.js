import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import ClassNoticeComponent from "./ClassNoticeComponent";
import ClassScheduleListComponent from "./ClassScheduleListComponent";
import ClassHomeTypeTabComponent from "./ClassHomeTypeTabComponent";
import ClassLearningStatusComponent from "./ClassLearningStatusComponent";

const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width:620,
        paddingBottom:70
    },
});


class TodayScheduleComponent extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <ClassNoticeComponent/>
                <ClassHomeTypeTabComponent/>
                <ClassLearningStatusComponent/>
                <ClassScheduleListComponent/>
            </div>
        );
    }
}

export default withStyles(styles)(TodayScheduleComponent);