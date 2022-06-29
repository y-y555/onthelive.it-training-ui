import React, {Component} from 'react';
import {Avatar, Box, Button, Dialog, IconButton, Typography} from '@material-ui/core';
import {ReactComponent as DialogCloseIcon} from '../../common/images/DialogCloseIcon.svg';
import {withStyles} from '@material-ui/core/styles';
import TestAvatar from "../../common/images/TestAvatar.jpg";

const styles = theme => ({
    root:{

    },
    dialogBox:{
        '& .MuiBackdrop-root':{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)'
        },
        '& .MuiPaper-root':{
            width: 370,
            padding: 24,
            boxSizing: 'border-box',
            borderRadius: 10,
            boxShadow: '0 2.5px 5px 0 rgba(0, 0, 0, 0.25)'
        },
        '& *': {
            fontFamily: 'NanumSquareRoundOTF' ,
        }
    },
    titleBox:{

    },
    titleText:{
        fontSize: '1.25rem',
        color: '#000',
        fontWeight: 600
    },
    iconButton:{
        padding: 0,
        '&:hover':{
            background: 'transparent'
        }
    },
    boxStyle:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 43
    },
    avatar:{
        width:100,
        height:100
    },
    textStyle:{
        fontSize: '1.5rem',
        color: '#000',
        fontWeight: 600,
        textAlign: 'center',
        margin: '15px 0px 46px'
    },
    buttonStyle:{
        width: '100%',
        height: 48,
        borderRadius: 7,
        background: '#0097ff',
        color: '#fff',
        fontSize: '1.125rem',
        '&:hover':{
            background: '#0097ff'
        }
    },

});

class RoomInvitationUserDialogComponent extends Component {
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
                    open={true}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.titleBox}>
                        <Typography className={classes.titleText}>모임 초대장</Typography>
                        <IconButton className={classes.iconButton} disableRipple> <DialogCloseIcon /></IconButton>
                    </Box>

                    <Box className={classes.boxStyle}>
                        <Avatar src={TestAvatar} alt="profile image" className={classes.avatar} />
                        <Typography className={classes.textStyle}>김민희</Typography>

                        <Button className={classes.buttonStyle} disableRipple>모임 가입하기</Button>
                    </Box>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(RoomInvitationUserDialogComponent);