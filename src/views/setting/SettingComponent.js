import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {Box, Typography, Button, Avatar, FormControlLabel, Switch} from "@material-ui/core";
import SwitchCheckIcon from "../../common/images/SwitchCheckIcon.svg";
import SwitchCloseIcon from "../../common/images/SwitchCloseIcon.svg";
import ProfileDialogComponent from "../dialog/ProfileDialogComponent";
import ProfileEditDialogComponent from "./dialog/ProfileEditDialogComponent";
import NoticeChangeDialogComponent from "./dialog/NoticeChangeDialogComponent";
import RoomOpenDialogComponent from "./dialog/RoomOpenDialogComponent";
import CommunityDialogComponent from "./dialog/CommunityDialogComponent";
import {withRouter} from "react-router-dom";
import AddAdminDialogComponent from "./dialog/AddAdminDialogComponent";
import WithdrawalDialogComponent from "./dialog/WithdrawalDialogComponent";
import {Delete} from "@material-ui/icons";
import DeleteDialogComponent from "./dialog/DeleteDialogComponent";

const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width:620,
        paddingBottom:70
    },
    titleText:{
        fontSize:'0.938rem',
        fontWeight:600,
        color:'#000',
        textAlign:'left'
    },
    boxStyle:{
        background:'#f8f8f8',
        borderRadius:10,
        padding:'21px 28px',
        marginTop:10,
        marginBottom:30
    },
    avatarStyle:{
        width:32,
        height:32,
        marginRight:7
    },
    textStyle:{
         fontSize:'0.875rem',
        color:'#000'
    },
    buttonStyle:{
        border:'1px solid #0097ff',
        color:'#0097ff',
        borderRadius:7,
        background:'#fff',
        width:110,
        height:40,
        fontSize:'0.938rem',
        fontWeight:600,
        "&:hover":{
            border:'1px solid #0097ff',
            background:'#fff',
        }
    },
    deleteButton:{
        background:'#0097ff',
        color:'#fff',
        "&:hover":{
            background:'#0097ff',
        }
    },
    boxMargin:{
        paddingTop:11,
        borderTop:'1px solid #e1e1e1',
        marginTop:11
    },
    blueText:{
        fontSize:'0.938rem',
        color:'#0097ff',
        marginRight:30
    },
    switchBox:{
        width:110,
        height:40,
        display:'flex',
        justifyContent:'center',
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
});


class SettingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joinSwitch:false,

            //dialog
            profileDialogOpen: false,
            noticeDialogOpen: false,
            roomOpenDialog: false,
            communityDialogOpen: false,
            withdrawalDialogOpen: false,
            deleteDialogOpen: false,

        };
    }

    handleChange = event => {
        this.setState({ joinSwitch: event.target.checked });
    };

    handleClickProfileDialogOpen = () => {
        this.setState({ profileDialogOpen: true });
    };

    handleClickNoticeDialogOpen = () => {
        this.setState({ noticeDialogOpen: true });
    };

    handleClickRoomModifyOpen = e => {
        this.props.history.push("/roomModify");
    };

    handleClickRoomOpenDialog = () => {
        this.setState({ roomOpenDialog: true });
    };

    handleClickCommunityDialogOpen = () => {
        this.setState({ communityDialogOpen: true });
    };

    handleClickWithdrawalDialogOpenDialogOpen = () => {
        this.setState({ withdrawalDialogOpen: true });
    };

    handleClickDeleteDialogOpen = () => {
        this.setState({ deleteDialogOpen: true });
    };

    handleClose = () => {
        this.setState({
            profileDialogOpen: false ,
            noticeDialogOpen: false ,
            roomOpenDialog: false ,
            communityDialogOpen: false ,
            withdrawalDialogOpen: false ,
            deleteDialogOpen: false ,
        });
    };


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography className={classes.titleText}>??????</Typography>
                <Box className={classes.boxStyle}>
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Box display='flex' alignItems='center'>
                            <Avatar className={classes.avatarStyle}/>
                            <Typography className={classes.textStyle}>?????????</Typography>
                        </Box>
                        <Button className={classes.buttonStyle} onClick={this.handleClickProfileDialogOpen} disableRipple>????????? ??????</Button>
                    </Box>
                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.boxMargin}>
                        <Box display='flex' alignItems='center'>
                            <Typography className={classes.textStyle}>??????</Typography>
                        </Box>
                        <Button className={classes.buttonStyle} onClick={this.handleClickNoticeDialogOpen} disableRipple>??????</Button>
                    </Box>
                </Box>

                <Typography className={classes.textStyle}>?????? ?????? ??????</Typography>
                <Box className={classes.boxStyle}>
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Box display='flex' alignItems='center'>
                            <Typography className={classes.textStyle}>?????? ?????? ??? ??????, ??????, ?????? ??????</Typography>
                        </Box>
                        <Button className={classes.buttonStyle} onClick={this.handleClickRoomModifyOpen} disableRipple>??????</Button>
                    </Box>
                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.boxMargin}>
                        <Box display='flex' alignItems='center'>
                            <Typography className={classes.textStyle}>?????? ??????</Typography>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <Typography className={classes.blueText}>??????</Typography>
                            <Button className={classes.buttonStyle} onClick={this.handleClickRoomOpenDialog} disableRipple>??????</Button>
                        </Box>
                    </Box>
                </Box>

                <Typography className={classes.textStyle}>?????? ??????</Typography>
                <Box className={classes.boxStyle}>
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Box display='flex' alignItems='center'>
                            <Typography className={classes.textStyle}>?????? ?????? ??????</Typography>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <Typography className={classes.blueText}>????????? ?????? ?????? ?????? ?????? ??????</Typography>
                            <Box className={classes.switchBox}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            disableRipple
                                            checked={this.state.joinSwitch}
                                            onChange={this.handleChange}
                                            value="joinSwitch"
                                        />
                                    }
                                    label=""
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.boxMargin}>
                        <Box display='flex' alignItems='center'>
                            <Typography className={classes.textStyle}>?????? ?????? ??? ??????</Typography>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <Typography className={classes.blueText}>0???</Typography>
                            <Button className={classes.buttonStyle} onClick={this.props.handleChangeMemberRequest} disableRipple>??????</Button>
                        </Box>
                    </Box>
                </Box>

                <Typography className={classes.textStyle}>?????? ??????</Typography>
                <Box className={classes.boxStyle}>
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Box display='flex' alignItems='center'>
                            <Typography className={classes.textStyle}>?????? ?????? ??????</Typography>
                        </Box>
                        <Button className={classes.buttonStyle} onClick={this.props.handleChangeMemberPermissionSetting} disableRipple>??????</Button>
                    </Box>
                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.boxMargin}>
                        <Box display='flex' alignItems='center'>
                            <Typography className={classes.textStyle}>????????? ??????</Typography>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <Typography className={classes.blueText}>0???</Typography>
                            <Button className={classes.buttonStyle} onClick={this.props.handleChangeAddAdmin} disableRipple>??????</Button>
                        </Box>
                    </Box>
                </Box>

                <Typography className={classes.textStyle}>?????? ??????</Typography>
                <Box className={classes.boxStyle}>
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Box display='flex' alignItems='center'>
                            <Typography className={classes.textStyle}>???????????? ??????</Typography>
                        </Box>
                        <Button className={classes.buttonStyle} onClick={this.handleClickCommunityDialogOpen} disableRipple>??????</Button>
                    </Box>
                </Box>

                <Box className={classes.boxStyle}>
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Box display='flex' alignItems='center'>
                            <Typography className={classes.textStyle}>????????????</Typography>
                        </Box>
                        <Button className={classes.buttonStyle} onClick={this.handleClickWithdrawalDialogOpenDialogOpen} disableRipple>??????</Button>
                    </Box>
                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.boxMargin}>
                        <Box display='flex' alignItems='center'>
                            <Typography className={classes.textStyle}>?????? ??????</Typography>
                        </Box>

                        <Button className={clsx(classes.buttonStyle, classes.deleteButton)} onClick={this.handleClickDeleteDialogOpen} disableRipple>??????</Button>
                    </Box>
                </Box>

                {/* dialog */}
                <ProfileEditDialogComponent profileDialogOpen={this.state.profileDialogOpen} handleClose={this.handleClose}/>
                <NoticeChangeDialogComponent noticeDialogOpen={this.state.noticeDialogOpen} handleClose={this.handleClose}/>
                <RoomOpenDialogComponent roomOpenDialog={this.state.roomOpenDialog} handleClose={this.handleClose}/>
                <CommunityDialogComponent communityDialogOpen={this.state.communityDialogOpen} handleClose={this.handleClose}/>

                <WithdrawalDialogComponent withdrawalDialogOpen={this.state.withdrawalDialogOpen} handleClose={this.handleClose}/>
                <DeleteDialogComponent deleteDialogOpen={this.state.deleteDialogOpen} handleClose={this.handleClose} handleChangeMemberWithdrawal={this.props.handleChangeMemberWithdrawal}/>

            </div>
        );
    }
}

export default withRouter(withStyles(styles)(SettingComponent));