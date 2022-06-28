import React, {Component} from 'react';
import clsx from 'clsx';
import {Box, Dialog, IconButton, Typography, Button} from '@material-ui/core';
import {ReactComponent as DialogCloseIcon} from '../../common/images/DialogCloseIcon.svg';
import {withStyles} from '@material-ui/core/styles';
import RoomTestImg1 from '../../common/images/RoomTestImg1.png';

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
        '& img':{
            width: 322,
            height: 200,
            borderRadius: 10,
            margin: '30px 0 20px'
        },
    },
    textStyle:{
        fontSize: '1rem',
        color: '#000',
        textAlign: 'center',
        margin: '0px 10px'
    },
    spanStyle:{
        fontWeight: 800
    },
    roomNameText:{
        fontSize: '1.875rem',
        color: '#000',
        fontWeight: 600,
        margin: '26px 0 12px'
    },
    roomContentsText:{
        width: 214,
        fontSize: '1.125rem',
        color: '#000',
        textAlign: 'center',
        marginBottom: 27
    },
    buttonStyle:{
        width: 150,
        height: 48,
        borderRadius: 7,
        background: '#a3a8af',
        color: '#fff',
        fontSize: '1.125rem',
        '&:hover':{
            background: '#a3a8af'
        }
    },
    btnStyle:{
        background: '#0097ff',
        '&:hover':{
            background: '#0097ff'
        }
    }
});

class RoomInvitationDialogComponent extends Component {
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
                        <img src={RoomTestImg1} alt='room image'/>
                        <Typography className={classes.textStyle}><span className={classes.spanStyle}>&#123;초대한 사람 모임에서 사용하는 이름&#125;</span> 님이 초대합니다.</Typography>
                        <Typography className={classes.roomNameText}>기초수학특강</Typography>
                        <Typography className={classes.roomContentsText}>Amet, pellentesque id nibh aenean nulla lectus auctor rutrum</Typography>
                        <Box display='flex' alignItems='center' justifyContent='space-between' style={{width: '100%'}}>
                            <Button className={classes.buttonStyle} disableRipple>거절</Button>
                            <Button className={clsx(classes.buttonStyle, classes.btnStyle)} disableRipple>수락</Button>
                        </Box>
                    </Box>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(RoomInvitationDialogComponent);