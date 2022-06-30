import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Typography} from "@material-ui/core";

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
        fontSize:'1.125rem',
        color:'#333',
        textAlign:'center'
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

class PasswordResetCompleteComponent extends Component {
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
                    <Typography className={classes.textStyle}>비밀번호 재설정이 완료되었습니다.</Typography>

                    <Button className={classes.buttonStyle} disableRipple>
                        로그인
                    </Button>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(PasswordResetCompleteComponent);