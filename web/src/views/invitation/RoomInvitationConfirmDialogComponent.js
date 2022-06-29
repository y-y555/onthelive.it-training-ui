import React, {Component} from 'react';
import {Box, Button, Dialog, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

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
            padding: '62px 24px',
            boxSizing: 'border-box',
            borderRadius: 10,
            boxShadow: '0 2.5px 5px 0 rgba(0, 0, 0, 0.25)'
        },
        '& *': {
            fontFamily: 'NanumSquareRoundOTF' ,
        }
    },
    boxStyle:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textStyle:{
        fontSize: '1.25rem',
        color: '#000',
        fontWeight: 600,
        margin: '0 0 40px'
    },
    buttonStyle:{
        width: 140,
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

class RoomInvitationConfirmDialogComponent extends Component {
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
                    <Box className={classes.boxStyle}>
                        <Typography className={classes.textStyle}>모임에 가입했습니다.</Typography>

                        <Button className={classes.buttonStyle} disableRipple>확인</Button>
                    </Box>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(RoomInvitationConfirmDialogComponent);