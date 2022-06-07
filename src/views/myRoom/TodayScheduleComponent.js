import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {Box, Typography, Button} from "@material-ui/core";
import {ReactComponent as UsersThreeIcon} from "../../common/images/UsersThreeIcon.svg";
import {ReactComponent as AlarmIcon} from "../../common/images/AlarmIcon.svg";

const styles = theme => ({
    root:{
    },
    titleText:{
        '@media all and (min-width: 1500px)': {
            fontSize:'1.875rem',
        },
        fontSize:'1.563rem',
        color:'#000'
    },
    scheduleBox:{
        '@media all and (min-width: 1500px)': {
            width:1440,
            padding:'48px 30px 0',
        },
        width:1200,
        background:'#fff',
        padding:'27px 30px 0',
        margin:'0 auto',
        boxSizing:'border-box'
    },
    titleBox:{
        marginBottom:25
    },
    dateText:{
        fontSize:'0.875rem',
        color:'#656565',
        fontWeight:600,
        marginLeft:25
    },
    textStyle:{
        fontSize:'1.25rem',
        color:'#656565'
    },
    noScheduleBox:{
        paddingBottom:150
    },
    scheduleBoxIn:{
        paddingBottom:54
    },
    scheduleBoxStyle:{
        '@media all and (min-width: 1500px)': {
            width:320,
            height:280,
            marginRight:30,
            marginBottom:30,
        },
        width:268,
        height:250,
        boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.25)',
        borderRadius:10,
        marginRight:20,
        marginBottom:20,
        borderTop:'7px solid #a3a8af',
        border:'1px solid rgba(163, 168, 175, 0.5)',
        boxSizing:'border-box',
        backgroundColor:'#fff',
        "&:nth-child(4n+0)":{
            marginRight:0
        },
    },
    liveScheduleBox:{
        borderTop:'7px solid #00c880',
        border:'1px solid rgba(0, 200, 128, 0.5)'
    },
    roomNameBox:{
        padding:'7px 15px',
        borderBottom:'1px solid #d3d7db',
        "& svg":{
            marginRight:8
        }
    },
    roomNameText:{
        '@media all and (min-width: 1500px)': {
            fontSize:'1.063rem',
        },
        width:250,
        fontSize:'0.875rem',
        color:'#000'
    },
    contentsBox:{
        padding:'10px 35px 0px',
        boxSizing:'border-box',
        "& svg":{
            width:22,
            height:22,
            "& .st0":{
                fill:'#00c880'
            }
        }
    },
    box:{
        width:40,
        height:16,
        background:'#a3a8af',
        display:'inline-flex',
        alignItems:'center',
        justifyContent:'center'
    },
    liveBox:{
        background:'#fb4a59'
    },
    boxText:{
        fontFamily:'Montserrat',
        fontSize:'0.625rem',
        color:'#fff',
        fontWeight:600
    },
    circle:{
        width:4,
        height:4,
        borderRadius:'50%',
        background:'#fff',
        marginRight:4
    },
    scheduleTitleText:{
        '@media all and (min-width: 1500px)': {
            fontSize:'1.563rem',
        },
        fontSize:'1.313rem',
        color:'#000',
        fontWeight:600,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp:2,
        WebkitBoxOrient:'vertical',
        margin:'7px 0 13px'
    },
    timeText:{
        '@media all and (min-width: 1500px)': {
            fontSize:'1.063rem',
        },
        fontSize:'0.875rem',
        color:'#656565',
        marginLeft:7
    },
    buttonStyle:{
        '@media all and (min-width: 1500px)': {
            fontSize:'1rem',
            height:40,
        },
        width:200,
        height:34,
        border:'1px solid #656565',
        color:'#656565',
        borderRadius:7,
        fontWeight:600,
        fontSize:'0.813rem',
        "&:hover":{
            background:'transparent'
        }
    },
    liveButtonStyle:{
        border:'1px solid #0097ff',
        color:'#0097ff',
    },
});

class TodayScheduleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: true,
            scheduleData: [
                {roomName:"기초수학특강", title:"오늘의 생활영어 한마디를 배워보자", live: true, time:"오전 11:00 ~  오전 12:00", buttonText: "참석하기"},
                {roomName:"하루영어클럽", title:"오늘의 생활영어 한마디를 배워보자", live: false, time:"오전 11:00 ~  오전 12:00", buttonText: "미리 살펴보기"},
            ],
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.scheduleBox}>
                    <Box display='flex' alignItems='center' className={classes.titleBox}>
                        <Typography className={classes.titleText}>오늘 강의 일정</Typography>
                        <Typography className={classes.dateText}>2021년 12월 06일 (월)</Typography>
                    </Box>

                    <Box>
                        {this.state.schedule === false ?
                            <Box className={classes.noScheduleBox}>
                                <Typography className={classes.textStyle}>오늘 강의가 없습니다.</Typography>
                            </Box>
                            :
                            <Box display='flex' alignItems='center' flexWrap='wrap' className={classes.scheduleBoxIn}>
                                {this.state.scheduleData.map((schedule, i) => (
                                    <Box key={i} className={schedule.live === true ? clsx(classes.scheduleBoxStyle, classes.liveScheduleBox) : classes.scheduleBoxStyle}>
                                        <Box display='flex' alignItems='center' className={classes.roomNameBox}>
                                            <UsersThreeIcon/>
                                            <Typography className={classes.roomNameText} noWrap>{schedule.roomName}</Typography>
                                        </Box>
                                        <Box className={classes.contentsBox}>
                                            <Box className={schedule.live === true ? clsx(classes.box, classes.liveBox) : classes.box}>
                                                <Box className={classes.circle} />
                                                <Typography className={classes.boxText}>{schedule.live === true ? "LIVE" : "예정"} </Typography>
                                            </Box>
                                            <Typography className={classes.scheduleTitleText}>{schedule.title}</Typography>
                                            <Box display='flex' alignItems='center'>
                                                <AlarmIcon/>
                                                <Typography className={classes.timeText}>{schedule.time}</Typography>
                                            </Box>
                                            <Box display='flex' justifyContent='center' style={{marginTop:20}}>
                                                {schedule.live === true ?
                                                    <Button className={clsx(classes.buttonStyle, classes.liveButtonStyle)} disableRipple>{schedule.buttonText}</Button>
                                                    :
                                                    <Button className={classes.buttonStyle} disableRipple>{schedule.buttonText}</Button>
                                                }
                                            </Box>

                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        }
                    </Box>

                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(TodayScheduleComponent);