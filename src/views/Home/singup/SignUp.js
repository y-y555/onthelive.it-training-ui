import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Box, Button, Checkbox,
    FormControl,
    IconButton,
    InputAdornment,
    OutlinedInput,
    Typography
} from "@material-ui/core";
import {ReactComponent as LoginUserIcon} from "../../../common/images/LoginUserIcon.svg";
import {ReactComponent as LoginPasswordIcon} from "../../../common/images/LoginPasswordIcon.svg";
import {ReactComponent as LoginEyeIcon} from "../../../common/images/LoginEyeIcon.svg";
import {ReactComponent as LoginEyeSlashIcon} from "../../../common/images/LoginEyeSlashIcon.svg";
import ReCAPTCHA from "react-google-recaptcha";
import {ReactComponent as CheckCircleAgreeOffIcon} from "../../../common/images/CheckCircleAgreeOffIcon.svg";
import {ReactComponent as CheckCircleAgreeOnIcon} from "../../../common/images/CheckCircleAgreeOnIcon.svg";
import clsx from "clsx";
import SocialLoginComponent from "../SocialLoginComponent";
import PasswordCheckComponent from "../PasswordCheckComponent";
import {withRouter} from "react-router-dom";

const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const styles = theme => ({
    root:{
        width:522,
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        margin:'0 auto 0'
    },
    textButton:{
        fontSize:'0.875rem',
        color:'#333',
        marginBottom: 15,
        marginTop:45,
    },
    underline:{
        fontWeight:'600',
        textDecoration:'underline',
        "&:hover":{
            textDecoration:'underline',
        }
    },
    loginBox:{
        display:'flex',
        flexDirection:'column',
        border:'1px solid #e5e6e8',
        padding:'50px 90px 30px',
        boxSizing:'border-box',
        borderRadius:12,
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
                opacity:1,
            },
        },
        "& .MuiInputBase-root div:first-child::after":{
            display:'block',
            content:"'*'",
            color:'red',
            fontSize:16
        }
    },
    errorTextField:{
        "& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            border:'1px solid #ff0000'
        },
    },
    checkBoxMargin:{
        marginTop:30
    },
    iconButton:{
        padding:0,
        "&:hover":{
            background:'transparent',
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
    lineStyle:{
        width:'100%',
        height:1,
        borderBottom:'1px dashed #dddddd',
        margin:'30px 0'
    },
    checkBoxIcon:{

    },
    checkedListBoxIn:{
        "& .MuiCheckbox-colorSecondary:hover":{
            "&:hover":{
                background:'transparent'
            }
        },
        "& label":{
            fontSize:'0.875rem',
            color:'#333',
        }
    },
    allCheckedBox:{
        "& .MuiCheckbox-colorSecondary:hover":{
            "&:hover":{
                background:'transparent'
            }
        },
        "& label":{
            fontSize:'0.938rem',
            fontWeight:600,
            color:'#000',
        }
    },
    checkedViewButton:{
        fontSize:'0.875rem',
        color:'#9a9a9a',
        textDecoration:'underline',
        padding:0,
        "&:hover":{
            background:'transparent',
            textDecoration:'underline',
        }
    }
});

function CheckBox({name, value, tick, onCheck, type}) {
    return (
        <label>
            <Checkbox
                name={name}
                value={value}
                checked={tick || false}
                onChange={onCheck}
                checkedIcon={<CheckCircleAgreeOnIcon/>}
                icon={<CheckCircleAgreeOffIcon/>}
                disableRipple
            />
            {name === "select-all" ?
                null
                :
                type === "select" ?
                    <span>[선택] </span>
                    :
                    <span style={{color:'#ff0000'}}>[필수] </span>
            }

            {value}
        </label>
    );
}

function CheckBoxList ({options, isCheckedAll, onCheck, classes}) {
    const checkBoxOptions = (
        <div className="checkbox-list">
            {options.map((option, index) => {
                return (
                    <Box display='flex' alignItems='center' justifyContent='space-between' className={classes.checkedListBoxIn}>
                        <CheckBox key={index} name={option.name} value={option.value} tick={option.checked} type={option.type} onCheck={(e) => onCheck(option.value, e.target.checked)} />
                        <Button className={classes.checkedViewButton} disableRipple>보기</Button>
                    </Box>
                );
            })}
        </div>
    );

    return (
        <Box className="checkbox-list">
            <Box display='flex' alignItems='center' className={classes.allCheckedBox} >
                <CheckBox name="select-all" value="전체 약관동의" tick={isCheckedAll} onCheck={(e) => onCheck('all', e.target.checked)}/>
            </Box>
            {checkBoxOptions}
        </Box>
    );
}

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            isAllSelected: false,
            checkList: [
                {
                    name: "agree",
                    value: "서비스 이용약관",
                    checked: false,
                    type: "basic"
                },
                {
                    name: "agree",
                    value: "개인정보 수집 및 처리방침",
                    checked: false,
                    type: "basic"
                },
                {
                    name: "agree",
                    value: "이벤트, 프로모션 알림 메일 수신",
                    checked: false,
                    type: "select"
                }
            ]
        };
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    onCheckBoxChange(checkName, isChecked) {
        let isAllChecked = (checkName === 'all' && isChecked);
        let isAllUnChecked = (checkName === 'all' && !isChecked);
        const checked = isChecked;

        const checkList = this.state.checkList.map((help, index) => {
            if(isAllChecked || help.value === checkName) {
                return Object.assign({}, help, {
                    checked,
                });
            } else if (isAllUnChecked) {
                return Object.assign({}, help, {
                    checked: false,
                });
            }

            return help;
        });

        let isAllSelected = (checkList.findIndex((item) => item.checked === false) === -1) || isAllChecked;

        this.setState({
            checkList,
            isAllSelected,
        });

    }

    handleClickLogin = e => {
        this.props.history.push("/login");
    };

    handleClickSignUp = e => {
        this.props.history.push("/signupDialog");
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box display='flex' justifyContent='flex-end' alignItems='center'>
                    <Typography className={classes.textButton}>이미 회원이신가요?</Typography>
                    <Button className={clsx(classes.iconButton, classes.textButton, classes.underline)} disableRipple onClick={this.handleClickLogin}>
                        로그인
                    </Button>
                </Box>
                <Box className={classes.loginBox}>
                    <Typography className={classes.loginText}>회원가입</Typography>
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
                            placeholder='이메일'
                        />

                    </FormControl>

                    {/* 비밀번호 형식이 아니면*/}
                    {/*<FormControl className={clsx(classes.textField, classes.errorTextField)} variant="outlined">*/}
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
                                <InputAdornment position="end">
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

                    <PasswordCheckComponent/>

                    <FormControl className={classes.textField} variant="outlined">
                        <OutlinedInput
                            inputProps={{'aria-label': 'name input box'}}
                            id="outlined-name"
                            startAdornment={
                                <InputAdornment position="start">
                                    <LoginUserIcon/>
                                </InputAdornment>
                            }
                            labelWidth={0}
                            placeholder="이름"
                        />
                    </FormControl>

                    <Box className={classes.checkBoxMargin}>
                        <CheckBoxList classes={this.props.classes} options={this.state.checkList} isCheckedAll={this.state.isAllSelected} onCheck={this.onCheckBoxChange.bind(this)} />
                    </Box>

                    <Box>
                        <ReCAPTCHA
                            style={{ display: "inline-block", marginTop:20, marginBottom:20}}
                            theme="light"
                            sitekey={TEST_SITE_KEY}
                            onChange={this.handleChange}
                        />
                    </Box>

                    <Button className={classes.buttonStyle} disableRipple onClick={this.handleClickSignUp}>
                        가입
                    </Button>

                    <Box className={classes.lineStyle}/>

                    <SocialLoginComponent
                        naverText={"네이버로 시작하기"}
                        kakaoText={"네이버로 시작하기"}
                        facebookText={"네이버로 시작하기"}
                        googleText={"네이버로 시작하기"}
                    />

                </Box>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(SignUp));