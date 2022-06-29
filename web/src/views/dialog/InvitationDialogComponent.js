import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    Button,
    Checkbox,
    ClickAwayListener,
    Dialog,
    FormControlLabel,
    IconButton,
    Paper,
    Popper,
    Typography
} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";
import {ReactComponent as UnCheckedIcon} from "../../common/images/UnCheckedIcon.svg";
import {ReactComponent as CheckedIcon} from "../../common/images/CheckedIcon.svg";
import CalendarBox from "./calendar/CalendarBox";

const styles = theme => ({
    root:{

    },
    dialogBox:{
        "& .MuiPaper-root":{
            width:490,
            padding:24,
            borderRadius:10,
            boxShadow:'0 2.5px 5px 0 rgba(0, 0, 0, 0.25)',
        },
        "& *": {
            fontFamily: 'NanumSquareRoundOTF' ,
        }
    },
    titleBox:{
        marginBottom:30
    },
    titleText:{
        fontSize:'1.25rem',
        color:'#000',
        fontWeight:600,
        marginLeft:7
    },
    iconButton:{
        padding:5,
        "&:hover":{
            background:'transparent'
        }
    },
    textStyle:{
        fontSize:'1rem',
        color:'#333'
    },
    urlBox:{
        background:'#fff',
        border:'1px solid #d9dbde',
        borderRadius:7,
        padding:'5px 12px',
        margin:'20px 0 12px'
    },
    urlText:{
        textDecoration:'underline'
    },
    checkedBox:{
        margin:0,
        "& .MuiIconButton-root":{
            padding:0
        },
        "& .MuiFormControlLabel-label":{
            fontSize:'1rem',
            color:'#333',
            marginLeft:10,
            fontWeight: 600
        }
    },
    buttonStyle:{
        width:'100%',
        height:48,
        borderRadius:8,
        background:'#0097ff',
        color:'#fff',
        fontSize:'1.125rem',
        fontWeight:300,
        marginTop:30,
        "&:hover":{
            background:'#0097ff'
        }
    },
    popper:{
        zIndex: 1400,
        left:'15px !important',
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            left: 0,
            marginTop: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '0 1em 1em 1em',
                borderColor: `transparent transparent ${theme.palette.common.white} transparent`,
            },
        },
        '&[x-placement*="top"] $arrow': {
            bottom: 0,
            left: 0,
            marginBottom: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '1em 1em 0 1em',
                borderColor: `${theme.palette.common.white} transparent transparent transparent`,
            },
        },
        '&[x-placement*="right"] $arrow': {
            left: 0,
            marginLeft: '-0.9em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 1em 1em 0',
                borderColor: `transparent ${theme.palette.common.white} transparent transparent`,
            },
        },
        '&[x-placement*="left"] $arrow': {
            right: 0,
            marginRight: '-0.9em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 0 1em 1em',
                borderColor: `transparent transparent transparent ${theme.palette.common.white}`,
            },
        },
    },
    arrow: {
        position: 'absolute',
        fontSize: 7,
        width: '3em',
        height: '3em',
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        },
    },
    paper: {
        padding:0,
        maxWidth: 500,
        overflow: 'auto',
        boxShadow:'0 4px 15px rgba(0, 0, 0, 0.25)',
        borderRadius:10,
    },
});

class InvitationDialogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false,
            arrow: true,
            arrowRef: null,
            open: false,
        };
    }

    handleClickButton = () => {
        this.setState(state => ({
            open: !state.open,
        }));
    };

    handleArrowRef = node => {
        this.setState({
            arrowRef: node,
        });
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        const {classes} = this.props;
        const { open, arrow, arrowRef } = this.state;

        return (
            <div className={classes.root}>
                <Dialog
                    open={this.props.invitationDialogOpen}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' className={classes.titleBox} >
                        <Typography className={classes.titleText}>초대하기</Typography>
                        <IconButton className={classes.iconButton} onClick={this.props.handleClose} disableRipple>
                            <DialogCloseIcon/>
                        </IconButton>
                    </Box>
                    <Box>
                        <Typography className={classes.textStyle}>링크를 받은 사람은 누구나 이 모임의 정보를 확인하고 가입을 요청할 수 있습니다. 초대링크를 복사하여 원하는 곳에 링크를 공유하세요.</Typography>
                        <Box className={classes.urlBox}>
                            <Typography className={clsx(classes.textStyle, classes.urlText)}>https://study.onthe.live/math</Typography>
                        </Box>
                        <FormControlLabel
                            inputRef={node => {this.anchorEl = node;}}
                            control={
                                <Checkbox
                                    icon={<UnCheckedIcon />}
                                    checkedIcon={<CheckedIcon />}
                                    value="check"
                                />
                            }
                            label="만료 일시 지정"
                            className={classes.checkedBox}
                            onClick={this.handleClickButton}
                        />
                        <Popper
                            open={open}
                            anchorEl={this.anchorEl}
                            placement="left"
                            disablePortal={false}
                            className={classes.popper}
                            modifiers={{
                                preventOverflow: {
                                    enabled: true,
                                    boundariesElement: 'scrollParent',
                                },
                                arrow: {
                                    enabled: true,
                                    element: arrowRef,
                                },
                            }}
                        >
                            {arrow ? <span className={classes.arrow} ref={this.handleArrowRef} /> : null}
                            <Paper className={classes.paper}>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    {open &&
                                    <CalendarBox/>
                                    }
                                </ClickAwayListener>
                            </Paper>
                        </Popper>
                        <Box>
                            <Button className={classes.buttonStyle} disableRipple>URL 복사</Button>
                        </Box>
                    </Box>

                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(InvitationDialogComponent);