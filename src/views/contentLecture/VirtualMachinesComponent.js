import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Box, Button, Checkbox, FormControlLabel,
    IconButton,
    MenuItem,
    Popover,
    Radio,
    Typography
} from "@material-ui/core";
import {ReactComponent as Book} from "../../common/images/Book.svg";
import {ReactComponent as More} from "../../common/images/More.svg";
import clsx from "clsx";
import {ReactComponent as UnCheckedIcon} from "../../common/images/UnCheckedIcon.svg";
import {ReactComponent as CheckedIcon} from "../../common/images/CheckedIcon.svg";
import {ReactComponent as WindowsIcon} from "../../common/images/WindowsIcon.svg";

import {ReactComponent as AppleLogo} from "../../common/images/AppleLogo.svg";
import {ReactComponent as AndroidLogo} from "../../common/images/AndroidLogo.svg";
import CalendarButtonComponent from "./CalendarButtonComponent";
import {ReactComponent as Info} from "../../common/images/Info.svg";
import WindowsImg from "../../common/images/WindowsImg.png";
import LinuxImg from "../../common/images/LinuxImg.png";
import WindowsLogo from "../../common/images/WindowsLogo.png";
import LinuxLogo from "../../common/images/LinuxLogo.png";

const styles = theme => ({
    root:{
        position:'relative',
    },
    videoBox:{
        width: '100%',
        border: '1px solid rgba(0, 0, 0, 0.6)',
        borderRadius: 8,
        boxSizing: 'border-box',
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
    listBox:{
        width: '100%',
        marginBottom: 10,
        minHeight: 'calc(100% - 40px - 58px)',
        padding: '10px 24px',
        boxSizing: 'border-box',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    listBox2:{
        flexDirection:'column',
        justifyContent:'flex-start',
    },
    textButton:{
        padding:0,

        '&:hover':{
            background:'transparent',
        },
        '& p':{
            textDecoration:'underline',
            fontSize:'1rem',
            fontWeight: 600,
        }
    },
    textStyle:{
        fontSize: '1rem',
        color: '#333'
    },
    bottomButton:{
        background:'rgba(20, 0, 254, 0.5)',
        borderRadius: 5,
        height: 40,
        boxSizing:'border-box',
        color:'#fff',
        fontSize: '0.875rem',
        '&:hover':{
            background:'rgba(20, 0, 254, 0.5)',
        }
    },
    radioBox:{
        marginTop: 10,
        '& .MuiIconButton-root':{
            padding: 0,
            marginRight: 10,
            '& .checked-icon2':{
                fill:'#1664f5'
            }
        },
        '& .MuiFormControlLabel-root':{
            margin: 0
        },
        '& .MuiTypography-root':{
            fontSize: '0.75rem',
            color:'#333'
        }
    },
    infoText:{
        fontSize: '0.75rem'
    },
    imgBox:{
        width:292,
        overflow:'hidden',
        display:'flex',
        alignItems:'center',
        padding: 0,
        borderRadius: 0,
        '&:hover':{
            background:'transparent'
        },
        '& img':{
            maxWidth: '100%',
            margin:'0 auto'
        }
    },
    imgBox2:{
        width:255,
        '& img':{
            maxWidth: '100%',
            margin:'0 auto'
        }
    },
    absoluteText:{
        position:'absolute',
        top:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding: '20px 10px',
        boxSizing:'border-box',
        height: '100%',
        background:'rgba(0, 0, 0, 0.5)',
        '& p':{
            color:'#fff',
            textAlign:'center',
            fontSize:'0.875rem',
        }
    }
});

class VirtualMachinesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            selectedValue: "a",
            startData: true,
            endData: true
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
        const { classes, handleClickVirtualMachinesDialog } = this.props;
        const { anchorEl, startData, endData } = this.state;

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
                            ??????
                        </MenuItem>
                    </Popover>
                </Box>
                <Box className={classes.videoBox}>
                    <Box pl={3} pr={3} style={{width: '100%'}}>
                        <Typography className={classes.titleStyle}>????????? ????????????</Typography>
                    </Box>
                    {/*<Box className={classes.listBox}>*/}
                    {/*    <Button className={classes.textButton} onClick={handleClickVirtualMachinesDialog} disableRipple><Typography>'????????? ???????????? ?????? ??? ??????'</Typography></Button>*/}
                    {/*    <Typography className={classes.textStyle}>?????? ????????? ????????? ???????????????.</Typography>*/}
                    {/*</Box>*/}


                    <Box className={clsx(classes.listBox, classes.listBox2)}>
                        <Box display='flex' justifyContent='flex-start' style={{width: '100%', marginBottom: 20}}>
                            <Info style={{marginRight: 5}}/>
                            <Typography className={classes.infoText}>???????????? ???????????? ???????????? ????????? ???????????????. </Typography>
                        </Box>

                         {/*1??? ?????????*/}
                         <Box >
                             <Box display='flex' flexDirection='column'  alignItems='center' justifyContent='center' style={{width: '100%'}}>
                                 <Box style={{position:'relative'}}>
                                     <Button className={classes.imgBox} disableRipple>
                                         <img src={WindowsImg} alt={"logo"}/>
                                     </Button>
                                     <Box className={classes.absoluteText}>
                                         <Typography>????????? ???????????? ?????? ?????????,
                                             ?????? ???????????? ??????????????? ???????????????.
                                             ????????? ?????? ??? ?????? ????????? ??? ????????????.<br/><br/>

                                             ?????? ?????? ????????? ?????? ?????? ?????????????????? ????????? ?????? ?????? ???????????????.</Typography>
                                     </Box>
                                 </Box>

                                 <Box display='flex' alignItems='center' style={{width: '100%'}} mt={1}>
                                     <img src={WindowsLogo} alt={"logo"}/>
                                     <Typography className={classes.listTitleText}>Windows 10</Typography>
                                 </Box>
                             </Box>
                         </Box>

                        {/* 2??? ????????? */}
                        {/*<Box display='flex' flexWrap='wrap' justifyContent='space-between' style={{width: '100%'}}>*/}
                        {/*    <Box display='flex' flexDirection='column'  alignItems='center'  >*/}
                        {/*        <Button className={clsx(classes.imgBox, classes.imgBox2)} disableRipple>*/}
                        {/*            <img src={WindowsImg} alt={"logo"}/>*/}
                        {/*        </Button>*/}
                        {/*        <Box display='flex' alignItems='center' style={{width: '100%'}} mt={1}>*/}
                        {/*            <img src={WindowsLogo} alt={"logo"}/>*/}
                        {/*            <Typography className={classes.listTitleText}>Windows 10</Typography>*/}
                        {/*        </Box>*/}
                        {/*    </Box>*/}
                        {/*    <Box display='flex' flexDirection='column'  alignItems='center' justifyContent='center' >*/}
                        {/*        <Button className={clsx(classes.imgBox, classes.imgBox2)} disableRipple>*/}
                        {/*            <img src={LinuxImg} alt={"logo"}/>*/}
                        {/*        </Button>*/}
                        {/*        <Box display='flex' alignItems='center' style={{width: '100%'}} mt={1}>*/}
                        {/*            <img src={LinuxLogo} alt={"logo"}/>*/}
                        {/*            <Typography className={classes.listTitleText}>Windows 10</Typography>*/}
                        {/*        </Box>*/}
                        {/*    </Box>*/}
                        {/*</Box>*/}

                    </Box>


                    <Box display='flex' justifyContent='space-between'>
                        <Button className={classes.bottomButton} onClick={handleClickVirtualMachinesDialog} disableRipple>
                            ????????? ???????????? ?????? ??? ??????
                        </Button>

                        <Box>
                            <Box display='flex' alignItems='center'>
                                <CalendarButtonComponent startData={startData}/>
                                <Typography style={{margin: '0 10px'}}>~</Typography>
                                <CalendarButtonComponent endData={endData} />
                            </Box>
                            <Box display='flex' alignItems='center' className={classes.radioBox}>
                                <FormControlLabel
                                    value="a"
                                    control={
                                        <Checkbox
                                            icon={<UnCheckedIcon/>}
                                            checkedIcon={<CheckedIcon/>}
                                            disableRipple
                                        />
                                    }
                                    label="????????? ?????? ????????????"
                                />
                            </Box>

                        </Box>
                    </Box>

                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(VirtualMachinesComponent);