import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Button, Box, Typography} from "@material-ui/core";
import { ReactComponent as LogoNaverIcon } from '../../common/images/LogoNaverIcon.svg';
import { ReactComponent as LogoKakaoIcon } from '../../common/images/LogoKakaoIcon.svg';
import { ReactComponent as LogoFacebookIcon } from '../../common/images/LogoFacebookIcon.svg';
import { ReactComponent as LogoGoogleIcon } from '../../common/images/LogoGoogleIcon.svg';
import {withRouter} from "react-router-dom";

const styles = theme => ({
    root:{
    },
    buttonStyle:{
        width:340,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:7,
        border:'1px solid #d9dbde',
        background:'#fff',
        padding:'16px 20px',
        boxSizing:'border-box',
        marginBottom:10,
        "&:hover":{
            background:'#fff'
        }
    },
    buttonText:{
        color:'#9d9d9d',
        fontSize:'0.938rem'
    }
});

class SocialLoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    handleClickSignUp = e => {
        this.props.history.push("/socialAgree");
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Button
                    className={classes.buttonStyle}
                    disableRipple
                    onClick={
                        this.props.naverText === "네이버로 시작하기" ?
                            this.handleClickSignUp
                            :
                            null
                    }
                >
                    <LogoNaverIcon/>
                    <Typography className={classes.buttonText}>{this.props.naverText}</Typography>
                    <span/>
                </Button>
                <Button className={classes.buttonStyle} disableRipple>
                    <LogoKakaoIcon/>
                    <Typography className={classes.buttonText}>{this.props.kakaoText}</Typography>
                    <span/>
                </Button>
                <Button className={classes.buttonStyle} disableRipple>
                    <LogoFacebookIcon/>
                    <Typography className={classes.buttonText}>{this.props.facebookText}</Typography>
                    <span/>
                </Button>
                <Button className={classes.buttonStyle} disableRipple>
                    <LogoGoogleIcon/>
                    <Typography className={classes.buttonText}>{this.props.googleText}</Typography>
                    <span/>
                </Button>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(SocialLoginComponent));