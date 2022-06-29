import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    IconButton,
    DialogActions,
    Typography
} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";
import clsx from "clsx";


const style = theme => ({
    root:{
        '& *':{
            fontFamily: 'NanumSquareRoundOTF' ,
        }
    },
    dialogBox:{
        '& .MuiDialog-paper':{
            position:'relative',
            borderRadius:12,
            padding:'26px 22px',
            width: 400,
        },
        '& .MuiDialogContentText-root':{
            fontFamily: 'NanumSquareRoundOTF' ,
            fontSize:'1rem',
            color:'#000',
            letterSpacing: '-0.25px',
            marginBottom:14,
        },
        '& .MuiDialogContent-root':{
            padding:0,
        }
    },
    titleBox:{
        marginBottom:20
    },
    titleText:{
        fontSize:'1.25rem',
        color:'#000',
        fontWeight:600,
        fontFamily: 'NanumSquareRoundOTF' ,
    },
    errorTxt:{
        color:'#ff0000',
        marginBottom:14,
    },
    contentList:{
        paddingLeft:20,
        marginBottom:20,
        '& li':{
            marginTop:6,
        },
    },
    closeBtn:{
        "&:hover":{
            background: 'transparent',
        }
    },
    buttonStyle:{
        width:'100%',
        height:48,
        background:'#1a457e',
        color:'#fff',
        fontSize:'1.125rem',
        fontWeight:400,
        borderRadius:7,
        "&:hover":{
            background:'#1a457e',
        }
    },
});


class LectureEndDialogComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Dialog
                    open={this.props.openEnd}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.titleBox}>
                        <Typography className={classes.titleText}>강의 종료</Typography>
                        <IconButton disableRipple onClick={this.props.handleClose} className={classes.closeBtn}>
                            <DialogCloseIcon/>
                        </IconButton>
                    </Box>

                    <DialogContent style={{marginBottom:20}}>
                        <Typography variant='body1' className={classes.errorTxt}>강의종료 전 꼭 확인하세요.</Typography>
                        <DialogContentText>
                            강의를 종료하면,
                        </DialogContentText>
                        <ul className={classes.contentList}>
                            <li>수강생이 '평가, 과제' 유형 제출이 더이상 불가</li>
                            <li>'화상 강의' 진행 불가</li>
                            <li>'실습 > 가상머신' 에 접근할 수 없습니다.</li>
                        </ul>
                    </DialogContent>
                    <DialogActions display='flex' justifyContent='flex-end'>
                        <Button className={classes.buttonStyle} onClick={this.props.handleClose} disableRipple>
                            강의 종료하기
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
};

export default withStyles(style)(LectureEndDialogComponent);