import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {ReactComponent as CaretRightIcon} from "../../common/images/CaretRightIcon.svg";
import {ReactComponent as Info} from "../../common/images/Info.svg";
import {Typography, Box, Button, Tooltip, IconButton} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";
import clsx from 'clsx';
import {ReactComponent as X} from "../../common/images/X.svg";

const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width: 620,
        // padding: '10px 16px',
        boxSizing:'border-box',
        marginBottom:60,
    },
    contents: {
        display: 'flex',
        '& > div': {
            width: '50%',
            marginLeft:30,
            '&:first-child':{
                marginLeft: 0,
            },
            '& .MuiTypography-h6': {
                fontSize: '1.063rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                marginBottom: 8,
                '& svg':{
                    marginLeft: 4,
                }
            },
        },
        '& #progress': {
            appearance: 'none',
            height:10,
            width:'100%',
            marginRight:10,
        },
        '& #progress::-webkit-progress-bar': {
            background: '#fff',
            borderRadius: 10,
        },
        '& #progress::-webkit-progress-value': {
            borderRadius: 10,
            background: '#1664f5',
            boxShadow: '0 0 10px 0 #6da0ff',
        },
    },
    boxStyle:{
        backgroundColor:'rgba(238, 238, 238, 0.8)',
        borderRadius:10,
        padding:'20px 16px',
        minHeight:111,
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        '& .MuiTypography-subtitle1':{
            fontSize:'0.875rem',
            color:'#656565',
            fontWeight:600,
        }
    },
    textStyle:{
        fontSize:'1.5rem',
        color:'#1664f5',
    },
    listStyle:{
        display:'flex',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    buttonStyle: {
        minWidth: 35,
        background: 'transparent',
        padding: 5,
        margin: '0 5px',
        '&:hover': {
            background: 'transparent',
        },
    },
    buttonStyleMargin: {
        margin: 0,
    },
    iconbtnStyle:{
        padding:0,
    },
    iconButton:{
        padding: 0,
        marginLeft: 15,
        '& svg':{
            width:18,
            height:18,
        },
        '&:hover':{
            background: 'transparent'
        }
    },
    explanationBox:{
        width:210,
        padding:'10px',
        background:'#2078e8',
        boxShadow:'0 2px 7px 0 rgba(0, 0, 0, 0.25)',
        borderRadius:3,
        position: 'absolute',
        zIndex:100,
        bottom:-140,
        left: -61,
        "&::before":{
            backgroundColor: '#2078e8',
            content: "''",
            display: 'block',
            height: '13px',
            position: 'absolute',
            top: -6,
            left: 115,
            transform: 'rotate( -227deg ) skew( 0deg )',
            width: '13px',
            zIndex:300
        }
    },
    infoExplanationBox:{
        bottom:-140,
        left: -25,
        '& svg':{
            width: 16,
            height: 16
        },
        "&::before":{
            top: -6,
            left: 115,
        }
    },
    stepContents:{
        fontSize: '0.813rem',
        color:'#fff',
        fontWeight:300,
        padding:0,
        margin:0,
        paddingLeft:'1.2rem',
        '& li':{
            marginTop:8,
            '&:first-child':{
                marginTop:0,
            }
        }
    },
});


class ClassNumericalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        const { classes } = this.props;
        // const { infoTooltip, toolTipOpen } = this.state;
        return (
            <div className={classes.root}>
                {/*<Typography variant={"h5"}>강의 <CaretRightIcon/></Typography>*/}
                <Box className={classes.contents}>
                    <Box>
                        <Typography variant={"h6"} style={{position:'relative'}}>진도율
                            <IconButton className={classes.iconbtnStyle} onClick={this.props.handleClickInfoTooltip} disableRipple>
                                <Info/>
                            </IconButton>
                            {this.props.infoTooltip &&
                            <Box className={classes.explanationBox}>
                                <Box display='flex' justifyContent='space-between' alignItems='flex-start'>
                                            <ul className={classes.stepContents}>
                                                <li>평균 진도율 : 전체 수강생 진도율의 평균입니다.</li>
                                                <li>권장 진도율 : 등록된 모든 강의를 전체 수강생이 1회 100% 학습한 평균입니다.</li>
                                            </ul>
                                    <IconButton className={classes.iconButton} onClick={this.props.handleCloseInfoTooltip} disableRipple>
                                        <X/>
                                    </IconButton>
                                </Box>
                            </Box>
                            }
                        </Typography>

                        <Box className={classes.boxStyle}>
                            <Typography variant={'subtitle1'}>평균 진도율</Typography>
                            <Box display='flex' alignItems='center' style={{marginBottom:8,}}>
                                <progress id="progress" value={this.props.progressValue} min="0" max="100"></progress>
                                <span className={classes.textStyle}>{this.props.progressValue}%</span>
                            </Box>
                            <Typography variant={'subtitle1'}>권장 진도율</Typography>
                            <Box display='flex' alignItems='center'>
                                <progress id="progress" value={this.props.progress2Value} min="0" max="100"></progress>
                                <span className={classes.textStyle}>{this.props.progress2Value}%</span>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant={"h6"} style={{position:'relative'}}>총 학습시간
                            <IconButton className={classes.iconbtnStyle} onClick={this.props.handleCloseTooltip} disableRipple>
                                <Info/>
                            </IconButton>
                            {this.props.toolTipOpen &&
                            <Box className={clsx(classes.explanationBox, classes.infoExplanationBox)}>
                                <Box display='flex' justifyContent='space-between' alignItems='flex-start'>
                                    <ul className={classes.stepContents}>
                                        <li>총 학습시간 : 전체 수강의 총 학습시간입니다.</li>
                                        <li>수강생 평균 : 전체 수강의 총 학습시간을 수강생으로 나눈 평균입니다.</li>
                                    </ul>
                                    <IconButton className={classes.iconButton} onClick={this.props.handleCloseInfoTooltip} disableRipple>
                                        <X/>
                                    </IconButton>
                                </Box>
                            </Box>
                            }
                        </Typography>
                        <Box className={classes.boxStyle}>
                            <Box className={classes.listStyle}  style={{marginBottom:14,}}>
                                <Typography variant={'subtitle1'}>총 학습시간</Typography>
                                <span className={classes.textStyle}>{this.props.totalLearningTime}</span>
                            </Box>
                            <Box className={classes.listStyle}>
                                <Typography  variant={'subtitle1'}>수강생 평균</Typography>
                                <span className={classes.textStyle}>{this.props.learningTime}</span>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(ClassNumericalComponent);