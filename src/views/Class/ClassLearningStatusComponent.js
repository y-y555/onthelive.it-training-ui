import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {ReactComponent as CaretRightIcon} from "../../common/images/CaretRightIcon.svg";
import {ReactComponent as Info} from "../../common/images/Info.svg";
import {ReactComponent as CloseWhiteIcon} from "../../common/images/CloseWhiteIcon.svg";
import {Typography, Box, Button, Tooltip, IconButton} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";
import clsx from 'clsx';

const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width: 620,
        padding: '10px 16px',
        boxSizing:'border-box',
        marginTop:60,
        marginBottom:60,
        '& h5':{
            fontSize:'1.5rem',
            fontWeight:600,
            marginBottom:30,
        }
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
    arrow: {
        position: 'absolute',
        fontSize: 6,
        top: -6,
        left: 'calc(50% - 8px)',
        marginTop: '-0.95em',
        width: '3em',
        height: '1em',
        zIndex:'-1',
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderRightWidth: '9px',
            borderLeftWidth: '9px',
            borderBottom: '17px solid #2078e8',
        },
    },
    closeBtn:{
        position: 'absolute',
        top:8,
        right:9,
        padding:0,
    },
});

const LightTooltip = withStyles(() => ({
    tooltip: {
        position:'relative',
        padding: '8px 10px 8px 30px',
        background: '#2078e8',
        fontFamily: 'NanumSquareRoundOTF',
        fontSize: '0.813rem',
        color: '#fff',
        borderRadius: 3,
        '& ul':{
            padding:0,
            margin:0,
            '& li':{
                marginTop:8,
                '&:first-child':{
                    marginTop:0,
                }
            }
        }
    },
}))(Tooltip);

class ClassLearningStatusComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progressValue:'37.5',
            progress2Value:'50.0',
            toolTipOpen: false,
        };
    }

    tooltipClose = () => {
        this.setState({ toolTipOpen: false });
    };

    tooltipOpen = () => {
        this.setState({ toolTipOpen: true });
    };


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography variant={"h5"}>학습현황 <CaretRightIcon/></Typography>
                <Box className={classes.contents}>
                    <Box>
                        <Typography variant={"h6"}>진도율
                            <LightTooltip
                                title={
                                    <React.Fragment>
                                        <IconButton className={classes.closeBtn} onClose={this.tooltipClose}><CloseWhiteIcon/></IconButton>
                                        <ul>
                                            <li>평균 진도율 : 전체 수강생 진도율의 평균입니다.</li>
                                            <li>권장 진도율 : 등록된 모든 강의를 전체 수강생이 1회 100% 학습한 평균입니다.</li>
                                        </ul>
                                        <span className={classes.arrow}/>
                                    </React.Fragment>
                                }
                                placement="bottom"
                                onClose={this.tooltipClose}
                                open={this.state.toolTipOpen}
                                disableFocusListener
                                disableHoverListener
                                disableTouchListener
                                PopperProps={{
                                    disablePortal: true,
                                }}
                                className={classes.tooltip}
                            >
                            <IconButton onClick={this.tooltipOpen} disableRipple className={classes.iconbtnStyle}><Info/></IconButton>
                            </LightTooltip>
                        </Typography>

                            {/*<Button className={clsx(classes.buttonStyle, classes.buttonStyleMargin)} disableRipple >*/}
                                {/*<FloppyDiskBack />*/}
                            {/*</Button>*/}

                        <Box className={classes.boxStyle}>
                            <Typography variant={'subtitle1'}>평균 진도율</Typography>
                            <Box display='flex' alignItems='center' style={{marginBottom:8,}}>
                                <progress id="progress" value={this.state.progressValue} min="0" max="100"></progress>
                                <span className={classes.textStyle}>{this.state.progressValue}%</span>
                            </Box>
                            <Typography variant={'subtitle1'}>권장 진도율</Typography>
                            <Box display='flex' alignItems='center'>
                                <progress id="progress" value={this.state.progress2Value} min="0" max="100"></progress>
                                <span className={classes.textStyle}>{this.state.progress2Value}%</span>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant={"h6"}>총 학습시간 <Info/></Typography>
                        <Box className={classes.boxStyle}>
                            <Box className={classes.listStyle}  style={{marginBottom:14,}}>
                                <Typography variant={'subtitle1'}>총 학습시간</Typography>
                                <span className={classes.textStyle}>100시간 10분</span>
                            </Box>
                            <Box className={classes.listStyle}>
                                <Typography  variant={'subtitle1'}>수강생 평균</Typography>
                                <span className={classes.textStyle}>1시간 20분</span>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(ClassLearningStatusComponent);