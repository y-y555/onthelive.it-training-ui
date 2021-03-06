import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    Typography,
    Dialog,
    OutlinedInput,
    FormControl,
    Button,
    TextareaAutosize,
    IconButton
} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";

const styles = theme => ({
    root:{
    },
    dialogBox:{
        "& .MuiPaper-root":{
            width:490,
            padding:24,
            boxSizing:'border-box',
            borderRadius:10,
            boxShadow:'0 2.5px 5px 0 rgba(0, 0, 0, 0.25)'
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
        fontWeight:600
    },
    textField:{
        marginBottom:20,
        "& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            border:'1px solid #d9dbde'
        },
        "& .MuiOutlinedInput-root":{
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
                color:'#a3a8af',
                opacity:1,
                fontWeight: 300,
            },
        },
    },
    textareaStyle: {
        border:'1px solid #d9dbde',
        borderRadius:7,
        padding: '10px 10px',
        overflowY: 'auto',
        resize: 'none',
        boxSizing:'border-box',
        fontSize:'1rem',
        color:'#333',
        background:'transparent',
        "&::placeholder": {
            color:'#a3a8af',
            opacity:1,
            fontWeight: 300,
        },
        "&:focus": {
            outline: 'none',
        },
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
    buttonStyle:{
        marginTop:20,
        background:'#0097ff',
        color:'#fff',
        fontSize:'1.125rem',
        padding:'12px 0',
        borderRadius:7,
        "&:hover":{
            background:'#0097ff',
        },
        "&.Mui-disabled":{
            background:'#c2c2c2',
            color:'#fff'
        }
    },
    iconButton:{
        padding:0,
        "&:hover":{
            background:'transparent'
        }
    }
});

class NoticeDialogComponent extends Component {
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
                    open={this.props.dialogOpen}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.titleBox}>
                        <Typography className={classes.titleText}>???????????? ??????</Typography>
                        <IconButton className={classes.iconButton} disableRipple onClick={this.props.handleClose}> <DialogCloseIcon /></IconButton>
                    </Box>

                    <Box display='flex' flexDirection='column'>
                        <FormControl className={classes.textField} variant="outlined">
                            <OutlinedInput
                                inputProps={{'aria-label': 'title input box'}}
                                id="outlined-title"
                                labelWidth={0}
                                placeholder='?????? ?????? (?????? 20??? ??????)'
                            />
                        </FormControl>

                        <TextareaAutosize
                            name="contents"
                            minRows={5}
                            maxRows={5}
                            aria-label="content input box"
                            className={classes.textareaStyle}
                            placeholder='?????? ?????? (?????? 100??? ??????)'
                        />

                        <Button className={classes.buttonStyle} disableRipple>
                            ??????
                        </Button>
                    </Box>

                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(NoticeDialogComponent);