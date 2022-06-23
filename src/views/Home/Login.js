import React, {Component} from 'react';
import clsx from 'clsx';
import {withStyles} from "@material-ui/core/styles";
import {Box, Typography, FormControl, OutlinedInput, InputAdornment, IconButton, FormControlLabel, Checkbox, Button, FormHelperText } from "@material-ui/core";
import { ReactComponent as LoginUserIcon } from '../../common/images/LoginUserIcon.svg';
import { ReactComponent as LoginPasswordIcon } from '../../common/images/LoginPasswordIcon.svg';
import { ReactComponent as LoginEyeSlashIcon } from '../../common/images/LoginEyeSlashIcon.svg';
import { ReactComponent as LoginEyeIcon } from '../../common/images/LoginEyeIcon.svg';
import { ReactComponent as UnCheckedIcon } from '../../common/images/UnCheckedIcon.svg';
import { ReactComponent as CheckedIcon } from '../../common/images/CheckedIcon.svg';
import SocialLoginComponent from "./SocialLoginComponent";
import {withRouter} from "react-router-dom";

const styles = theme => ({
    root:{
        width:'100%',
        height: 'calc(100vh - 95px)',
        display:'inline-flex',
        justifyContent:'center',
        alignItems:'center'
    },
    loginBox:{
        display:'flex',
        flexDirection:'column',
        border:'1px solid #e5e6e8',
        padding:'50px 90px 30px',
        boxSizing:'border-box',
        borderRadius:12,
        // marginTop:45
    },
    loginText:{
        fontSize:'1.75rem',
        color:'#333',
        textAlign:'center',
        marginBottom:12
    },
    textField:{
        marginTop:20,
        "& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            border:'1px solid #d9dbde'
        },
        "& .MuiOutlinedInput-root":{
            width:340,
            borderRadius:7,
            "&:hover":{
                borderColor:'#d9dbde'
            }
        },
        "& .MuiOutlinedInput-input":{
            padding:'13px 0px',
            color:'#333',
            fontSize:'1rem',
            "&::placeholder":{
                color:'#9d9d9d',
                opacity:1
            }
        },
    },
    errorTextField:{
        "& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            border:'1px solid #ff0000'
        },
    },
    errorText:{
        fontSize:'0.813rem',
        color:'#ff0000',
        margin:'4px 0 0'
    },
    iconButton:{
        padding:0,
        "&:hover":{
            background:'transparent',
        }
    },
    checkedBox:{
        margin:'10px 0 20px',
        "& .MuiIconButton-root":{
            padding:0
        },
        "& .MuiFormControlLabel-label":{
            fontSize:'0.875rem',
            color:'#000',
            marginLeft:10
        }
    },
    buttonStyle:{
        background:'#0097ff',
        color:'#fff',
        fontSize:'1.125rem',
        padding:'15px 0',
        borderRadius:7,
        "&:hover":{
            background:'#0097ff',
        },
        "&.Mui-disabled":{
            background:'#c2c2c2',
            color:'#fff'
        }
    },
    textButton:{
        fontSize:'0.875rem',
        color:'#333'
    },
    underline:{
        fontWeight:'600',
        textDecoration:'underline',
        "&:hover":{
            textDecoration:'underline',
        }
    },
    lineStyle:{
        width:'100%',
        height:1,
        borderBottom:'1px dashed #dddddd',
        margin:'30px 0'
    }
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            emailCheck: false
        };
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleClickSingUp = e => {
        this.props.history.push("/signup");
    };

    handleClickPasswordFind = e => {
        this.props.history.push("/passwordFind");
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.loginBox}>
                    <Typography className={classes.loginText}>로그인</Typography>
                    {/* 이메일 형식이 아니면*/}
                    {/*<FormControl className={clsx(classes.textField, classes.errorTextField)} variant="outlined">*/}
                    <FormControl className={classes.textField} variant="outlined">
                        <OutlinedInput
                            inputProps={{'aria-label': 'email input box'}}
                            id="outlined-email"
                            startAdornment={
                                <InputAdornment position="start">
                                    <LoginUserIcon/>
                                </InputAdornment>
                            }
                            labelWidth={0}
                            placeholder="이메일"
                        />

                        {/* 이메일 형식이 아니면 */}
                        {/*<FormHelperText id="component-error-text" className={classes.errorText}>이메일 형식이 잘못되었습니다.</FormHelperText>*/}

                    </FormControl>

                    <FormControl className={classes.textField} variant="outlined">
                        <OutlinedInput
                            inputProps={{'aria-label': 'password input box'}}
                            id="outlined-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            startAdornment={
                                <InputAdornment position="start">
                                    <LoginPasswordIcon/>
                                </InputAdornment>
                            }
                            endAdornment={
                                <InputAdornment position="end" >
                                    <IconButton className={classes.iconButton} onClick={this.handleClickShowPassword} disableRipple>
                                        {this.state.showPassword ?
                                            <LoginEyeIcon/>
                                            :
                                            <LoginEyeSlashIcon/>
                                        }
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={0}
                            placeholder="비밀번호"
                        />
                    </FormControl>

                    <FormControlLabel
                        control={
                            <Checkbox
                                icon={<UnCheckedIcon />}
                                checkedIcon={<CheckedIcon />}
                                value="emailCheck"
                            />
                        }
                        label="이메일 기억하기"
                        className={classes.checkedBox}
                    />
                    <Button className={classes.buttonStyle} disableRipple>
                        로그인
                    </Button>

                    {/* 로그인 실패시*/}
                    {/*<Typography className={classes.errorText}>일치하는 로그인 정보가 없습니다. 다시 확인하여 주시기 바랍니다.</Typography>*/}

                    <Box display='flex' alignItems='center' justifyContent='space-between' mt={4}>
                        <Box display='flex' alignItems='center'>
                            <Typography className={classes.textButton}>회원이 아니신가요?</Typography>
                            <Button className={clsx(classes.iconButton, classes.textButton, classes.underline)} disableRipple onClick={this.handleClickSingUp}>
                                회원가입
                            </Button>
                        </Box>
                        <Button className={clsx(classes.iconButton, classes.textButton)} disableRipple onClick={this.handleClickPasswordFind}>
                            비밀번호 찾기
                        </Button>
                    </Box>

                    {/*<Box className={classes.lineStyle}/>*/}

                    {/*<SocialLoginComponent*/}
                    {/*    naverText={"네이버로 로그인"}*/}
                    {/*    kakaoText={"카카오로 로그인"}*/}
                    {/*    facebookText={"페이스북으로 로그인"}*/}
                    {/*    googleText={"구글로 로그인"}*/}
                    {/*/>*/}

                </Box>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(Login));