import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, IconButton, Typography} from "@material-ui/core";
import {ReactComponent as Info} from "../../common/images/Info.svg";
import {ReactComponent as X} from "../../common/images/X.svg";

const styles = _theme => ({
    root:{
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
        left: -76,
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
});

class ProgressRate extends Component {
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
                    <Typography className={classes.titleText}>진도율</Typography>
                    <IconButton className={classes.iconBtnStyle} onClick={this.props.handleClickInfoTooltip} disableRipple>
                        <Info/>
                    </IconButton>
                    {this.props.infoTooltip &&
                        <Box className={classes.explanationBox}>
                            <Box display='flex' justifyContent='space-between' alignItems='flex-start'>
                                <ul className={classes.stepContents}>
                                    <li>평균 진도율 : 전체 수강생 진도율의 평균입니다.</li>
                                    <li>권장 진도율 : 등록된 모든 강의를 전체 수강생이 1회 100% 학습한 평균입니다.</li>
                                </ul>
                                <IconButton className={classes.iconBtnStyle} onClick={this.props.handleCloseInfoTooltip} disableRipple>
                                    <X/>
                                </IconButton>
                            </Box>
                        </Box>
                    }
                </Box>

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
            </div>
        );
    }
}

export default withStyles(styles)(ProgressRate);