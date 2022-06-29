import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, IconButton, Typography} from "@material-ui/core";
import clsx from "clsx";
import {ReactComponent as DotIcon} from "../../common/images/DotIcon.svg";
import {ReactComponent as PlayIcon} from "../../common/images/PlayIcon.svg";
import {ReactComponent as Info} from "../../common/images/Info.svg";

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
        padding:'0 21px',
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
        borderTop: '1px solid #d3d7db',
        padding:'17px 0 17px 23px',
        cursor:'pointer',
        '&:first-child':{
            borderTop: '0 none',
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
        alignItems:'flex-start',
        justifyContent:'center',
        '& > div':{
            marginLeft: 16,
            textAlign:'center',
            '&:first-child':{
                marginLeft:0,
            }
        }
    },
    tag:{
        fontSize:'0.625rem',
        color:'#fff',
        fontWeight: 600,
        borderRadius:3,
        padding:'3px 6px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        '& svg':{
            width:8,
            height:8,
            marginRight:2,
        }
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
    numTxt:{
        height:'1rem',
        fontSize:'0.625rem',
        color:'#000',
        '& span':{
            fontSize:'1rem',
        }
    },
    onlyTxt:{
        boxSizing:'border-box',
        fontSize:'0.813rem',
        paddingTop: '0.187rem'
    },
    btnStyle2:{
        padding:0,
        marginLeft:6,
        fontSize:'0.625rem',
        color:'#1664f5',
        minWidth:'auto',
        marginTop:7,
        '&:hover':{
            backgroundColor:'#fff'
        }
    },
    titleText:{
        fontSize: '0.75rem',
        color:'#666',
    },
    iconBtnStyle:{
        padding:0,
        width:14,
        height:14,
        marginLeft:2,
    },
    resultTxt:{
        fontSize:'0.875rem',
        '& b':{
            fontSize:'1.5rem',
            fontWeight:600,
        }
    },
    IconButton:{
        padding:0,
        '& svg':{
            width:15,
            height:15,
            '& path':{
                stroke:'#a3a8af'
            }
        },
        '&:hover':{
            backgroundColor:'#fff'
        }
    },
    explanationBox:{
        width:70,
        padding:'10px',
        textAlign: 'center',
        background:'#fff',
        boxShadow:'0 2px 7px 0 rgba(0, 0, 0, 0.25)',
        borderRadius:3,
        position: 'absolute',
        zIndex:100,
        bottom:'-50px',
        left: '-50%',
        "&::before":{
            backgroundColor: '#fff',
            content: "''",
            display: 'block',
            height: '13px',
            position: 'absolute',
            top: -6,
            left: 40,
            transform: 'rotate( -227deg ) skew( 0deg )',
            width: '13px',
            zIndex:300
        },
    },
    stepContents:{
        fontSize: '0.813rem',
        color:'#333',
        fontWeight:400,
        padding:0,
        margin:0,
        textAlign:'center',
        '& li':{
            marginTop:8,
            '&:first-child':{
                marginTop:0,
            }
        }
    },
});
class StudentStatusDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkBox:true,
            chipInfoTooltip:true,
        };
    }
    chipInfoTooltip = () => {
        this.setState({ chipInfoTooltip: !this.state.chipInfoTooltip });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Box className={classes.listStyleOn}>
                    <Box className={classes.listItemStyleOn} onClick={this.props.listItemChange}>
                        <Box display='flex' flexDirection='column'>
                            <span className={classes.titleName}>파이썬 환경 셋팅하기</span>
                            <span className={classes.groupInfo}>강의실 이름 | 수강생 : 2명 | 난이도 : 초급 </span>
                        </Box>
                        <Button disableRipple className={classes.btnStyle} onClick={this.props.handleClickOpen}>수료기준</Button>

                    </Box>
                    <Box className={classes.listItemContent}>
                        <Box>
                            {this.props.LearningList.map((list, i) => (
                                <Box className={classes.listItemStyle} style={{paddingLeft:0}}>
                                    <Box display='flex' style={{borderRight:'1px solid #d3d7db', width:'60%'}}>
                                        <Box className={classes.tagBox}>
                                            <Box>
                                                <span className={classes.tag} style={{backgroundColor:'#fb4a59'}}>
                                                <DotIcon/> LIVE
                                                </span>
                                                <Typography className={classes.numTxt}><span>20</span>분</Typography>
                                            </Box>
                                            <Box>
                                                <span className={classes.tag} style={{backgroundColor:'#000'}}>
                                                <PlayIcon/> VOD</span>
                                                <Typography className={classes.numTxt}><span>70</span>분</Typography>
                                            </Box>
                                            <Box>
                                                <span className={classes.tag} style={{backgroundColor:'#00c880'}}>실습</span>
                                                <Typography className={clsx(classes.numTxt, classes.onlyTxt)}>완료</Typography>
                                                <Button className={classes.btnStyle2} disableRipple>실습보기</Button>
                                            </Box>
                                            <Box>
                                                <span className={classes.tag} style={{backgroundColor:'#4282fa', position:'relative'}} onClick={this.chipInfoTooltip}>평가
                                                {/*{this.state.chipInfoTooltip &&*/}
                                                {/*<Box className={classes.explanationBox}>*/}
                                                {/*        <Box className={classes.stepContents}>*/}
                                                {/*            100점 만점*/}
                                                {/*        </Box>*/}
                                                {/*</Box>*/}
                                                {/*}*/}
                                                </span>
                                                <Typography className={classes.numTxt}><span>40</span>점</Typography>
                                                <Button className={classes.btnStyle2} disableRipple>채점하기</Button>
                                            </Box>
                                            <Box>
                                                <span className={classes.tag} style={{backgroundColor:'#8a42ff'}}>과제</span>
                                                <Typography className={classes.numTxt}><span>98</span>점</Typography>
                                                <Button className={classes.btnStyle2} disableRipple>과제보기</Button>
                                            </Box>
                                        </Box>
                                        <Box style={{marginLeft:30}}>
                                            <Box display='flex' justifyContent='flex-end'>
                                                <Typography className={classes.titleText}>진도률</Typography>
                                                <IconButton className={classes.iconBtnStyle} onClick={this.handleClickAverageTooltip} disableRipple>
                                                    <Info/>
                                                </IconButton>
                                            </Box>
                                            <Typography className={classes.resultTxt}><b>100</b>%</Typography>
                                        </Box>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyContent='center' style={{width:'40%'}}>
                                        {list.state ==="학습완료" ?
                                            <Typography className={classes.stateStyle} style={{color:'#f51666'}}>학습완료</Typography>
                                            :
                                            (list.state === "학습전") ?
                                                <Typography className={classes.stateStyle}>학습 전</Typography>
                                                :
                                                (list.state ==='학습중') ?
                                                    <Typography className={classes.stateStyle} style={{color:'#1664f5'}}>학습 중</Typography>
                                                    :
                                                        null
                                        }
                                        <Box display='flex' flexDirection='column' style={{marginLeft:30, textAlign:'center'}}>
                                            <Typography>수강승인</Typography>
                                            <Typography className={classes.txtGray}>미이수</Typography>
                                            {/*<Button disableRipple className={clsx(classes.txtRed)}>승인취소</Button>*/}
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