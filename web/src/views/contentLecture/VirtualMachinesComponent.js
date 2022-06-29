import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, IconButton, MenuItem, Popover, Radio, Typography} from "@material-ui/core";
import {ReactComponent as Book} from "../../common/images/Book.svg";
import {ReactComponent as More} from "../../common/images/More.svg";
import clsx from "clsx";
import {ReactComponent as UnCheckedIcon} from "../../common/images/UnCheckedIcon.svg";
import {ReactComponent as CheckedIcon} from "../../common/images/CheckedIcon.svg";
import {ReactComponent as WindowsIcon} from "../../common/images/WindowsIcon.svg";
import {ReactComponent as LinuxLogo} from "../../common/images/LinuxLogo.svg";
import {ReactComponent as AppleLogo} from "../../common/images/AppleLogo.svg";
import {ReactComponent as AndroidLogo} from "../../common/images/AndroidLogo.svg";

const styles = theme => ({
    root:{
        position:'relative',
        "& .MuiButtonBase-root:hover":{
            background:'transparent'
        },
    },
    videoBox:{
        width: '100%',
        height: 430,
        border: '1px solid rgba(0, 0, 0, 0.6)',
        borderRadius: 8,
        boxSizing: 'border-box',
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom:20,
        padding: '34px 34px 17px'
    },
    fileBoxMoreBtn:{
        position: 'absolute',
        top: 12,
        right: 11
    },
    iconButton:{
        padding: 0,
    },
    moreBtn:{
        width: 30,
        height: 30,
        background:'rgba(255, 255, 255, 0.9)',
        borderRadius: '50%',
        boxShadow:'0px 2px 4px rgba(0, 0, 0, 0.25)',
        zIndex:1000,
        '&:hover':{
            background:'#fff !important'
        }
    },
    popoverBox:{
        '& .MuiPopover-paper': {
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
            borderRadius: 7,
            padding: '8px 0',
        },
        '& .MuiListItem-root': {
            display:'flex',
            alignItems:'center',
            padding: '3px 10px',
            fontSize: '0.813rem',
            color:'#000',
            textAlign: 'left',
            '&:hover': {
                background: '#d3d7db',
            },
        },
    },
    titleStyle:{
        fontSize:'1.25rem',
        color:'#0d0d0d',
        fontWeight: 600
    },
    subTextStyle:{
        fontSize:'1rem',
        color:'#333',
        margin: '14px 0 17px'
    },
    numberText:{
        fontSize:'0.813rem',
        color:'#A3A8AF',
        marginLeft: 8
    },
    listBox:{
        width: '100%',
        marginTop: 11,
        maxHeight: 260,
        borderTop:'1px solid #A3A8AF',
        borderBottom:'1px solid #A3A8AF',
        padding: '10px 24px',
        overflowY:'auto',
        boxSizing: 'border-box',
        "&::-webkit-scrollbar": {
            width:'5px',
        },
        "&::-webkit-scrollbar-thumb": {
            background:'#dbdbdb',
            borderRadius:'10px',
            backgroundClip:'padding-box',
        },
        "&::-webkit-scrollbar-track": {
            background:'transparent',
            marginTop:10
        },
    },
    marginBox:{
        width: '100%',
        margin: '10px 0'
    },
    leftWidth:{
        width: 'calc(100% - 32px)'
    },
    listText:{
        width: 'calc(100% - 35px - 10px)',
        fontSize: '1rem',
        color:'#333',
        fontWeight: 600,
        marginLeft: 20,
    },
    formControl:{
        marginTop:10,
        marginBottom:25,
        "& .MuiFormControlLabel-root":{
            marginTop:20
        },
        "& .MuiFormControlLabel-label":{
            fontSize:'1rem',
            color:'#333'
        },
        "& .MuiButtonBase-root:hover":{
            background:'transparent'
        }
    },
});

class VirtualMachinesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            selectedValue: "a",
        };
    }

    handleClickPopover = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClosePopover = () => {
        this.setState({
            anchorEl: null,
        });
    };

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;

        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <Box className={classes.fileBoxMoreBtn}>
                    <IconButton
                        className={clsx(classes.iconButton, classes.moreBtn)}
                        aria-owns={open ? 'simple-popper' : undefined}
                        onClick={this.handleClickPopover}
                        disableRipple
                    >
                        <More/>
                    </IconButton>

                    <Popover
                        id="simple-popper"
                        open={open}
                        anchorEl={anchorEl}
                        onClose={this.handleClosePopover}
                        className={classes.popoverBox}
                        anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={this.handleClickOpen}>
                            삭제
                        </MenuItem>
                    </Popover>
                </Box>
                <Box className={classes.videoBox}>
                    <Box pl={3} pr={3} style={{width: '100%'}}>
                        <Typography className={classes.titleStyle}>가상머신 OS선택</Typography>
                        <Typography className={classes.subTextStyle}>아래 목록에서 실습에 사용할 항목을 선택해주세요. (다중선택 가능)</Typography>
                        <Box display='flex' alignItems='center'>
                            <Book/>
                            <Typography className={classes.numberText}>3개</Typography>
                        </Box>
                    </Box>

                    <Box className={classes.listBox}>
                        <Box display='flex' alignItems='center' justifyContent='space-between' className={classes.marginBox}>
                            <Box display='flex' alignItems='center' className={classes.leftWidth}>
                                <WindowsIcon/>
                                <Typography className={classes.listText} noWrap>Windows 10 and later x64Windows 10 and later x64Windows 10 and later x64Windows 10 and later x64</Typography>
                            </Box>
                            <Radio
                                checked={this.state.selectedValue === 'a'}
                                onChange={this.handleChange}
                                value="a"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'A' }}
                                icon={<UnCheckedIcon/>}
                                checkedIcon={<CheckedIcon/>}
                            />
                        </Box>

                        <Box display='flex' alignItems='center' justifyContent='space-between' className={classes.marginBox}>
                            <Box display='flex' alignItems='center' className={classes.leftWidth}>
                                <LinuxLogo/>
                                <Typography className={classes.listText} noWrap>Onthelive - Linux</Typography>
                            </Box>
                            <Radio
                                checked={this.state.selectedValue === 'b'}
                                onChange={this.handleChange}
                                value="b"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'B' }}
                                icon={<UnCheckedIcon/>}
                                checkedIcon={<CheckedIcon/>}
                            />
                        </Box>

                        <Box display='flex' alignItems='center' justifyContent='space-between' className={classes.marginBox}>
                            <Box display='flex' alignItems='center' className={classes.leftWidth} >
                                <AppleLogo/>
                                <Typography className={classes.listText} noWrap>New VM name</Typography>
                            </Box>
                            <Radio
                                checked={this.state.selectedValue === 'c'}
                                onChange={this.handleChange}
                                value="c"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'C' }}
                                icon={<UnCheckedIcon/>}
                                checkedIcon={<CheckedIcon/>}
                            />
                        </Box>

                        <Box display='flex' alignItems='center' justifyContent='space-between' className={classes.marginBox}>
                            <Box display='flex' alignItems='center' className={classes.leftWidth} >
                                <AndroidLogo/>
                                <Typography className={classes.listText} noWrap>Windows 10 and later x64</Typography>
                            </Box>
                            <Radio
                                checked={this.state.selectedValue === 'd'}
                                onChange={this.handleChange}
                                value="d"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'D' }}
                                icon={<UnCheckedIcon/>}
                                checkedIcon={<CheckedIcon/>}
                            />
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='space-between' className={classes.marginBox}>
                            <Box display='flex' alignItems='center' className={classes.leftWidth} >
                                <WindowsIcon/>
                                <Typography className={classes.listText} noWrap>Windows 10 and later x64</Typography>
                            </Box>
                            <Radio
                                checked={this.state.selectedValue === 'e'}
                                onChange={this.handleChange}
                                value="e"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'E' }}
                                icon={<UnCheckedIcon/>}
                                checkedIcon={<CheckedIcon/>}
                            />
                        </Box>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(VirtualMachinesComponent);