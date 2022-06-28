import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {Box, Input, Typography} from "@material-ui/core";

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
});

class ClassWindowQuizContents extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { classes, typeButton2 } = this.props;

        return (
            <div className={classes.root}>
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
            </div>
        );
    }
}

export default withStyles(styles)(ClassWindowQuizContents);