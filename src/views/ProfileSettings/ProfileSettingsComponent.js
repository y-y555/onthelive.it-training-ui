import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    FormControl,
    IconButton,
    InputAdornment,
    OutlinedInput,
    Typography,
    Button,
    Avatar,
    Select,
    FormHelperText,
    FormControlLabel,
    Checkbox,
    MenuItem,
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
    Link
} from "@material-ui/core";
import {ReactComponent as LoginEyeIcon} from "../../common/images/LoginEyeIcon.svg";
import {ReactComponent as LoginEyeSlashIcon} from "../../common/images/LoginEyeSlashIcon.svg";
import {ReactComponent as CheckCircleAgreeOffIcon} from "../../common/images/CheckCircleAgreeOffLineIcon.svg";
import {ReactComponent as CheckCircleAgreeOnIcon} from "../../common/images/CheckCircleAgreeOnFillIcon.svg";
import TestAvatar from "../../common/images/TestAvatar.jpg";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";
import EmailCertificationDialogComponent from "../dialog/EmailCertificationDialogComponent";
import MailAuthenticationFailedDialogComponent from "../dialog/MailAuthenticationFailedDialogComponent";

const styles = theme => ({
    root:{
        width:650,
        padding:'88px 0 55px',
        margin:'0 auto'
    },
    titleBox:{
        borderBottom: '3px solid #000',
        marginBottom:52
    },
    titleText:{
        fontSize:'1.875rem',
        color:'#000',
        paddingBottom:25
    },
    marginBottom:{
        marginBottom:30
    },
    marginBottom2:{
        marginBottom:40
    },
    textStyle:{
        width:100,
        marginRight:47,
        fontSize:'1.063rem',
        color:'#000',
        fontWeight:600
    },
    textStyleRequired:{
        '&:after':{
            content:'"*"',
            color:'#ff0000',
        }
    },
    textField:{
        // width:'100%',
        minWidth:'350px',
        "& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            border:'1px solid #c0c2c3'
        },
        "& .MuiOutlinedInput-root":{
            width:'100%',
            borderRadius:4,
            "&:hover":{
                borderColor:'#c0c2c3'
            }
        },
        "& .MuiOutlinedInput-input":{
            padding:'13px 18px',
            color:'#000',
            fontSize:'1.063rem',
            "&::placeholder":{
                color:'#9d9d9d',
                opacity:1
            }
        },
    },
    textFieldMulti:{
        display: 'flex',
        alignItems:'center',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        width:'50%',
    },
    tinyInput:{
        width:'40px!important',
        flexDirection:'row',
        '&>input':{
            padding:'13px 12px!important',
            textAlign:'center',
        }
    },
    lineStyle:{
        width:'100%',
        height:12,
        borderBottom:'1px solid #c0c2c3',
        marginBottom:37
    },
    iconButton:{
        padding:0,
        "&:hover":{
            background:'transparent',
        }
    },
    avatar:{
        width:150,
        height:150
    },
    imgButton:{
        width:150,
        height:150,
        borderRadius:'50%',
        background:'#f3f3f3',
        border:'1px dashed #a3a8af'
    },
    imgButtonDelete:{
        width:110,
        height:40,
        borderRadius:7,
        border:'1px solid #0097ff',
        color:'#0097ff',
        marginLeft:24,
        fontSize:'0.938rem',
        fontWeight:600,
        background:'transparent',
        boxShadow:'none',
        "&:hover":{
            background:'transparent',
            boxShadow:'none',
        }
    },
    btnStyle:{
        // width:110,
        height:40,
        borderRadius:7,
        border:'1px solid #0097ff',
        color:'#0097ff',
        marginLeft:24,
        fontSize:'0.938rem',
        fontWeight:600,
        padding:'13px 18px',
        "&:hover":{
            background:'transparent'
        }
    },
    input: {
        display: 'none',
    },
    buttonStyle:{
        width:205,
        height:44,
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
    helperText:{
        color:'#a3a8af',
        letterSpacing:'-.24px',
        fontSize:'0.75rem',
        marginLeft:0,
    },
    disableBg:{
        "&:hover, &.MuiCheckbox-colorSecondary.Mui-checked:hover":{
            background: 'transparent',
        }
    },
    selectStyle:{
        "& .MuiSelect-select:focus":{
            background: 'transparent',
        }
    },
});

class ProfileSettingsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            profileImage: true,
            labelWidth:'100%',
            timezone:"",
            languages:"",
            open: false,
            openMail: false,
        };
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleChangeTimezone = event => {
        this.setState({ timezone: event.target.value });
    };

    handleChangeLanguages = event => {
        this.setState({ languages: event.target.value });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClickSave = () => {
        this.setState({ openMail: true });
    };

    handleClose = () => {
        this.setState({
            open: false,
            openMail: false,
        });
    };


    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.titleBox}>
                    <Typography className={classes.titleText}>????????? ??????</Typography>
                </Box>
                <Box display='flex' className={classes.marginBottom2}>
                    <Typography className={classes.textStyle}>????????? ?????????</Typography>

                    {this.state.profileImage === true ?
                        <Box display='flex' alignItems='center'>
                            <Avatar src={TestAvatar} alt="profile image" className={classes.avatar} />
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" component="span" disableRipple className={classes.imgButtonDelete}>
                                    ?????? ??????
                                </Button>
                            </label>
                        </Box>
                        :
                        <Box display='flex' alignItems='center'>
                            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                            <label htmlFor="icon-button-file">
                                <Button className={classes.imgButton} disableRipple component="span" />
                            </label>
                        </Box>
                    }

                </Box>
                <Box display='flex' alignItems='flex-start' style={{marginBottom:10}}>
                    <Typography className={clsx(classes.textStyle, classes.textStyleRequired)} style={{paddingTop:'12px'}}>?????????</Typography>
                    <FormControl className={classes.textField} variant="outlined">
                        <OutlinedInput
                            inputProps={{'aria-label': 'email input box'}}
                            id="outlined-email"
                            labelWidth={0}
                            placeholder="???????????? ???????????????"
                        />
                        <FormHelperText className={classes.helperText}>
                            *???????????? ???????????? ???????????? ????????? ???????????????.
                        </FormHelperText>
                    </FormControl>
                    <Button className={classes.btnStyle} disableRipple onClick={this.handleClickOpen}> ???????????? ??????</Button>
                </Box>
                {/* ??????????????? */}

                <EmailCertificationDialogComponent
                    open={this.state.open}
                    handleClose={this.handleClose}
                />

                {/* /??????????????? */}


                <Box display='flex' alignItems='center' className={classes.marginBottom}>
                    <Typography className={clsx(classes.textStyle, classes.textStyleRequired)}>??????</Typography>
                    <FormControl className={classes.textField} variant="outlined">
                        <OutlinedInput
                            inputProps={{'aria-label': 'name input box'}}
                            id="outlined-company"
                            labelWidth={0}
                            placeholder="?????? ???????????????"
                        />
                    </FormControl>
                </Box>

                <Box display='flex' alignItems='center' className={classes.marginBottom}>
                    <Typography className={clsx(classes.textStyle, classes.textStyleRequired)}>??????</Typography>
                    <FormControl className={clsx(classes.textField, classes.textFieldMulti)} variant="outlined">
                        <span>??????????????????</span>
                        <OutlinedInput
                            inputProps={{'aria-label': 'grade input box'}}
                            id="outlined-team"
                            className={classes.tinyInput}
                        />
                        <span>??????</span>
                        <OutlinedInput
                            inputProps={{'aria-label': 'class input box'}}
                            id="outlined-team"
                            className={classes.tinyInput}
                        />
                        <span>???</span>
                    </FormControl>
                </Box>


                <Box display='flex' alignItems='center' className={classes.marginBottom}>
                    <Typography className={classes.textStyle}>?????????</Typography>
                    <FormControl variant="outlined" className={classes.textField}>
                        <Select
                            value={this.state.timezone}
                            onChange={this.handleChangeTimezone}
                            displayEmpty
                            name="?????????"
                            className={classes.selectStyle}
                            IconComponent={() => <Box style={{width:16, height:16, marginRight:10}}><ArrowDownIcon/> </Box>}
                        >
                            <MenuItem value="">???????????? ???????????????.</MenuItem>
                            <MenuItem value="??????">(UTC+09:00) ??????</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box display='flex' alignItems='center' className={classes.marginBottom}>
                    <Typography className={classes.textStyle}>??????</Typography>
                    <FormControl variant="outlined" className={classes.textField}>
                        <Select
                            value={this.state.languages}
                            onChange={this.handleChangeLanguages}
                            displayEmpty
                            name="?????????"
                            className={classes.selectStyle}
                            IconComponent={() => <Box style={{width:16, height:16, marginRight:10}}><ArrowDownIcon/> </Box>}
                        >
                            <MenuItem value="">????????? ???????????????.</MenuItem>
                            <MenuItem value="??????">?????????</MenuItem>
                            <MenuItem value="??????">English</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box display='flex' alignItems='center' className={classes.marginBottom}>
                    <Typography className={classes.textStyle}>?????? ??????</Typography>
                    <FormControlLabel
                        className={classes.textField}
                        control={
                            <Checkbox
                                icon={<CheckCircleAgreeOffIcon />}
                                checkedIcon={<CheckCircleAgreeOnIcon />}
                                value="checkedH"
                                disableRipple
                                className={classes.disableBg}
                            />
                        }
                        label="?????????, ???????????? ?????? ?????? ??????"
                    />
                </Box>


                <Box className={classes.lineStyle}/>

                <Box display='flex' justifyContent='flex-end'>
                    <Button className={classes.buttonStyle} disableRipple>
                        ??????
                    </Button>

                    <Button className={clsx(classes.buttonStyle, classes.saveButton)} disableRipple onClick={this.handleClickSave}>
                        ??????
                    </Button>

                    <MailAuthenticationFailedDialogComponent
                        openMail={this.state.openMail}
                        handleClose={this.handleClose}
                    />

                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(ProfileSettingsComponent);