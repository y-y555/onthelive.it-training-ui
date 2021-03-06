import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputBase,
    MenuItem,
    Select,
    Tooltip,
    Typography
} from "@material-ui/core";
import {ReactComponent as ArrowCounterClockwise} from "../../common/images/ArrowCounterClockwise.svg";
import {ReactComponent as Desktop} from "../../common/images/Desktop.svg";
import {ReactComponent as Mobile} from "../../common/images/Mobile.svg";
import {ReactComponent as Eye} from "../../common/images/Eye.svg";
import {ReactComponent as Info} from "../../common/images/Info.svg";
import clsx from "clsx";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import ScheduleRegistrationComponent from "../dialog/ScheduleRegistrationComponent";
import {withRouter} from "react-router-dom";
import {ReactComponent as VodIcon} from "../../common/images/VodIcon.svg";
import {ReactComponent as DotIcon} from "../../common/images/DotIcon.svg";
import {ReactComponent as CameraOn} from "../../common/images/CameraOn.svg";
import LectureEndDialogComponent from "../dialog/LectureEndDialogComponent";
import MailAuthenticationFailedDialogComponent from "../dialog/MailAuthenticationFailedDialogComponent";
import CourseCompletionDialogComponent from "../dialog/CourseCompletionDialogComponent"

const styles = theme => ({
    root:{
        height: 59,
        boxSizing:'border-box',
        // display:'flex',
        // justifyContent:'space-between',
        // alignItems:'center',
        borderBottom:'1px solid #c0c2c3',
        padding:'13px 12px',
    },
    lineStyle:{
        width: 1,
        height: 24,
        background: '#a3a8af',
        margin: '0 10px',
    },
    textStyle:{
        fontSize: '0.875rem',
        fontWeight: 600,
        color:'rgba(0, 0, 0, 0.5)'
    },
    titleText:{
        fontSize: '0.875rem',
        fontWeight: 600,
        marginRight: 15
    },
    iconButton:{
        padding: 0,
        '&:hover':{
            background:'transparent'
        }
    },
    margin:{
        margin: '0 10px',
    },
    buttonStyle:{
        width: 126,
        height: 30,
        boxSizing:'border-box',
        background:'#fff',
        border:'1px solid #c4c4c4',
        borderRadius: 2,
        fontSize:'0.938rem',
        color:'#1e2121',
        margin: '0 10px',
        '&:hover':{
            background:'#fff'
        }
    },
    saveButton:{
        background:'#c7c9cc',
        border:'1px solid #c7c9cc',
        color:'#fff',
        '&:hover':{
            background:'#c7c9cc'
        }
    },
    btnStyle:{
        background:'#1a457e',
        border:'1px solid #1a457e',
        color:'#fff',
        '&:hover':{
            background:'#1a457e'
        }
    },
    menuText:{
        fontFamily: 'NanumSquareRoundOTF' ,
        fontSize:'0.75rem',
        color:'#0d0d0d',
        "&:hover":{
            background:'#d3d7db'
        }
    },
    caption:{
        width: 43,
        height: 20,
        borderRadius: 2,
        boxSizing: 'border-box',
        margin: '0 5px',
        color:'#fff',
        '& svg':{
            marginRight:3,
        },
    },
    captionText:{
        fontSize:'0.75rem',
        fontWeight:600,
        paddingTop: 2,
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
    captionBlue:{
        backgroundColor:'#4282fa',
    },
    captionPurple:{
        backgroundColor:'#8a42ff',
    },
    lightTooltip: {
        backgroundColor: '#FFFFF5',
        color: '#000',
        border:'1px solid #000',
        fontSize:'0.688rem',
        borderRadius:0,
        marginLeft:0,
        marginTop:8
    },
    bottomButtonStyle:{
        padding: 0,
        marginLeft: 15,
        '&:hover':{
            background:'transparent',
        },
        '& span':{
            display:'flex',
            alignItems: 'center'
        }
    },
    buttonTextStyle:{
        fontSize:'0.813rem',
        margin:'0 5px'
    },
});

class ClassWindowTopBarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openEnd:false,
        };
    }

    handleClickBack = e => {
        this.props.history.push("/class");
    };

    handleClickEnd = () => {
        this.setState({ openEnd: true });
    };

    handleClose = () => {
        this.setState({
            openEnd: false,
        });
    };
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Box display='flex' alignItems='center'>
                    <Typography className={classes.textStyle}>?????? ?????????</Typography>
                    <Box className={classes.lineStyle}/>
                    <Box display='flex' alignItems='center'>
                        <Typography className={classes.titleText}>??? ?????? ?????? ??????</Typography>
                    </Box>

                     <Box display='flex' justifyContent='center' alignItems='center' className={clsx(classes.caption, classes.captionLive)}>
                         <DotIcon/>
                         <Typography className={classes.captionText}>LIVE</Typography>
                    </Box>
                    <Box display='flex' justifyContent='center' alignItems='center' className={clsx(classes.caption, classes.captionVod)}>
                        <VodIcon/>
                        <Typography className={classes.captionText}>VOD</Typography>
                    </Box>
                    <Box display='flex' justifyContent='center' alignItems='center' className={clsx(classes.caption, classes.captionGreen)}>
                        <Typography className={classes.captionText}>??????</Typography>
                    </Box>
                    <Box display='flex' justifyContent='center' alignItems='center' className={clsx(classes.caption, classes.captionBlue)}>
                        <Typography className={classes.captionText}>??????</Typography>
                    </Box>
                    <Box display='flex' justifyContent='center' alignItems='center' className={clsx(classes.caption, classes.captionPurple)}>
                        <Typography className={classes.captionText}>??????</Typography>
                    </Box>
                    <Tooltip title="?????? ????????? ????????? ???????????????." classes={{tooltip: classes.lightTooltip}}>
                        <Button
                            className={classes.bottomButtonStyle}
                            disableRipple
                        >
                            <CameraOn/>
                            <Typography className={classes.buttonTextStyle}>?????? ??????</Typography>
                        </Button>
                    </Tooltip>

                </Box>
                <Box display='flex' alignItems='center'>
                    <Button className={clsx(classes.buttonStyle, classes.btnStyle)} onClick={this.handleClickEnd} disableRipple>
                        ????????????
                    </Button>
                    <Button className={classes.buttonStyle} onClick={this.handleClickBack} disableRipple>
                        ?????????
                    </Button>
                </Box>
                </Box>
                <LectureEndDialogComponent
                    openEnd={this.state.openEnd}
                    handleClose={this.handleClose}
                />
                <CourseCompletionDialogComponent
                    openEnd={this.state.openEnd}
                    handleClose={this.handleClose}
                />
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(ClassWindowTopBarComponent));