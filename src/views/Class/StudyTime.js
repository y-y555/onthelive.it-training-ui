import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, IconButton, Typography} from "@material-ui/core";
import {ReactComponent as Info} from "../../common/images/Info.svg";
import clsx from "clsx";
import {ReactComponent as X} from "../../common/images/X.svg";

const styles = theme => ({
    root:{

    },
    titleBox:{
        position:'relative',
        marginBottom: 8,
        '& svg':{
            marginLeft: 4,
        }
    },
    titleText:{
        fontSize: '1.063rem',
        fontWeight: 600,
    },
    iconBtnStyle:{
        padding:0,
    },
    explanationBox:{
        width:255,
        padding:'10px',
        background:'#2078e8',
        boxShadow:'0 2px 7px 0 rgba(0, 0, 0, 0.25)',
        borderRadius:3,
        position: 'absolute',
        zIndex:100,
        bottom:-93,
        left: -40,
        "&::before":{
            backgroundColor: '#2078e8',
            content: "''",
            display: 'block',
            height: '13px',
            position: 'absolute',
            top: -6,
            left: 130,
            transform: 'rotate( -227deg ) skew( 0deg )',
            width: '13px',
            zIndex:300
        },
        '& svg':{
            width: 16,
            height: 16
        },
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
});

class StudyTime extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Box display='flex' alignItems='center' className={classes.titleBox} >
                    <Typography className={classes.titleText}>총 학습시간</Typography>
                    <IconButton className={classes.iconBtnStyle} onClick={this.props.handleCloseTooltip} disableRipple>
                        <Info/>
                    </IconButton>
                    {this.props.toolTipOpen &&
                        <Box className={classes.explanationBox}>
                            <Box display='flex' justifyContent='space-between' alignItems='flex-start'>
                                <ul className={classes.stepContents}>
                                    <li>총 학습시간 : 전체 수강의 총 학습시간입니다.</li>
                                    <li>수강생 평균 : 전체 수강의 총 학습시간을 수강생으로 나눈 평균입니다.</li>
                                </ul>
                                <IconButton className={classes.iconBtnStyle} onClick={this.props.handleCloseInfoTooltip} disableRipple>
                                    <X/>
                                </IconButton>
                            </Box>
                        </Box>
                    }
                </Box>
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
            </div>
        );
    }
}

export default  withStyles(styles)(StudyTime);