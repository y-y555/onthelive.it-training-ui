import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {ReactComponent as CaretRightIcon} from "../../common/images/CaretRightIcon.svg";
import {ReactComponent as Info} from "../../common/images/Info.svg";
import {Typography, Box, Button, Tooltip, IconButton} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";
import clsx from 'clsx';
import {ReactComponent as X} from "../../common/images/X.svg";
import ProgressRate from "./ProgressRate";
import StudyTime from "./StudyTime";

const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width: 620,
        // padding: '10px 16px',
        boxSizing:'border-box',
        marginBottom:60,
    },
    contents: {
        display: 'flex',
        '& > div': {
            width: '50%',
            marginLeft:30,
            '&:first-child':{
                marginLeft: 0,
            },
        },
    },

});


class ClassNumericalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        const { classes } = this.props;
        // const { infoTooltip, toolTipOpen } = this.state;
        return (
            <div className={classes.root}>
                {/*<Typography variant={"h5"}>강의 <CaretRightIcon/></Typography>*/}
                <Box className={classes.contents}>
                    <ProgressRate
                        handleClickInfoTooltip={this.props.handleClickInfoTooltip}
                        handleCloseInfoTooltip={this.props.handleCloseInfoTooltip}
                        infoTooltip={this.props.infoTooltip}
                        progressValue={this.props.progressValue}
                        progress2Value={this.props.progress2Value}
                    />
                   <StudyTime
                       handleCloseTooltip={this.props.handleCloseTooltip}
                       handleCloseInfoTooltip={this.props.handleCloseInfoTooltip}
                       toolTipOpen={this.props.toolTipOpen}
                       totalLearningTime={this.props.totalLearningTime}
                       learningTime={this.props.learningTime}
                   />

                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(ClassNumericalComponent);