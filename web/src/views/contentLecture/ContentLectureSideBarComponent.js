import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, IconButton, Typography} from "@material-ui/core";
import {ReactComponent as CheckCircle} from "../../common/images/CheckCircle.svg";
import {ReactComponent as PlayCircle} from "../../common/images/PlayCircle.svg";
import {ReactComponent as Code} from "../../common/images/Code.svg";
import {ReactComponent as Exam} from "../../common/images/Exam.svg";
import {ReactComponent as Notebook} from "../../common/images/Notebook.svg";
import clsx from "clsx";
import {ReactComponent as Info} from "../../common/images/Info.svg";
import {ReactComponent as CameraOn} from "../../common/images/CameraOn.svg";
import {ReactComponent as AddCircle} from "../../common/images/AddCircle.svg";
import {ReactComponent as VideoCheckIcon} from "../../common/images/VideoCheckIcon.svg";
import {ReactComponent as Paperclip} from "../../common/images/Paperclip.svg";
import {ReactComponent as Close} from "../../common/images/Close.svg";
import {ReactComponent as X} from "../../common/images/X.svg";

const styles = _theme => ({
    root:{
        width: 133,
        minHeight: 'calc(100vh - 59px)',
        padding: '20px 12px',
        borderRight: '1px solid #c0c2c3',
        boxSizing:'border-box'
    },
    titleText:{
        fontSize: '0.875rem',
        fontWeight: 600,
        marginRight: 5,
    },
    textStyle:{
        fontSize: '0.813rem',
        color:'#000'
    },
    buttonStyle:{
        padding: 0,
        '&:hover':{
            background:'transparent'
        }
    },
    iconStyle:{
        '& .check-circle':{
            fill:'#a3a8af'
        }
    },
    imgButtonStyle:{
        width: '100%',
        height: 137,
        padding: 7,
        background:'#d9d9d9',
        borderRadius: 7,
        marginTop:5,
        marginBottom: 20,
        boxSizing: 'border-box',
        '&:hover':{
            background:'#d9d9d9'
        },
        '& > span':{
            height: '100%',
        }
    },
    imgButtonStyleSelect:{
        border:'3px solid rgba(22, 100, 245, 0.8)'
    },
    columnBox:{
        '& > span':{
            display:'flex',
            flexDirection:'column'
        }
    },
    rowBox:{
        width: '50%',
        height: '100%',
        padding: 3,
        background:'#fff',
        borderRadius: 5,
        boxSizing:'border-box',
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center'
    },
    spanBox:{
        width: '100%',
        background:'#fff',
        padding: 3,
        borderRadius: 5,
        boxSizing:'border-box',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    margin:{
        marginTop: 4,
        marginBottom: 4
    },
    lineStyle:{
        width:37,
        height: 1,
        background:'#dedede',
        marginTop:3,
        marginBottom:3
    },
    explanationBox:{
        width:380,
        padding:10,
        background:'#2078e8',
        boxShadow:'0 2px 7px 0 rgba(0, 0, 0, 0.25)',
        borderRadius:10,
        position: 'absolute',
        zIndex:100,
        bottom:33,
        left:125,
        "&::before":{
            backgroundColor: '#2078e8',
            content: "''",
            display: 'block',
            height: '13px',
            position: 'absolute',
            top: 38,
            left: -7,
            transform: 'rotate( -227deg ) skew( 0deg )',
            width: '13px',
            // boxShadow: '2px -2px 2px 0 rgb(178 178 178 / 20%)',
            zIndex:200
        }
    },
    infoExplanationBox:{
        width:270,
        padding:'10px 10px 10px 0',
        borderRadius:3,
        bottom: -56,
        '& svg':{
            width: 16,
            height: 16
        },
        "&::before":{
            top: 52,
        },
        '& ul':{
            margin: 0,
            marginRight: 10,
            paddingLeft: 25
        }
    },
    stepText:{
        fontSize:'0.813rem',
        color:'#abd0fe',
        fontWeight:300,
        marginRight: 14
    },
    stepContents:{
        fontSize:'1.125rem',
        color:'#fff',
        fontWeight:300
    },
    titleTextTooltip:{
        fontWeight: 600,
        fontSize: '1.375rem'
    },
    infoStepContents:{
        fontSize: '0.813rem',
        textAlign:'justify',
        '&:first-child':{
            marginBottom: 10
        }
    },
    bottomButtonStyle:{
        padding: 0,
        marginTop: 10,
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
    iconButton:{
        padding:0,
        '&:hover':{
            background:'transparent'
        }
    },
    input:{
        display:'none'
    },
    buttonText:{
        width: 90,
        fontSize:'0.813rem',
        color:'#1A457E',
        textTransform: 'none'
    }
});

class ContentLectureSideBarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tooltip: true,
            infoTooltipOpen: false,
            videoButton: false,
        };
    }

    handleCloseTooltip = () => {
        this.setState({
            tooltip: false ,
        });
    };

    handleCloseInfoTooltip = () => {
        this.setState({
            infoTooltipOpen: false,
        });
    };

    handleClickInfoTooltip = () => {
        this.setState({ infoTooltipOpen: !this.state.infoTooltipOpen });
    };

    handleClickVideoButton = () => {
        this.setState({ videoButton: !this.state.videoButton });
    };

    render() {
        const { classes, typeButton1, typeButton2, handleChangeTypeButton1, handleChangeTypeButton2 } = this.props;
        const { tooltip, infoTooltipOpen } = this.state;

        return (
            <div className={classes.root}>
                <Typography className={classes.titleText}>레이아웃</Typography>
                <Box style={{position:'relative'}} mt={2}>
                    <Box>
                       <Button className={classes.buttonStyle} onClick={handleChangeTypeButton1} disableRipple>
                           <CheckCircle className={typeButton1 ? null : classes.iconStyle}/>
                           <Typography className={classes.textStyle}>1단 세로형</Typography>
                       </Button>
                        <Button className={clsx(classes.imgButtonStyle, classes.columnBox, typeButton1 ? classes.imgButtonStyleSelect : null)} onClick={handleChangeTypeButton1} disableRipple>
                            <span className={classes.spanBox}><PlayCircle/></span>
                            <span className={clsx(classes.spanBox, classes.margin)}><Code/></span>
                            <span className={classes.spanBox}><Exam/></span>
                       </Button>
                    </Box>

                    {tooltip &&
                        <Box className={classes.explanationBox}>
                            <Box display='flex' justifyContent='space-between' alignItems='flex-end'>
                                <Box display='flex' alignItems='center'>
                                    <Typography className={classes.stepText}>단계 1 of 2</Typography>
                                    <Typography className={clsx(classes.stepContents, classes.titleTextTooltip)}>레이아웃 선택하기</Typography>
                                </Box>
                                <IconButton className={classes.iconButton} onClick={this.handleCloseTooltip} disableRipple>
                                    <X style={{marginBottom: 10}}/>
                                </IconButton>
                            </Box>
                            <Typography className={classes.stepContents}>수강생들에게 보여주는 강의 콘텐츠를 배치하기 위해 레이아웃부터
                                선택하세요.</Typography>
                        </Box>
                    }
                </Box>

                <Box mb={6}>
                    <Button className={classes.buttonStyle} onClick={handleChangeTypeButton2} disableRipple>
                        <CheckCircle className={typeButton2 ? null : classes.iconStyle}/>
                        <Typography className={classes.textStyle}>2단 세로형</Typography>
                    </Button>
                    <Button className={clsx(classes.imgButtonStyle, typeButton2 ? classes.imgButtonStyleSelect : null)} onClick={handleChangeTypeButton2} disableRipple>
                        <span className={classes.rowBox} style={{marginRight:5}}>
                            <PlayCircle/>
                            <span className={classes.lineStyle} />
                            <Code/>
                            <span className={classes.lineStyle} />
                            <Notebook/>
                        </span>
                        <span className={classes.rowBox}>
                            <Exam/>
                        </span>
                    </Button>
                </Box>

                <Box display='flex' alignItems='center' style={{position:'relative'}}>
                    <Typography className={classes.titleText}>위젯 추가</Typography>
                    <IconButton className={classes.iconButton} onClick={this.handleClickInfoTooltip} disableRipple>
                        <Info/>
                    </IconButton>
                    {infoTooltipOpen &&
                        <Box className={clsx(classes.explanationBox, classes.infoExplanationBox)}>
                            <Box display='flex' justifyContent='space-between' alignItems='flex-start'>
                                <ul>
                                    <li className={clsx(classes.stepContents, classes.infoStepContents)}>
                                        화상 강의: ‘+’버튼을 눌러 추가하면 실제 강의 화면의 상단 메뉴바 > 강의 제목 좌측에 노출됩니다. 미리보기에서 확인할 수 있습니다.
                                    </li>
                                    <li className={clsx(classes.stepContents, classes.infoStepContents)}>
                                        파일 첨부: 파일을 첨부해주세요. 실제 강의 화면의 상단 메뉴바 좌측에 노출됩니다.
                                    </li>
                                </ul>
                                <IconButton className={classes.iconButton} onClick={this.handleCloseInfoTooltip} disableRipple>
                                    <X/>
                                </IconButton>
                            </Box>
                        </Box>
                    }

                </Box>
                <Button
                    className={classes.bottomButtonStyle}
                    onClick={this.handleClickVideoButton}
                    disableRipple
                >
                    <CameraOn/>
                    <Typography className={classes.buttonTextStyle}>화상 강의</Typography>
                    {!this.state.videoButton ?
                        <AddCircle/>
                        :
                        <VideoCheckIcon/>
                    }
                </Button>
                <input accept="*" className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                    <Button
                        component="span"
                        className={classes.bottomButtonStyle}
                        disableRipple
                    >
                        <Paperclip/>
                        <Typography className={classes.buttonTextStyle}>파일 첨부</Typography>
                    </Button>
                </label>
                <Button
                    className={classes.bottomButtonStyle}
                    disableRipple
                >
                    <Typography className={classes.buttonText} noWrap>filename.html</Typography>
                    <Close/>
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(ContentLectureSideBarComponent);