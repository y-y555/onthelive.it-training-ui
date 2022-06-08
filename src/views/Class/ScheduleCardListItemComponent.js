import React, {Component} from 'react';
import {Avatar, Box, Button, IconButton, Tooltip, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import {ReactComponent as SmileyFillIcon} from "../../common/images/SmileyFillIcon.svg";
import {ReactComponent as AlarmFillIcon} from "../../common/images/AlarmFillIcon.svg";
import {ReactComponent as LinkFillIcon} from "../../common/images/LinkFillIcon.svg";
import {ReactComponent as ChartBarFillIcon} from "../../common/images/ChartBarFillIcon.svg";
import {ReactComponent as StudentFillIcon} from "../../common/images/StudentFillIcon.svg";
import {ReactComponent as HandsClappingIcon} from "../../common/images/HandsClappingIcon.svg";
import {ReactComponent as ChatCircleDotsIcon} from "../../common/images/ChatCircleDotsIcon.svg";
import {ReactComponent as DotIcon} from "../../common/images/DotIcon.svg";
import {ReactComponent as BookmarksSimple} from "../../common/images/BookmarksSimple.svg";
import clsx from "clsx";
import {withRouter} from "react-router-dom";
import {ReactComponent as EyeTinyIcon} from "../../common/images/EyeIcon.svg";

const styles = theme => ({
    root:{
        '& ul, ol':{
            margin:0,
            padding:0,
            listStyle:'none',
        }
    },
    listBox:{
        border:'1px solid #c4c4c4',
        borderRadius:10,
        boxShadow:'0 1px 1px 0 #BEBEBE',
        marginBottom:20,
    },
    liveBox:{
        borderColor:'#00C880',
        borderTopWidth:7,
    },
    listBoxContent:{
        display:'flex',
        justifyContent:'space-between',
        padding:'30px 60px',
        cursor: 'pointer',
        '& h5':{
            fontSize:'1.063rem',
            fontWeight: 600,
            display:'flex',
            alignItems:'center',
        },
        '& h6':{
            fontSize:'0.938rem',
            lineHeight:1.3,
        }
    },
    subText:{
        marginTop:5
    },
    listBoxTitleEnd:{
            textDecoration:'line-through',
    },
    caption:{
        backgroundColor:'transparent',
        color:'#fff',
        padding:'3px 6px 2px',
        fontSize:'0.625rem',
        fontFamily:'Montserrat!important',
        marginLeft:7,
        textTransform:'uppercase',
        fontWeight:600,
        display:'flex',
        alignItems:'center',
        '& svg':{
            marginRight:3,
        },
    },
    captionLive:{
        backgroundColor:'#FB4A59',
    },
    captionEnd:{
        backgroundColor:'#505050'
    },
    listStyle:{
        margin:'8px 0!important',
        '& li': {
            display: 'flex',
            alignItems: 'center',
            fontSize:'0.875rem',
            marginTop:7,
            '&:first-child':{
                marginTop: 0,
            },
            '& svg':{
                marginRight:4,
            },
        },
    },
    avatarList:{
        display:'flex',
        '& li':{
            marginTop:5,
            marginRight:'-6px',
            '&>div':{
                width: 30,
                height:30,
                zIndex:10,
                border: '1px solid #fff',
                overflow:'hidden',
            },
            '&:last-child':{
                zIndex:20,
            }
        },
    },
    avatarLastStyle:{
        width: 30,
        height:30,
        backgroundColor:'#F1F1F1',
        border: '1px solid #fff',
        textAlign:'center',
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 50,
        fontSize:'0.688rem',
    },
    asideControl:{
        display:'flex',
        flexDirection: 'column',
        justifyContent:'space-between',
    },
    iconButtonBox:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-end',
        marginBottom: 15,
        '& button':{
            padding:0,
            marginBottom:4,
        },
    },
    lightTooltip: {
        backgroundColor: '#FFFFF5',
        color: '#000',
        border:'1px solid #000',
        fontSize:'0.688rem',
        borderRadius:0,
        marginLeft:0,
        marginTop:15
    },
    btnOutlineStyle:{
        border:'1px solid #0097FF',
        color:'#0097FF',
        fontWeight:600,
        padding:'6px 27px',
        borderRadius:7,
        fontSize:'0.938rem',
        "&:hover":{
            background: 'transparent',
        }
    },
    boxFooter:{
        backgroundColor:'#EDEDED',
        borderRadius:10,
    },
    ftCount:{
        padding:'10px 60px',
        borderBottom:'1px solid #fff',
        display:'flex',
        '& div': {
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.75rem',
            color: '#7F7F7F',
            marginRight:7,
            '& svg': {
                width: 14,
                height: 14,
                opacity: 0.5,
                marginRight:4,
            }
        }
    },
    iconColor:{
        "& .like-icon":{
            fill:'#0097ff'
        }
    },
    numberText:{
        fontSize:'0.938rem',
        color:'#000',
        marginLeft:5,
        marginTop:2
    },
    ftAdded:{
        padding:'10px 60px',
        '& button':{
            width:'50%',
            textAlign: 'center',
            cursor:'pointer',
            fontSize:'0.938rem',
            color:'#000',
            '&:hover':{
                background: 'transparent',
            },
            '& svg':{
                width:20,
                height:20,
                marginRight:4,
                opacity:0.5,
            },
        },
    }
});


class ScheduleCardListItemComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"라이브",
            like: false
        };
    }

    handleChangeLikeButton = () => {
        this.setState({ like : !this.state.like });
    };

    handleClickDetail = e => {
        this.props.history.push("/scheduleDetail");
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {/* 라이브  */}
                <Box className={clsx(classes.listBox,classes.liveBox)}>
                    <Box className={classes.listBoxContent} onClick={this.handleClickDetail}>
                        <Box>
                            <Typography className={clsx(classes.caption, classes.captionLive)}><DotIcon/>Live</Typography>
                            <Typography variant="h5"> <span>온더라이브 기획미팅</span></Typography>
                            <Typography variant="subtitle1" className={classes.subText}>하반기 온라인 마케팅 서비스 기획 회의</Typography>
                            <ul className={classes.listStyle}>
                                <li><SmileyFillIcon/> 서비스 기획팀 | 문진후 소장</li>
                                <li><AlarmFillIcon/>오전 11:00 ~ 오후 13:00 </li>
                            </ul>
                            <ul className={classes.avatarList}>
                                <li><Avatar></Avatar></li>
                                <li><Avatar></Avatar></li>
                                <li><Avatar></Avatar></li>
                                <li><div className={classes.avatarLastStyle}>+12</div></li>
                            </ul>
                        </Box>
                        <Box className={classes.asideControl}>
                            <Typography><BookmarksSimple/>초급</Typography>
                            <Box className={classes.iconButtonBox}>
                                <Tooltip title="링크" placement="right" classes={{ tooltip: classes.lightTooltip }}><IconButton><LinkFillIcon/></IconButton></Tooltip>
                                <Tooltip title="학습결과" placement="right" classes={{ tooltip: classes.lightTooltip }}><IconButton><ChartBarFillIcon/></IconButton></Tooltip>
                                <Tooltip title="학생관리" placement="right" classes={{ tooltip: classes.lightTooltip }}><IconButton><StudentFillIcon/></IconButton></Tooltip>
                            </Box>
                            <Button className={classes.btnOutlineStyle} disableRipple>참석하기</Button>
                        </Box>
                    </Box>
                    <Box className={classes.boxFooter}>
                        <Box className={classes.ftCount}>
                            <Box><HandsClappingIcon className={this.state.like ? classes.iconColor : null}/> 5 </Box>
                            <Box><ChatCircleDotsIcon/> 2 </Box>
                        </Box>
                        {/*<Box className={classes.ftCount}>*/}
                        {/*    <div>{this.state.like === true ? <HandsClappingIcon className={classes.iconColor}/> : <HandsClappingIcon/>} <Typography className={classes.numberText}>5</Typography></div>*/}
                        {/*    <div><ChatCircleDotsIcon/> <Typography className={classes.numberText}>2</Typography></div>*/}
                        {/*</Box>*/}
                        <Box className={classes.ftAdded}>
                            <Button disableRipple onClick={this.handleChangeLikeButton}>
                                <HandsClappingIcon/> 좋아요
                            </Button>
                            <Button disableRipple onClick={this.handleClickDetail}>
                                <ChatCircleDotsIcon/> 댓글 달기
                            </Button>
                        </Box>
                    </Box>
                </Box>
                {/*  라이브   */}

                {/*  종료  */}
                <Box className={classes.listBox}>
                    <Box className={classes.listBoxContent} onClick={this.handleClickDetail}>
                        <Box>
                            <Typography variant="h5"> <span className={classes.listBoxTitleEnd}>온더라이브 기획미팅</span>
                                <span className={clsx(classes.caption, classes.captionEnd)}>종료</span></Typography>
                            <Typography variant="subtitle1" className={classes.subText}>하반기 온라인 마케팅 서비스 기획 회의</Typography>
                            <ul className={classes.listStyle}>
                                <li><SmileyFillIcon/> 서비스 기획팀 | 문진후 소장</li>
                                <li><AlarmFillIcon/>오전 11:00 ~ 오후 13:00 </li>
                            </ul>
                            <ul className={classes.avatarList}>
                                <li><Avatar></Avatar></li>
                                <li><Avatar></Avatar></li>
                                <li><Avatar></Avatar></li>
                                <li><div className={classes.avatarLastStyle}>+12</div></li>
                            </ul>
                        </Box>
                        <Box className={classes.asideControl}>
                            <Box className={classes.iconButtonBox}>
                                <Tooltip title="링크" placement="right" classes={{ tooltip: classes.lightTooltip }}><IconButton><LinkFillIcon/></IconButton></Tooltip>
                                <Tooltip title="학습결과" placement="right" classes={{ tooltip: classes.lightTooltip }}><IconButton><ChartBarFillIcon/></IconButton></Tooltip>
                                <Tooltip title="학생관리" placement="right" classes={{ tooltip: classes.lightTooltip }}><IconButton><StudentFillIcon/></IconButton></Tooltip>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.boxFooter}>
                        <Box className={classes.ftCount}>
                            <Box><HandsClappingIcon className={this.state.like ? classes.iconColor : null}/> 5 </Box>
                            <Box><ChatCircleDotsIcon/> 2 </Box>
                        </Box>
                        <Box className={classes.ftAdded}>
                            <Button disableRipple>
                                <HandsClappingIcon/> 좋아요
                            </Button>
                            <Button disableRipple onClick={this.handleClickDetail}>
                                <ChatCircleDotsIcon/> 댓글 달기
                            </Button>
                        </Box>
                    </Box>
                </Box>
                {/*  종료  */}
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(ScheduleCardListItemComponent));