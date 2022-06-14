import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import ClassNoticeComponent from "./ClassNoticeComponent";
import ClassScheduleListComponent from "./ClassScheduleListComponent";
import ClassHomeTypeTabComponent from "./ClassHomeTypeTabComponent";
import ClassNumericalComponent from "./ClassNumericalComponent";
import {ReactComponent as CaretRightIcon} from "../../common/images/CaretRightIcon.svg";
import {Typography} from "@material-ui/core";

const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width:620,
        paddingBottom:70,
        '& h5':{
            fontSize:'1.5rem',
            fontWeight:600,
            marginBottom:30,
            marginTop:60,
        }
    },
});


class TodayScheduleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progressValue:'37.5',
            progress2Value:'50.0',
            totalLearningTime:'100시간 10분',
            learningTime:'1시간 20분',
            toolTipOpen: true,
            infoTooltip: true,
        };
    }

    handleCloseInfoTooltip = () => {
        this.setState({ infoTooltip: false });
    };

    handleClickInfoTooltip = () => {
        this.setState({ infoTooltip: !this.state.infoTooltip });
    };

    handleCloseTooltip = () => {
        this.setState({ toolTipOpen: !this.state.toolTipOpen  });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <ClassNoticeComponent/>
                <ClassHomeTypeTabComponent/>
                <Typography variant={"h5"}>학습현황 <CaretRightIcon/></Typography>
                <ClassNumericalComponent
                    handleClickInfoTooltip={this.handleClickInfoTooltip}
                    handleCloseTooltip={this.handleCloseTooltip}
                    handleCloseInfoTooltip={this.handleCloseInfoTooltip}
                    progressValue={this.state.progressValue}
                    progress2Value={this.state.progress2Value}
                    totalLearningTime={this.state.totalLearningTime}
                    learningTime={this.state.learningTime}
                    toolTipOpen={this.state.toolTipOpen}
                    infoTooltip={this.state.infoTooltip}
                />
                <Typography variant={"h5"}>강의 <CaretRightIcon/></Typography>
                <ClassScheduleListComponent/>
            </div>
        );
    }
}

export default withStyles(styles)(TodayScheduleComponent);