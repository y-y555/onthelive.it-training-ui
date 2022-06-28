import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, IconButton, Typography} from "@material-ui/core";
import {ReactComponent as Info} from "../../common/images/Info.svg";
import clsx from "clsx";
import {ReactComponent as X} from "../../common/images/X.svg";

const styles = theme => ({
    root:{
        marginBottom: 60
    },
    positionToolTip:{
        position:'relative'
    },
    titleBox:{
        marginBottom: 20,
        '& svg':{
            width: 24,
            height: 24
        }
    },
    titleText:{
        fontSize: '1.5rem',
        fontWeight: 600,
        marginRight: 5
    },
    explanationBox:{
        width:325,
        padding:'10px',
        background:'#2078e8',
        boxShadow:'0 2px 7px 0 rgba(0, 0, 0, 0.25)',
        borderRadius:3,
        position: 'absolute',
        zIndex:100,
        top:40,
        left: -55,
        "&::before":{
            backgroundColor: '#2078e8',
            content: "''",
            display: 'block',
            height: '13px',
            position: 'absolute',
            top: -6,
            left: 160,
            transform: 'rotate( -227deg ) skew( 0deg )',
            width: '13px',
            zIndex:300
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
    iconButton:{
        padding: 0,
        '&:hover':{
            background: 'transparent'
        }
    },
    iconSize:{
        marginLeft: 15,
        '& svg':{
            width:18,
            height:18,
        },
    },
    box:{
        width: 'calc((100% / 4) - 30px)',
        height: 130,
        boxSizing:'border-box',
        borderRadius: 8,
        border:'1px solid #bfbfbf',
        background:'#fff',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    boxTitle:{
        fontSize: '1.188rem',
        fontWeight: 600,
    },
    boxNumber:{
        fontSize: '2.5rem',
        fontWeight: 600,
        color:'#1664f5',
        lineHeight: 1,
        marginTop: 15
    }
});

class LectureStatusComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toolTipOpen:false
        };
    }

    handleClickInfoTooltip = () => {
        this.setState({ toolTipOpen: !this.state.toolTipOpen });
    };

    handleCloseInfoTooltip = () => {
        this.setState({ toolTipOpen: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.positionToolTip}>
                    <Box display='flex' alignItems='center' className={classes.titleBox}>
                        <Typography className={classes.titleText}>수강 현황</Typography>
                        <IconButton className={classes.iconButton} onClick={this.handleClickInfoTooltip} disableRipple>
                            <Info />
                        </IconButton>
                    </Box>
                    {this.state.toolTipOpen &&
                        <Box className={classes.explanationBox}>
                            <Box display='flex' justifyContent='space-between' alignItems='flex-start'>
                                <ul className={classes.stepContents}>
                                    <li>개설 강의실: 강사가 개설한 전체 강의실 개수</li>
                                    <li>개설 강의: 강사가 개설한 전체 강의실에서 등록한 강의 개수</li>
                                    <li>전체 수강생: 전체 강의에서 수강신청한 수강생 수</li>
                                    <li>활성 수강생: 전체 강의에서 수강신청하고 현재 강의 강의 진행 중인 수강생 수 (수료자 포함)</li>
                                </ul>
                                <IconButton className={clsx(classes.iconButton, classes.iconSize)} onClick={this.handleCloseInfoTooltip} disableRipple>
                                    <X/>
                                </IconButton>
                            </Box>
                        </Box>
                    }
                </Box>

                <Box display='flex' justifyContent='space-between'>
                    <Box className={classes.box}>
                        <Typography className={classes.boxTitle}>가입 강의실</Typography>
                        <Typography className={classes.boxNumber}>5</Typography>
                    </Box>
                    <Box className={classes.box}>
                        <Typography className={classes.boxTitle}>수강 중</Typography>
                        <Typography className={classes.boxNumber}>10</Typography>
                    </Box>
                    <Box className={classes.box}>
                        <Typography className={classes.boxTitle}>수강 대기</Typography>
                        <Typography className={classes.boxNumber}>1</Typography>
                    </Box>
                    <Box className={classes.box}>
                        <Typography className={classes.boxTitle}>수료</Typography>
                        <Typography className={classes.boxNumber}>5</Typography>
                    </Box>
                </Box>

            </div>
        );
    }
}

export default withStyles(styles)(LectureStatusComponent);