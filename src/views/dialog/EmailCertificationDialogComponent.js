import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Avatar,
    Box,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton, Link,
    Typography
} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";
import TestAvatar from "../../common/images/TestAvatar.jpg";

const styles = theme => ({
    root:{

    },
    dialogBox:{
        '& .MuiDialog-paper':{
            position:'relative',
            borderRadius:12,
            padding:'8px 0',
        },
        '& .MuiTypography-h6':{
            fontFamily: 'NanumSquareRoundOTF' ,
            fontWeight:600,
        },
        '& .MuiDialogContentText-root':{
            fontFamily: 'NanumSquareRoundOTF' ,
            fontSize:'1.125rem',
            color:'#000',
            letterSpacing: '-0.25px',
            marginTop:10,
        }
    },
    closeBtn:{
        position:'absolute',
        top:16,
        right:12,
        "&:hover":{
            background: 'transparent',
        }
    },
    link:{
        color:'#0097ff',
        textDecoration:'underline',
        marginLeft: 4,
        cursor:'pointer'
    }
});

class EmailCertificationDialogComponent extends Component {
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
                    open={this.props.open}
                    className={classes.dialogBox}
                >
                    <DialogTitle>
                        인증메일 발송
                    </DialogTitle>
                    <IconButton disableRipple onClick={this.props.handleClose} className={classes.closeBtn}>
                        <DialogCloseIcon/>
                    </IconButton>
                    <DialogContent>
                        <DialogContentText>
                            입력한 이메일 주소로 보내드린 확인해주세요.<br/> 인증 메일을 인증 메일을 못 받으셨나요?
                            <Link className={classes.link}>다시 받기</Link>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(EmailCertificationDialogComponent);