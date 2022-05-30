import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Dialog, IconButton, Typography} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../../common/images/DialogCloseIcon.svg";


const styles = theme => ({
    root:{

    },
    dialogBox:{
        "& .MuiPaper-root":{
            width:382,
            padding:24,
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
    warningText:{
        fontSize:'1rem',
        fontWeight:600,
        color:'#ff0000',
        margin:'30px 0 5px'
    },
    textStyle:{
        fontSize:'0.813rem',
        color:'#333'
    },
    textMargin:{
        marginTop:30
    },
    buttonStyle:{
        width:'100%',
        height:48,
        borderRadius:8,
        background:'#0097ff',
        color:'#fff',
        fontSize:'1.125rem',
        marginTop:38,
        "&:hover":{
            background:'#0097ff'
        },
        "&.Mui-disabled":{
            background:'#c2c2c2',
            color:'#fff'
        }
    },
});

class DeleteDialogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Dialog
                    open={this.props.deleteDialogOpen}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Typography className={classes.titleText}>모임 삭제</Typography>
                        <IconButton className={classes.iconButton} onClick={this.props.handleClose} disableRipple>
                            <DialogCloseIcon/>
                        </IconButton>
                    </Box>

                    <Box>
                        <Typography className={classes.warningText}>삭제 전 꼭 확인하세요.</Typography>

                        {/* 멤버가 본인 혼자인 경우 */}
                        {/*<Typography className={classes.textStyle}>회원님이 마지막 멤버이므로 지금 나가면 모임이 삭제됩니다.</Typography>*/}
                        {/*<Typography className={classes.textStyle}>모든 데이터는 삭제와 동시에 복구할 수 없습니다.</Typography>*/}
                        {/*<Typography className={classes.textStyle}>필요하면  내가 작성한 일정, 게시물, 댓글 등 보관하거나<br/> 삭제해주세요.</Typography>*/}

                        {/*멤버가 본인 포함 2명 이상인 경우*/}
                        <Typography className={classes.textStyle}>모임을 삭제하려면 멤버들에게 공지, 게시물 또는 직접 메시지로 알림을 통해 탈퇴 요청하시고 삭제를 진행해주세요.</Typography>
                        <Typography className={classes.textStyle}>모든 데이터는 삭제와 동시에 복구할 수 없습니다.</Typography>
                        <Typography className={classes.textStyle}>필요하면  내가 작성한 일정, 게시물, 댓글 등 보관하거나<br/> 삭제해주세요.</Typography>
                        <Typography className={clsx(classes.textStyle, classes.textMargin)}>강제탈퇴를 진행하려면 아래 버튼을 눌러 진행해주세요.</Typography>

                        {/* 멤버가 본인 포함 2명 이상인 경우 -> 강제 탈퇴하기, 멤버가 본인 혼자인 경우 -> 삭제하기 */}
                        <Button className={classes.buttonStyle} onClick={this.props.handleChangeMemberWithdrawal} disableRipple>강제 탈퇴하기</Button>
                    </Box>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(DeleteDialogComponent);