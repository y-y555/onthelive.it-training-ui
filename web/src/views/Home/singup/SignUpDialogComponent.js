import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Typography,} from "@material-ui/core";
import {withRouter} from "react-router-dom";

const styles = theme => ({
    root:{
        width:'100%',
        height:'calc(100vh - 130px)',
        display:'inline-flex',
        justifyContent:'center',
        alignItems:'center'
    },
    boxLine:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        border:'1px solid #e5e6e8',
        padding:'50px 90px 30px',
        boxSizing:'border-box',
        borderRadius:12,
        marginTop:45
    },
    titleText:{
        fontSize:'1.75rem',
        color:'#333',
        textAlign:'center',
        marginBottom:40
    },
    textStyle:{
        fontSize:'1.125rem',
        color:'#333',
        display:'flex',
        alignItems:'center'
    },
    emailText:{
        fontWeight:600,
        textDecoration:'underline'
    },
    buttonStyle:{
        width:340,
        background:'#0097ff',
        color:'#fff',
        fontSize:'1.125rem',
        padding:'15px 0',
        borderRadius:7,
        marginTop:40,
        "&:hover":{
            background:'#0097ff',
        },
        "&.Mui-disabled":{
            background:'#c2c2c2',
            color:'#fff'
        }
    },
});

class SignUpDialogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    handleClickLogin = e => {
        this.props.history.push("/login");
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.boxLine}>
                    <Typography className={classes.titleText}>회원가입 완료</Typography>
                    {/* 회원가입시 */}
                    <Typography className={clsx(classes.textStyle, classes.emailText)}>abc@onthelive.kr</Typography>
                    <Typography className={classes.textStyle}>이메일 주소가 인증되었습니다.</Typography>

                    {/* 소설로 회원가입시*/}
                    {/*<Typography className={classes.textStyle}>*/}
                    {/*    <LogoNaverIcon/>&nbsp;<span style={{fontWeight:600}}>네이버</span> &nbsp;계정으로 로그인해주세요.*/}
                    {/*</Typography>*/}

                    <Button className={classes.buttonStyle} disableRipple onClick={this.handleClickLogin}>
                        로그인
                    </Button>
                </Box>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(SignUpDialogComponent));