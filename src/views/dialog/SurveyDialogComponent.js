import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {Box, Dialog, Typography, Button, IconButton} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";
import SurveyCreateComponent from "./survey/SurveyCreateComponent";

const styles = theme => ({
    root:{

    },
    dialogBox:{
        "& .MuiPaper-root":{
            [theme.breakpoints.up('xl')]: {
                maxWidth:1450,
            },
            maxWidth:1150,
            width:1240,
            padding:'24px 15px 24px 24px',
            boxSizing:'border-box',
            borderRadius:10,
            boxShadow:'0 2.5px 5px 0 rgba(0, 0, 0, 0.25)'
        },
        "& .MuiDialog-paper":{
            margin:0
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
    },
    iconButton:{
        padding:0,
        "&:hover":{
            background:'transparent'
        }
    },
    createContents:{
        height:'calc(100vh - 230px )',
        overflowY:'auto',
        overflowX:'hidden',
        "&::-webkit-scrollbar": {
            width:'5px',
        },
        "&::-webkit-scrollbar-thumb": {
            background:'#dbdbdb',
            borderRadius:'10px',
            backgroundClip:'padding-box',
        },
        "&::-webkit-scrollbar-track": {
            background:'transparent',
            marginTop:10
        },
    },
    btnStyle: {
        padding: '9px 38px',
        background: '#a3a8af',
        fontSize: '0.875rem',
        fontWeight: 800,
        color: '#fff',
        marginRight: 10,
        borderRadius: 7,
        "&:hover": {
            background: '#a3a8af',
        }
    },
    btnStyle1: {
        background: '#0097ff',
        "&:hover": {
            background: '#0097ff'
        }
    },
});

class SurveyDialogComponent extends Component {
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
                    open={this.props.surveyDialogOpen}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' className={classes.titleBox} >
                        <Typography className={classes.titleText}>설문조사 등록</Typography>
                        <IconButton className={classes.iconButton} onClick={this.props.handleCloseSurveyDialogOpen} disableRipple>
                            <DialogCloseIcon/>
                        </IconButton>
                    </Box>
                    <Box>
                        <Box className={classes.createContents}>
                            <SurveyCreateComponent onClose={this.handleClose}/>
                        </Box>
                        <Box display="flex" justifyContent='flex-end' alignItems='center' style={{width:'50%', paddingRight:25, boxSizing:'border-box'}}>
                            <Button className={clsx(classes.btnStyle1, classes.btnStyle)}>취소</Button>
                            <Button className={classes.btnStyle}>저장</Button>
                        </Box>
                    </Box>

                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(SurveyDialogComponent);