import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    Button,
    Dialog,
    IconButton,
    Typography
} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";
import clsx from "clsx";


const style = theme => ({
    root:{
        fontFamily: 'NanumSquareRoundOTF!important' ,
    },
    dialogBox:{
        "& .MuiPaper-root":{
            width:460,
            padding:24,
            boxSizing:'border-box',
            borderRadius:10,
            boxShadow:'0 2.5px 5px 0 rgba(0, 0, 0, 0.25)'
        },
        "& *": {
            fontFamily: 'NanumSquareRoundOTF' ,
        },
    },
    titleText:{
        fontSize:'1.25rem',
        color:'#000',
        fontWeight:600
    },
    description:{
        color:'#333',
        borderBottom:'1px solid #d9dbde',
        paddingBottom:8,
        marginBottom:30,
        marginTop:23,
    },
    subtitle:{
        fontSize:'1rem',
        marginBottom: 15,
        color:'#333333',
    },
    groupList:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:16,
    },
    groupImg:{
        width: 81,
        height: 45,
        borderRadius:3,
        marginRight:12,
        backgroundColor:'#ddd',
        overflow: 'hidden',
    },
    groupName:{
        width:'60%',
        color:'#333333',
        fontSize:'1rem',
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: '-0.32px',
    },
    outlineButton:{
        width:82,
        minWidth:82,
        height:30,
        border:'1px solid transparent',
        color:'transparent',
        fontWeight:700,
        "&:hover":{
            background: 'transparent',
        }
    },
    replayButton:{
        borderColor:'#656565',
        color:'#656565',
        fontSize:'0.688rem'
    },
    hiddenButton:{
        borderColor:'#0097ff',
        color:'#0097ff',
        fontSize:'0.875rem'
    },
    closeBtn:{
        position:'absolute',
        top:16,
        right:12,
        "&:hover":{
            background: 'transparent',
        }
    },
    gutter:{
        width:'100%',
        height:1,
        backgroundColor:'#d9dbde',
        marginBottom:30,
    },
    groupBox:{
        marginBottom:30,
        overflow:'auto',
        minHeight:65,
        maxHeight:180,
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
    hiddenBox:{
        marginBottom:30,
        minHeight:'auto',
        '& p':{
            color:'#a3a8af'
        }
    },
    iconButton:{
        padding:0,
        "&:hover":{
            background:'transparent'
        }
    },
    buttonStyle:{
        width:300,
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


class HiddenGroupManagementDialogComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddenGroup:false,
            visibleGroup:false,
        }
    }


    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Dialog
                    open={this.props.dialogOpen}
                    className={classes.dialogBox}
                >

                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Typography className={classes.titleText}>?????? ?????? ??????</Typography>
                        <IconButton className={classes.iconButton} onClick={this.props.handleClose} disableRipple>
                            <DialogCloseIcon/>
                        </IconButton>
                    </Box>
                    <Typography className={classes.description}>?????? ?????? ???????????? ??????????????????.</Typography>

                    <Typography className={classes.subtitle}>?????? ??????</Typography>
                    {this.state.hiddenGroup ?
                        <Box className={classes.hiddenBox}>
                            <Typography>?????? ????????? ????????????.</Typography>
                        </Box>
                        :
                        <Box className={classes.groupBox}>
                            <Box className={classes.groupList}>
                                <Box display='flex'>
                                    <Box className={classes.groupImg}></Box>
                                    <Typography className={classes.groupName}>Java/Spring ?????? ????????? ?????????????????? ??????</Typography>
                                </Box>
                                <Button className={clsx(classes.outlineButton, classes.replayButton)} disableRipple>????????????</Button>
                            </Box>
                        </Box>
                    }

                    <span className={classes.gutter}></span>

                    <Typography className={classes.subtitle}>???????????? ??????</Typography>
                    {this.state.visibleGroup ?
                        <Box className={classes.hiddenBox}>
                            <Typography>???????????? ????????? ????????????.</Typography>
                        </Box>
                        :
                        <Box className={classes.groupBox}>
                            <Box className={classes.groupList}>
                                <Box display='flex'>
                                    <Box className={classes.groupImg}></Box>
                                    <Typography className={classes.groupName}>Java/Spring ?????? ????????? ?????????????????? ??????</Typography>
                                </Box>
                                <Button className={clsx(classes.outlineButton, classes.hiddenButton)}
                                        disableRipple>?????????</Button>
                            </Box>
                            <Box className={classes.groupList}>
                                <Box display='flex'>
                                    <Box className={classes.groupImg}></Box>
                                    <Typography className={classes.groupName}>Java/Spring ?????? ????????? ?????????????????? ??????</Typography>
                                </Box>
                                <Button className={clsx(classes.outlineButton, classes.hiddenButton)}
                                        disableRipple>?????????</Button>
                            </Box>


                            <Box className={classes.groupList}>
                                <Box display='flex'>
                                    <Box className={classes.groupImg}></Box>
                                    <Typography className={classes.groupName}>Java/Spring ?????? ????????? ?????????????????? ??????</Typography>
                                </Box>
                                <Button className={clsx(classes.outlineButton, classes.hiddenButton)}
                                        disableRipple>?????????</Button>
                            </Box>
                            <Box className={classes.groupList}>
                                <Box display='flex'>
                                    <Box className={classes.groupImg}></Box>
                                    <Typography className={classes.groupName}>Java/Spring ?????? ????????? ?????????????????? ??????</Typography>
                                </Box>
                                <Button className={clsx(classes.outlineButton, classes.hiddenButton)}
                                        disableRipple>?????????</Button>
                            </Box>


                        </Box>
                    }
                    <Box display='flex' justifyContent='center'>
                        <Button className={clsx(classes.buttonStyle, classes.saveButton)} onClick={this.props.handleClose} disableRipple>
                            ??????
                        </Button>
                    </Box>
                </Dialog>
            </div>
        );
    }
};

export default withStyles(style)(HiddenGroupManagementDialogComponent);