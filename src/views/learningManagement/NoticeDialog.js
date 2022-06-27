import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    Typography,
    Dialog,
    OutlinedInput,
    FormControl,
    Button,
    TextareaAutosize,
    IconButton, Select, MenuItem, InputBase, ListItemIcon
} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import {ReactComponent as SelectCheckIcon} from "../../common/images/SelectCheckIcon.svg";

const styles = theme => ({
    root:{
    },
    dialogBox:{
        "& .MuiPaper-root":{
            width:490,
            padding:24,
            boxSizing:'border-box',
            borderRadius:10,
            boxShadow:'0 2.5px 5px 0 rgba(0, 0, 0, 0.25)'
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
        fontWeight:600
    },
    textField:{
        marginBottom:20,
        "& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            border:'1px solid #d9dbde'
        },
        "& .MuiOutlinedInput-root":{
            borderRadius:7,
            "&:hover":{
                borderColor:'#d9dbde'
            }
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
    textareaStyle: {
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
    buttonStyle:{
        marginTop:20,
        background:'#0097ff',
        color:'#fff',
        fontSize:'1.125rem',
        padding:'12px 0',
        borderRadius:7,
        "&:hover":{
            background:'#0097ff',
        },
        "&.Mui-disabled":{
            background:'#c2c2c2',
            color:'#fff'
        }
    },
    iconButton:{
        padding:0,
        "&:hover":{
            background:'transparent'
        }
    },
    menuText:{
        '& .MuiListItemIcon-root':{
            minWidth: 30,
            '& .select-check-icon':{
                fill: '#1664f5'
            }
        },
        '& p':{
            fontFamily: 'NanumSquareRoundOTF' ,
            fontSize: '1rem',
        }
    }
});

const BootstrapInput = withStyles(theme => ({
    root: {
        width: 290,
        borderBottom:'1px solid #d9dbde',
        marginBottom: 20
    },
    input: {
        borderRadius: 0,
        position: 'relative',
        backgroundColor: 'transparent',
        border: '0',
        fontSize:'1rem',
        color:'#000',
        '&:focus': {
            background:'transparent'
        },
        '&.MuiSelect-select':{
            paddingRight:5,
        },
        '& .MuiListItemIcon-root':{
            display:'none'
        },
    },
}))(InputBase);


class NoticeDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: " ",
        };
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };


    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Dialog
                    open={this.props.dialogOpen}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.titleBox}>
                        <Typography className={classes.titleText}>공지사항 등록</Typography>
                        <IconButton className={classes.iconButton} disableRipple onClick={this.props.handleClose}> <DialogCloseIcon /></IconButton>
                    </Box>

                    <Box display='flex' flexDirection='column'>
                        <FormControl>
                            <Select
                                value={this.state.value}
                                onChange={this.handleChange}
                                input={<BootstrapInput name="type" id="type-select" />}
                                IconComponent={() => <ArrowDownIcon/>}
                            >
                                <MenuItem value={" "} style={{display:'none'}} className={classes.menuText}>강의실을 선택해주세요.</MenuItem>
                                <MenuItem value={"강의실 선택"} className={classes.menuText}>
                                    <ListItemIcon>
                                        {/* 선택된 Item 일경우 체크 아이콘 */}
                                        <SelectCheckIcon/>
                                    </ListItemIcon>
                                    <Typography>강의실 선택</Typography>
                                </MenuItem>
                                <MenuItem value={"강의실 이름1"} className={classes.menuText}>
                                    <ListItemIcon>
                                        {/*<SelectCheckIcon/>*/}
                                    </ListItemIcon>
                                    <Typography>강의실 이름1</Typography>
                                </MenuItem>
                                <MenuItem value={"강의실 이름2"} className={classes.menuText}>
                                    <ListItemIcon>
                                        {/*<SelectCheckIcon/>*/}
                                    </ListItemIcon>
                                    <Typography>강의실 이름2</Typography>
                                </MenuItem>
                                <MenuItem value={"강의실 이름3"} className={classes.menuText}>
                                    <ListItemIcon>
                                        {/*<SelectCheckIcon/>*/}
                                    </ListItemIcon>
                                    <Typography>강의실 이름3</Typography>
                                </MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl className={classes.textField} variant="outlined">
                            <OutlinedInput
                                inputProps={{'aria-label': 'title input box'}}
                                id="outlined-title"
                                labelWidth={0}
                                placeholder='제목 입력 (최대 20자 이내)'
                            />
                        </FormControl>

                        <TextareaAutosize
                            name="contents"
                            minRows={5}
                            maxRows={5}
                            aria-label="content input box"
                            className={classes.textareaStyle}
                            placeholder='내용 입력 (최대 100자 이내)'
                        />

                        <Button className={classes.buttonStyle} disableRipple>
                            게시
                        </Button>
                    </Box>

                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(NoticeDialog);