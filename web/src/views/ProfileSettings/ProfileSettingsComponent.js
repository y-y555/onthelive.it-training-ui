import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    MenuItem,
    OutlinedInput,
    Select,
    Typography
} from "@material-ui/core";
import {ReactComponent as CheckCircleAgreeOffIcon} from "../../common/images/CheckCircleAgreeOffLineIcon.svg";
import {ReactComponent as CheckCircleAgreeOnIcon} from "../../common/images/CheckCircleAgreeOnFillIcon.svg";
import TestAvatar from "../../common/images/TestAvatar.jpg";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
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
                    <Typography className={classes.titleText}>프로필 설정</Typography>
                </Box>
                <Box display='flex' className={classes.marginBottom2}>
                    <Typography className={classes.textStyle}>프로필 이미지</Typography>

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
                                    사진 편집
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
                    <Typography className={clsx(classes.textStyle, classes.textStyleRequired)} style={{paddingTop:'12px'}}>이메일</Typography>
                    <FormControl className={classes.textField} variant="outlined">
                        <OutlinedInput
                            inputProps={{'aria-label': 'email input box'}}
                            id="outlined-email"
                            labelWidth={0}
                            placeholder="이메일을 입력하세요"
                        />
                        <FormHelperText className={classes.helperText}>
                            *이메일을 변경하면 인증확인 절차가 필요합니다.
                        </FormHelperText>
                    </FormControl>
                    <Button className={classes.btnStyle} disableRipple onClick={this.handleClickOpen}> 인증메일 발송</Button>
                </Box>
                {/* 다이얼로그 */}

                <EmailCertificationDialogComponent
                    open={this.state.open}
                    handleClose={this.handleClose}
                />

                {/* /다이얼로그 */}


                <Box display='flex' alignItems='center' className={classes.marginBottom}>
                    <Typography className={clsx(classes.textStyle, classes.textStyleRequired)}>이름</Typography>
                    <FormControl className={classes.textField} variant="outlined">
                        <OutlinedInput
                            inputProps={{'aria-label': 'name input box'}}
                            id="outlined-company"
                            labelWidth={0}
                            placeholder="이름 입력하세요"
                        />
                    </FormControl>
                </Box>

                <Box display='flex' alignItems='center' className={classes.marginBottom}>
                    <Typography className={clsx(classes.textStyle, classes.textStyleRequired)}>소속</Typography>
                    <FormControl className={clsx(classes.textField, classes.textFieldMulti)} variant="outlined">
                        <span>미래초등학교</span>
                        <OutlinedInput
                            inputProps={{'aria-label': 'grade input box'}}
                            id="outlined-team"
                            className={classes.tinyInput}
                        />
                        <span>학년</span>
                        <OutlinedInput
                            inputProps={{'aria-label': 'class input box'}}
                            id="outlined-team"
                            className={classes.tinyInput}
                        />
                        <span>반</span>
                    </FormControl>
                </Box>


                <Box display='flex' alignItems='center' className={classes.marginBottom}>
                    <Typography className={classes.textStyle}>타임존</Typography>
                    <FormControl variant="outlined" className={classes.textField}>
                        <Select
                            value={this.state.timezone}
                            onChange={this.handleChangeTimezone}
                            displayEmpty
                            name="타임존"
                            className={classes.selectStyle}
                            IconComponent={() => <Box style={{width:16, height:16, marginRight:10}}><ArrowDownIcon/> </Box>}
                        >
                            <MenuItem value="">타임존을 선택하세요.</MenuItem>
                            <MenuItem value="서울">(UTC+09:00) 서울</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box display='flex' alignItems='center' className={classes.marginBottom}>
                    <Typography className={classes.textStyle}>언어</Typography>
                    <FormControl variant="outlined" className={classes.textField}>
                        <Select
                            value={this.state.languages}
                            onChange={this.handleChangeLanguages}
                            displayEmpty
                            name="타임존"
                            className={classes.selectStyle}
                            IconComponent={() => <Box style={{width:16, height:16, marginRight:10}}><ArrowDownIcon/> </Box>}
                        >
                            <MenuItem value="">언어를 선택하세요.</MenuItem>
                            <MenuItem value="서울">한국어</MenuItem>
                            <MenuItem value="영어">English</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box display='flex' alignItems='center' className={classes.marginBottom}>
                    <Typography className={classes.textStyle}>메일 수신</Typography>
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
                        label="이벤트, 프로모션 알림 메일 수신"
                    />
                </Box>


                <Box className={classes.lineStyle}/>

                <Box display='flex' justifyContent='flex-end'>
                    <Button className={classes.buttonStyle} disableRipple>
                        취소
                    </Button>

                    <Button className={clsx(classes.buttonStyle, classes.saveButton)} disableRipple onClick={this.handleClickSave}>
                        저장
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