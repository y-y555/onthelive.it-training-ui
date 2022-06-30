import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Avatar, Box, Button, IconButton, Menu, MenuItem, Typography} from "@material-ui/core";
import {ReactComponent as HandsClappingIcon} from "../../common/images/HandsClappingIcon.svg";
import {ReactComponent as ChatCircleDotsIcon} from "../../common/images/ChatCircleDotsIcon.svg";
import {ReactComponent as MoreIcon} from "../../common/images/DotsThreeOutlineVerticalIcon.svg";
import {ReactComponent as SmileyFillIcon} from "../../common/images/SmileyFillIcon.svg";
import {ReactComponent as AlarmFillIcon} from "../../common/images/AlarmFillIcon.svg";
import CommentComponent from "./CommentComponent";
import ClassContentSearchComponent from "./ClassContentSearchComponent";
import MemberProfileDialogComponent from "../dialog/MemberProfileDialogComponent";
import {withRouter} from "react-router-dom";
import {inject, observer} from "mobx-react";

const styles = _theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width: 1440,
        },
        width: 1200,
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '0 auto',
        padding: '0 30px',
        boxSizing: 'border-box',
        'button:hover':{
            background: 'transparent',
        },
        '& ul, ol':{
            margin:0,
            padding:0,
            listStyle:'none',
        }
    },
    center:{
        '@media all and (min-width: 1500px)': {
            width: 730,
        },
        width: 620,
        paddingBottom: 70,
    },
    right:{
        '@media all and (min-width: 1500px)': {
            width:235,
            marginLeft:90,
        },
        width:230,
        marginLeft:30,
    },
    titleStyle:{
        display:'flex',
        alignItems: 'flex-start',
        justifyContent:'space-between',
        marginTop:30,
        paddingBottom:7,
        marginBottom: 25,
        '& h3':{
            fontSize: '1.875rem',
            fontWeight:500,
            marginBottom:8,
        },
        '& p':{
            fontSize:'0.75em',
            color:'#0d0d0d',
            marginBottom:10,
        }
    },
    content:{
        fontSize:'0.875rem',
        lineHeight:1.45,
    },
    contentsText:{
        fontSize:'0.875rem',
        marginBottom:30,
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
        cursor: 'pointer',
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
    chipBox:{
        display:'flex',
        flexDirection:'row',
        marginBottom:12,
        marginTop:44,
    },
    chip:{
        height:'21!important',
        backgroundColor:'#eee',
        color:'#656565',
        marginRight:6,
        padding:'1px 12px',
        fontSize: '0.938rem',
        border:'1px solid #eee',
        borderRadius:50,
    },
    boxFooter:{
        border:'0 solid #e1e1e1',
        borderWidth:'1px 0',
        marginTop:33,
        marginBottom:19,
    },
    ftCount:{
        padding:'10px 0',
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
    ftAdded:{
        padding:'10px 60px',
        '& button':{
            width:'50%',
            textAlign: 'center',
            cursor:'pointer',
            '&:hover':{
                background: 'transparent',
            },
            '& svg':{
                marginRight:4,
                opacity:0.5,
            },
        },
    },
    active:{
        color:'#0097ff',
        fontWeight:700,
    },
    iconActive:{
        fill:'#0097ff',
        '& path':{
            fill:'#0097ff',
        }
    },
    menuItem:{
        fontFamily: 'NanumSquareRoundOTF' ,
        fontSize:'0.875rem',
        color:'#0d0d0d',
        textAlign:'center',
        "&:hover":{
            background:'#d3d7db'
        },
        "&.Mui-selected":{
            background:'transparent'
        },
        "&.Mui-selected:hover":{
            background:'#d3d7db'
        },
    },
});

class ClassScheduleDetailContentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            GoodToggle: false,
            memberDialog: false,
        };
    }

    handleClickEdit = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
            memberDialog: false,
        });
    };

    handleChangeGoodToggle = () => {
        this.setState({ GoodToggle: !this.state.GoodToggle });
    };

    handleClickDialog = () => {
        this.setState({ memberDialog: true });
    };

    handleClickAttend = e => {
        e.stopPropagation();
        this.props.history.push("/classWindow");
    }

    render() {
        const { classes, authStore } = this.props;
        const { anchorEl } = this.state;

        return (
            <div className={classes.root}>
                <Box className={classes.center}>
                    <Box className={classes.titleStyle}>
                        <Box>
                            <Typography variant="h3"> 악성문서 파일 분석 </Typography>
                        </Box>
                        <IconButton disableripple
                                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleClickEdit}
                        ><MoreIcon/></IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose} className={classes.menuItem}>수정</MenuItem>
                            <MenuItem onClick={this.handleClose} className={classes.menuItem}>복제</MenuItem>
                            <MenuItem onClick={this.handleClose} className={classes.menuItem}>공유</MenuItem>
                        </Menu>
                    </Box>
                    <Box className={classes.content}>
                        <Typography className={classes.contentsText}>
                            본 과정은 ISMS-P 통합 인증심사를 위한 종합 가이드로, ISMS-P 인증심사를 앞두고 있는 기업의 실무자와 심사원 자격 대비를 앞두고 있는 분들을 위한 과정입니다. ISMS-P...
                            최근 공격자들은 자바스크립트, 오피스 문서파일, PDF 문서파일, HWP 문서파일, SWF 파일, RTF 파일 등을 악성코드로 사용하여 공격을 전개 합니다.
                        </Typography>
                        <Box display='flex' justifyContent='space-between' alignItems='flex-end'>
                            <Box>
                                <ul className={classes.listStyle}>
                                    <li><SmileyFillIcon/> 서비스 기획팀 | 문진후 소장</li>
                                    <li><AlarmFillIcon/>오전 11:00 ~ 오후 13:00 </li>
                                </ul>
                                <ul className={classes.avatarList} onClick={this.handleClickDialog}>
                                    <li><Avatar></Avatar></li>
                                    <li><Avatar></Avatar></li>
                                    <li><Avatar></Avatar></li>
                                    <li><div className={classes.avatarLastStyle}>+12</div></li>
                                </ul>
                            </Box>
                            <Button
                                className={classes.btnOutlineStyle}
                                disableripple
                                onClick={this.handleClickAttend}
                            >
                                {authStore.isGuestUser ?  '학습하기' : '강의하기'}
                            </Button>
                        </Box>
                    </Box>
                    <Box className={classes.chipBox}>
                        <Typography className={classes.chip}>수업</Typography>
                        <Typography className={classes.chip}>스터디</Typography>
                    </Box>
                    <Box className={classes.boxFooter}>
                        <Box className={classes.ftCount}>
                            <Box><HandsClappingIcon className={this.state.GoodToggle ? classes.iconActive : null}/> 5 </Box>
                            <Box><ChatCircleDotsIcon/> 2 </Box>
                        </Box>
                        <Box className={classes.ftAdded}>
                            <Button disableripple onClick={this.handleChangeGoodToggle} className={this.state.GoodToggle ? classes.active : null}>
                                <HandsClappingIcon/> 좋아요
                            </Button>
                            <Button disableripple>
                                <ChatCircleDotsIcon/> 댓글 달기
                            </Button>
                        </Box>
                    </Box>

                    <CommentComponent/>
                </Box>

                <Box className={classes.right}>
                    <ClassContentSearchComponent/>
                </Box>

                <MemberProfileDialogComponent memberDialog={this.state.memberDialog} handleClose={this.handleClose}/>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(inject('authStore')(observer(ClassScheduleDetailContentComponent))));