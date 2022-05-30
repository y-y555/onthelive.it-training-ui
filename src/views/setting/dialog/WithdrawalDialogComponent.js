import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Checkbox, Dialog, FormControlLabel, IconButton, Typography} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../../common/images/DialogCloseIcon.svg";
import {ReactComponent as UnCheckedIcon} from "../../../common/images/UnCheckedIcon.svg";
import {ReactComponent as CheckedIcon} from "../../../common/images/CheckedIcon.svg";

const styles = theme => ({
    root:{

    },
    dialogBox:{
        "& .MuiPaper-root":{
            minWidth:350,
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
    checkedBox:{
        margin:'15px 0 0',
        "& .MuiIconButton-root":{
            padding:0
        },
        "& .MuiFormControlLabel-label":{
            fontSize:'1rem',
            color:'#333',
            fontWeight:600,
            marginLeft:7
        }
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

class WithdrawalDialogComponent extends Component {
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
                    open={this.props.withdrawalDialogOpen}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Typography className={classes.titleText}>모임 탈퇴</Typography>
                        <IconButton className={classes.iconButton} onClick={this.props.handleClose} disableRipple>
                            <DialogCloseIcon/>
                        </IconButton>
                    </Box>

                    <Box>
                        <Typography className={classes.warningText}>탈퇴 전 꼭 확인하세요.</Typography>

                        {/* 멤버가 본인 한명뿐인 경우 */}
                        {/*<Typography className={classes.textStyle}>회원님이 마지막 멤버이므로 지금 나가면 모임이 삭제됩니다.</Typography>*/}

                        {/* 본인이 모임 생상자인 경우 */}
                        {/*<Typography className={classes.textStyle}>회원님은 모임 주최자이므로 탈퇴하실 수 없습니다.</Typography>*/}
                        {/*<Typography className={classes.textStyle}>모임 삭제 설정에서 진행해주세요.</Typography>*/}

                        {/* 일반 멤버일경우 */}
                        <Typography className={classes.textStyle}>모임을 탈퇴하면,</Typography>
                        <Typography className={classes.textStyle}>내가 작성한 일정, 게시물, 댓글 등 수정 / 삭제 할 수</Typography>
                        <Typography className={classes.textStyle}>없습니다. 필요하면 보관하거나 삭제해주세요.</Typography>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<UnCheckedIcon />}
                                    checkedIcon={<CheckedIcon />}
                                    value="checkA"
                                />
                            }
                            label="이 모임에서 탈퇴하겠습니다."
                            className={classes.checkedBox}
                        />

                        {/* 멤버가 본인 한명뿐인 경우 ->  탈퇴하기, 본인이 모임 생상자인 경우 -> 확인인, 일반멤버일경우 -> 탈퇴하기 */}
                       <Button className={classes.buttonStyle} disableRipple>탈퇴하기</Button>
                    </Box>
                </Dialog>
           </div>
        );
    }
}

export default withStyles(styles)(WithdrawalDialogComponent);