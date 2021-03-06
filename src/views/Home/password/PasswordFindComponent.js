import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, FormControl, InputAdornment, OutlinedInput, Typography, FormHelperText} from "@material-ui/core";
import clsx from "clsx";
import {ReactComponent as LoginUserIcon} from "../../../common/images/LoginUserIcon.svg";
import {ReactComponent as BackArrowIcon} from "../../../common/images/BackArrowIcon.svg";
import {withRouter} from "react-router-dom";

const styles = theme => ({
    root:{
        width:545,
        height:'calc(100vh - 130px)',
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        margin:'0 auto'
    },
    backButtonBox:{
        width:'100%',
        display:'flex',
        marginBottom:13
    },
    backButton:{
        padding:0,
        fontSize:'1rem',
        color:'#000',
        "& span":{
            marginRight:8,
            marginBottom:1
        },
        "&:hover":{
            background:'transparent'
        }
    },
    boxLine:{
        width:545,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        border:'1px solid #e5e6e8',
        padding:'50px 0 30px',
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
        color:'#808080'
    },
    textStyle1:{
        fontSize:'1.125rem',
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
    errorTextField:{
        "& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            border:'1px solid #ff0000'
        },
    },
    errorText:{
        fontSize:'0.813rem',
        color:'#ff0000',
        margin:'5px 0 0'
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

class PasswordFindComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordFind: false
        };
    }

    handleClick = () => {
        this.setState({
            passwordFind: true,
        });
    };

    handleClickLogin = e => {
        this.props.history.push("/login");
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.backButtonBox}>
                    <Button
                        className={classes.backButton}
                        startIcon={<BackArrowIcon />}
                        disableRipple
                        onClick={this.handleClickLogin}
                    >
                        ?????????
                    </Button>
                </Box>

                <Box className={classes.boxLine}>
                    <Typography className={classes.titleText}>???????????? ??????</Typography>
                    {this.state.passwordFind === false ?
                        <>
                            <Typography className={classes.textStyle}>????????? ????????? ????????? ??????????????????.</Typography>
                            <Typography className={classes.textStyle}>???????????? ???????????? ?????? ?????? ????????? ??????????????????.</Typography>

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
                                    placeholder='?????????'
                                />
                                {/* ????????? ????????? ????????? */}
                                {/*<FormHelperText id="component-error-text" className={classes.errorText}>????????? ????????? ?????????????????????.</FormHelperText>*/}

                            </FormControl>

                            <Button className={classes.buttonStyle} disableRipple onClick={this.handleClick}>
                                ????????? ?????? ??????
                            </Button>
                            {/* ????????? ?????????*/}
                            {/*<Typography className={classes.errorText}>???????????? ????????? ????????? ????????????. ?????? ???????????? ????????? ????????????.</Typography>*/}
                        </>
                        :
                        <Box style={{paddingTop:20, paddingBottom:30}}>
                            <Typography className={classes.textStyle1}><span style={{color:'#333'}}>abc@onthelive.kr</span> ??? ????????? ????????? ?????????????????????.</Typography>
                            <Typography className={classes.textStyle1}>??????????????? ?????????????????????.</Typography>
                        </Box>
                    }
                </Box>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(PasswordFindComponent));