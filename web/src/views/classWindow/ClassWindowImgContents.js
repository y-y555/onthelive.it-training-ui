import React, {Component} from 'react';
import clsx from "clsx";
import {Box, Typography} from "@material-ui/core";
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
});

class ClassWindowImgContents extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { classes, typeButton2} = this.props;

        return (
            <div className={classes.root}>
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
            </div>
        );
    }
}

export default withStyles(styles)(ClassWindowImgContents);