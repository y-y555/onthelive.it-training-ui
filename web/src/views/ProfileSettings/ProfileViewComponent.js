import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    IconButton,
    Input,
    InputAdornment,
    Link,
    Popover,
    Snackbar,
    Typography,
} from "@material-ui/core";
import {ReactComponent as LoginEyeIcon} from "../../common/images/LoginEyeIcon.svg";
import {ReactComponent as LoginEyeSlashIcon} from "../../common/images/EyeClosedIcon.svg";
import {ReactComponent as CheckCircleAgreeOffIcon} from "../../common/images/CheckCircleAgreeOffLineIcon.svg";
import {ReactComponent as CheckCircleAgreeOnIcon} from "../../common/images/CheckCircleAgreeOnFillIcon.svg";


const styles = theme => ({
    root:{
        width:650,
        padding:'88px 0 55px',
        margin:'0 auto',
        '& .MuiTypography-body1':{
            fontSize:'1.063rem',
        },
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
        marginBottom:50
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
        "&:hover":{
            background:'transparent'
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
        display:'flex',
        alignItems:'center',
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
    link:{
        color:'#0097ff',
        textDecoration:'underline',
        marginLeft: 4,
        fontSize:'1.063rem'
    },
    popover:{
        '& .MuiPopover-paper':{
            padding:'13px 18px 0 18px',
            borderRadius:10,
            overflow:'visible',
            marginLeft:16,
            boxShadow:'0px 6px 5px -3px rgb(0 0 0 / 20%), -1px 5px 10px 1px rgb(0 0 0 / 14%), -11px 4px 16px 0px rgb(0 0 0 / 11%)',
             '&:after':{
                 content: '""',
                 position: 'absolute',
                 left: '0px',
                 top: '50%',
                 width: 0,
                 height: 0,
                 border: '10px solid transparent',
                 borderRightColor: '#fff',
                 borderLeft: 0,
                 marginTop: '-10px',
                 marginLeft: '-10px',
             },
            '& h5':{
                fontFamily: 'NanumSquareRoundOTF' ,
                fontSize:'1.063rem',
                fontWeight:600,
                borderBottom:'2px solid #c0c2c3',
                paddingBottom: 12,
                marginBottom:34,
            },
            '&[x-placement*="left"] $arrow': {
                right: 0,
                marginRight: '-0.95em',
                height: '3em',
                width: '1em',
                '&::before': {
                    borderWidth: '1em 0 1em 1em',
                    borderColor: `transparent transparent transparent rgba(0, 0, 0, 0.87)`,
                },
            },
        },
        '& .MuiInput-underline:before, .MuiInput-underline:after':{
            display: 'none',
        },
        '& .MuiBox-root':{
            marginBottom:20,
        },
        '& .MuiInput-input':{
            width:240,
            border:'1px solid #c0c2c3',
            borderRadius:4,
            padding:'11px 18px',
        },
    },
    labelStyle:{
        fontSize:'0.875rem',
        fontWeight:600,
        width:100,
        marginRight: 16,
    },
    snackbar:{
        '&>div':{
            backgroundColor:'#2078e8',
            borderRadius:10,
            padding:'23px 27px',
            color:'#fff',
            '& h5':{
                fontSize:'1.25rem',
                fontWeight:600,
                marginBottom:8,
            },
            '& p':{
                fontSize:'1.125rem'
            }
        }
    },
});

class ProfileViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileImage: true,
            labelWidth:'100%',

            anchorEl: null,

            currentPassword: '',
            currentShowPassword: true,
            newPassword: '',
            newShowPassword: true,
            newConfirmPassword: '',
            newConfirmShowPassword: false,

            openSnackbar:false,
            vertical: 'top',
            horizontal: 'center',

        };
    }


    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };


    handleClickCurrentShowPassword = () => {
        this.setState(state => ({
            currentShowPassword: !state.currentShowPassword,

        }));
    };
    handleClickNewShowPassword = () => {
        this.setState(state => ({
            newShowPassword: !state.newShowPassword,
            // newConfirmShowPassword: !state.newConfirmShowPassword
        }));
    };
    handleClickNewConfirmShowPassword = () => {
        this.setState(state => ({
            newConfirmShowPassword: !state.newConfirmShowPassword
        }));
    };

    handleClickSnackbar = state => () => {
        this.setState({ openSnackbar: true, ...state });
    };

    handleCloseSnackbar = () => {
        this.setState({ openSnackbar : false });
    };


    render() {
        const { classes } = this.props;
        const { anchorEl,vertical, horizontal, openSnackbar } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <Box className={classes.titleBox}>
                    <Typography className={classes.titleText} variant="h3">프로필 설정</Typography>
                </Box>
                <Box display='flex' className={classes.marginBottom2}>
                    <Typography className={classes.textStyle}>프로필 이미지</Typography>
                        <Box display='flex' alignItems='center'>
                            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                            <label htmlFor="icon-button-file">
                                <Button className={classes.imgButton} disableRipple component="span" />
                            </label>
                        </Box>
                </Box>
                <Box display='flex' alignItems='center' className={classes.marginBottom}>
                    <Typography className={classes.textStyle}>이메일</Typography>
                    <Typography variant="body1">minikim@gmail.com </Typography>
                </Box>

                <Box display='flex' alignItems='center' className={classes.marginBottom}>
                    <Typography className={classes.textStyle}>비밀번호</Typography>
                    <Link className={classes.link}
                          onClick={this.handleClick}
                    >변경</Link>
                </Box>

                {/* // */}

                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                    className={classes.popover}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'left',
                    }}
                    >
                    <span className={classes.arrow}></span>

                    <Typography variant="h5" className={classes.typography}>비밀번호 변경</Typography>
                    <Box display='flex' alignItems='center'>
                        <Typography className={classes.labelStyle}>현재 비밀번호</Typography>
                        <FormControl>
                            <Input
                                id="adornment-password"
                                type={this.state.currentShowPassword ? 'text' : 'password'}
                                value={this.state.currentPassword}
                                onChange={this.handleChange('currentPassword')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickCurrentShowPassword}
                                            disableRipple
                                            className={classes.disableBg}
                                        >
                                            {this.state.currentShowPassword ? <LoginEyeIcon /> : <LoginEyeSlashIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Box>
                    <Box display='flex' alignItems='center'>
                        <Typography className={classes.labelStyle}>새 비밀번호</Typography>
                        <FormControl>
                            <Input
                                id="adornment-password"
                                type={this.state.newShowPassword ? 'text' : 'password'}
                                value={this.state.newPassword}
                                onChange={this.handleChange('newPassword')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickNewShowPassword}
                                            disableRipple
                                            className={classes.disableBg}
                                        >
                                            {this.state.newShowPassword ? <LoginEyeIcon /> : <LoginEyeSlashIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Box>

                    <Box display='flex' alignItems='center'>
                        <Typography className={classes.labelStyle}>새 비밀번호 확인</Typography>
                        <FormControl>
                            <Input
                                id="adornment-password"
                                type={this.state.newConfirmShowPassword ? 'text' : 'password'}
                                value={this.state.newConfirmPassword}
                                onChange={this.handleChange('newConfirmPassword')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickNewConfirmShowPassword}
                                            disableRipple
                                            className={classes.disableBg}
                                        >
                                            {this.state.newConfirmShowPassword ? <LoginEyeIcon /> : <LoginEyeSlashIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <FormHelperText className={classes.helperText}>
                                <CheckCircleAgreeOffIcon style={{width:15,height:15}}/> 영문, 숫자, 특수문자 중 2가지 이상 조합
                                <CheckCircleAgreeOnIcon style={{width:15,height:15, marginLeft:8,}}/> 10자 이상
                            </FormHelperText>
                        </FormControl>

                    </Box>
                    <Box display='flex' justifyContent='flex-end'>
                        <Button className={clsx(classes.buttonStyle, classes.saveButton)} disableRipple style={{marginRight:57}}>
                            저장
                        </Button>
                    </Box>

                </Popover>


                {/* // */}


                <Box display='flex' alignItems='center' className={classes.marginBottom}>
                    <Typography className={classes.textStyle}>이름</Typography>
                    <Typography variant="body1">김민희</Typography>
                </Box>

                <Box display='flex' alignItems='center' className={classes.marginBottom}>
                    <Typography className={classes.textStyle}>소속</Typography>
                    <Typography variant="body1">미래초등학교 2학년 1반</Typography>
                </Box>


                <Box display='flex' alignItems='center' className={classes.marginBottom}>
                    <Typography className={classes.textStyle}>타임존</Typography>
                    <Typography variant="body1">(UTC+9:00) 서울</Typography>
                </Box>

                <Box display='flex' alignItems='center' className={classes.marginBottom}>
                    <Typography className={classes.textStyle}>언어</Typography>
                    <Typography variant="body1">한국어</Typography>
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
                    <Button className={clsx(classes.buttonStyle, classes.saveButton)} disableRipple
                            onClick={this.handleClickSnackbar({ vertical: 'center', horizontal: 'center' })}
                    >
                        저장
                    </Button>
                    <Snackbar
                        style={{ height: "100%" }}
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        open={openSnackbar}
                        onClose={this.handleCloseSnackbar}
                        className={classes.snackbar}
                        message={
                            <Box>
                                <Typography variant="h5">이메일 주소 변경 완료</Typography>
                                <Typography variant="body1">abc@onthelive.kr <br/> 이메일 주소가 인증되었습니다.</Typography>
                            </Box>}
                    />
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(ProfileViewComponent);