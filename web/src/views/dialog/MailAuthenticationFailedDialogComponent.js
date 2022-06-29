import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, IconButton} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";
import clsx from "clsx";


const style = theme => ({
    root:{
    },
    dialogBox:{
        '& .MuiDialog-paper':{
            position:'relative',
            borderRadius:12,
            padding:'48px 10px 8px',
        },
        '& .MuiDialogContentText-root':{
            fontFamily: 'NanumSquareRoundOTF' ,
            fontSize:'1.25rem',
            color:'#000',
            letterSpacing: '-0.25px',
            marginTop:30,
            marginBottom:30,
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
    buttonStyle:{
        width:123,
        height:40,
        background:'#c2c2c2',
        color:'#fff',
        fontSize:'1.063rem',
        fontWeight:600,
        borderRadius:7,
        "&:hover":{
            background:'#c2c2c2',
        }
    },
    saveButton:{
        background:'#0097ff',
        marginLeft:20,
        "&:hover":{
            background:'#0097ff',
        }
    },
});


class MailAuthenticationFailedDialogComponent extends React.Component {
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
                    open={this.props.openMail}
                    className={classes.dialogBox}
                >
                    <IconButton disableRipple onClick={this.props.handleClose} className={classes.closeBtn}>
                        <DialogCloseIcon/>
                    </IconButton>
                    <DialogContent>
                        <DialogContentText>
                            메일 인증이 완료되지 않습니다.<br/> 입력한 메일 주소에서 인증 확인해주세요.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions display='flex' justifyContent='flex-end'>
                        <Button className={clsx(classes.buttonStyle, classes.saveButton)} onClick={this.props.handleClose} disableRipple>
                            확인
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
};

export default withStyles(style)(MailAuthenticationFailedDialogComponent);