import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Avatar, Box, Button, Grid, IconButton, Tooltip, Typography} from "@material-ui/core";
import clsx from "clsx";
import {ReactComponent as DotIcon} from "../../common/images/DotIcon.svg";
import {ReactComponent as SmileyFillIcon} from "../../common/images/SmileyFillIcon.svg";
import {ReactComponent as AlarmFillIcon} from "../../common/images/AlarmFillIcon.svg";
import {ReactComponent as LinkFillIcon} from "../../common/images/LinkFillIcon.svg";
import {ReactComponent as ChartBarFillIcon} from "../../common/images/ChartBarFillIcon.svg";
import {ReactComponent as StudentFillIcon} from "../../common/images/StudentFillIcon.svg";
import {ReactComponent as HandsClappingIcon} from "../../common/images/HandsClappingIcon.svg";
import {ReactComponent as ChatCircleDotsIcon} from "../../common/images/ChatCircleDotsIcon.svg";
import {withRouter} from "react-router-dom";

const styles = theme => ({
    root:{
    },
    content:{
        '&>h5':{
            fontSize:'0.875rem',
            textAlign: 'center',
            color:'#fff',
            backgroundColor: 'transparent',
            padding:10,
            marginBottom:2,
            borderRadius:'7px 7px 0 0',
            fontWeight:600,
        },
        '&>div':{
            backgroundColor:'#f0f0f0',
            padding:11,
            boxSizing:'border-box',
        }
    },
    leftContent:{
        paddingRight:14,
        '&>h5':{
            backgroundColor:'#00b876',
        },
    },
    rightContent:{
        paddingLeft:14,
        '&>h5':{
            backgroundColor:'#a3a8af',
        },
    },
    listBox:{
        border:'1px solid rgba(0, 200, 128, 0.5)',
        borderRadius:10,
        boxShadow:'0 1px 1px 0 #BEBEBE',
        padding:'14px 23px 19px',
        backgroundColor:'#fff',
        marginTop:7,
        '&:first-child':{
            marginTop:0,
        }
    },
    listBoxRight:{
        borderColor:'rgba(163, 168, 175, 0.5)'
    },
    listBoxContent:{
        display:'flex',
        justifyContent:'space-between',
        cursor: 'pointer',
        '& h5':{
            fontSize:'1.063rem',
            fontWeight: 600,
            display:'flex',
            alignItems:'flex-start',
            flexDirection:'column'
        },
        '& h6':{
            fontSize:'0.938rem',
            lineHeight:1.3,
            letterSpacing:'-.5px'
        }
    },
    caption:{
        backgroundColor:'transparent',
        color:'#fff',
        padding:'2px 6px',
        fontSize:'0.625rem',
        fontFamily:'Montserrat!important',
        marginBottom:12,
        textTransform:'uppercase',
        fontWeight:800,
        display:'flex',
        alignItems:'center',
        '& svg':{
            marginRight:3,
        },
    },
    captionLive:{
        backgroundColor:'#FB4A59',
    },
    captionWait:{
        backgroundColor:'#a3a8af',
    },
    subText:{
        marginTop:5
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
    listStyleRight:{
        '& svg path':{
            fill:'#a3a8af',
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
        justifyContent:'center',
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
        padding:'6px 16px',
        borderRadius:7,
        fontSize:'0.938rem',
        "&:hover":{
            background: 'transparent',
        }
    },
    boxFooter:{
        display:'flex',
        alignItems:'flex-end',
        justifyContent: 'space-between',
        marginTop:14,
        minHeight:36,
    },
    ftCount:{
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
    numberText:{
        fontSize:'0.938rem',
        color:'#000',
        marginLeft:5,
        marginRight:13,
        marginTop:2
    },
});


class ScheduleCardBoardItemComponent extends Component {

    handleClickDetail = e => {
        this.props.history.push("/scheduleDetail");
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={28}>
                    <Grid item xs={6} className={clsx(classes.content,classes.leftContent)}>
                        <Typography variant="h5">오늘 진행중(2)</Typography>
                        <Box>
                            <Box className={classes.listBox}>
                                <Box className={classes.listBoxContent} onClick={this.handleClickDetail}>
                                    <Box>
                                        <Typography variant="h5"><span className={clsx(classes.caption, classes.captionLive)}><DotIcon/>Live</span> 온더라이브 기획미팅</Typography>
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
                                        <Box><HandsClappingIcon/> 5 </Box>
                                        <Box><ChatCircleDotsIcon/> 2 </Box>
                                    </Box>
                                    <Button className={classes.btnOutlineStyle} disableRipple>참석하기</Button>
                                </Box>
                            </Box>
                            {/*    Item 1 */}
                            <Box className={classes.listBox}>
                                <Box className={classes.listBoxContent} onClick={this.handleClickDetail}>
                                    <Box>
                                        <Typography variant="h5"><span className={clsx(classes.caption, classes.captionLive)}><DotIcon/>Live</span> 온더라이브 기획미팅</Typography>
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
                                        <Box><HandsClappingIcon/> 5 </Box>
                                        <Box><ChatCircleDotsIcon/> 2 </Box>
                                    </Box>
                                    <Button className={classes.btnOutlineStyle} disableRipple>참석하기</Button>
                                </Box>
                            </Box>
                            {/*    Item 2 */}
                        </Box>
                    </Grid>

                    <Grid item xs={6} className={clsx(classes.content,classes.rightContent)}>
                        <Typography variant="h5">오늘 예정(2)</Typography>
                        <Box>
                            <Box className={clsx(classes.listBox, classes.listBoxRight)}>
                                <Box className={classes.listBoxContent}>
                                    <Box>
                                        <Typography variant="h5"><span className={clsx(classes.caption, classes.captionWait)}>예정</span> 온더라이브 기획미팅</Typography>
                                        <Typography variant="subtitle1" className={classes.subText}>하반기 온라인 마케팅 서비스 기획 회의</Typography>
                                        <ul className={clsx(classes.listStyle,classes.listStyleRight)}>
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
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={classes.boxFooter}>
                                    <Box className={classes.ftCount}>
                                        <Box><HandsClappingIcon/> 5 </Box>
                                        <Box><ChatCircleDotsIcon/> 2 </Box>
                                    </Box>
                                </Box>
                            </Box>
                            {/*    Item 1 */}

                        </Box>

                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(ScheduleCardBoardItemComponent));