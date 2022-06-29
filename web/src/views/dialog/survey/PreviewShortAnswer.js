import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {Box, Input, Typography} from "@material-ui/core";
import Sample1 from "../../../common/images/Sample1.jpg";

const style = theme => ({
    root:{
        width:'100%',
        border: '1px solid #c4c9de',
        borderRadius: 8,
        marginBottom: 40,
        padding:'30px 20px 25px',
        boxSizing:'border-box',
        "& .MuiInput-underline:after, .MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before ":{
            borderBottom:0
        },
        "& label + .MuiInput-formControl":{
            marginTop:0
        }
    },
    textStyle:{
        fontSize: '1.125rem',
        color: '#a3a8af',
        fontWeight: 600,
    },
    explanationText:{
        fontSize: '0.75rem',
        fontWeight: 400,
        marginTop:12
    },
    inputBoxIn:{
        width:'100%',
        fontSize: '0.875rem',
        color: '#0d0d0d',
        fontWeight: 500,
        borderBottom:'1px solid #979797',
        paddingLeft: 13,
        "&::placeholder":{
            color:'#a3a8af'
        }
    },
    titleImgBox:{
        width: 241,
        height: 181,
        overflow:'hidden',
        display:'flex',
        alignItems:'center'
    },
});

class PreviewShortAnswer extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {/* 단답형 제목입력 x */}
                {/*<Typography className={classes.textStyle}>좌측 질문 제목이 노출됩니다</Typography>*/}
                {/*<Typography className={clsx(classes.textStyle, classes.explanationText)}>좌측 설문지 질문에 대한 설명이 노출됩니다</Typography>*/}

                {/* 단답형 제목입력 o (필수 체크  -> * ) */}
                <Typography className={classes.textStyle} style={{color:'#0d0d0d'}}>좌측 질문 제목이 노출됩니다 <span style={{color:'#FF0000'}}>*</span></Typography>
                <Typography className={clsx(classes.textStyle, classes.explanationText)} style={{color:'#0d0d0d'}}>좌측 설문지 질문에 대한 설명이 노출됩니다</Typography>

                {/* 이미지가 있는경우*/}
                <Box className={classes.titleImgBox} mb={2}>
                    <img src={Sample1} alt="" style={{width:'100%'}}/>
                </Box>

                <Box style={{marginTop: 28}}>
                    <Input
                        placeholder="참여자 답변이 노출됩니다"
                        className={clsx(classes.textStyle, classes.inputBoxIn)}
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                    />
                </Box>
            </div>
        );
    }
}

export default withStyles(style)(PreviewShortAnswer);