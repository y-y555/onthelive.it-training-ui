import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Box, Button, ClickAwayListener, Paper, Popper, Typography} from "@material-ui/core";
import {ReactComponent as CalendarBlank} from "../../../common/images/CalendarBlank.svg";
import {ReactComponent as AlarmIcon} from "../../../common/images/AlarmIcon.svg";
import {ReactComponent as ArrowBottomIcon} from "../../../common/images/ArrowBottomIcon.svg";
import CalendarBox from "./CalendarBox";

const style = theme => ({
    root: {},
    calendarBox: {
        width: '100%',
    },
    calendarBoxIn: {
        width:'30%',
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid #d3d7db',
        paddingBottom: 5,
    },
    calendarBtn: {
        width:'100%',
        padding:0,
        "&:hover": {
            background: 'transparent'
        },
        "& span":{
            display:'flex',
            justifyContent:'space-between'
        }
    },
    calenderText1: {
        fontSize: '0.750rem',
        color: '#333',
        marginBottom: 0,
        textAlign: 'left',
        fontWeight:400
    },
    calenderText2: {
        fontSize: '1rem',
        color: '#a3a8af',
        marginLeft: 5,
        fontWeight:300
    },
    popper:{
        zIndex: 1400,
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            left: 0,
            marginTop: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '0 1em 1em 1em',
                borderColor: `transparent transparent ${theme.palette.common.white} transparent`,
            },
        },
        '&[x-placement*="top"] $arrow': {
            bottom: 0,
            left: 0,
            marginBottom: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '1em 1em 0 1em',
                borderColor: `${theme.palette.common.white} transparent transparent transparent`,
            },
        },
        '&[x-placement*="right"] $arrow': {
            left: 0,
            marginLeft: '-0.9em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 1em 1em 0',
                borderColor: `transparent ${theme.palette.common.white} transparent transparent`,
            },
        },
        '&[x-placement*="left"] $arrow': {
            right: 0,
            marginRight: '-0.9em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 0 1em 1em',
                borderColor: `transparent transparent transparent ${theme.palette.common.white}`,
            },
        },
    },
    arrow: {
        position: 'absolute',
        fontSize: 7,
        width: '3em',
        height: '3em',
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        },
    },
    paper: {
        padding:0,
        maxWidth: 500,
        overflow: 'auto',
        boxShadow:'0 4px 15px rgba(0, 0, 0, 0.25)',
        borderRadius:10,
    },
});

class SelectSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate:'2021년 2월 25일',
            StartTime:'10:15 AM',
            MeetingTime:'1시간 10분',
            arrow: true,
            arrowRef: null,
            open: false,
        }
    }

    handleClickButton = () => {
        this.setState(state => ({
            open: !state.open,
        }));
    };

    handleArrowRef = node => {
        this.setState({
            arrowRef: node,
        });
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        const { classes } = this.props;
        const { open, arrow, arrowRef } = this.state;

        return (
            <div>
                <Box display='flex' className={classes.calendarBox}>
                    <Button buttonRef={node => {this.anchorEl = node;}} onClick={this.handleClickButton} className={classes.calendarBtn} disableRipple>
                         <Box className={classes.calendarBoxIn}>
                             <Typography className={classes.calenderText1}>날짜 설정</Typography>
                             <Box display='flex' alignItems='center'>
                                 <CalendarBlank/>
                                 <Typography className={classes.calenderText2}>날짜 설정</Typography>
                             </Box>
                         </Box>
                         <Box className={classes.calendarBoxIn}>
                             <Typography className={classes.calenderText1}>시작 시각</Typography>
                             <Box display='flex' alignItems='center'>
                                 <AlarmIcon style={{width:20,height:20}}/>

                                 <Typography className={classes.calenderText2}>시간 설정</Typography>
                             </Box>
                         </Box>
                         <Box className={classes.calendarBoxIn}>
                             <Typography className={classes.calenderText1}>소요 시간</Typography>
                             <Box display='flex' alignItems='center'>

                                 <Typography className={classes.calenderText2} style={{marginRight: 10, marginLeft: 0}}>소요 시간 설정</Typography>

                                 <ArrowBottomIcon/>
                             </Box>
                         </Box>
                    </Button>
                    <Popper
                        open={open}
                        anchorEl={this.anchorEl}
                        placement="bottom"
                        disablePortal={false}
                        className={classes.popper}
                        modifiers={{
                            preventOverflow: {
                                enabled: true,
                                boundariesElement: 'scrollParent',
                            },
                            arrow: {
                                enabled: true,
                                element: arrowRef,
                            },
                        }}
                    >
                        {arrow ? <span className={classes.arrow} ref={this.handleArrowRef} /> : null}
                        <Paper className={classes.paper}>
                            <ClickAwayListener onClickAway={this.handleClose}>
                                {open &&
                                    <CalendarBox/>
                                }
                            </ClickAwayListener>
                        </Paper>
                    </Popper>
                </Box>
            </div>
        );
    }
}

export default withStyles(style)(SelectSchedule);
