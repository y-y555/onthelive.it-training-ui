import React, {Component} from 'react';
import clsx from "clsx";
import {Box, Button, Input, Typography} from "@material-ui/core";
import {ReactComponent as CheckSquareOffset} from "../../common/images/CheckSquareOffset.svg";
import TestImg from "../../common/images/TestImg.png";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    root:{

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
    imgBox1:{
        width: '100%',
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom:20
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
    caption: {
        width: 45,
        height: 20,
        borderRadius: 2,
        boxSizing: 'border-box',
        marginRight: 7,
        color: '#fff',
        '& svg': {
            marginRight: 3,
        },
    },
    captionBlue: {
        backgroundColor: '#4282fa',
    },
    captionPurple:{
        backgroundColor:'#8a42ff'
    },
    inputBox:{
        width: 35,
        borderBottom:0,
        '& .MuiInputBase-root':{
            fontSize:'0.938rem',
            // color: '#4282fa',
            color: '#8a42ff',
            fontWeight: 600,
        },
        '& .MuiInput-underline:after, .MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before ':{
            borderBottom:0
        }
    },
    numberText:{
        fontSize:'0.938rem',
        color: '#4282fa',
        fontWeight: 600
    },
    numberPurple:{
        fontSize:'0.938rem',
        color: '#8a42ff',
        fontWeight: 600
    },
    buttonStyle:{
        position: 'absolute',
        width: 100,
        height: 35,
        boxSizing:'border-box',
        border:'1px solid #bfbfbf',
        borderRadius: 4,
        bottom:-45,
        right: 0,
        '&:hover':{
            background:'transparent'
        }
    },
    studentBtn:{
        width: 112,
        height: 35,
        borderRadius: 4,
        background: '#568cf0',
        color: '#fff',
        '&:hover':{
            background: '#568cf0',
        }
    },
    answerText:{
        fontSize: '0.938rem',
        color:'#f00'
    },
});

class ClassWindowImgContents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scoreButton: false,
        };
    }

    handleClickButton = () => {
        this.setState({ scoreButton: !this.state.scoreButton });
    };

    render() {
        const { classes, typeButton2, classTab, students} = this.props;

        return (
            <div className={classes.root}>
                <Box className={typeButton2 ? clsx(classes.contentsBox,classes.contentsBox2) : classes.contentsBox}>
                    {classTab === 2 &&
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='flex-end' style={{position:'relative'}} mb={1}>
                        <Box display='flex' alignItems='center' >
                            <Box display='flex' justifyContent='center' alignItems='center'
                                 className={clsx(classes.caption, classes.captionPurple)}>
                                {/*<Typography>평가</Typography>*/}
                                <Typography>과제</Typography>
                            </Box>
                            {this.state.scoreButton ?
                                <Box className={classes.inputBox}>
                                    <Input
                                        placeholder=""
                                        inputProps={{
                                            'aria-label': 'Description',
                                        }}
                                    />
                                </Box>
                                :
                                <Typography className={classes.numberPurple}>-</Typography>
                            }
                            <Typography className={classes.numberPurple}>/100</Typography>
                        </Box>
                        <Button className={classes.buttonStyle} onClick={this.handleClickButton}
                                disableRipple>채점하기</Button>
                    </Box>
                    }
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
                    <Box mt={3} mb={2}>
                        {classTab === 2 ?
                            students ?
                                <Button className={classes.studentBtn} disableRipple>다른 응답 제출</Button>
                                :
                                <Typography className={classes.answerText}>정답: 정답입니다.</Typography>
                            :
                            null
                        }
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(ClassWindowImgContents);