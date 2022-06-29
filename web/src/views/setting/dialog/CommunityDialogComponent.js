import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Dialog, FormControlLabel, IconButton, Switch, Typography} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../../common/images/DialogCloseIcon.svg";
import SwitchCloseIcon from "../../../common/images/SwitchCloseIcon.svg";
import SwitchCheckIcon from "../../../common/images/SwitchCheckIcon.svg";

const styles = theme => ({
    root:{

    },
    dialogBox:{
        "& .MuiPaper-root":{
            width:315,
            padding:'24px 24px 34px',
            boxSizing:'border-box',
            borderRadius:10,
            boxShadow:'0 2.5px 5px 0 rgba(0, 0, 0, 0.25)'
        },
        "& *": {
            fontFamily: 'NanumSquareRoundOTF' ,
        }
    },
    titleText:{
        fontSize:'1.25rem',
        color:'#000',
        fontWeight:600
    },
    iconButton:{
        padding:0,
        "&:hover":{
            background:'transparent'
        }
    },
    boxStyle:{
        margin:'30px 0 16px'
    },
    switchBox:{
        "& .MuiFormControlLabel-root":{
            marginLeft:0,
            marginRight:0
        },
        "& .MuiSwitch-root":{
            width:48,
            height:24,
            padding:0,
            borderRadius:15
        },
        "& .MuiIconButton-root":{
            padding:0
        },
        "& .MuiSwitch-thumb":{
            width:24,
            height:24,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            border:'3px solid #5e5e5e',
            boxSizing:'border-box',
            "&:before":{
                content:"''",
                width:18,
                height:18,
                backgroundImage:`url(${SwitchCloseIcon})`,
                backgroundSize:'100%',
            }
        },
        "& .MuiSwitch-track":{
            opacity:1,
            background:'#5e5e5e',
        },
        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":{
            opacity:1,
            background:'#1f75cb'
        },
        "& .MuiSwitch-colorSecondary.Mui-checked .MuiSwitch-thumb":{
            border:'3px solid #1f75cb',
            background:'#fff',
            "&:before":{
                content:"''",
                width:18,
                height:18,
                backgroundImage:`url(${SwitchCheckIcon})`,
                backgroundSize:'100%'
            }
        },
        "& .MuiSwitch-switchBase.Mui-checked":{
            transform: 'translateX(24px)'
        }
    },
    textStyle1:{
        fontSize:'1rem',
        color:'#333'
    },
    textStyle:{
        fontSize:'0.813rem',
        color:'#a3a8af',
        fontWeight:300,
    },
});

class CommunityDialogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch:true,
        };
    }

    handleChange = event => {
        this.setState({ switch: event.target.checked });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Dialog
                    open={this.props.communityDialogOpen}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Typography className={classes.titleText}>커뮤니티 설정</Typography>
                        <IconButton className={classes.iconButton} onClick={this.props.handleClose} disableRipple>
                            <DialogCloseIcon/>
                        </IconButton>
                    </Box>

                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.boxStyle}>
                        <Typography className={classes.textStyle1}>비밀 게시판 </Typography>
                        <Box className={classes.switchBox}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        disableRipple
                                        checked={this.state.switch}
                                        onChange={this.handleChange}
                                        value="switch"
                                    />
                                }
                                label=""
                            />
                        </Box>
                    </Box>
                    {this.state.switch === true ?
                        <Typography className={classes.textStyle}>커뮤니티에 하위 메뉴로 표시되고 멤버들이 게시물을등록할 수 있도록 허용합니다.</Typography>
                        :
                        <Typography className={classes.textStyle}>커뮤니티에 하위 메뉴로 표시되지 않습니다.</Typography>
                    }

                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(CommunityDialogComponent);