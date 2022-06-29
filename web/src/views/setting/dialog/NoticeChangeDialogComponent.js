import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    Button,
    Dialog,
    FormControl,
    FormControlLabel,
    IconButton,
    Radio,
    RadioGroup,
    Typography
} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../../common/images/DialogCloseIcon.svg";
import {ReactComponent as RadioUnchecked} from "../../../common/images/RadioUnchecked.svg";
import {ReactComponent as RadioChecked} from "../../../common/images/RadioChecked.svg";

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
    titleText:{
        fontSize:'1.25rem',
        color:'#000',
        fontWeight:600
    },
    iconButton:{
        padding:0,
        "&:hover":{
            background:'transparent'
        }
    },
    formControl:{
        marginTop:35,
        marginBottom:25,
        "& .MuiFormControlLabel-root":{
            marginTop:5
        },
        "& .MuiFormControlLabel-label":{
            fontSize:'1rem',
            color:'#333'
        },
        "& .MuiButtonBase-root:hover":{
            background:'transparent'
        }
    },
    textStyle:{
        fontSize:'0.813rem',
        color:'#a3a8af',
        marginLeft:25,
        fontWeight:300
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

class NoticeChangeDialogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: "a",
        };
    }

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Dialog
                    open={this.props.noticeDialogOpen}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Typography className={classes.titleText}>알림 설정</Typography>
                        <IconButton className={classes.iconButton} onClick={this.props.handleClose} disableRipple>
                            <DialogCloseIcon/>
                        </IconButton>
                    </Box>

                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            aria-label="Radio"
                            name="Radio"
                            className={classes.group}
                            value={this.state.selectedValue}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel
                                value="a"
                                control={<Radio icon={<RadioUnchecked/>} checkedIcon={<RadioChecked/>} disableRipple/>}
                                label="내가 참여한 일정과 글의 모든 메시지 알림"
                            />
                            <Typography className={classes.textStyle}>* 내가 등록하거나 참여한 일정 내 모든 댓글, 커뮤니티에 등록한 내 게시글에 달린 댓글, 나를 언급한 댓글, 공지 등 공동리더에게는 일정이 항상 공개됩니다.</Typography>

                            <FormControlLabel
                                value="b"
                                control={<Radio icon={<RadioUnchecked/>} checkedIcon={<RadioChecked/>} disableRipple/>}
                                label="내가 참여한 일정만 알림"
                            />
                            <Typography className={classes.textStyle}>*일정 내 모든 댓글 및 맨션은 제외</Typography>

                            <FormControlLabel
                                value="c"
                                control={<Radio icon={<RadioUnchecked/>} checkedIcon={<RadioChecked/>} disableRipple/>}
                                label="내가 등록한 커뮤니티 게시글만 알림"
                            />

                            <FormControlLabel
                                value="d"
                                control={<Radio icon={<RadioUnchecked/>} checkedIcon={<RadioChecked/>} disableRipple/>}
                                label="나를 언급한 댓글만 알림"
                            />

                            <FormControlLabel
                                value="e"
                                control={<Radio icon={<RadioUnchecked/>} checkedIcon={<RadioChecked/>} disableRipple/>}
                                label="알림 받지 않음"
                            />
                        </RadioGroup>
                    </FormControl>

                    <Button className={classes.buttonStyle1} disableRipple>
                        확인
                    </Button>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(NoticeChangeDialogComponent);