import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Avatar, Box, Button, FormControl, MenuItem, Select, Typography} from "@material-ui/core";
import CancelApprovalDialogComponent from "./CancelApprovalDialogComponent";
import clsx from "clsx";
import {ReactComponent as CheckCircleAgreeOffIcon} from "../../common/images/CheckCircleAgreeOffIcon.svg";
import {ReactComponent as CheckCircleAgreeOnIcon} from "../../common/images/CheckCircleAgreeOnIcon.svg";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import {ReactComponent as AsideUserIcon} from "../../common/images/AsideUserIcon.svg";
import {ReactComponent as Browsers} from "../../common/images/Browsers.svg";
const styles = theme => ({
    root:{

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
    listStyleOn:{
        borderRadius: 10,
        overflow:'hidden',
        boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.45)',
        position:'absolute',
        top:0,
        left:0,
        zIndex:99,
        width:'100%'
    },
    listItemStyleOn:{
        backgroundColor: '#eee',
        padding:'21px 25px',
        cursor:'pointer',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
    },
    titleName:{
        fontSize:'1.25rem'
    },
    listItemContent:{
        padding:21,
        backgroundColor:'#fff'
    },
    stateStyle:{
        fontSize:'1.5rem',
        color:'#8f8f8f',
    },
    userBar:{
        display:'flex',
        alignItems:'center',
        margin:'20px 0 4px',
        '& > span':{
            fontSize:'0.813rem',
            color:'#a3a8af',
            marginLeft:4
        }
    },
    btnStyle:{
        backgroundColor:'#fff',
        border:'1px solid #bfbfbf',
        borderRadius:4,
        fontSize:'0.938rem',
        padding:'4px 12px',
        "&:hover":{
            background:'#fff'
        }
    },
    txtGray:{
        color:'#8f8f8f',
    },
    txtRed:{
        color:'#ff1226',
        fontSize:'1rem',
        "&:hover":{
            background:'transparent'
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
        display:'flex',
        alignItems: 'center',
    },
    groupInfo:{
        fontSize:'0.75rem',
        color:'#666666',
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
    selectBadge:{
        fontSize:'0.75rem',
        marginLeft: 14,
        display:'flex',
        alignItems: 'center',
    },
    captionText:{
        fontSize:'0.75rem',
        fontWeight:600,
        paddingTop: 2,
        color:'#fff',
        width:30,
        height:16,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginLeft: 14,
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
    captionPrivate:{
        width: 60,
        backgroundColor:'transparent',
    },
    captionTextPrivate:{
        fontSize:'0.875rem',
        fontWeight:600,
        paddingTop: 2,
        color:'#0d0d0d'
    },
    captionEnd:{
        backgroundColor:'#1a5177'
    },
});
class StudentStatusDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkBox:true,
        };
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Box className={classes.listStyleOn}>
                    <Box className={classes.listItemStyleOn} onClick={this.props.listItemChange}>
                        <Box display='flex' flexDirection='column'>
                            <span className={classes.titleName}>파이썬 환경 셋팅하기</span>
                            <span className={classes.groupInfo}>2022.6.1.  |  학습완료 10명  •  진행중 3명  •  미수강 4명 </span>
                        </Box>
                        <Button disableRipple className={classes.btnStyle} onClick={this.props.handleClickOpen}>수료기준</Button>

                    </Box>
                    <Box className={classes.listItemContent}>
                        <Box display='flex' alignItems='center' justifyContent='space-between' style={{borderBottom:'1px solid #ddd'}}>
                            <Box onClick={this.props.handleChangeCheckBox}
                                 className={this.state.checkBox ? classes.checkBoxStyle : clsx(classes.checkBoxStyle,classes.checkBoxStyleOn) }>
                                {this.state.checkBox ?
                                    <CheckCircleAgreeOffIcon/> :
                                    <CheckCircleAgreeOnIcon/>
                                }
                                수강승인 요청자만
                            </Box>
                            <FormControl className={classes.formControl}>
                                <Select
                                    value={this.props.filterOn}
                                    onChange={this.props.handleChangeSort}
                                    displayEmpty
                                    IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                                >
                                    <MenuItem value="최근학습완료일순" className={classes.menuItem}>최근 학습완료일 순</MenuItem>
                                    <MenuItem value="최근제출일순" className={classes.menuItem}>최근 제출일 순</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box className={classes.userBar}>
                            <AsideUserIcon/> <span>{this.props.LearningList.length}명</span></Box>
                        <Box>
                            {this.props.LearningList.map((list, i) => (
                                <Box className={classes.listItemStyle} style={{paddingLeft:0}}>
                                    <Box className={classes.flexCenter}>
                                        <Avatar className={classes.avatar}><Browsers/></Avatar>
                                        <Box display='flex' flexDirection='column'>
                                            <span className={classes.name}>{list.name}</span>
                                            <span className={classes.groupInfo}>마지막 학습일 : {list.lastDate}  |  학습 횟수 {list.learnCont}회  |  학습 시간 {list.learnTime}분/{list.learnTimeTotal}분</span>
                                        </Box>
                                    </Box>
                                    <Box display='flex' alignItems='center'>
                                        {list.state ==="학습완료" ?
                                            <Typography className={classes.stateStyle} style={{color:'#f51666'}}>학습완료</Typography>
                                            :
                                            (list.state === "학습전") ?
                                                <Typography className={classes.stateStyle}>학습 전</Typography>
                                                :
                                                (list.state ==='학습중') ?
                                                    <Typography className={classes.stateStyle} style={{color:'#1664f5'}}>학습 중</Typography>
                                                    :
                                                    (list.state ==='수강승인') ?
                                                        <Button className={classes.btnStyle} disableRipple>수강승인</Button>
                                                        :
                                                        null
                                        }
                                        <Box display='flex' flexDirection='column' style={{marginLeft:30, textAlign:'center'}}>
                                            {/*<Typography>수강승인</Typography>*/}
                                            {/*<Typography className={classes.txtGray}>미이수</Typography>*/}
                                            <Button disableRipple className={clsx(classes.txtRed)}>승인취소</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(StudentStatusDetailComponent);