import React, {Component} from 'react';
import {Box, Button, Dialog, IconButton, Typography} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../../common/images/DialogCloseIcon.svg";
import {withStyles} from "@material-ui/core/styles";
import clsx from "clsx";

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
    iconButton:{
        padding:0,
        "&:hover":{
            background:'transparent'
        }
    },
    textStyle:{
        fontSize:'1.25rem',
        color:'#000',
        textAlign:'center',
        margin:'70px 0 95px'
    },
    buttonStyle:{
        width:120,
        height:40,
        background:'#c2c2c2',
        borderRadius: 4,
        color:'#fff',
        fontSize:'1.125rem',
        "&:hover":{
            background:'#c2c2c2',
        },
        "&.Mui-disabled":{
            background:'#c2c2c2',
            color:'#fff'
        }
    },
    btnStyle:{
        background:'#0097ff',
        marginLeft:10,
        "&:hover":{
            background:'#0097ff',
        }
    }
});

class MemberWithdrawalDialogComponent extends Component {
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
                    open={this.props.memberWithdrawalDialogOpen}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='flex-end' alignItems='center'>
                        <IconButton className={classes.iconButton} onClick={this.props.handleClose} disableRipple>
                            <DialogCloseIcon/>
                        </IconButton>
                    </Box>

                    <Typography className={classes.textStyle}>선택한 멤버를 강제 탈퇴시키겠습니까?</Typography>

                    <Box display='flex' justifyContent='flex-end' alignItems='center'>
                        <Button className={clsx(classes.buttonStyle, classes.btnStyle)} disableRipple>강제탈퇴</Button>
                    </Box>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(MemberWithdrawalDialogComponent);