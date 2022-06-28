import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, CircularProgress, IconButton, Typography} from "@material-ui/core";
import {ReactComponent as Info} from "../../common/images/Info.svg";
import {ReactComponent as X} from "../../common/images/X.svg";
import clsx from "clsx";

const styles = theme => ({
    root:{
        width: 'calc(100% - 350px - 50px)',
        marginBottom: 60
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
        bottom:-70,
        left: 48,
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
    box:{
        padding: '40px 20px',
        height: 'calc(100% - 34px)',
        borderRadius: 10,
        boxSizing:'border-box',
        border:'1px solid #bfbfbf',
        background:'#ffff'
    },
    circle:{
        width: 12,
        height: 12,
        borderRadius: '50%',
        marginRight: 4
    },
    red:{
        background:'#fb4a59'
    },
    black:{
        background:'#000'
    },
    green:{
        background:'#00c880'
    },
    blue:{
        background:'#4282fa'
    },
    purple:{
        background:'#8a42ff'
    },
    textStyle:{
        fontSize: '0.875rem'
    },
    numberBox:{
        '@media all and (min-width: 1500px)': {
            width: 'calc((100% / 5) - 40px)',
        },
        width: 'calc((100% / 5) - 20px)',
        height: 65,
        boxSizing: 'border-box',
        borderRadius: 10,
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.25)',
        border:'1px solid #d9d9d9',
        background:'#fff',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    numberText:{
        fontSize:'0.938rem',
        color: '#1e2121',
        margin: '5px 0'
    },
    numberText2:{
        fontSize:'0.938rem',
        fontWeight:600,
        color:'#ff0000'
    },
    graphBox:{
        '@media all and (min-width: 1500px)': {
            width: 'calc((100% / 5) - 40px)',
        },
        width: 'calc((100% / 5) - 20px)',
        height: 120,
        '& .MuiCircularProgress-root':{
            width: '100% !important',
            height: '100% !important',
            display:'flex'
        },
    },
    topCircle:{
        position:'absolute',
        zIndex:100,
    },
    colorBarRad:{
        '& circle':{
            stroke: '#fb4a59'
        }
    },
    colorBarBlack:{
        '& circle':{
            stroke: '#000'
        }
    },
    colorBarGreen:{
        '& circle':{
            stroke: '#00c880'
        }
    },
    colorBarBlue:{
        '& circle':{
            stroke: '#4282fa'
        }
    },
    colorBarPurple:{
        '& circle':{
            stroke: '#8a42ff'
        }
    },
    bottomCircle:{
        position:'absolute',
        '&.MuiCircularProgress-root':{
            color:'rgba(238, 238, 238, 0.8)'
        }
    },
    circleText:{
        fontSize: '1.688rem',
        fontWeight: 600,
    }
});

class StatisticGraph extends Component {
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
                    <Typography className={classes.titleText} >강의 유형별 평균 진도률</Typography>
                    <IconButton className={classes.iconBtnStyle} onClick={this.props.handleClickAverageTooltip} disableRipple>
                        <Info/>
                    </IconButton>
                    {this.props.averageTooltip &&
                        <Box className={classes.explanationBox}>
                            <Box display='flex' justifyContent='space-between' alignItems='flex-start'>
                                <ul className={classes.stepContents}>
                                    <li>전체 강의에 포함된 ‘라이브, 동영상, 실습, 평가, 과제' 개수 대비 수강생 평균 진도률</li>
                                </ul>
                                <IconButton className={classes.iconBtnStyle} onClick={this.props.handleCloseInfoTooltip} disableRipple>
                                    <X/>
                                </IconButton>
                            </Box>
                        </Box>
                    }
                </Box>

                <Box className={classes.box}>
                    <Box display='flex' alignItems='center'>
                        <Box display='flex' alignItems='center' mr={3}>
                            <Box className={clsx(classes.circle, classes.red)} />
                            <Typography className={classes.textStyle}>라이브 (LIVE)</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' mr={3}>
                            <Box className={clsx(classes.circle, classes.black)} />
                            <Typography className={classes.textStyle}>동영상 (VOD)</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' mr={3}>
                            <Box className={clsx(classes.circle, classes.green)} />
                            <Typography className={classes.textStyle}>실습</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' mr={3}>
                            <Box className={clsx(classes.circle, classes.blue)} />
                            <Typography className={classes.textStyle}>평가</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' mr={3}>
                            <Box className={clsx(classes.circle, classes.purple)} />
                            <Typography className={classes.textStyle}>과제</Typography>
                        </Box>
                    </Box>

                    <Box display='flex' alignItems='center' justifyContent='space-between' mt={5}>
                        <Box className={classes.numberBox}>
                            <Typography className={classes.numberText}>LIVE 강의</Typography>
                            <Typography className={classes.numberText2}>10개</Typography>
                        </Box>
                        <Box className={classes.numberBox}>
                            <Typography className={classes.numberText}>VOD 강의</Typography>
                            <Typography className={classes.numberText2}>2개</Typography>
                        </Box>
                        <Box className={classes.numberBox}>
                            <Typography className={classes.numberText}>실습 강의</Typography>
                            <Typography className={classes.numberText2}>2개</Typography>
                        </Box>
                        <Box className={classes.numberBox}>
                            <Typography className={classes.numberText}>평가</Typography>
                            <Typography className={classes.numberText2}>2개</Typography>
                        </Box>
                        <Box className={classes.numberBox}>
                            <Typography className={classes.numberText}>과제</Typography>
                            <Typography className={classes.numberText2}>2개</Typography>
                        </Box>
                    </Box>
                    <Box display='flex' alignItems='center' justifyContent='space-between' mt={5}>
                        <Box sx={{ position: 'relative', display: 'inline-flex' }} className={classes.graphBox}>
                            <CircularProgress className={clsx(classes.topCircle, classes.colorBarRad)} variant="determinate" value={15}/>
                            <CircularProgress className={classes.bottomCircle} variant="determinate" value={100} />
                            <Box
                                sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography className={classes.circleText}>
                                    15%
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ position: 'relative', display: 'inline-flex' }} className={classes.graphBox}>
                            <CircularProgress className={clsx(classes.topCircle, classes.colorBarBlack)} variant="determinate" value={67}/>
                            <CircularProgress className={classes.bottomCircle} variant="determinate" value={100} />
                            <Box
                                sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography className={classes.circleText}>
                                    67%
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ position: 'relative', display: 'inline-flex' }} className={classes.graphBox}>
                            <CircularProgress className={clsx(classes.topCircle, classes.colorBarGreen)} variant="determinate" value={80}/>
                            <CircularProgress className={classes.bottomCircle} variant="determinate" value={100} />
                            <Box
                                sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography className={classes.circleText}>
                                    80%
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ position: 'relative', display: 'inline-flex' }} className={classes.graphBox}>
                            <CircularProgress className={clsx(classes.topCircle, classes.colorBarBlue)} variant="determinate" value={74}/>
                            <CircularProgress className={classes.bottomCircle} variant="determinate" value={100} />
                            <Box
                                sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography className={classes.circleText}>
                                    74%
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ position: 'relative', display: 'inline-flex' }} className={classes.graphBox}>
                            <CircularProgress className={clsx(classes.topCircle, classes.colorBarPurple)} variant="determinate" value={56}/>
                            <CircularProgress className={classes.bottomCircle} variant="determinate" value={100} />
                            <Box
                                sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography className={classes.circleText}>
                                    56%
                                </Typography>
                            </Box>
                        </Box>


                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(StatisticGraph);