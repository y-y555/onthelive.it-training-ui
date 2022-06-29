import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, IconButton, Tooltip, Typography} from "@material-ui/core";
import {ReactComponent as SurveyDragIcon} from "../../common/images/SurveyDragIcon.svg";
import ButtonTopComponent from "./ButtonTopComponent";
import {ReactComponent as PlusCircleIcon} from "../../common/images/PlusCircleIcon.svg";
import {ReactComponent as Info} from "../../common/images/Info.svg";
import {ReactComponent as X} from "../../common/images/X.svg";
import {ReactComponent as CopyIcon} from "../../common/images/CopyIcon.svg";
import {ReactComponent as Remove} from "../../common/images/Remove.svg";
import clsx from "clsx";
import VideoContentsComponent from "./VideoContentsComponent";
import ImageContentsComponent from "./ImageContentsComponent";
import TextComponent from "./TextComponent";
import VirtualMachinesComponent from "./VirtualMachinesComponent";
import ScoreComponent from "./ScoreComponent";
import QuizComponent from "./QuizComponent";
import AnswerComponent from "./AnswerComponent";

const styles = theme => ({
    root:{
        position:'relative',
        width: 'calc(100% - 180px)',
        margin:'0 auto'
    },
    root2:{
        '@media all and (min-width: 1600px)': {
            width: 'calc(100% - 80px)',
        },
        '@media all and (min-width: 1960px)': {
            width: 'calc(100% - 180px)',
        },
        width: 'calc(100% - 40px)',
    },
    contentsBox:{
        width: '100%',
        border:'1px solid #1664f5',
        borderTop: '4px solid #1664f5',
        borderRadius:8,
        boxSizing:'border-box',
        padding: '14px 35px',
        background:'#fff'
    },
    buttonStyle:{
        width: 235,
        height: 40,
        background:'#1a457e',
        borderRadius: 7,
        boxSizing: 'border-box',
        boxShadow:'0 1px 1px 0 rgba(0, 0, 0, 0.25)',
        marginTop: 30,
        marginBottom:80,
        '&:hover':{
            background:'#1a457e',
        },
        '& span':{
            display:'flex',
            alignItems:'center'
        }
    },
    buttonText:{
        fontSize:'0.875rem',
        fontWeight: 500,
        color:'#fff',
        marginLeft: 7,
        lineHeight:1
    },
    explanationBox:{
        width:380,
        padding:'10px 10px 20px 15px',
        background:'#2078e8',
        boxShadow:'0 2px 7px 0 rgba(0, 0, 0, 0.25)',
        borderRadius:10,
        position: 'absolute',
        zIndex:100,
        bottom:0,
        left:145,
        "&::before":{
            backgroundColor: '#2078e8',
            content: "''",
            display: 'block',
            height: '13px',
            position: 'absolute',
            top: -6,
            left: 200,
            transform: 'rotate( -227deg ) skew( 0deg )',
            width: '13px',
            // boxShadow: '2px -2px 2px 0 rgb(178 178 178 / 20%)',
            zIndex:200
        },
    },
    //2단
    explanationBox2:{
        '@media all and (min-width: 1500px) and (max-width: 1800px)': {
            left: '15%',
        },
        '@media all and (max-width: 1500px)': {
            width:280,
            left: '20%',
            "&::before":{
                left: 150,
            },
        },
    },
    infoExplanationBox:{
        width:210,
        padding:'10px',
        bottom:-70,
        left:'inherit',
        right: -99,
        borderRadius:3,
        zIndex:2000,
        '& svg':{
            width: 16,
            height: 16
        },
        "&::before":{
            top: -6,
            left: 115,
        },
    },
    //2단
    infoExplanationBox2:{
        '@media all and (max-width: 1600px)': {
            width:180,
            right: -30,
            "&::before":{
                left: 154,
            }
        },
    },
    valuationExplanationBox:{
        bottom:-90,
        right: -99,
    },
    valuationExplanationBox2:{
        bottom:-90,
        '@media all and (max-width: 1600px)': {
            bottom:-108,
            right: -30,
        },
    },
    trainingExplanationBox2:{
        '@media all and (max-width: 1600px)': {
            bottom:-90,
        },
    },
    stepText:{
        fontSize:'0.813rem',
        color:'#abd0fe',
        fontWeight:300,
        marginRight: 14,
    },
    stepContents:{
        fontSize:'1.125rem',
        color:'#fff',
        fontWeight:300,
    },
    stepContents2:{
        '@media all and (max-width: 1500px)': {
            fontSize:'0.938rem',
        },
    },
    infoStepContents:{
        fontSize: '0.813rem'
    },
    titleText:{
        fontWeight: 600,
        fontSize: '1.375rem',

    },
    // 2단
    titleText2:{
        '@media all and (max-width: 1500px)': {
            fontSize:'1rem',
        },
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
    iconButton:{
        padding:0,
        '&:hover':{
            background:'transparent'
        }
    },
    marginLeft:{
        marginLeft: 10
    }
});

class DragDropComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoAnchorEl: null,
            trainingAnchorEl: null,
            evaluationAnchorEl: null,
            taskAnchorEl: null,
            tooltip: true,
            infoTooltip: false,

            //
            video: true,
            training: false,
            evaluation: false,
            task: false,

            //
            videoButton: false,
            imageButton: false,
            textButton: false,
            virtualMachinesButton: false,
            quizButton: false,
        };
    }

    handleClickVideoPopover = event => {
        this.setState({
            videoAnchorEl: event.currentTarget,
            video: true,
            training: false,
            evaluation: false,
            task: false,
        });
    };

    handleClickTrainingPopover = event => {
        this.setState({
            trainingAnchorEl: event.currentTarget,
            video: false,
            training: true,
            evaluation: false,
            task: false,
        });
    };

    handleClickEvaluationPopover = event => {
        this.setState({
            evaluationAnchorEl: event.currentTarget,
            video: false,
            training: false,
            evaluation: true,
            task: false,
        });
    };

    handleClickTaskPopover = event => {
        this.setState({
            taskAnchorEl: event.currentTarget,
            video: false,
            training: false,
            evaluation: false,
            task: true,
        });
    };

    handleClosePopover = () => {
        this.setState({
            videoAnchorEl: null,
            trainingAnchorEl: null,
            evaluationAnchorEl: null,
            taskAnchorEl: null,
        });
    };

    handleCloseTooltip = () => {
        this.setState({ tooltip: false });
    };

    handleCloseInfoTooltip = () => {
        this.setState({ infoTooltip: false });
    };

    handleClickInfoTooltip = () => {
        this.setState({ infoTooltip: !this.state.infoTooltip });
    };

    // sub메뉴
    handleClickVideo = () => {
        this.setState({ videoButton: true });
    };

    handleClickImage = () => {
        this.setState({ imageButton: true });
    };

    handleClickText = () => {
        this.setState({ textButton: true });
    };

    handleClickVirtualMachines = () => {
        this.setState({ virtualMachinesButton: true });
    };

    handleClickQuiz = () => {
        this.setState({ quizButton: true });
    };


    handleClickRemove = () => {
        this.setState({
            videoButton: false,
            imageButton: false,
            textButton: false,
            virtualMachinesButton: false,
            quizButton: false,
        });
    };

    render() {
        const { classes, typeButton2 } = this.props;
        const { videoAnchorEl, trainingAnchorEl, evaluationAnchorEl, taskAnchorEl, tooltip, infoTooltip, video, training, evaluation, task } = this.state;
        const videoOpen = Boolean(videoAnchorEl);
        const trainingOpen = Boolean(trainingAnchorEl);
        const valuationOpen = Boolean(evaluationAnchorEl);
        const taskOpen = Boolean(taskAnchorEl);

        return (
            <div className={typeButton2 ? clsx(classes.root, classes.root2) : classes.root }>
                <Box className={classes.contentsBox}>
                    <Box display='flex' justifyContent='center'>
                        <SurveyDragIcon style={{cursor: 'pointer'}}/>
                    </Box>
                    <ButtonTopComponent
                        videoAnchorEl={this.state.videoAnchorEl}
                        trainingAnchorEl={this.state.trainingAnchorEl}
                        evaluationAnchorEl={this.state.evaluationAnchorEl}
                        taskAnchorEl={this.state.taskAnchorEl}
                        handleClickVideoPopover={this.handleClickVideoPopover}
                        handleClickTrainingPopover={this.handleClickTrainingPopover}
                        handleClickEvaluationPopover={this.handleClickEvaluationPopover}
                        handleClickTaskPopover={this.handleClickTaskPopover}
                        handleClosePopover={this.handleClosePopover}
                        videoOpen={videoOpen}
                        trainingOpen={trainingOpen}
                        valuationOpen={valuationOpen}
                        taskOpen={taskOpen}
                        //
                        handleClickVideo={this.handleClickVideo}
                        handleClickImage={this.handleClickImage}
                        handleClickText={this.handleClickText}
                        handleClickVirtualMachines={this.handleClickVirtualMachines}
                        handleClickQuiz={this.handleClickQuiz}
                        //
                        typeButton2={typeButton2}
                    />
                    <Box display='flex' justifyContent='flex-end' style={{position:'relative'}}>
                        <IconButton className={classes.iconButton} style={{marginBottom: 5}} onClick={this.handleClickInfoTooltip} disableRipple>
                            <Info/>
                        </IconButton>

                        {infoTooltip &&
                        <Box
                            className={
                                typeButton2 ?
                                    clsx(classes.explanationBox, classes.infoExplanationBox, classes.infoExplanationBox2, evaluation ? classes.valuationExplanationBox2 : training ? classes.trainingExplanationBox2 : null)
                                    :
                                    clsx(classes.explanationBox, classes.infoExplanationBox, evaluation ? classes.valuationExplanationBox : null)}>
                            <Box display='flex' justifyContent='space-between' alignItems='flex-start'>
                                {video ?
                                    <Typography className={clsx(classes.stepContents, classes.infoStepContents)}>
                                        동영상 위아래에 이미지, 텍스트를 추가할 수 있습니다.
                                    </Typography>
                                    :
                                    training ?
                                        <Typography className={clsx(classes.stepContents, classes.infoStepContents)}>
                                            가상머신 (VMware)을 이용하여 실습 환경을 만들 수 있습니다.
                                        </Typography>
                                        :
                                        evaluation?
                                            <Typography className={clsx(classes.stepContents, classes.infoStepContents)}>
                                                객관식 단답형, 객관식 다답형, 주관식 등 여러 유형에서 선택하세요.
                                                각 퀴즈에 답안과 점수를 설정해보세요.
                                            </Typography>
                                            :
                                            task?
                                                <Typography className={clsx(classes.stepContents, classes.infoStepContents)}>
                                                    과제는 이미지, 텍스트, 이미지 + 로 작성할 수 있습니다.
                                                </Typography>
                                                :
                                                <Typography className={clsx(classes.stepContents, classes.infoStepContents)}>
                                                    동영상 위아래에 이미지, 텍스트를 추가할 수 있습니다.
                                                </Typography>

                                }
                                <IconButton className={classes.iconButton} onClick={this.handleCloseInfoTooltip} disableRipple>
                                    <X/>
                                </IconButton>
                            </Box>
                        </Box>
                        }
                    </Box>

                    {video ?
                        <VideoContentsComponent/>
                        :
                        training ?
                            <ImageContentsComponent/>
                            :
                            evaluation ?
                                <QuizComponent/>
                                :
                                task ?
                                    <>
                                        <ImageContentsComponent/>
                                        <ScoreComponent/>
                                    </>
                                    :
                                    <VideoContentsComponent/>
                    }

                    {/* 동영상 */}
                    {this.state.videoButton &&
                        <VideoContentsComponent/>
                    }

                    {/* 이미지 */}
                    {this.state.imageButton ?
                        evaluation ?
                            <>
                                <ImageContentsComponent/>
                                <AnswerComponent evaluation={evaluation}/>
                            </>
                            :
                            task ?
                                <>
                                    <ImageContentsComponent/>
                                    <ScoreComponent/>
                                </>
                                :
                                <ImageContentsComponent />
                        :
                        null
                    }

                    {/* 텍스트  */}
                    {this.state.textButton &&
                        <TextComponent/>
                    }

                    {/* 가상 머신*/}
                    {this.state.virtualMachinesButton &&
                        <VirtualMachinesComponent/>
                    }

                    {/* 퀴즈*/}
                    {this.state.quizButton &&
                        <QuizComponent/>
                    }


                    <Box display='flex' justifyContent='flex-end' alignItems='center' mt={2}>
                        <Tooltip title="복제" classes={{ tooltip: classes.lightTooltip }}>
                            <IconButton className={classes.iconButton} disableRipple><CopyIcon/></IconButton>
                        </Tooltip>
                        <Tooltip title="삭제" classes={{ tooltip: classes.lightTooltip }}>
                            <IconButton
                                className={clsx(classes.iconButton, classes.marginLeft)}
                                disableRipple
                                onClick={this.handleClickRemove}
                            >
                                <Remove/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
                {tooltip &&
                    <Box className={typeButton2 ? clsx(classes.explanationBox, classes.explanationBox2) : classes.explanationBox}>
                        <Box display='flex' justifyContent='space-between' alignItems='flex-end' mb={2}>
                            <Box display='flex' alignItems='center'>
                                <Typography className={classes.stepText}>단계 2 of 2</Typography>
                                <Typography className={typeButton2 ? clsx(classes.stepContents, classes.titleText, classes.titleText2) : clsx(classes.stepContents, classes.titleText)}>강의 콘텐츠 만들기</Typography>
                            </Box>
                            <IconButton className={classes.iconButton} onClick={this.handleCloseTooltip} disableRipple>
                                <X style={{marginBottom: 10}}/>
                            </IconButton>
                        </Box>
                        <Typography className={typeButton2 ? clsx(classes.stepContents, classes.stepContents2) : classes.stepContents}>콘텐츠 유형 (동영상, 실습, 평가, 과제)을 선택하면강의 내용을 디자인할 수 있습니다.</Typography>
                    </Box>
                }
                <Button className={classes.buttonStyle} disableRipple>
                    <PlusCircleIcon/>
                    <Typography className={classes.buttonText}>콘텐츠 추가</Typography>
                </Button>
            </div>
        );
    }
}

export default  withStyles(styles)(DragDropComponent);