import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Avatar, Box, Dialog, IconButton, Typography, Button, OutlinedInput, FormControl} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../../common/images/DialogCloseIcon.svg";
import {ReactComponent as CameraIcon} from "../../../common/images/CameraIcon.svg";
import TestAvatar from "../../../common/images/TestAvatar.jpg";

const styles = theme => ({
    root:{

    },
    dialogBox:{
        "& .MuiPaper-root":{
            width:370,
            padding:24,
            boxSizing:'border-box',
            borderRadius:10,
            boxShadow:'0 2.5px 5px 0 rgba(0, 0, 0, 0.25)'
        },
        "& *": {
            fontFamily: 'NanumSquareRoundOTF' ,
        }
    },
    titleText:{
        fontSize:'1.25rem',
        color:'#000',
        fontWeight:600
    },
    boxStyle:{
        padding:'30px 0 0'
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
    },
    buttonStyle:{
        padding:0,
        background:'transparent',
        position:'relative',
        "&:hover":{
            background:'transparent'
        }
    },
    avatarBox:{
        width:150,
        height:150,
        borderRadius:'50%',
        // background:'#a3a8af',
        background:`url(${TestAvatar})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'
    },
    cameraBox:{
        position:'absolute',
        right:0,
        bottom:0,
        width:35,
        height:35,
        borderRadius:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        background:'#e1e1e1',
        border:'2px solid #fff'
    },
    input: {
        display: 'none',
    },
    textField:{
        width:'100%',
        marginTop:30,
        "& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            border:'1px solid #d9dbde'
        },
        "& .MuiOutlinedInput-root":{
            width:'100%',
            borderRadius:7,
            "&:hover":{
                borderColor:'#d9dbde'
            }
        },
        "& .MuiOutlinedInput-input":{
            padding:'12px 10px',
            color:'#333',
            fontSize:'1rem',
            "&::placeholder":{
                color:'#9d9d9d',
                opacity:1
            }
        },
    },
    textStyle:{
        width:'100%',
        fontSize:'0.813rem',
        color:'#a3a8af',
        fontWeight:300,
        marginTop:10,
        marginBottom:30,
        textAlign:'left'
    },
    textBold:{
        fontWeight:600,
        textDecoration:'underline'
    },
    buttonStyle1:{
        width:'100%',
        height:48,
        borderRadius:8,
        background:'#0097ff',
        color:'#fff',
        fontSize:'1.125rem',
        "&:hover":{
            background:'#0097ff'
        },
        "&.Mui-disabled":{
            background:'#c2c2c2',
            color:'#fff'
        }
    },
});

class ProfileEditDialogComponent extends Component {
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
                    open={this.props.profileDialogOpen}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Typography className={classes.titleText}>?????? ??????</Typography>
                        <IconButton className={classes.iconButton} onClick={this.props.handleClose} disableRipple>
                            <DialogCloseIcon/>
                        </IconButton>
                    </Box>
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' className={classes.boxStyle}>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button component="span" className={classes.buttonStyle} disableRipple>
                                <span className={classes.avatarBox}></span>
                                <span className={classes.cameraBox}><CameraIcon/></span>
                            </Button>
                        </label>
                        <FormControl className={classes.textField} variant="outlined">
                            <OutlinedInput
                                inputProps={{'aria-label': 'company input box'}}
                                id="outlined-company"
                                labelWidth={0}
                                placeholder="????????? ???????????????"
                                defaultValue="?????????"
                            />
                        </FormControl>
                        <Typography className={classes.textStyle}>*????????? ?????? ??? ????????? ???????????? <span className={classes.textBold}>?????? ?????????</span>??? <br/> ?????? ???????????????.</Typography>
                        <Button className={classes.buttonStyle1} disableRipple>
                            ??????
                        </Button>

                    </Box>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(ProfileEditDialogComponent);