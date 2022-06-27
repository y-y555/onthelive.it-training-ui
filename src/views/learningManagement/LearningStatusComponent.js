import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, IconButton, Typography} from "@material-ui/core";
import {ReactComponent as Info} from "../../common/images/Info.svg";
import clsx from "clsx";
import {ReactComponent as X} from "../../common/images/X.svg";
import ProgressRate from "../Class/ProgressRate";
import StudyTime from "../Class/StudyTime";
import StatisticGraph from "./StatisticGraph";

const styles = theme => ({
    root:{
        width: '100%',
        display:'flex',
        justifyContent:'space-between'

    },
    contents: {
        '& > div': {
            width: 350,
            '&:first-child':{
                marginBottom: 40,
            },
        },
    },

});

class LearningStatusComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progressValue:'37.5',
            progress2Value:'50.0',
            totalLearningTime:'100시간 10분',
            learningTime:'1시간 20분',
            toolTipOpen: false,
            infoTooltip: false,
            averageTooltip: false,
        };
    }

    handleCloseInfoTooltip = () => {
        this.setState({
            infoTooltip: false,
            toolTipOpen: false,
            averageTooltip: false,
        });
    };

    handleClickInfoTooltip = () => {
        this.setState({ infoTooltip: !this.state.infoTooltip });
    };

    handleCloseTooltip = () => {
        this.setState({ toolTipOpen: !this.state.toolTipOpen  });
    };

    handleClickAverageTooltip = () => {
        this.setState({ averageTooltip: !this.state.averageTooltip });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.contents}>
                    <ProgressRate
                        handleClickInfoTooltip={this.handleClickInfoTooltip}
                        handleCloseInfoTooltip={this.handleCloseInfoTooltip}
                        infoTooltip={this.state.infoTooltip}
                        progressValue={this.state.progressValue}
                        progress2Value={this.state.progress2Value}
                    />
                    <StudyTime
                        handleCloseTooltip={this.handleCloseTooltip}
                        handleCloseInfoTooltip={this.handleCloseInfoTooltip}
                        toolTipOpen={this.state.toolTipOpen}
                        totalLearningTime={this.state.totalLearningTime}
                        learningTime={this.state.learningTime}
                    />
                </Box>
                <StatisticGraph
                    handleClickAverageTooltip={this.handleClickAverageTooltip}
                    handleCloseInfoTooltip={this.handleCloseInfoTooltip}
                    averageTooltip={this.state.averageTooltip}
                />

            </div>
        );
    }
}

export default withStyles(styles)(LearningStatusComponent);