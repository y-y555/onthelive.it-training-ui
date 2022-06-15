import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, IconButton, MenuItem, Popover, Typography} from "@material-ui/core";
import {ReactComponent as VideoInputImage} from "../../common/images/VideoInputImage.svg";
import {FileUploader} from "react-drag-drop-files";
import clsx from "clsx";
import {ReactComponent as More} from "../../common/images/More.svg";


const styles = theme => ({
    root:{
        position:'relative',
    },
    videoBox:{
        width: '100%',
        height: 360,
        border: '2px dashed rgba(0, 0, 0, 0.6)',
        borderRadius: 8,
        boxSizing: 'border-box',
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom:20
    },
    fileBox:{
        border: '1px solid rgba(0, 0, 0, 0.6)',
    },
    fileBoxMoreBtn:{
        position: 'absolute',
        top: 12,
        right: 11
    },
    iconButton:{
        padding: 0,
        '&:hover':{
            background:'transparent'
        }
    },
    moreBtn:{
        width: 30,
        height: 30,
        background:'rgba(255, 255, 255, 0.9)',
        borderRadius: '50%',
        boxShadow:'0px 2px 4px rgba(0, 0, 0, 0.25)',
        zIndex:1000,
        '&:hover':{
            background:'#fff'
        }
    },
    videoText:{
        fontSize:'1.25rem',
        color:'#202123',
    },
    videoText2:{
        fontSize: '0.875rem',
        color:'#6d7175',
        margin: '10px 0 20px',
        textAlign:'center'
    },
    videoButton:{
        width: 120,
        height: 40,
        boxSizing:'border-box',
        border:'1px solid #c4c4c4',
        borderRadius: 2,
        '&:hover':{
            background:'transparent'
        }
    },
    imgBox:{
        width: '100%',
        height: '100%',
        overflow:'hidden',
        display:'flex',
        alignItems: 'center',
        '& > img':{
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'contain',
        },
        '& iframe':{
            borderRadius: 8
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
    }
});
const fileTypes = ["AVI", "MP4", "WMV", "MOV"];

class VideoContentsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            anchorEl: null,
            left: false,
            center: false,
            right: false,

        };
    }

    handleClickUploaderFile = (file) => {
        this.setState({ file: file });
    };

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

    handleClickLeft = () => {
        this.setState({
            left: true,
            center: false,
            right: false,
            anchorEl: null,
        });
    };

    handleClickCenter = () => {
        this.setState({
            center: true,
            left: false,
            right: false,
            anchorEl: null,
        });
    };

    handleClickRight = () => {
        this.setState({
            right: true,
            left: false,
            center: false,
            anchorEl: null,
        });
    };

    render() {
        const { classes } = this.props;
        const { file, anchorEl, left, right } = this.state;

        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                {file &&
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
                        <MenuItem onClick={this.handleClickLeft}>
                            왼쪽 맞춤
                        </MenuItem>
                        <MenuItem onClick={this.handleClickCenter}>
                            가운데 맞춤
                        </MenuItem>
                        <MenuItem onClick={this.handleClickRight}>
                            오른쪽 맞춤
                        </MenuItem>
                        <MenuItem onClick={this.handleClickOpen}>
                            변경
                        </MenuItem>
                        <MenuItem onClick={this.handleClickOpen}>
                            삭제
                        </MenuItem>
                    </Popover>
                </Box>
                }

                <FileUploader
                    multiple={true}
                    handleChange={this.handleClickUploaderFile}
                    name="file"
                    types={fileTypes}
                    children={
                        <Box className={file ? clsx(classes.videoBox, classes.fileBox) : classes.videoBox}>
                            {file ?
                                <Box className={classes.imgBox} style={left ? {justifyContent:'flex-start'} : right ? {justifyContent:'flex-end'} : {justifyContent:'center'}}>
                                    {/* src -> 파일 업로드 동영상  */}
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/M43n6yHWMv0"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </Box>
                                :
                                <>
                                    <VideoInputImage/>
                                    <Typography className={classes.videoText}>
                                        동영상 콘텐츠가 여기에 표시됩니다.
                                    </Typography>
                                    <Typography className={classes.videoText2}>
                                        업로드 버튼을 눌러 동영상 파일을 선택하거나 마우스로 끌어오세요.<br/>
                                        용량이 큰 경우 표시되기까지 몇 분 정도 걸릴 수 있습니다.
                                    </Typography>
                                    <Button className={classes.videoButton} disableRipple>
                                        파일올리기
                                    </Button>
                                </>
                            }
                        </Box>
                    }
                />
            </div>
        );
    }
}

export default  withStyles(styles)(VideoContentsComponent);