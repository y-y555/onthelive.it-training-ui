import React, {Component} from 'react';
import {Box, Dialog, IconButton, Typography} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    root:{
    },
    dialogBox:{
        "& .MuiPaper-root":{
            width:390,
            padding:24,
            boxSizing:'border-box',
            borderRadius:10,
            boxShadow:'0 2.5px 5px 0 rgba(0, 0, 0, 0.25)'
        },
        "& *": {
            fontFamily: 'NanumSquareRoundOTF' ,
        }
    },
    titleBox:{
        marginBottom:25
    },
    titleText:{
        fontSize:'1.25rem',
        color:'#000',
        fontWeight:600
    },
    iconButton:{
        padding:0,
        "&:hover":{
            background:'transparent'
        }
    },
    boxStyle:{
        padding:'12px 10px',
        border:'1px solid #d9dbde',
        borderRadius: 8,
        height:240,
        boxSizing:'border-box',
        overflowY:'auto',
        "&::-webkit-scrollbar": {
            width: '10px',
        },
        "&::-webkit-scrollbar-thumb": {
            background: '#bebebe',
            borderRadius: '10px',
            backgroundClip: 'padding-box',
            border: '3px solid transparent'
        },
        "&::-webkit-scrollbar-track": {
            background: 'transparent',
            marginTop: 5,
        },
    },
    textStyle:{
        fontSize:'1rem',
        color:'#333'
    },
    spanStyle:{
        textDecoration:'underline'
    }
});

class IntroductionDialogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Dialog
                    open={this.props.dialogOpen}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.titleBox}>
                        <Typography className={classes.titleText}>강의 내용</Typography>
                        <IconButton className={classes.iconButton} disableRipple onClick={this.props.handleClose}> <DialogCloseIcon /></IconButton>
                    </Box>

                    <Box className={classes.boxStyle}>
                        <Typography className={classes.textStyle}>
                            악성코드의 다양한 샘플 분석 방법을 이해하고 실습을 교육합니다. 최근 이슈되고 있는 문서형 악성코드, 파워쉘 악성코드, 랜섬웨어 악성코드 등을 실습 중심으로 교육합니다.<br/>
                            {/*😀🤡👏🏻👍🏻🤟🏻🐧☀️🌈<br/>*/}
                            {/*<span className={classes.spanStyle}>onthelive.kr</span>*/}
                        </Typography>
                    </Box>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(IntroductionDialogComponent);