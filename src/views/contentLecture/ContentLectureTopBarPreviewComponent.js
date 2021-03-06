import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    Button,
    IconButton,
    InputBase, MenuItem, Popover,
    Tooltip,
    Typography
} from "@material-ui/core";
import {ReactComponent as Desktop} from "../../common/images/Desktop.svg";
import {ReactComponent as Mobile} from "../../common/images/Mobile.svg";
import {ReactComponent as Info} from "../../common/images/Info.svg";
import clsx from "clsx";
import {ReactComponent as VodIcon} from "../../common/images/VodIcon.svg";
import {ReactComponent as CameraOn} from "../../common/images/CameraOn.svg";
import {ReactComponent as Paperclip} from "../../common/images/Paperclip.svg";
import {ReactComponent as FileIcon} from "../../common/images/FileIcon.svg";
import {ReactComponent as DownloadSimpleIcon} from "../../common/images/DownloadSimpleIcon.svg";
import {ReactComponent as ArrowIcon} from "../../common/images/ArrowIcon.svg";
import ImageContentsComponent from "./ImageContentsComponent";

const styles = theme => ({
    root:{
        height: 59,
        boxSizing:'border-box',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottom:'1px solid #c0c2c3',
        padding:'13px 12px',
    },
    lineStyle:{
        width: 1,
        height: 24,
        background: '#a3a8af',
        margin: '0 10px',
    },
    textStyle:{
        width: 200,
        fontSize: '0.75rem',
        color:'#000',
    },
    subText:{
        fontSize:'0.625rem',
        color:'#979797'
    },
    downloadBox:{
        '& path':{
            stroke:'#007CC0'
        },
        '& p':{
            fontSize:'0.75rem',
            color:'#007CC0'
        },
        '& span':{
            display:'flex',
            alignItems:'center'
        },
        '&:hover':{
            background:'transparent'
        }
    },
    titleText:{
        fontSize: '0.875rem',
        fontWeight: 600,
    },
    iconButton:{
        padding: 0,
        margin: '0 10px',
        '&:hover':{
            background:'transparent'
        }
    },
    iconSelect:{
        width: 30,
        height: 30,
        borderRadius:3,
        background:'rgba(0, 0, 0, 0.8)',
        '&:hover':{
            background:'rgba(0, 0, 0, 0.8)'
        },
        '& path':{
            fill: '#fff'
        }
    },
    buttonStyle:{
        width: 126,
        height: 30,
        boxSizing:'border-box',
        background:'#fff',
        borderRadius: 2,
        fontSize:'0.938rem',
        color:'#1e2121',
        margin: '0 0 0 10px',
        '&:hover':{
            background:'#fff'
        },
        '& svg':{
            marginRight: 5
        }
    },
    saveButton:{
        background:'#1A457E',
        border:'1px solid #1A457E',
        color:'#fff',
        '&:hover':{
            background:'#1A457E'
        }
    },
    menuText:{
        fontFamily: 'NanumSquareRoundOTF' ,
        fontSize:'0.75rem',
        color:'#0d0d0d',
        "&:hover":{
            background:'#d3d7db'
        }
    },
    caption:{
        width: 43,
        height: 20,
        borderRadius: 2,
        boxSizing: 'border-box',
        margin: '0 20px',
        color:'#fff',
        '& svg':{
            marginRight:3,
        },
    },
    captionText:{
        fontSize:'0.75rem',
        fontWeight:600,
        paddingTop: 2,
    },
    captionLive:{
        backgroundColor:'#FB4A59',
        '& svg':{
            width: 5,
            height: 5
        }
    },
    captionVod:{
        backgroundColor:'#000',
        '& svg':{
            width: 9,
            height: 9
        }
    },
    captionGreen:{
        backgroundColor:'#00c880',
    },
    lightTooltip: {
        backgroundColor: '#FFFFF5',
        color: '#000',
        border:'1px solid #000',
        fontSize:'0.688rem',
        borderRadius:0,
        marginLeft:0,
        marginTop:8
    },
    bottomButtonStyle:{
        padding: 0,
        marginRight: 10,
        '&:hover':{
            background:'transparent',
        },
        '& span':{
            display:'flex',
            alignItems: 'center'
        }
    },
    buttonTextStyle:{
        fontSize:'0.813rem',
        margin:'0 5px'
    },
    popoverBox:{
        '& .MuiPaper-root':{
            boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.25)',
            borderRadius: 4,
            boxSizing:'border-box',
            padding: '10px 20px'
        }
    }

});

class ContentLectureTopBarPreviewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
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

    render() {
        const { classes, handleClickBack, previewPc, handleClickPreviewPc, previewMobile, handleClickPreviewMobile, handleClickInfoDialog } = this.props;
        const { anchorEl} = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <Box display='flex' alignItems='center' style={{width: 450}}>
                    <Box display='flex' alignItems='center'>
                        <Tooltip title="?????????????????? ??????" classes={{ tooltip: classes.lightTooltip }}>
                            <IconButton className={classes.iconButton} style={{margin: 0}} onClick={handleClickInfoDialog} disableRipple>
                                <Info style={{marginRight: 5}}/>
                            </IconButton>
                        </Tooltip>
                        <Typography className={classes.titleText}>??? ?????? ?????? ??????</Typography>
                    </Box>
                    {/*<Box display='flex' justifyContent='center' alignItems='center' className={clsx(classes.caption, classes.captionLive)}>*/}
                    {/*    <DotIcon/>*/}
                    {/*    <Typography className={classes.captionText}>LIVE</Typography>*/}
                    {/*</Box>*/}
                    <Box display='flex' justifyContent='center' alignItems='center' className={clsx(classes.caption, classes.captionVod)}>
                        <VodIcon/>
                        <Typography className={classes.captionText}>VOD</Typography>
                    </Box>
                    {/*<Box display='flex' justifyContent='center' alignItems='center' className={clsx(classes.caption, classes.captionGreen)}>*/}
                    {/*    <Typography className={classes.captionText}>??????</Typography>*/}
                    {/*</Box>*/}
                    <Tooltip title="?????? ????????? ????????? ???????????????." classes={{ tooltip: classes.lightTooltip }}>
                        <Button
                            className={classes.bottomButtonStyle}
                            disableRipple
                        >
                            <CameraOn/>
                            <Typography className={classes.buttonTextStyle}>?????? ??????</Typography>
                        </Button>
                    </Tooltip>

                    <Button
                        className={classes.bottomButtonStyle}
                        aria-owns={open ? 'simple-popper' : undefined}
                        onClick={this.handleClickPopover}
                        disableRipple
                    >
                        <Paperclip/>
                        <Typography className={classes.buttonTextStyle}>?????? ?????? 1???</Typography>
                    </Button>

                    <Popover
                        id="simple-popper"
                        open={open}
                        anchorEl={anchorEl}
                        onClose={this.handleClosePopover}
                        className={classes.popoverBox}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <Box display='flex'alignItems='center' justifyContent='space-between' mt={1} mb={1}>
                            <Box display='flex' alignItems='flex-start'>
                                <FileIcon/>
                                <Box ml={1}>
                                    <Typography className={classes.textStyle} noWrap>HANDY Groupware.png</Typography>
                                    <Typography className={classes.subText}>2022.6.6 | 5MB | ?????????</Typography>
                                </Box>
                            </Box>
                            <Button className={classes.downloadBox} disableRipple>
                                <DownloadSimpleIcon/>
                                <Typography>????????????</Typography>
                            </Button>
                        </Box>
                    </Popover>
                </Box>

                <Box display='flex' alignItems='center'>
                    <IconButton className={previewPc ? clsx(classes.iconButton, classes.iconSelect) : classes.iconButton} onClick={handleClickPreviewPc} disableRipple>
                        <Desktop/>
                    </IconButton>

                    <Box className={classes.lineStyle}/>

                    <IconButton className={previewMobile ? clsx(classes.iconButton, classes.iconSelect) : classes.iconButton} onClick={handleClickPreviewMobile} disableRipple>
                        <Mobile />
                    </IconButton>
                </Box>

                <Box display='flex' alignItems='center' justifyContent='flex-end' style={{width: 450}}>

                    <Button className={classes.buttonStyle} onClick={handleClickBack} disableRipple>
                       <ArrowIcon/> ????????????
                    </Button>

                    <Button className={clsx(classes.buttonStyle, classes.saveButton)} disableRipple>
                        ??????
                    </Button>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(ContentLectureTopBarPreviewComponent);