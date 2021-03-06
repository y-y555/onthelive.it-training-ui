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


class CourseCompletionDialogComponent extends React.Component {
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
                        <Typography className={classes.titleText}>?????? ??????</Typography>
                        <IconButton disableRipple onClick={this.props.handleClose} className={classes.closeBtn}>
                            <DialogCloseIcon/>
                        </IconButton>
                    </Box>

                    <DialogContent style={{marginBottom:20}}>
                        <Typography variant='body1' className={classes.errorTxt}>???????????? ??? ??? ???????????????.</Typography>
                        <DialogContentText>
                            ????????? ????????????,
                        </DialogContentText>
                        <ul className={classes.contentList}>
                            <li>'??????, ??????' ?????? ????????? ????????? ??????</li>
                            <li>'?????? ??????' ?????? ??????</li>
                            <li>'?????? > ????????????' ??? ????????? ??? ????????????.</li>
                        </ul>
                    </DialogContent>
                    <DialogActions display='flex' justifyContent='flex-end'>
                        <Button className={classes.buttonStyle} onClick={this.props.handleClose} disableRipple>
                            ?????? ????????????
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
};

export default withStyles(style)(CourseCompletionDialogComponent);