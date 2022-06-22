import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Book} from "@material-ui/icons";
import {Avatar, Box, Button, FormControl, Menu, MenuItem, Select, TableCell, Typography} from "@material-ui/core";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import clsx from "clsx";
import {ReactComponent as CheckCircleAgreeOffIcon} from "../../common/images/CheckCircleAgreeOffIcon.svg";
import {ReactComponent as CheckCircleAgreeOnIcon} from "../../common/images/CheckCircleAgreeOnIcon.svg";
import {ReactComponent as Browsers} from "../../common/images/Browsers.svg";
import {ReactComponent as MoreIcon} from "../../common/images/DotsThreeOutlineVerticalIcon.svg";
import {ReactComponent as BookmarksSimple} from "../../common/images/BookmarksSimple.svg";
import {ReactComponent as DotIcon} from "../../common/images/DotIcon.svg";
import {ReactComponent as PlayIcon} from "../../common/images/PlayIcon.svg";
import {ReactComponent as LockKey} from "../../common/images/LockKey.svg";
const styles = theme => ({
    root:{
        backgroundColor:'#fff',
        border:'1px solid #bfbfbf',
        borderRadius:'7px 7px 0 0',
        padding:30,
        marginTop:50,
        width:790,
        margin:'0 auto',
    },
    flexCenter:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    checkBoxStyle:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        color: '#656565',
        fontSize:'0.875rem',
        cursor:'pointer',
        '& svg':{
            width:20,
            height:20,
            marginRight:4,
            color:'#656565',
        }
    },
    checkBoxStyleOn:{
        color:'#0097FF',
    },
    formControl:{
        display:'flex',
        alignItems:'flex-end',
        '&>div':{
            fontSize:'0.75rem',
            fontWeight:600,
            '&:before, &:after':{
                content:'',
                display:'none',
                width:0,
                size:0,
            },
        },
        "& .MuiSelect-select:focus":{
            background:'transparent'
        },
        "& .MuiSelect-select.MuiSelect-select":{
            paddingRight:0
        }
    },
    menuItem:{
        fontFamily: 'NanumSquareRoundOTF' ,
        fontSize:'0.875rem',
        color:'#0d0d0d',
        "&:hover":{
            background:'#d3d7db'
        },
        "&.Mui-selected:hover":{
            background:'#d3d7db'
        },
        "&.Mui-selected":{
            background:'transparent'
        }
    },
    listStyle:{
        position:'relative',
        marginBottom:60,
        '&:last-child':{
            marginBottom: 0
        },
        '& h5': {
            borderBottom: '1px solid #d3d7db',
            fontSize:'0.875rem',
            fontWeight:700,
            paddingBottom:8,
        }
    },
    listItemStyle:{
        display:'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        borderBottom: '1px solid #d3d7db',
        padding:'17px 0 17px 23px',
        cursor:'pointer',
        '&:first-child':{
            borderTop: '1px solid #d3d7db',
        }
    },
    avatar:{
        marginRight: 10,
        backgroundColor:'#a3a8af',
        '& svg path':{
            fill:'#fff'
        }
    },
    name:{
        fontSize:'0.875rem',
        fontWeight:600,
    },
    groupInfo:{
        fontSize:'0.75rem',
        color:'#979797',
        marginTop:7,
    },
    tableBtnStyle:{
        '&:hover':{
            background: 'transparent',
        }
    },
    tagBox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:7,
    },
    tag:{
        fontSize:'0.76rem',
        color:'#fff',
        fontWeight: 600,
        borderRadius:3,
        padding:'3px 6px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:6,
    },
    freeTxt:{
        fontSize:'0.875rem',
        color:'#1664f5',
        marginRight:12,
    },
    levelTxt:{
        display:'flex',
        alignItems:'center',
        fontSize:'0.875rem',
        fontWeight:600,
    },
    selectBedge:{
        fontSize:'0.75rem',
        marginLeft: 14,
    }
});
class CourseOpenLectureTableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "최근등록일순",
            checkBox:true,
            anchorEl: null,
        };
    }
    handleChangeCheckBox= () => {
        this.setState({ checkBox: !this.state.checkBox });
    };

    clickMore = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    clickMoreClose = () => {
        this.setState({ anchorEl: null });
    };
    render() {
        const { classes } = this.props;
        const { anchorEl} = this.state;

        return (
            <div className={classes.root}>
                <Box display='flex' alignItems='center' justifyContent='space-between' style={{borderBottom:'1px solid #e1e1e1'}}>
                    <Box onClick={this.handleChangeCheckBox}
                    className={this.state.checkBox ? classes.checkBoxStyle : clsx(classes.checkBoxStyle,classes.checkBoxStyleOn) }>
                    {this.state.checkBox ?
                        <CheckCircleAgreeOffIcon/> :
                        <CheckCircleAgreeOnIcon/>
                    }
                    수강생 없는 강의만
                </Box>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.filter}
                            onChange={this.handleChangeSort}
                            displayEmpty
                            IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                        >
                            <MenuItem value="최근등록일순" className={classes.menuItem}>최근 등록일 순</MenuItem>
                            <MenuItem value="최근제출일순" className={classes.menuItem}>최근 제출일 순</MenuItem>
                        </Select>
                    </FormControl>
                </Box>


                <Box className={classes.listStyle}>

                    <Box className={classes.listItemStyle}>
                        <Box className={classes.flexCenter}>
                            <Avatar className={classes.avatar}><Browsers/></Avatar>
                            <Box display='flex' flexDirection='column'>
                                <Box className={classes.name}>파이썬 기본 문법 익히기 1
                                    <span className={clsx(classes.selectBedge)}><LockKey/> 비공개</span>
                                </Box>
                                <span className={classes.groupInfo}>2022.5.31.  |  학습완료 15명  •  진행중 4명  •  미수강 1명   |  5명 작성</span>
                            </Box>
                        </Box>
                        <Box display='flex'>
                            <Box display='flex' flexDirection='column'>
                                <Box className={classes.tagBox}>
                                        <span className={classes.tag} style={{backgroundColor:'#00c880'}}>실습</span>
                                        <span className={classes.tag} style={{backgroundColor:'#fb4a59'}}>
                                            <DotIcon style={{width:10, height:10, marginRight:2}}/> LIVE</span>
                                        <span className={classes.tag} style={{backgroundColor:'#000'}}>
                                            <PlayIcon style={{width:10, height:10, marginRight:2}}/> VOD</span>
                                    <span className={classes.tag} style={{backgroundColor:'#4282fa'}}>평가</span>
                                    <span className={classes.tag} style={{backgroundColor:'#8a42ff'}}>과제</span>

                                </Box>
                                <Box display='flex' justifyContent='flex-end' alignItems='center'>
                                    <Typography className={classes.freeTxt}>무료강의</Typography>
                                    <Typography className={classes.levelTxt}><BookmarksSimple/> 초급</Typography>
                                </Box>
                            </Box>
                            <Button disableRipple className={classes.tableBtnStyle}
                                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.clickMore}
                                    disableTouchRipple
                                    disableFocusRipple
                            >
                                <MoreIcon/>
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={this.clickMoreClose}
                                className={classes.menuBox }
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <MenuItem onClick={this.clickMoreClose} className={classes.menuItem}>강의 정보 수정</MenuItem>
                                <MenuItem onClick={this.clickMoreClose} className={classes.menuItem}>수강생 현황</MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(CourseOpenLectureTableComponent);

