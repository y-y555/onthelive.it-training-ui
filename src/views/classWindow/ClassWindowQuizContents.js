import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {Box, Button, Input, Typography} from "@material-ui/core";
import CalendarButtonComponent from "../contentLecture/CalendarButtonComponent";

const styles = theme => ({
    root:{
        width: '100%',
    },
    contentsBox:{
        width: 690,
        border:'1px solid #1664f5',
        borderTop: '4px solid #1664f5',
        borderRadius:8,
        boxSizing:'border-box',
        padding: '25px 35px 5px',
        background:'#fff',
        marginBottom: 20,
        margin:'0 auto'
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
    titleText:{
        width: 'calc(100% - 140px)',
        fontSize: '1.875rem',
        fontWeight: 600
    },
    titleText2:{
        '@media all and (max-width: 1500px)': {
            fontSize: '1.25rem',
        },
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
    inputBox1:{
        width: 35,
        borderBottom:0,
        '& .MuiInputBase-root':{
            fontSize:'0.938rem',
            color: '#4282fa',
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

class ClassWindowQuizContents extends Component {
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
        const { classes, typeButton2, classTab, students } = this.props;

        return (
            <div className={classes.root}>
                <Box className={typeButton2 ? clsx(classes.contentsBox,classes.contentsBox2) : classes.contentsBox}>
                    {classTab === 2 &&
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='flex-end' style={{position:'relative'}}>
                        <Box display='flex' alignItems='center' >
                            <Box display='flex' justifyContent='center' alignItems='center'
                                 className={clsx(classes.caption, classes.captionBlue)}>
                                <Typography>평가</Typography>
                            </Box>
                            {this.state.scoreButton ?
                                <Box className={classes.inputBox1}>
                                    <Input
                                        placeholder=""
                                        inputProps={{
                                            'aria-label': 'Description',
                                        }}
                                    />
                                </Box>
                                :
                                <Typography className={classes.numberText}>-</Typography>
                            }
                            <Typography className={classes.numberText}>/100</Typography>
                        </Box>
                        <Button className={classes.buttonStyle} onClick={this.handleClickButton}
                                disableRipple>채점하기</Button>
                    </Box>
                    }

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

export default withStyles(styles)(ClassWindowQuizContents);