import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, IconButton, Typography} from "@material-ui/core";
import {ReactComponent as ArrowCounterClockwise} from "../../common/images/ArrowCounterClockwise.svg";
import {ReactComponent as Info} from "../../common/images/Info.svg";
import LectureStatusComponent from "./LectureStatusComponent";
import LearningStatusComponent from "./LearningStatusComponent";

const styles = theme => ({
    root:{

    },
    dateText:{
        fontSize: '0.875rem',
        marginRight: 7
    },
    iconButton:{
        padding:0,
        '&:hover':{
            background:'transparent'
        },
        '& .arrow-counter':{
            fill:'#000'
        }
    },
    paddingLeft:{
        width: '100%',
        boxSizing:'border-box',
        paddingLeft: 120
    },
    titleText:{
        fontSize: '1.5rem',
        fontWeight: 600,
        marginBottom: 20
    },
});

class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    
    render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.root}>
                <Box display='flex' justifyContent='flex-end' alignItems='center' mb={8}>
                    <Typography className={classes.dateText}>2022. 6. 21 (화) 오후 3:33</Typography>
                    <IconButton className={classes.iconButton} disableRipple><ArrowCounterClockwise style={{transform: 'scaleX(-1)'}}/></IconButton>
                </Box>
                <Box className={classes.paddingLeft}>
                    <LectureStatusComponent/>
                    <Typography className={classes.titleText}>학습 현황</Typography>
                    <LearningStatusComponent/>
                </Box>

            </div>
        );
    }
}

export default withStyles(styles)(DashboardComponent);