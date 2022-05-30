import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Avatar, Box, Dialog, IconButton, Typography} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";
import TestAvatar from "../../common/images/TestAvatar.jpg";

const styles = theme => ({
    root:{

    },
    dialogBox:{
        "& .MuiPaper-root":{
            width:380,
            padding:'11px 12px 0 0',
            boxSizing:'border-box',
            borderRadius:10,
            boxShadow:'0 2.5px 5px 0 rgba(0, 0, 0, 0.25)'
        },
        "& *": {
            fontFamily: 'NanumSquareRoundOTF' ,
        }
    },
    boxStyle:{
        padding:'44px 0 79px'
    },
    avatar:{
        width:100,
        height:100
    },
    nameText:{
        fontSize:'1.5rem',
        color:'#0d0d0d',
        fontWeight:600,
        marginTop:15
    },
    iconButton:{
        padding:0,
        "&:hover":{
            background:'transparent'
        }
    }
});

class ProfileDialogComponent extends Component {
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
                    open={this.props.profileDialog}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='flex-end'>
                        <IconButton className={classes.iconButton} onClick={this.props.handleClose} disableRipple>
                            <DialogCloseIcon/>
                        </IconButton>
                    </Box>
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' className={classes.boxStyle}>
                        <Avatar src={TestAvatar} alt="profile image" className={classes.avatar} />
                        <Typography className={classes.nameText}>김민희</Typography>
                    </Box>

                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(ProfileDialogComponent);