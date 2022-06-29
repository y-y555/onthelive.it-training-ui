import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Avatar,
    Box,
    Button,
    FormControl,
    IconButton,
    Menu,
    MenuItem,
    Select,
    TablePagination,
    Typography
} from "@material-ui/core";
import clsx from "clsx";
import {ReactComponent as CheckCircleAgreeOffIcon} from "../../common/images/CheckCircleAgreeOffIcon.svg";
import {ReactComponent as CheckCircleAgreeOnIcon} from "../../common/images/CheckCircleAgreeOnIcon.svg";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import {ReactComponent as AsideUserIcon} from "../../common/images/AsideUserIcon.svg";
import {ReactComponent as ChalkboardTeacher} from "../../common/images/ChalkboardTeacher.svg";
import {ReactComponent as MoreIcon} from "../../common/images/DotsThreeOutlineVerticalIcon.svg";
import {ReactComponent as Browsers} from "../../common/images/Browsers.svg";
import {ReactComponent as DotIcon} from "../../common/images/DotIcon.svg";
import {ReactComponent as PlayIcon} from "../../common/images/PlayIcon.svg";
import {ReactComponent as Info} from "../../common/images/Info.svg";
import {ReactComponent as CaretLeftIcon} from "../../common/images/CaretLeftIcon.svg";
import {ReactComponent as CaretRightIcon} from "../../common/images/CaretRightIcon.svg";

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
        display:'flex',
        backgroundColor: '#eee',
        padding:'21px 25px',
        cursor:'pointer',
    },
    titleName:{
        fontSize:'0.875rem'
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
        },
        '& svg':{
            width:20,
            height: 20,
            '& path':{
                fill:'#a3a8af',
            }
        }
    },
    tagBox:{
        display:'flex',
        alignItems:'flex-start',
        justifyContent:'center',
        '& > div':{
            marginLeft: 6,
            textAlign:'center',
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
    btnStyle:{
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
    lightTooltip: {
        backgroundColor: '#fff',
        color: '#333',
        boxShadow: theme.shadows[1],
        fontSize: '0.813rem',
        fontWeight:400,
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
        '& li':{
            marginTop:8,
            '&:first-child':{
                marginTop:0,
            }
        }
    },
});
class MemberCourseStatusManagementComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "최근가입일순",
            filterDetail: "최근제출완료일순",
            checkBox:true,
            page: 0,
            rowsPerPage: 5,
            listItem:true,
            LearningList:[
                {name:'변요한',lastDate:'2022.5.31',learnCont:'5',learnTime:'30',learnTimeTotal:'50', viewActive:false,},
                {name:'박서윤',lastDate:'2022.5.31',learnCont:'5',learnTime:'30',learnTimeTotal:'50', viewActive:false,},
                {name:'김민준',lastDate:'2022.5.31',learnCont:'5',learnTime:'30',learnTimeTotal:'50', viewActive:false,},
            ],
            averageTooltip: false,
            viewActive:false,
            chipInfoTooltip:false,
        };
    }

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };

    listItemChange= () => {
        this.setState({ listItem: !this.state.listItem });
    };

    handleChangeCheckBox= () => {
        this.setState({ checkBox: !this.state.checkBox });
    };
    handleClickAverageTooltip = () => {
        this.setState({ averageTooltip: !this.state.averageTooltip });
    };

    handleClickViewActive = () => {
        this.setState({ viewActive: !this.state.viewActive });
    };

    chipInfoTooltip = () => {
        this.setState({ chipInfoTooltip: !this.state.chipInfoTooltip });
    };


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Box display='flex' alignItems='center' justifyContent='space-between' style={{borderBottom:'1px solid #e1e1e1'}}>
                    <Box onClick={this.props.handleChangeCheckBox}
                         className={this.props.checkBox ? classes.checkBoxStyle : clsx(classes.checkBoxStyle,classes.checkBoxStyleOn) }>
                        {this.props.checkBox ?
                            <CheckCircleAgreeOffIcon/> :
                            <CheckCircleAgreeOnIcon/>
                        }
                        수강 기록 없는 학생만
                    </Box>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.filter}
                            onChange={this.handleChangeSort}
                            displayEmpty
                            IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                        >
                            <MenuItem value="최근가입일순" className={classes.menuItem}>최근 가입일 순</MenuItem>
                            <MenuItem value="최근제출일순" className={classes.menuItem}>최근 제출일 순</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box className={classes.listStyle}>
                    {this.props.tableTd.map((td, i) => (
                        <Box className={classes.listItemStyle}  onClick={this.listItemChange}>
                            <Box className={classes.flexCenter}>
                                <Avatar className={classes.avatar}><AsideUserIcon/></Avatar>
                                <Box display='flex' flexDirection='column'>
                                    <Typography className={classes.name}>{td.userName} </Typography>
                                    <span className={classes.groupInfo}>{td.className}  |  {td.date} 가입</span>
                                </Box>
                            </Box>
                            <Box display='flex'>
                                <Button disableRipple className={classes.tableBtnStyle}
                                        aria-owns={this.props.anchorEl ? 'simple-menu' : undefined}
                                        aria-haspopup="true"
                                        onClick={this.props.clickMore}
                                        disableTouchRipple
                                        disableFocusRipple
                                >
                                    <MoreIcon/>
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={this.props.anchorEl}
                                    open={Boolean(this.props.anchorEl)}
                                    onClose={this.props.clickMoreClose}
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
                                    <MenuItem onClick={this.props.clickMoreClose} className={classes.menuItem}>수강생 현황</MenuItem>
                                </Menu>
                            </Box>
                        </Box>
                    ))}

                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={this.props.tableTd.length}
                        rowsPerPage={this.state.rowsPerPage}
                        page={this.state.page}
                        backIconButtonProps={{
                            'aria-label': '페이지당 행 수',
                        }}
                        nextIconButtonProps={{
                            'aria-label': '다음 페이지',
                        }}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />





                    {this.state.listItem === false ?
                        <Box className={classes.listStyleOn}>
                            <Box className={classes.listItemStyleOn} onClick={this.listItemChange}>
                                <Avatar className={classes.avatar}><AsideUserIcon/></Avatar>
                                <Box display='flex' flexDirection='column'>
                                    <span className={classes.titleName}>김온더</span>
                                    <span className={classes.groupInfo}>소속강의실명  |  2021.12.01 가입 </span>
                                </Box>
                            </Box>
                            <Box className={classes.listItemContent}>
                                <Box display='flex' alignItems='center' justifyContent='space-between' style={{borderBottom:'1px solid #ddd'}}>
                                    <Box onClick={this.handleChangeCheckBox}
                                         className={this.state.checkBox ? classes.checkBoxStyle : clsx(classes.checkBoxStyle,classes.checkBoxStyleOn) }>
                                        {this.state.checkBox ?
                                            <CheckCircleAgreeOffIcon/> :
                                            <CheckCircleAgreeOnIcon/>
                                        }
                                        수강완료 수강생만
                                    </Box>
                                    <FormControl className={classes.formControl}>
                                        <Select
                                            value={this.state.filterDetail}
                                            onChange={this.handleChangeSort}
                                            displayEmpty
                                            IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                                        >
                                            <MenuItem value="최근제출완료일순" className={classes.menuItem}>최근 제출완료일 순</MenuItem>
                                            <MenuItem value="최근등록순" className={classes.menuItem}>최근 등록 순</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box className={classes.userBar}>
                                    <ChalkboardTeacher/> <span>{this.state.LearningList.length}개</span></Box>
                                <Box>
                                    {this.state.LearningList.map((list, i) => (
                                        <Box className={classes.listItemStyle} style={{padding:'6px 0'}}>
                                            <Box className={classes.flexCenter}>
                                                <Avatar className={classes.avatar}><Browsers/></Avatar>
                                                <Box display='flex' flexDirection='column'>
                                                    <span className={classes.name}>{list.name}</span>
                                                    <span className={classes.groupInfo}>마지막 학습일 : {list.lastDate}  |  학습 횟수 {list.learnCont}회  |  학습 시간 {list.learnTime}분/{list.learnTimeTotal}분</span>
                                                </Box>
                                            </Box>
                                            <Box display='flex' alignItems='center'>
                                                <IconButton className={classes.IconButton} disableRipple onClick={this.handleClickViewActive}>
                                                    {list.viewActive === false ?
                                                        <CaretRightIcon/>
                                                        :
                                                        <CaretLeftIcon/>
                                                    }
                                                </IconButton>
                                                <Box display='flex' flexDirection='column'>
                                                    <Box className={classes.tagBox}>
                                                        {list.viewActive === false ?
                                                            <>
                                                                <Box>
                                                                    <span className={classes.tag} style={{backgroundColor:'#fb4a59'}} >
                                                                        <DotIcon/> LIVE</span>
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
                                                                    <Button className={classes.btnStyle} disableRipple>실습보기</Button>
                                                                </Box>
                                                                </>
                                                            :
                                                            null
                                                            }
                                                        <Box>ㄹ
                                                            <span className={classes.tag} style={{backgroundColor:'#4282fa', position:'relative'}} onClick={this.chipInfoTooltip}>평가
                                                                {this.state.chipInfoTooltip &&
                                                                    <Box className={classes.explanationBox}>
                                                                            <Box className={classes.stepContents}>
                                                                                100점 만점
                                                                            </Box>
                                                                    </Box>
                                                                }
                                                            </span>
                                                            <Typography className={classes.numTxt}><span>40</span>점</Typography>
                                                            <Button className={classes.btnStyle} disableRipple>채점하기</Button>
                                                        </Box>
                                                        <Box>
                                                            <span className={classes.tag} style={{backgroundColor:'#8a42ff'}}>과제</span>
                                                            <Typography className={classes.numTxt}><span>98</span>점</Typography>
                                                            <Button className={classes.btnStyle} disableRipple>과제보기</Button>
                                                        </Box>
                                                    </Box>
                                                </Box>



                                                <Box style={{marginLeft:20}}>
                                                    <Box display='flex' justifyContent='flex-end'>
                                                        <Typography className={classes.titleText}>진도률</Typography>
                                                        <IconButton className={classes.iconBtnStyle} onClick={this.handleClickAverageTooltip} disableRipple>
                                                            <Info/>
                                                        </IconButton>
                                                    </Box>
                                                    {/*{this.state.averageTooltip &&*/}
                                                    {/*<Box className={classes.explanationBox}>*/}
                                                    {/*    <Box display='flex' justifyContent='space-between' alignItems='flex-start'>*/}
                                                    {/*        <Box className={classes.stepContents}>*/}
                                                    {/*            전체 강의에 포함된 ‘라이브, 동영상, 실습, 평가, 과제' 개수 대비 수강생 평균 진도률*/}
                                                    {/*        </Box>*/}
                                                    {/*    </Box>*/}
                                                    {/*</Box>*/}
                                                    {/*}*/}
                                                    <Typography className={classes.resultTxt}><b>100</b>%</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                        :
                        null
                    }




                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(MemberCourseStatusManagementComponent);
