import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Box, Checkbox,
    Dialog,
    FormControl, FormControlLabel, IconButton,
    InputBase,
    MenuItem,
    OutlinedInput,
    Select,
    TextareaAutosize,
    Typography,
    Button, Popover,
    MenuList,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import clsx from "clsx";
import {ReactComponent as UnCheckedIcon} from "../../common/images/UnCheckedIcon.svg";
import {ReactComponent as CheckedIcon} from "../../common/images/CheckedIcon.svg";
import {ReactComponent as ImageSquareIcon} from "../../common/images/ImageSquareIcon.svg";
import {ReactComponent as PaperclipIcon} from "../../common/images/PaperclipIcon.svg";
import {ReactComponent as DownloadIcon} from "../../common/images/DownloadIcon.svg";
import {ReactComponent as SelectCheckIcon} from "../../common/images/SelectCheckIcon.svg";

const styles = theme => ({
    root:{

    },
    dialogBox:{
        "& .MuiPaper-root":{
            width:790,
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
    formControlBox:{
        margin:'20px 0'
    },
    buttonSelect:{
        width:330,
        borderBottom:'1px solid #d9dbde',
        fontSize:'1rem',
        color:'#404040',
        "& span":{
            justifyContent:'space-between'
        },
        "&:hover":{
            background:'transparent'
        }
    },
    popoverBox:{
        "& .MuiPopover-paper":{
            width:330,
            boxShadow:'0 5px 7px 0 rgba(0, 0, 0, 0.45)',
            borderRadius: 4
        },
        "& li:hover":{
            background:'#e8e8e8'
        },
        "& .MuiTypography-root":{
            fontFamily: 'NanumSquareRoundOTF' ,
            fontSize:'0.875rem',
            color:'#333'
        }
    },
    textField:{
        "& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            border:'1px solid #d9dbde'
        },
        "& .MuiOutlinedInput-root":{
            borderRadius:7,
            "&:hover":{
                borderColor:'#d9dbde'
            }
        },
        "& .MuiListItemIcon-root":{
            minWidht:25
        },
        "& .MuiOutlinedInput-input":{
            padding:'12px 10px',
            color:'#333',
            fontSize:'1rem',
            "&::placeholder":{
                color:'#a3a8af',
                opacity:1,
                fontWeight: 300,
            },
        },
    },
    textFieldMargin:{
        margin:'0 10px'
    },
    textareaStyle: {
        margin:'20px 0',
        border:'1px solid #d9dbde',
        borderRadius:7,
        padding: '10px 10px',
        overflowY: 'auto',
        resize: 'none',
        boxSizing:'border-box',
        fontSize:'1rem',
        color:'#333',
        background:'transparent',
        "&::placeholder": {
            color:'#a3a8af',
            opacity:1,
            fontWeight: 300,
        },
        "&:focus": {
            outline: 'none',
        },
        "&::-webkit-scrollbar": {
            width: '10px',
        },
        "&::-webkit-scrollbar-thumb": {
            background: '#bebebe',
            borderRadius: '10px',
            backgroundClip: 'padding-box',
            border: '3px solid transparent'
        },
        "&::-webkit-scrollbar-track": {
            background: 'transparent',
            marginTop: 5,
        },
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
    importantBox:{
        margin:'12px 0 5px'
    },
    importantText:{
        fontSize:'0.813rem',
        color:'#ff0000'
    },
    controlBox:{
        borderRadius:5,
        background:'#f8f8f8',
        padding:'10px 20px',
        marginTop:21
    },
    fileNameText:{
        fontSize:'0.875rem',
        color:'#000',
        marginLeft:8
    },
    fileSizeText:{
        fontSize:'0.75rem',
        color:'#848484',
        marginLeft:8
    },
    input:{
        display:'none'
    },
    iconButton:{
        padding:0,
        "&:hover":{
            background:'transparent'
        }
    },
    iconColor:{
        "& .image-square, .paperclip":{
            fill:"rgba(0, 0, 0, 0.6)"

        }
    },
    buttonStyle:{
        width:442,
        background:'#0097ff',
        color:'#fff',
        fontSize:'1.125rem',
        padding:'12px 0',
        borderRadius:7,
        marginTop:25,
        "&:hover":{
            background:'#0097ff',
        },
        "&.Mui-disabled":{
            background:'#c2c2c2',
            color:'#fff'
        }
    },
    fileImgBox:{
        width:200,
        height:140,
        borderRadius:5,
        overflow:'hidden',
        "& img":{
            width:'100%',
            maxWidth:'100%',
            objectFit: 'cover',
        }
    },
    scrollBox:{
        maxHeight:'calc(100vh - 150px )',
        overflowY:'auto',
        paddingRight:24,
        "&::-webkit-scrollbar": {
            width: '15px',
        },
        "&::-webkit-scrollbar-thumb": {
            background: '#bebebe',
            borderRadius: '10px',
            backgroundClip: 'padding-box',
            border: '5px solid transparent'
        },
        "&::-webkit-scrollbar-track": {
            background: 'transparent',
            marginTop: 5,
        },
    }
});


class WritingDialogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check:false,
            imgFile : '',
            file : false,
            previewURL : '',

            anchorEl: null,

            anything:false,
            schedule:false,
            news:false,
            tip:false,
            advertisement:false,
        };
    }
    handleFileOnChange = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState({
                imgFile : file,
                previewURL : reader.result
            })
        }
        reader.readAsDataURL(file);
    }

    handleFileChange = () => {
        this.setState({ file: true });

    }
    handleClickSelect = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorElMike: null,
        });
    };

    handleClickAnything = () => {
        this.setState({
            anything: true,
            schedule:false,
            news:false,
            tip:false,
            advertisement:false,
            anchorEl: null,
        });
    };

    handleClickSchedule= () => {
        this.setState({
            anything: false,
            schedule:true,
            news:false,
            tip:false,
            advertisement:false,
            anchorEl: null,
        });
    };

    handleClickNews= () => {
        this.setState({
            anything: false,
            schedule:false,
            news:true,
            tip:false,
            advertisement:false,
            anchorEl: null,
        });
    };

    handleClickTip= () => {
        this.setState({
            anything: false,
            schedule:false,
            news:false,
            tip:true,
            advertisement:false,
            anchorEl: null,
        });
    };

    handleClickAdvertisement= () => {
        this.setState({
            anything: false,
            schedule:false,
            news:false,
            tip:false,
            advertisement:true,
            anchorEl: null,
        });
    };

    render() {
        const { classes } = this.props;
        const {anchorEl} =this.state;
        const open = Boolean(anchorEl);

        let image_preview = null;
        if(this.state.imgFile !== ''){
            image_preview = <img src={this.state.previewURL} align="image"></img>
        }

        return (
            <div className={classes.root}>
                <Dialog
                    open={this.props.writingDialogOpen}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' className={classes.titleBox} >
                        <Typography className={classes.titleText}>글쓰기</Typography>
                        <IconButton className={classes.iconButton} onClick={this.props.handleClose} disableRipple>
                            <DialogCloseIcon/>
                        </IconButton>
                    </Box>
                    <Box className={classes.scrollBox}>
                        <Button
                            onClick={this.handleClickSelect}
                            aria-owns={open ? 'simple-popper' : undefined}
                            className={classes.buttonSelect}
                            endIcon={<ArrowDownIcon/>}
                            disableRipple
                        >
                            {this.state.anything === true ?
                                "이것저것"
                                :
                                this.state.schedule === true ?
                                    "일정"
                                    :
                                    this.state.news === true ?
                                        "기사/뉴스"
                                        :
                                        this.state.tip === true ?
                                            "정보/팁"
                                            :
                                            this.state.advertisement === true ?
                                                "홍보/광고"
                                                :
                                                "토픽을 선택해주세요."

                            }

                        </Button>
                        <Popover
                                open={open}
                                anchorEl={this.state.anchorEl}
                                onClose={this.handleClose}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "center"
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "center"
                                }}
                                className={classes.popoverBox}
                        >
                            <MenuList id="video-devices-button-menu">
                                <MenuItem onClick={this.handleClickAnything}>
                                    {this.state.anything === true ?
                                        <ListItemIcon>
                                            <SelectCheckIcon />
                                        </ListItemIcon>
                                        :
                                        <ListItemIcon />
                                    }
                                    <ListItemText primary="이것저것" />
                                </MenuItem>
                                <MenuItem onClick={this.handleClickSchedule}>
                                    {this.state.schedule === true ?
                                        <ListItemIcon>
                                            <SelectCheckIcon />
                                        </ListItemIcon>
                                        :
                                        <ListItemIcon />
                                    }
                                    <ListItemText primary="일정" />
                                </MenuItem>
                                <MenuItem onClick={this.handleClickNews}>
                                    {this.state.news === true ?
                                        <ListItemIcon>
                                            <SelectCheckIcon />
                                        </ListItemIcon>
                                        :
                                        <ListItemIcon />
                                    }
                                    <ListItemText primary="기사/뉴스" />
                                </MenuItem>
                                <MenuItem onClick={this.handleClickTip}>
                                    {this.state.tip === true ?
                                        <ListItemIcon>
                                            <SelectCheckIcon />
                                        </ListItemIcon>
                                        :
                                        <ListItemIcon />
                                    }
                                    <ListItemText primary="정보/팁" />
                                </MenuItem>
                                <MenuItem onClick={this.handleClickAdvertisement}>
                                    {this.state.advertisement === true ?
                                        <ListItemIcon>
                                            <SelectCheckIcon />
                                        </ListItemIcon>
                                        :
                                        <ListItemIcon />
                                    }
                                    <ListItemText primary="홍보/광고" />
                                </MenuItem>
                            </MenuList>
                        </Popover>
                        <Box display='flex' flexDirection='column' className={classes.formControlBox}>
                            <FormControl className={classes.textField} variant="outlined">
                                <OutlinedInput
                                    inputProps={{'aria-label': 'title input box'}}
                                    id="outlined-title"
                                    labelWidth={0}
                                    placeholder='일정 제목 (최대 50자 이내)'
                                />
                            </FormControl>

                            <TextareaAutosize
                                name="contents"
                                minRows={5}
                                maxRows={5}
                                aria-label="content input box"
                                className={classes.textareaStyle}
                                placeholder='일정 설명 (최대 100자 이내) '
                            />

                            {/* 태그 */}
                            <Box display='flex' alignItems='center' justifyContent='space-between'>
                                <FormControl className={classes.textField} variant="outlined">
                                    <OutlinedInput
                                        inputProps={{'aria-label': 'tag input box'}}
                                        id="outlined-title"
                                        labelWidth={0}
                                        placeholder='태그 (최대 25자)'
                                    />
                                </FormControl>
                                <FormControl className={clsx(classes.textField, classes.textFieldMargin)} variant="outlined">
                                    <OutlinedInput
                                        inputProps={{'aria-label': 'tag input box'}}
                                        id="outlined-title"
                                        labelWidth={0}
                                        placeholder='태그 (최대 25자)'
                                    />
                                </FormControl>
                                <FormControl className={classes.textField} variant="outlined">
                                    <OutlinedInput
                                        inputProps={{'aria-label': 'tag input box'}}
                                        id="outlined-title"
                                        labelWidth={0}
                                        placeholder='태그 (최대 25자)'
                                    />
                                </FormControl>
                            </Box>
                        </Box>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<UnCheckedIcon />}
                                    checkedIcon={<CheckedIcon />}
                                    value="check"
                                />
                            }
                            label="공지로 등록"
                            className={classes.checkedBox}
                        />
                        <Box className={classes.importantBox}>
                            <Typography className={classes.importantText}>*목록 최상단에 고정됩니다.</Typography>
                            <Typography className={classes.importantText}>*공지는 5개까지 지정할 수 있습니다.</Typography>
                        </Box>

                        <Box className={classes.controlBox}>
                            <input type='file'
                                   accept='image/jpg,impge/png,image/jpeg,image/gif'
                                   name='image'
                                   id="image-button-file"
                                   onChange={this.handleFileOnChange}
                                   className={classes.input}
                            />
                            <input type='file'
                                   accept='*.*'
                                   name='file'
                                   id="button-file"
                                   onChange={this.handleFileChange}
                                   className={classes.input}
                            />
                            <label htmlFor="image-button-file">
                                <IconButton className={classes.iconButton} disableRipple component="span" style={{marginRight:20}}>
                                    {this.state.imgFile === '' ?
                                        <ImageSquareIcon/>
                                        :
                                        <ImageSquareIcon className={classes.iconColor}/>
                                    }

                                </IconButton>
                            </label>
                            <label htmlFor="button-file">
                                <IconButton className={classes.iconButton} disableRipple component="span">
                                    {this.state.file === true ?
                                        <PaperclipIcon className={classes.iconColor}/>
                                        :
                                        <PaperclipIcon/>
                                    }

                                </IconButton>
                            </label>
                        </Box>
                        {/* 이미지일 경우 */}
                        {this.state.imgFile === '' ?
                            null
                            :
                            <Box display='flex' justifyContent='center' className={classes.controlBox}>
                                <Box className={classes.fileImgBox}>
                                    {image_preview}
                                </Box>
                            </Box>
                        }

                         {/*파일일 경우 */}
                        {this.state.file === true ?
                            <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.controlBox}>
                                <Box display='flex' alignItems='flex-start'>
                                    <PaperclipIcon/>
                                    <Box>
                                        <Typography className={classes.fileNameText}>영어 회화를 위한 365문장 원리 및 응용 완벽 체화.pdf</Typography>
                                        <Typography className={classes.fileSizeText}>2.4MB</Typography>
                                    </Box>

                                </Box>
                                <IconButton className={classes.iconButton} disableRipple>
                                    <DownloadIcon/>
                                </IconButton>
                            </Box>
                            :
                            null
                        }


                        <Box display='flex' justifyContent='center' >
                            <Button className={classes.buttonStyle} disableRipple>게시</Button>
                        </Box>
                    </Box>

                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(WritingDialogComponent);