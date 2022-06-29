import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Typography} from "@material-ui/core";
import clsx from "clsx";
import {ReactComponent as PasswordNumberCheckedIcon} from "../../common/images/PasswordNumberCheckedIcon.svg";
import {ReactComponent as PasswordNumberCheckedErrorIcon} from "../../common/images/PasswordNumberCheckedErrorIcon.svg";
import {ReactComponent as PasswordNumberUnCheckedIcon} from "../../common/images/PasswordNumberUnCheckedIcon.svg";

const styles = theme => ({
    root:{

    },
    checkedMargin:{
        marginTop:15
    },
    checkedText:{
        fontSize:'0.875rem',
        color:'#9d9d9d',
        marginLeft:10,
    },
    checkedOnText:{
        color:'#0097ff',
    },
    checkedErrorText:{
        color:'#ff0000',
    },
});

class PasswordCheckComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordNumberCheck: false,
            passwordNumberErrorCheck: false,
            passwordTextCheck: false,
            passwordTextErrorCheck: false,
        };
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {this.state.passwordNumberCheck === true ?
                    <Box display='flex' alignItems='center' className={classes.checkedMargin}>
                        <PasswordNumberCheckedIcon />
                        <Typography className={clsx(classes.checkedText, classes.checkedOnText)}>영문, 숫자, 특수문자 중 2가지 이상 조합</Typography>
                    </Box>
                    :
                    this.state.passwordNumberErrorCheck === true ?
                        <Box display='flex' alignItems='center' className={classes.checkedMargin}>
                            <PasswordNumberCheckedErrorIcon />
                            <Typography className={clsx(classes.checkedText, classes.checkedErrorText)}>영문, 숫자, 특수문자 중 2가지 이상 조합</Typography>
                        </Box>
                        :
                        <Box display='flex' alignItems='center' className={classes.checkedMargin}>
                            <PasswordNumberUnCheckedIcon />
                            <Typography className={classes.checkedText}>영문, 숫자, 특수문자 중 2가지 이상 조합</Typography>
                        </Box>

                }

                {this.state.passwordTextCheck === true ?
                    <Box display='flex' alignItems='center' className={classes.checkedMargin}>
                        <PasswordNumberCheckedIcon />
                        <Typography className={clsx(classes.checkedText, classes.checkedOnText)}>10자 이상</Typography>
                    </Box>
                    :
                    this.state.passwordTextErrorCheck === true ?
                        <Box display='flex' alignItems='center' className={classes.checkedMargin}>
                            <PasswordNumberCheckedErrorIcon />
                            <Typography className={clsx(classes.checkedText, classes.checkedErrorText)}>10자 이상</Typography>
                        </Box>
                        :
                        <Box display='flex' alignItems='center' className={classes.checkedMargin}>
                            <PasswordNumberUnCheckedIcon />
                            <Typography className={classes.checkedText}>10자 이상</Typography>
                        </Box>
                }
            </div>
        );
    }
}

export default withStyles(styles)(PasswordCheckComponent);