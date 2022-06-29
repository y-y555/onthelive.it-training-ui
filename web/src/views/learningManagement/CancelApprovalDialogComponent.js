import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Dialog, IconButton, InputBase, TextareaAutosize, Typography} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";
import clsx from "clsx";

const styles = theme => ({
    root:{
    },
    dialogBox:{
        "& .MuiPaper-root":{
            width:490,
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
        marginBottom:30
    },
    titleText:{
        fontSize:'1.25rem',
        color:'#000',
        fontWeight:600,
        marginBottom:14,
    },
    textField:{
        marginBottom:20,
        "& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            border:'1px solid #d9dbde'
        },
        "& .MuiOutlinedInput-root":{
            borderRadius:7,
            "&:hover":{
                borderColor:'#d9dbde'
            }
        },
        "& .MuiOutlinedInput-input":{
            padding:'12px 10px',
            color:'#333',
            fontSize:'1rem',
            "&::placeholder":{
                color:'#a3a8af',
                opacity:1,
                fontWeight: 300,
            },
        },
    },
    textareaStyle: {
        border:'1px solid #d9dbde',
        borderRadius:7,
        padding: '10px 10px',
        overflowY: 'auto',
        resize: 'none',
        boxSizing:'border-box',
        fontSize:'1rem',
        color:'#333',
        background:'transparent',
        "&::placeholder": {
            color:'#a3a8af',
            opacity:1,
            fontWeight: 300,
        },
        "&:focus": {
            outline: 'none',
        },
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
    buttonStyle:{
        width:160,
        height:40,
        margin:'20px 10px 0 10px',
        background:'#fff',
        color:'#c2c2c2',
        fontSize:'1rem',
        padding:'12px 0',
        borderRadius:7,
        border:'1px solid #c2c2c2',
        "&:hover":{
            background:'#fff',
        },
        "&.Mui-disabled":{
            background:'#c2c2c2',
            color:'#fff'
        }
    },
    buttonStyleActive:{
        background:'#929292',
        color:'#fff',
        borderColor: '#929292',
        "&:hover":{
            background:'#929292',
        }
    },
    iconButton:{
        padding:0,
        "&:hover":{
            background:'transparent'
        }
    },
    label:{
        fontSize:'1rem',
        fontWeight:600,
        marginBottom:12,
        '&:after':{
            content:'"*"',
            color:'#ff0000'
        }
    }
});

const BootstrapInput = withStyles(theme => ({
    root: {
        width: 290,
        borderBottom:'1px solid #d9dbde',
        marginBottom: 20
    },
    input: {
        borderRadius: 0,
        position: 'relative',
        backgroundColor: 'transparent',
        border: '0',
        fontSize:'1rem',
        color:'#000',
        '&:focus': {
            background:'transparent'
        },
        '&.MuiSelect-select':{
            paddingRight:5,
        },
    },
}))(InputBase);


class CancelApprovalDialogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Dialog
                    open={this.props.dialogOpen}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' alignItems='flex-start' className={classes.titleBox}>
                        <Box>
                            <Typography className={classes.titleText}>승인취소</Typography>
                            <Typography>신청자명 님의 강의명 강의를 승인취소하시겠습니까?<br/> 승인취소하면 신청자에게 취소알림이 발송됩니다.</Typography>
                        </Box>
                        <IconButton className={classes.iconButton} disableRipple onClick={this.props.handleClose}> <DialogCloseIcon /></IconButton>
                    </Box>

                    <Box display='flex' flexDirection='column'>
                        <Typography className={classes.label}>취소사유</Typography>
                        <TextareaAutosize
                            name="contents"
                            minRows={7}
                            maxRows={7}
                            aria-label="content input box"
                            className={classes.textareaStyle}
                            placeholder='신청자가 이해할 수 있도록 사유를 입력해보세요. (최대 200자 이내)'
                        />
                    </Box>
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <Button className={classes.buttonStyle} disableRipple>
                            취소
                        </Button>
                        <Button className={clsx(classes.buttonStyle,classes.buttonStyleActive)} disableRipple>
                            확인
                        </Button>
                    </Box>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(CancelApprovalDialogComponent);