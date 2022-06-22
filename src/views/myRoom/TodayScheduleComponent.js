import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {Box, Typography, Button} from "@material-ui/core";
import {ReactComponent as UsersThreeIcon} from "../../common/images/UsersThreeIcon.svg";
import {ReactComponent as AlarmIcon} from "../../common/images/AlarmIcon.svg";
import {ReactComponent as CheckCircleAgreeOffIcon} from "../../common/images/CheckCircleAgreeOffIcon.svg";
import {ReactComponent as CheckCircleAgreeOnIcon} from "../../common/images/CheckCircleAgreeOnIcon.svg";
import {ReactComponent as VodIcon} from "../../common/images/VodIcon.svg";
import {ReactComponent as DotIcon} from "../../common/images/DotIcon.svg";
import {ReactComponent as HandsClappingIcon} from "../../common/images/HandsClappingIcon.svg";
import {ReactComponent as BookmarksSimple} from "../../common/images/BookmarksSimple.svg";
import {ReactComponent as BedgeNewIcon} from "../../common/images/BedgeNewIcon.svg";
import {ReactComponent as LockKey} from "../../common/images/LockKey.svg";

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
        height: 'calc(100% - 40px)',
        padding:15,
        boxSizing:'border-box',
        display:'flex',
        flexDirection:'column',
        justifyContent: 'space-between',
        "& svg":{
            width:22,
            height:22,
            "& .st0":{
                fill:'#00c880'
            }
        }
    },
    caption:{
        width: 43,
        height: 20,
        borderRadius: 2,
        boxSizing: 'border-box',
        marginRight: 7,
        color:'#fff',
        '& svg':{
            marginRight:3,
        },
    },
    captionText:{
        fontSize:'0.75rem',
        fontWeight:600,
        paddingTop: 2,
    },
    captionLive:{
        backgroundColor:'#FB4A59',
        '& svg':{
            width: 5,
            height: 5
        }
    },
    captionVod:{
        backgroundColor:'#000',
        '& svg':{
            width: 9,
            height: 9
        }
    },
    captionGreen:{
        backgroundColor:'#00c880',
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
    checkBoxStyle:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        color: '#a9adb4',
        fontSize:'0.875rem',
        cursor:'pointer',
        marginRight: 43,
        '& svg':{
            width:20,
            height:20,
            marginRight:4,
        }
    },
    checkBoxStyleOn:{
        color:'#0097FF',
    },
    commentStyle:{
        display:'flex',
        listStyle:'none',
        paddingInlineStart:0,
        margin:0,
        '& li': {
            fontSize:'0.875rem',
            display:'flex',
            alignItems:'center',
            marginLeft:30,
            '&:first-child':{
                marginLeft: 0,
            },
            '& svg': {
                width: 20,
                height: 20,
                marginRight:8,
                '& .like-icon':{
                    fill:'#B6B6BF'
                }
            }
        }
    }
});

class TodayScheduleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: true,
            checkBox:true,
            scheduleData: [
                {
                    roomName:"모의 해킹 클럽",
                    title:"리눅스 커널 해킹",
                    live: true,
                    vod: true,
                    training:true,
                    time:"오전 11:00 ~  오전 12:00",
                    buttonText: "참석하기",
                    student: 200,
                    like: 1200,
                    level: 1,
                    private: false,
                },
                {
                    roomName:"모의 해킹 클럽",
                    title:"리눅스 커널 해킹",
                    live: true,
                    vod: true,
                    training:false,
                    time:"오전 11:00 ~  오전 12:00",
                    buttonText: "미리 살펴보기",
                    student: 0,
                    like: 0,
                    level: 1,
                    Private: true
                },
            ],
        };
    }

    handleChangeCheckBox= () => {
        this.setState({ checkBox: !this.state.checkBox });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.scheduleBox}>
                    <Box display='flex' alignItems='center' justifyContent='space-between' className={classes.titleBox}>
                        <Box display='flex' alignItems='center' >
                            <Typography className={classes.titleText}>오늘 강의 일정</Typography>
                            <Typography className={classes.dateText}>2021년 12월 06일 (월)</Typography>
                        </Box>
                        <Box onClick={this.handleChangeCheckBox} className={this.state.checkBox ? classes.checkBoxStyle : clsx(classes.checkBoxStyle,classes.checkBoxStyleOn) }>
                            {this.state.checkBox ?
                                <CheckCircleAgreeOffIcon/> :
                                <CheckCircleAgreeOnIcon/>
                            }
                            예정된 강의만
                        </Box>
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
                                            <Box>
                                                <Box display='flex' alignItems='center'>
                                                    {schedule.live &&
                                                    <Box display='flex' justifyContent='center' alignItems='center'
                                                         className={clsx(classes.caption, classes.captionLive)}>
                                                        <DotIcon/>
                                                        <Typography className={classes.captionText}>LIVE</Typography>
                                                    </Box>
                                                    }
                                                    {schedule.vod &&
                                                    <Box display='flex' justifyContent='center' alignItems='center'
                                                         className={clsx(classes.caption, classes.captionVod)}>
                                                        <VodIcon/>
                                                        <Typography className={classes.captionText}>VOD</Typography>
                                                    </Box>
                                                    }
                                                    {schedule.training &&
                                                    <Box display='flex' justifyContent='center' alignItems='center'
                                                         className={clsx(classes.caption, classes.captionGreen)}>
                                                        <Typography className={classes.captionText}>실습</Typography>
                                                    </Box>
                                                    }
                                                </Box>

                                                <Typography className={classes.scheduleTitleText}>{schedule.title}</Typography>
                                            </Box>


                                            <Box display='flex' alignItems='center' justifyContent='space-between' style={{width: '100%', marginTop:20}}>
                                                <ul className={classes.commentStyle}>
                                                    {schedule.like > 0 &&
                                                        <li><HandsClappingIcon/> {schedule.like}</li>
                                                    }
                                                    {schedule.student > 0 &&
                                                        <li><UsersThreeIcon/> {schedule.student}</li>
                                                    }
                                                    {schedule.Private &&
                                                        <li><LockKey/> 비공개</li>
                                                    }
                                                    {schedule.level &&
                                                        <li><BookmarksSimple/> 초급</li>
                                                    }
                                                </ul>
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