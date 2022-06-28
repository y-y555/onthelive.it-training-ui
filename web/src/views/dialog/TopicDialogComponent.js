import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    Dialog,
    IconButton,
    Typography,
    Button,
    MenuItem,
    Menu,
    OutlinedInput,
    FormControl
} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";
import {ReactComponent as ChatsCircle} from "../../common/images/ChatsCircle.svg";
import {ReactComponent as MoreIcon} from "../../common/images/DotsThreeOutlineVerticalIcon.svg";

const styles = theme => ({
    root:{

    },
    dialogBox:{
        '& .MuiPaper-root':{
            width: 390,
            padding: 24,
            boxSizing: 'border-box',
            borderRadius: 10,
            boxShadow: '0 2.5px 5px 0 rgba(0, 0, 0, 0.25)'
        },
        '& *': {
            fontFamily: 'NanumSquareRoundOTF' ,
        }
    },
    titleBox:{

    },
    titleText:{
        fontSize: '1.25rem',
        color: '#000',
        fontWeight: 600
    },
    iconButton:{
        padding: 0,
        '&:hover':{
            background: 'transparent'
        }
    },
    buttonStyle:{
        border: '1px solid #bfbfbf',
        borderRadius: 4,
        width: 100,
        height: 28,
        padding: 0,
        margin: '20px 0 32px',
        '& span':{
            fontSize: '0.875rem',
            color: '#000'
        },
        '&:hover':{
            background: 'transparent'
        }
    },
    scrollBox:{
        maxHeight: 275,
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: '15px',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#dbdbdb',
            borderRadius: '10px',
            backgroundClip: 'padding-box',
            border: '5px solid transparent'
        },
        '&::-webkit-scrollbar-track': {
            background: 'transparent',
            marginTop: 5,
        },
    },
    textStyle:{
        fontSize: '1rem',
        fontWeight: 600,
        color: '#000',
        marginLeft: 5
    },
    menuItem:{
        fontFamily: 'NanumSquareRoundOTF' ,
        fontSize: '0.75rem',
        color: '#0d0d0d',
        '&:hover':{
            background: '#d3d7db'
        },
        '&.Mui-selected:hover':{
            background: '#d3d7db'
        },
        '&.Mui-selected':{
            background: 'transparent'
        }
    },
    menuBox:{
        '& .MuiPopover-paper':{
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.08)',
            borderRadius: 5,
            border: '1.5px solid #d4d4d6'
        }
    },
    textField:{
        marginLeft: 5,
        '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border: '1px solid #d9dbde'
        },
        '& .MuiOutlinedInput-root':{
            borderRadius: 5,
            "&:hover":{
                borderColor: '#d9dbde'
            }
        },
        '& .MuiOutlinedInput-input':{
            padding: '8px 10px',
            color: '#000',
            fontWeight: 600,
            fontSize: '1rem',
            "&::placeholder":{
                color: '#a3a8af',
                opacity: 1,
                fontWeight: 300,
            },
        },
    },
    btnStyle:{
        height: 46,
        background: '#0097ff',
        color: '#fff',
        fontSize: '1.125rem',
        borderRadius: 7,
        marginTop: 35,
        '&:hover':{
            background: '#0097ff',
        },
        '&.Mui-disabled':{
            background:' #c2c2c2',
            color: '#fff'
        }
    },
});

class TopicDialogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        };
    }

    handleClickManager = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };
    
    render() {
        const { classes } = this.props;
        const { anchorEl} = this.state;
        const open = Boolean(anchorEl);
        
        return (
            <div className={classes.root}>
                <Dialog
                    open={this.props.topicDialogOpen}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.titleBox}>
                        <Typography className={classes.titleText}>토픽 설정</Typography>
                        <IconButton className={classes.iconButton} disableRipple onClick={this.props.handleClose}> <DialogCloseIcon /></IconButton>
                    </Box>
                    <Box display='flex' justifyContent='flex-end'>
                        <Button className={classes.buttonStyle} disableRipple>
                            토픽 추가하기
                        </Button>
                    </Box>
                    <Box className={classes.scrollBox}>
                        <Box display='flex' alignItems='center' justifyContent='space-between' mb={1}>
                            <Box display='flex' alignItems='center'>
                                <ChatsCircle/>
                                <Typography className={classes.textStyle}>이것저것</Typography>

                                {/* 토픽 추가 or 수정 일때*/}
                                {/*<FormControl className={classes.textField} variant="outlined">*/}
                                {/*    <OutlinedInput*/}
                                {/*        inputProps={{'aria-label': 'title input box'}}*/}
                                {/*        id="outlined-title"*/}
                                {/*        labelWidth={0}*/}
                                {/*        placeholder='새 토픽'*/}
                                {/*    />*/}
                                {/*</FormControl>*/}
                            </Box>
                            <IconButton disableRipple
                                        aria-haspopup="true"
                                        onClick={this.handleClickManager}
                            >
                                <MoreIcon/>
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={this.handleClose}
                                className={classes.menuBox}
                            >
                                <MenuItem onClick={this.handleClose} className={classes.menuItem}>수정</MenuItem>
                                <MenuItem onClick={this.handleClose} className={classes.menuItem}>삭제</MenuItem>
                            </Menu>
                        </Box>

                        <Box display='flex' alignItems='center' justifyContent='space-between' mb={1}>
                            <Box display='flex' alignItems='center'>
                                <ChatsCircle/>
                                <Typography className={classes.textStyle}>일정</Typography>
                            </Box>
                            <IconButton disableRipple
                                        aria-haspopup="true"
                                        onClick={this.handleClickManager}
                            >
                                <MoreIcon/>
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={this.handleClose}
                                className={classes.menuBox}
                            >
                                <MenuItem onClick={this.handleClose} className={classes.menuItem}>수정</MenuItem>
                                <MenuItem onClick={this.handleClose} className={classes.menuItem}>삭제</MenuItem>
                            </Menu>
                        </Box>

                        <Box display='flex' alignItems='center' justifyContent='space-between' mb={1}>
                            <Box display='flex' alignItems='center'>
                                <ChatsCircle/>
                                <Typography className={classes.textStyle}>기사/뉴스</Typography>
                            </Box>
                            <IconButton disableRipple
                                        aria-haspopup="true"
                                        onClick={this.handleClickManager}
                            >
                                <MoreIcon/>
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={this.handleClose}
                                className={classes.menuBox}
                            >
                                <MenuItem onClick={this.handleClose} className={classes.menuItem}>수정</MenuItem>
                                <MenuItem onClick={this.handleClose} className={classes.menuItem}>삭제</MenuItem>
                            </Menu>
                        </Box>

                        <Box display='flex' alignItems='center' justifyContent='space-between' mb={1}>
                            <Box display='flex' alignItems='center'>
                                <ChatsCircle/>
                                <Typography className={classes.textStyle}>정보/팁</Typography>
                            </Box>
                            <IconButton disableRipple
                                        aria-haspopup="true"
                                        onClick={this.handleClickManager}
                            >
                                <MoreIcon/>
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={this.handleClose}
                                className={classes.menuBox}
                            >
                                <MenuItem onClick={this.handleClose} className={classes.menuItem}>수정</MenuItem>
                                <MenuItem onClick={this.handleClose} className={classes.menuItem}>삭제</MenuItem>
                            </Menu>
                        </Box>

                        <Box display='flex' alignItems='center' justifyContent='space-between' mb={1}>
                            <Box display='flex' alignItems='center'>
                                <ChatsCircle/>
                                <Typography className={classes.textStyle}>홍보/광고</Typography>
                            </Box>
                            <IconButton disableRipple
                                        aria-haspopup="true"
                                        onClick={this.handleClickManager}
                            >
                                <MoreIcon/>
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={this.handleClose}
                                className={classes.menuBox}
                            >
                                <MenuItem onClick={this.handleClose} className={classes.menuItem}>수정</MenuItem>
                                <MenuItem onClick={this.handleClose} className={classes.menuItem}>삭제</MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                    <Button className={classes.btnStyle}  disableRipple>선택(1)</Button>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(TopicDialogComponent);