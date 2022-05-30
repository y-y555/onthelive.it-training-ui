import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    Button,
    Dialog, FormControl,
    FormControlLabel,
    IconButton,
    Radio,
    RadioGroup,
    Typography
} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../../common/images/DialogCloseIcon.svg";
import {ReactComponent as UnCheckedIcon} from "../../../common/images/UnCheckedIcon.svg";
import {ReactComponent as CheckedIcon} from "../../../common/images/CheckedIcon.svg";

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
        marginTop:10,
        marginBottom:25,
        "& .MuiFormControlLabel-root":{
            marginTop:20
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
        fontWeight:300,
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

class RoomOpenDialogComponent extends Component {
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
            <div>
                <Dialog
                    open={this.props.roomOpenDialog}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Typography className={classes.titleText}>모임 공개</Typography>
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
                                control={<Radio icon={<UnCheckedIcon/>} checkedIcon={<CheckedIcon/>} disableRipple/>}
                                label="공개"
                            />
                            <Typography className={classes.textStyle}>누구나 모임을 검색해 찾을 수 있고, 모임 소개와<br/> 일정을 볼 수 있습니다.</Typography>

                            <FormControlLabel
                                value="b"
                                control={<Radio icon={<UnCheckedIcon/>} checkedIcon={<CheckedIcon/>} disableRipple/>}
                                label="비공개"
                            />
                            <Typography className={classes.textStyle}>모임과 일정이 공개되지 않습니다.<br/>초대를 통해 가입할 수 있습니다.</Typography>
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

export default withStyles(styles)(RoomOpenDialogComponent);