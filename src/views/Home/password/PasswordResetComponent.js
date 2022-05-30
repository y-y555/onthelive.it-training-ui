import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, FormControl, InputAdornment, OutlinedInput, Typography} from "@material-ui/core";
import {ReactComponent as LoginPasswordIcon} from "../../../common/images/LoginPasswordIcon.svg";
import PasswordCheckComponent from "../PasswordCheckComponent";

const styles = theme => ({
    root:{
        width:'100%',
        height:'calc(100vh - 130px)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    boxLine:{
        display:'flex',
        flexDirection:'column',
        border:'1px solid #e5e6e8',
        padding:'50px 90px 30px',
        boxSizing:'border-box',
        borderRadius:12,
    },
    titleText:{
        fontSize:'1.75rem',
        color:'#333',
        textAlign:'center',
        marginBottom:20
    },
    textStyle:{
        fontSize:'1rem',
        color:'#808080',
        textAlign:'center'
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
    },
    buttonStyle:{
        width:340,
        background:'#0097ff',
        color:'#fff',
        fontSize:'1.125rem',
        padding:'15px 0',
        borderRadius:7,
        marginTop:30,
        "&:hover":{
            background:'#0097ff',
        },
        "&.Mui-disabled":{
            background:'#c2c2c2',
            color:'#fff'
        }
    },
});

class PasswordResetComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.boxLine}>
                    <Typography className={classes.titleText}>비밀번호 재설정</Typography>
                    <Typography className={classes.textStyle}>거의 완료되었습니다.</Typography>
                    <Typography className={classes.textStyle}>새로운 비밀번호를 입력해주세요.</Typography>

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
                            labelWidth={0}
                            placeholder="비밀번호"
                        />
                    </FormControl>

                    <PasswordCheckComponent/>

                    <FormControl className={classes.textField} variant="outlined">
                        <OutlinedInput
                            inputProps={{'aria-label': 'Password confirmation field'}}
                            id="outlined-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            startAdornment={
                                <InputAdornment position="start">
                                    <LoginPasswordIcon/>
                                </InputAdornment>
                            }
                            labelWidth={0}
                            placeholder="비밀번호"
                        />
                    </FormControl>

                    <Button className={classes.buttonStyle} disableRipple>
                        비밀번호 재설정
                    </Button>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(PasswordResetComponent);