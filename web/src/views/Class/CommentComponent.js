import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Avatar,
    Box,
    Button,
    FormControl,
    IconButton,
    Input,
    Menu,
    MenuItem,
    Popover,
    Select,
    TextField,
    Typography
} from "@material-ui/core";
import {ReactComponent as ImageSquareIcon} from "../../common/images/ImageSquareIcon.svg";
import {ReactComponent as MonitorPlayIcon} from "../../common/images/MonitorPlayIcon.svg";
import {ReactComponent as PaperclipIcon} from "../../common/images/PaperclipIcon.svg";
import {ReactComponent as LinkGreyTinyIcon} from "../../common/images/LinkGreyTinyIcon.svg";
import {ReactComponent as SmileyIcon} from "../../common/images/SmileyIcon.svg";
import clsx from "clsx";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import {ReactComponent as ArrowLineDownIcon} from "../../common/images/ArrowLineDownIcon.svg";
import {ReactComponent as MoreIcon} from "../../common/images/DotsThreeOutlineVerticalIcon.svg";
import {ReactComponent as Emoticon1} from "../../common/images/Emoticon1.svg";
import {ReactComponent as Emoticon2} from "../../common/images/Emoticon2.svg";
import {ReactComponent as Emoticon3} from "../../common/images/Emoticon3.svg";
import {ReactComponent as Emoticon4} from "../../common/images/Emoticon4.svg";
import {ReactComponent as Emoticon5} from "../../common/images/Emoticon5.svg";
import {ReactComponent as Emoticon6} from "../../common/images/Emoticon6.svg";
import {ReactComponent as Emoticon7} from "../../common/images/Emoticon7.svg";
import {ReactComponent as Emoticon8} from "../../common/images/Emoticon8.svg";
import {ReactComponent as ModalCloseIcon} from "../../common/images/ModalCloseIcon.svg";
import RoomTestImg1 from "../../common/images/RoomTestImg1.png";
import ProfileDialogComponent from "../dialog/ProfileDialogComponent";


const styles = theme => ({
    flexBetween:{
        display:'flex',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    tagWriter:{
        fontSize:'0.625rem',
        backgroundColor:'#5778ed',
        color:'#fff',
        padding:'2px 6px',
        marginLeft: 4,
    },
    tagWriterColor:{
        backgroundColor:'#00c880',
    },
    commentBox: {
        border: '1px solid #e1e1e1',
        padding: '12px 8px 7px 6px',
        borderRadius: 7,
        marginBottom:38,
        '& .MuiTextField-root':{
            width:'100%',
            padding:'0 10px',
            marginBottom:7,
            height: '3rem',
            '& .MuiInputBase-input, .MuiInputBase-input::placeholder':{
                fontSize:'0.875rem',
            },
        },
        '& .MuiInput-underline:before, .MuiInput-underline:after':{
            display:'none',
        },
    },
    commentBtnBox:{
        borderRadius: 5,
        backgroundColor:'#f8f8f8',
        padding:'6px 10px',
        display:'flex',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    iconButton:{
        padding:5,
        marginRight:5,
        "&:hover":{
            background:'transparent'
        }
    },
    btnStyle:{
        background:'#bdbdbd',
        color:'#fff',
        padding:'2px 10px',
        '&:hover':{
            background: '#bdbdbd',
        }
    },
    btnStyle2:{
        fontSize:'0.75rem',
        fontWeight:600,
        padding:0,
        '& svg':{
            marginLeft:4,
        },
        '&:hover':{
            background: 'transparent',
        }
    },
    formControl:{
        '&>div':{
            fontSize:'0.75rem',
            fontWeight:600,
            '&:before, &:after':{
                content:'',
                display:'none',
                width:0,
                size:0,
            },
        },
        "& .MuiPaper-root":{
            boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.08)',
            borderRadius:7,
            border:'1.5px solid #d4d4d6'
        },
        "& .MuiSelect-select:focus":{
            background:'transparent'
        },
        "& .MuiSelect-select.MuiSelect-select":{
            paddingRight:5
        }
    },
    menuBox:{
        "& .MuiPopover-paper":{
            boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.08)',
            borderRadius:7,
            border:'1.5px solid #d4d4d6'
        }
    },
    menuItem:{
        fontFamily: 'NanumSquareRoundOTF' ,
        fontSize:'0.75rem',
        color:'#0d0d0d',
        "&:hover":{
            background:'#d3d7db'
        },
        "&.Mui-selected":{
            background:'transparent'
        },
        "&.Mui-selected:hover":{
            background:'#d3d7db'
        },
    },
    commTitle:{
        borderBottom:'1px solid #e1e1e1',
        paddingBottom: 7,
        marginBottom: 17,
    },
    commentList:{
        display:'flex',
        alignItems: 'flex-start',
        justifyContent:'space-between',
        borderBottom:'1px solid #e1e1e1',
        marginBottom:19,
        paddingBottom:19,
    },
    comments:{
        width:580,
        objectFit: 'contain',
        marginLeft:10,
        '&>h5':{
            fontSize:'0.875rem',
            fontWeight:600,
            margin:'12px 0 16px',
        },
        '&>p':{
            marginBottom:10,
            // fontWeight:300,
        },
        '& .MuiTypography-caption':{
            display:'flex',
            alignItems: 'center',
            color:'#848484',
        },
    },
    commentContent:{
    },
    mention:{
        color:'#0097ff',
    },
    inputFile:{
        display:'none'
    },
    iconColor:{
        "& .smiley-icon":{
            fill:'rgba(0, 0, 0, 0.6)'
        }
    },
    popoverBox:{
        "& .MuiPopover-paper":{
            width:160,
            boxShadow:'0 2px 2px 0 rgba(0, 0, 0, 0.25)',
            borderRadius:4,
            padding:'15px 22px'
        },
    },
    popoverBoxEmotions:{
        "& .MuiPopover-paper":{
            boxShadow:'0 2px 2px 0 rgba(0, 0, 0, 0.25)',
            borderRadius:4,
            padding:'15px 12px 15px 22px',
            '& .MuiTypography-caption':{
                color:'#848484',
                marginLeft:10
            },
            '& .MuiBox-root':{
                marginRight:10
            }
        }
    },
    emotionBox:{
        padding:0,
        minWidth:20,
        display:'flex',
        alignItems:'center',
        "&:hover":{
            background:'transparent'
        },
        "& svg":{
            width:20,
            height:20,
            marginRight:5,
            "&:last-child":{
                marginRight:0,
            }
        }
    },
    emotionIcon:{
        padding:0,
        "&:hover":{
            background:'transparent'
        }
    },
    fileImgBox:{
        width:200,
        height:140,
        borderRadius:7,
        padding:0,
        "& img":{
            width:'100%',
            objectFit: 'cover',
        },
        "&:hover":{
            background:'transparent'
        }
    },
    fileVideoBox: {
        width: 200,
        height: 140,
        background: '#eee',
        marginBottom: 10,
    },
    fileBox:{
        background:'#f8f8f8',
        display:'flex',
        justifyContent:'space-between',
        padding:'20px 25px',
        borderRadius:7,
        marginBottom:20,
        "& svg":{
            marginRight:7,
            "& .paperclip":{
                fill:'#000'
            }
        }
    },
    linkText:{
        color:'#0097ff',
        textDecoration:'underline',
        cursor:'pointer'
    },
    modalBox:{
        position: 'fixed',
        zIndex: 1000,
        paddingTop: 100,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    modalBoxIn:{
        width:850,
        margin: 'auto',
    },
    modalClose:{
        padding:0,
        "&:hover":{
            background:'transparent'
        }
    },
    modalContent:{
        width:800,
        height:560,
        margin: 'auto',
        display: 'block',
    },
    avatar:{
        cursor: 'pointer'
    }
});

class CommentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            name: 'hai',
            anchorEl: null,
            GoodToggle: false,
            emoticonAnchorEl: null,
            emoticonCommentAnchorEl: null,
            emoticonCommentAnchorEl1: null,
            emoticon:false,
            emoticonComment:false,
            emoticonComment1:false,

            imageModal:false,
            profileDialog:false
        };
    }
    handleClickImageModal = () => {
        this.setState({ imageModal: true });
    };

    handleClickProfileDialog = () => {
        this.setState({ profileDialog: true });
    };

    handleCloseImageModal = () => {
        this.setState({ imageModal: false });
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClickEdit = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
            emoticonAnchorEl: null,
            emoticonCommentAnchorEl: null,
            emoticonCommentAnchorEl1: null,
            emoticon:false,
            emoticonComment:false,
            emoticonComment1:false,
            profileDialog:false,
        });
    };
    handleClickEmoticonAnchorEl = event => {
        this.setState({
            emoticonAnchorEl: event.currentTarget,
            emoticon: !this.state.emoticon,
        });
    }

    handleClickEmoticonCommentAnchorEl = event => {
        this.setState({
            emoticonCommentAnchorEl: event.currentTarget,
            emoticonComment: !this.state.emoticonComment,
        });
    }

    handleClickEmoticonCommentAnchorEl1 = event => {
        this.setState({
            emoticonCommentAnchorEl1: event.currentTarget,
            emoticonComment1: !this.state.emoticonComment,
        });
    }

    render() {
        const { classes } = this.props;
        const { anchorEl, emoticonAnchorEl, emoticonCommentAnchorEl, emoticonCommentAnchorEl1 } = this.state;
        const emoticonAnchorElOpen = Boolean(emoticonAnchorEl);
        const emoticonCommentAnchorElOpen = Boolean(emoticonCommentAnchorEl);
        const emoticonCommentAnchorElOpen1 = Boolean(emoticonCommentAnchorEl1);

        return (
            <div className={classes.root}>
                <Box className={classes.commentBox}>
                    <TextField
                        placeholder="댓글을 남겨주세요."
                        className={classes.input}
                        rowsMax="2"
                        multiline
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                    />
                    <Box className={classes.commentBtnBox}>
                        <Box>
                            <input type='file'
                                   accept='image/jpg,impge/png,image/jpeg,image/gif'
                                   name='image'
                                   id="image-button-file"
                                   onChange={this.handleFileOnChange}
                                   className={classes.inputFile}
                            />
                            <input type='file'
                                   accept='*.*'
                                   name='file'
                                   id="button-file"
                                   onChange={this.handleFileChange}
                                   className={classes.inputFile}
                            />
                            <label htmlFor="image-button-file">
                                <IconButton component="span" className={classes.iconButton} disableRipple ><ImageSquareIcon/></IconButton>
                            </label>

                            <IconButton component="span" className={classes.iconButton} disableRipple ><MonitorPlayIcon/></IconButton>

                            <label htmlFor="button-file">
                                <IconButton component="span" className={classes.iconButton} disableRipple><PaperclipIcon/></IconButton>
                            </label>
                            <IconButton className={classes.iconButton} disableRipple><LinkGreyTinyIcon/></IconButton>
                            <IconButton
                                className={classes.iconButton}
                                disableRipple
                                aria-owns={emoticonAnchorElOpen ? 'simple-popper' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleClickEmoticonAnchorEl}
                            >
                                {this.state.emoticon === true ?
                                    <SmileyIcon className={classes.iconColor}/>
                                    :
                                    <SmileyIcon/>
                                }

                            </IconButton>
                            <Popover
                                id="simple-popper"
                                open={emoticonAnchorElOpen}
                                anchorEl={emoticonAnchorEl}
                                onClose={this.handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                className={classes.popoverBox}
                            >
                                <Box>
                                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                                        <IconButton className={classes.emotionIcon} disableRipple><Emoticon1/></IconButton>
                                        <IconButton className={classes.emotionIcon} disableRipple><Emoticon2/></IconButton>
                                        <IconButton className={classes.emotionIcon} disableRipple><Emoticon3/></IconButton>
                                        <IconButton className={classes.emotionIcon} disableRipple><Emoticon4/></IconButton>
                                    </Box>
                                    <Box display='flex' justifyContent='space-between' alignItems='center' mt={2}>
                                        <IconButton className={classes.emotionIcon} disableRipple><Emoticon5/></IconButton>
                                        <IconButton className={classes.emotionIcon} disableRipple><Emoticon6/></IconButton>
                                        <IconButton className={classes.emotionIcon} disableRipple><Emoticon7/></IconButton>
                                        <IconButton className={classes.emotionIcon} disableRipple><Emoticon8/></IconButton>
                                    </Box>
                                </Box>
                            </Popover>

                        </Box>
                        <Button disableRipple className={classes.btnStyle}>보내기</Button>
                    </Box>
                </Box>
                <Box className={classes.commentContent}>
                    <Box className={clsx(classes.flexBetween, classes.commTitle)}>
                        <FormControl className={classes.formControl}>
                            <Select
                                value={this.state.age}
                                onChange={this.handleChange}
                                input={<Input name="age" id="age-label-placeholder" />}
                                displayEmpty
                                name="age"
                                IconComponent={() => <Box style={{width:16, height:16, marginRight:8}}><ArrowDownIcon/> </Box>}
                            >
                                <MenuItem value="" className={classes.menuItem}>최신순</MenuItem>
                                <MenuItem value={10} className={classes.menuItem}>시간순</MenuItem>
                            </Select>
                        </FormControl>
                        <Button disableRipple className={classes.btnStyle2}> 마지막 댓글로 이동 <ArrowLineDownIcon/></Button>
                    </Box>
                    <Box className={classes.commentList}>
                        <Box display='flex'>
                            <Avatar className={classes.avatar} onClick={this.handleClickProfileDialog}></Avatar>
                            <Box className={classes.comments}>
                                <Typography variant="h5">김온더 <span className={clsx(classes.tagWriter, classes.tagWriterColor)}>주최자</span></Typography>
                                <Typography variant="body2">
                                    교육(영어: education) 또는 가르침은 사람이 살아가는 데 필요한 지식이나 기술 등을 가르치고 배우는 활동이다.
                                    교육은 개인이나 집단이 가진 지식, 기술, 기능, 가치관 등을 대상자에게 바람직한 방향으로 가르치고 배우는 활동이다.
                                    또는, 교육은 피교육자가 보다 나은 생활을 영위하기 위해, 또한 그로 인하여 사회가 유지·발전될 수 있도록 피교육자가
                                    갖고 있는 능력을 끌어내고, 새로운 지식이나 기능을 습득하게 하는 활동이라고 설명하기도 한다. 넓은 의미로는,
                                    ‘개인의 정신, 성격, 능력의 형성에 영향을 주는 모든 행위와 경험’을 교육으로 보기도 한다
                                </Typography>
                                <Box display='flex' alignItems='center'>
                                    <Typography variant="caption">10분전 •</Typography>
                                    <IconButton
                                        className={classes.emotionIcon}
                                        disableRipple
                                        aria-owns={emoticonCommentAnchorElOpen ? 'simple-popper' : undefined}
                                        aria-haspopup="true"
                                        onClick={this.handleClickEmoticonCommentAnchorEl}
                                    >
                                        {this.state.emoticonComment === true ?
                                            <SmileyIcon className={classes.iconColor}/>
                                            :
                                            <SmileyIcon/>
                                        }
                                    </IconButton>

                                    <Popover
                                        id="simple-popper"
                                        open={emoticonCommentAnchorElOpen}
                                        anchorEl={emoticonCommentAnchorEl}
                                        onClose={this.handleClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        className={classes.popoverBox}
                                    >
                                        <Box>
                                            <Box display='flex' justifyContent='space-between' alignItems='center'>
                                                <IconButton className={classes.emotionIcon} disableRipple><Emoticon1/></IconButton>
                                                <IconButton className={classes.emotionIcon} disableRipple><Emoticon2/></IconButton>
                                                <IconButton className={classes.emotionIcon} disableRipple><Emoticon3/></IconButton>
                                                <IconButton className={classes.emotionIcon} disableRipple><Emoticon4/></IconButton>
                                            </Box>
                                            <Box display='flex' justifyContent='space-between' alignItems='center' mt={2}>
                                                <IconButton className={classes.emotionIcon} disableRipple><Emoticon5/></IconButton>
                                                <IconButton className={classes.emotionIcon} disableRipple><Emoticon6/></IconButton>
                                                <IconButton className={classes.emotionIcon} disableRipple><Emoticon7/></IconButton>
                                                <IconButton className={classes.emotionIcon} disableRipple><Emoticon8/></IconButton>
                                            </Box>
                                        </Box>
                                    </Popover>

                                </Box>

                            </Box>
                        </Box>
                        <IconButton disableRipple
                                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleClickEdit}
                        ><MoreIcon/></IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                            className={classes.menuBox}
                        >
                            <MenuItem onClick={this.handleClose} className={classes.menuItem}>수정</MenuItem>
                            <MenuItem onClick={this.handleClose} className={classes.menuItem}>삭제</MenuItem>
                        </Menu>
                    </Box>
                    <Box className={classes.commentList}>
                        <Box display='flex'>
                            <Avatar className={classes.avatar} onClick={this.handleClickProfileDialog}></Avatar>
                            <Box className={classes.comments}>
                                <Typography variant="h5">익명<span className={classes.tagWriter}>작성자</span></Typography>
                                <Typography variant="body2">
                                    <span className={classes.mention}>@익명1</span> 비주얼 굿이네요!!
                                </Typography>

                                <Box display='flex' alignItems='center'>
                                    <Typography variant="caption">10분전 •</Typography>
                                    <Button
                                        className={classes.emotionBox}
                                        disableRipple
                                        aria-owns={emoticonCommentAnchorElOpen1 ? 'simple-popper' : undefined}
                                        aria-haspopup="true"
                                        onClick={this.handleClickEmoticonCommentAnchorEl1}
                                    >
                                        <Emoticon5/>
                                        <Emoticon7/>
                                    </Button>
                                    <Typography variant="caption">5</Typography>

                                    <Popover
                                        id="simple-popper"
                                        open={emoticonCommentAnchorElOpen1}
                                        anchorEl={emoticonCommentAnchorEl1}
                                        onClose={this.handleClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        className={classes.popoverBoxEmotions}
                                    >
                                        <Box display='flex' alignItems='center'>
                                            <Box display='flex' alignItems='center'>
                                                <Emoticon5/>
                                                <Typography variant="caption">4</Typography>
                                            </Box>
                                            <Box display='flex' alignItems='center'>
                                                <Emoticon7/>
                                                <Typography variant="caption">1</Typography>
                                            </Box>
                                        </Box>
                                    </Popover>

                                </Box>
                            </Box>
                        </Box>
                        <IconButton disableRipple
                                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleClickEdit}
                        ><MoreIcon/></IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                            className={classes.menuBox}
                        >
                            <MenuItem onClick={this.handleClose} className={classes.menuItem}>수정</MenuItem>
                            <MenuItem onClick={this.handleClose} className={classes.menuItem}>삭제</MenuItem>
                        </Menu>
                    </Box>

                    {/*    */}

                    <Box className={classes.commentList}>
                        <Box display='flex'>
                            <Avatar className={classes.avatar} onClick={this.handleClickProfileDialog}></Avatar>
                            <Box className={classes.comments}>
                                <Typography variant="h5">김민희</Typography>
                                <Typography variant="body2">
                                    참고하세요 ;D
                                </Typography>

                                {/* 이미지일때 */}
                                <Button className={classes.fileImgBox} onClick={this.handleClickImageModal} disableRipple>
                                    <img src={RoomTestImg1} alt='img' />
                                </Button>
                                {this.state.imageModal === true &&
                                    <Box className={classes.modalBox}>
                                        <Box display='flex' alignItems='flex-start' className={classes.modalBoxIn}>
                                            <img className={classes.modalContent} src={RoomTestImg1} alt='img' />
                                            <IconButton className={classes.modalClose} onClick={this.handleCloseImageModal} disableRipple><ModalCloseIcon/></IconButton>
                                        </Box>
                                    </Box>
                                }


                                {/* 파일일때 */}
                                {/*<Box className={classes.fileBox}>*/}
                                {/*    <Box display='flex'>*/}
                                {/*        <PaperclipIcon/>*/}
                                {/*        <Box>*/}
                                {/*            <Typography variant="body2">영어 회화를 위한 365문장 원리 및 응용 완벽 체화.pdf</Typography>*/}
                                {/*            <Typography variant="caption">2.4MB</Typography>*/}
                                {/*        </Box>*/}
                                {/*    </Box>*/}
                                {/*    <IconButton className={classes.emotionIcon} disableRipple>*/}
                                {/*        <DownloadIcon/>*/}
                                {/*    </IconButton>*/}
                                {/*</Box>*/}

                                {/* 링크일때 */}
                                {/*<Typography variant="body2" className={classes.linkText}>https://www.onthelive.kr</Typography>*/}

                                {/* 동영상일떄 */}
                                {/*<Box className={classes.fileVideoBox} />*/}

                                <Box display='flex' alignItems='center'>
                                    <Typography variant="caption">10분전 •</Typography>
                                    <Button
                                        className={classes.emotionBox}
                                        disableRipple
                                        aria-owns={emoticonCommentAnchorElOpen1 ? 'simple-popper' : undefined}
                                        aria-haspopup="true"
                                        onClick={this.handleClickEmoticonCommentAnchorEl1}
                                    >
                                        <Emoticon5/>
                                        <Emoticon7/>
                                    </Button>
                                    <Typography variant="caption">5</Typography>

                                    <Popover
                                        id="simple-popper"
                                        open={emoticonCommentAnchorElOpen1}
                                        anchorEl={emoticonCommentAnchorEl1}
                                        onClose={this.handleClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        className={classes.popoverBoxEmotions}
                                    >
                                        <Box display='flex' alignItems='center'>
                                            <Box display='flex' alignItems='center'>
                                                <Emoticon5/>
                                                <Typography variant="caption">4</Typography>
                                            </Box>
                                            <Box display='flex' alignItems='center'>
                                                <Emoticon7/>
                                                <Typography variant="caption">1</Typography>
                                            </Box>
                                        </Box>
                                    </Popover>

                                </Box>
                            </Box>
                        </Box>
                        <IconButton disableRipple
                                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleClickEdit}
                        ><MoreIcon/></IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                            className={classes.menuBox}
                        >
                            <MenuItem onClick={this.handleClose} className={classes.menuItem}>수정</MenuItem>
                            <MenuItem onClick={this.handleClose} className={classes.menuItem}>삭제</MenuItem>
                        </Menu>
                    </Box>
                </Box>
                <ProfileDialogComponent profileDialog={this.state.profileDialog} handleClose={this.handleClose}/>
            </div>
        );
    }
}

export default withStyles(styles)(CommentComponent);