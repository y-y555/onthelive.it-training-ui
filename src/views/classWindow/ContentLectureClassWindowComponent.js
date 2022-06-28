import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Input, Typography} from "@material-ui/core";
import TestVideoImg from "../../common/images/TestVideoImg.png";
import {ReactComponent as VideoPlayIcon} from '../../common/images/VideoPlayIcon.svg';
import {ReactComponent as CheckSquareOffset} from '../../common/images/CheckSquareOffset.svg';
import clsx from "clsx";
import TestImg from "../../common/images/TestImg.png";

const styles = theme => ({
    root:{
        width:'100%',
        minHeight: 'calc(100vh - 59px)',
        background:'#fafafa',
        padding: '0 20px 0',
        boxSizing:'border-box'
    },
    topText:{
        width: 70,
        fontSize: '1.25rem',
    },
    chip:{
        padding: '4px 10px',
        background: '#eee',
        borderRadius: 30,
        margin: '3px 6px',
        '&:hover':{
            background:'#eee'
        }
    },
    contentsBox:{
        width: 690,
        border:'1px solid #1664f5',
        borderTop: '4px solid #1664f5',
        borderRadius:8,
        boxSizing:'border-box',
        padding: '25px 35px 5px',
        background:'#fff',
        marginBottom: 20
    },
    contentsBox2:{
        width: '100%',
        '@media all and (min-width: 1500px)': {
            width: 690,
        },
    },
    titleText:{
        fontSize: '1.875rem',
        fontWeight: 600
    },
    titleText2:{
        '@media all and (max-width: 1500px)': {
            fontSize: '1.25rem',
        },
    },
    videoBox:{
        width: '100%',
        height: 'auto',
        border: '1px solid rgba(0, 0, 0, 0.6)',
        borderRadius: 8,
        boxSizing: 'border-box',
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom:20
    },
    imgBox1:{
        width: '100%',
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom:20
    },
    marginBottom:{
        marginBottom:20
    },
    textStyle:{
        fontSize: '1.125rem'
    },
    textStyle2:{
        '@media all and (max-width: 1500px)': {
            fontSize:'0.875rem'
        },
    },
    bold:{
        fontWeight: 600
    },
    imgBox:{
        width: '100%',
        height: '100%',
        overflow:'hidden',
        display:'flex',
        alignItems: 'center',
        position:'relative',
        cursor:'pointer',
        '& > img':{
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'contain',
        },
        '& svg':{
            position:'absolute'
        }
    },
    lineStyle:{
        position:'absolute',
        width:'4%',
        minHeight: 'calc(100vh - 59px)',
        borderLeft:'1px dashed #000',
        borderRight:'1px dashed #000',
        left: '50%',
        top: 59,
        transform: 'translate(-50%,0)'
    },
    leftBox:{
        width:'50%',
        boxSizing:'border-box',
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        padding: '0 30px 0 15px',
        borderRight:'1px solid #dbdbdb',
        overflowY:'auto',
        overflowX:'hidden',
        "&::-webkit-scrollbar": {
            width: '15px',
        },
        "&::-webkit-scrollbar-thumb": {
            background: '#dbdbdb',
            borderRadius: '10px',
            backgroundClip: 'padding-box',
            border: '5px solid transparent'
        },
        "&::-webkit-scrollbar-track": {
            background: 'transparent',
            marginTop: 5,
        },
    },
    rightBox:{
        padding: '0 15px 0 30px',
        borderRight: 0
    },
    inputBox:{
        width:'80%',
        display:'flex',
        alignItems:'center',
        borderBottom:'1px solid #c4c9de',
        "& .MuiInput-underline:after, .MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before ":{
            borderBottom:0
        },
    },
    inputBox2:{
        '@media all and (max-width: 1500px)': {
            width:'100%',
        },
    },
    inputBoxIn:{
        width:'100%',
        paddingLeft: 13,
        "&::placeholder":{
            color:'#a3a8af'
        }
    },
    inputBoxIn2:{
        '@media all and (max-width: 1500px)': {
            fontSize:'0.875rem'
        },
    },
});

class ContentLectureClassWindowComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chipList: [
                {name: 'Spring Security'},
                {name: '암호화'},
                {name: '윈도우 파일 시스템'},
                {name: '네트워크 프로토콜'},
                {name: 'SSL'},
                {name: 'IPSEC'},
                {name: '윈도우 및 리눅스 방화벽'},
            ],
            previewPc: true,
            typeButton1:true,
            typeButton2:false
        };
    }

    render() {
        const { classes } = this.props;
        const { previewPc, typeButton1, typeButton2 } = this.state;

        const videoContents = (
            <Box className={typeButton2 ? clsx(classes.contentsBox,classes.contentsBox2) : classes.contentsBox} >
                <Box className={classes.marginBottom}>
                    <Typography className={typeButton2 ? clsx(classes.titleText, classes.titleText2) :classes.titleText}>인터넷 기반의 각종 해킹, 침해에 대응하는 보안기술!</Typography>
                </Box>


                <Box className={classes.videoBox}>
                    <Box className={classes.imgBox} style={{justifyContent:'center'}}>
                        <img src={TestVideoImg} alt="동영상"/>

                        <VideoPlayIcon/>

                    </Box>
                </Box>

                <Box className={classes.marginBottom}>
                    <Typography className={typeButton2 ? clsx(classes.textStyle, classes.textStyle2) : classes.textStyle}>
                        · 윈도우 파일시스템 구조<br/>
                        - Master File Table 및 개인정보파일 검색<br/><br/>

                        · 메모리 분석, 파일 실행이력관리<br/>
                        - 네트워크 프로토콜 구조
                    </Typography>
                </Box>
            </Box>
        );

        const imgContents = (
            <Box className={typeButton2 ? clsx(classes.contentsBox,classes.contentsBox2) : classes.contentsBox}>
                <Box className={classes.marginBottom}>
                    <Typography className={typeButton2 ? clsx(classes.titleText, classes.titleText2) :classes.titleText}>[실습 가이드]</Typography>
                </Box>

                <Box className={classes.marginBottom}>
                    <Box display='flex' alignItems='center' mb={2}>
                        <CheckSquareOffset/>
                        <Typography className={typeButton2 ? clsx(classes.textStyle, classes.textStyle2, classes.bold) : clsx(classes.textStyle, classes.bold)}>준비물을 확인해주세요!</Typography>
                    </Box>
                    <Typography className={typeButton2 ? clsx(classes.textStyle, classes.textStyle2) : classes.textStyle}>
                        ·실습은 윈도우 환경과 버추얼 박스 가상 환경에서 진행됩니다.<br/>
                        ·강의 실습을 원할하게 하기 위해서는 램 8GB, 하드디스크 용량 100GB 정도가 필요합니다.<br/>
                        ·준비물에 대한 자세한 내용은 오리엔테이션 수업을 참고 부탁드립니다.
                    </Typography>
                </Box>

                <Box className={classes.imgBox1}>
                    <Box className={classes.imgBox} style={{justifyContent:'center'}}>
                        <img src={TestImg} alt="이미지"/>
                    </Box>
                </Box>

            </Box>
        );

        const quizContents = (
            <Box className={typeButton2 ? clsx(classes.contentsBox,classes.contentsBox2) : classes.contentsBox}>
                <Box className={classes.marginBottom}>
                    <Typography className={typeButton2 ? clsx(classes.titleText, classes.titleText2) :classes.titleText}>[퀴즈]</Typography>
                </Box>

                <Box className={classes.marginBottom}>
                    <Box display='flex' alignItems='center' mb={2}>
                        <Typography className={typeButton2 ? clsx(classes.textStyle, classes.textStyle2, classes.bold) : clsx(classes.textStyle, classes.bold)}>Q. O, X 로 답을 해주세요.</Typography>
                    </Box>
                    <Typography className={typeButton2 ? clsx(classes.textStyle, classes.textStyle2) : classes.textStyle}>
                        1. MFT Record의 크기는 512Bytes 이다.
                    </Typography>
                    <Box className={typeButton2 ? clsx(classes.inputBox,classes.inputBox2) : classes.inputBox} mt={1} mb={2}>
                        <Input
                            placeholder="내답변"
                            className={typeButton2 ? clsx(classes.inputBoxIn, classes.inputBoxIn2) : classes.inputBoxIn}
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />
                    </Box>
                    <Typography className={typeButton2 ? clsx(classes.textStyle, classes.textStyle2) : classes.textStyle}>
                        2. 클러스터 크기는 파일 시스템 생성 시 설정이 가능하다.
                    </Typography>
                    <Box className={typeButton2 ? clsx(classes.inputBox,classes.inputBox2) : classes.inputBox} mt={1} mb={2}>
                        <Input
                            placeholder="내답변"
                            className={typeButton2 ? clsx(classes.inputBoxIn, classes.inputBoxIn2) : classes.inputBoxIn}
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        );

        return (
            <div className={classes.root}>
                <Box display='flex' alignItems='flex-start' pt={3} mb={6}>
                    <Typography className={classes.topText}>태그</Typography>
                    <Box display='flex' alignItems='center' flexWrap='wrap'>
                        {this.state.chipList.map((chip, i) => (
                            <Button key={i} className={classes.chip} disableRipple>{chip.name}</Button>
                        ))}
                    </Box>
                </Box>

                {typeButton1 ?
                    previewPc ?
                        <Box display='flex' flexDirection='column' alignItems='center' >
                            {videoContents}
                        </Box>
                        :
                        null
                    :
                    previewPc ?
                        <Box display='flex' justifyContent='space-between'>
                            <Box className={classes.leftBox} style={{height: 'calc(100vh - 59px - 111px)'}}>
                                {videoContents}
                                {imgContents}
                                {quizContents}
                            </Box>
                            <Box className={clsx(classes.leftBox, classes.rightBox)} style={{height: 'calc(100vh - 59px - 111px)'}}>
                                {videoContents}
                            </Box>
                        </Box>
                        :
                        null
                }

            </div>
        );
    }
}

export default withStyles(styles)(ContentLectureClassWindowComponent);