import React, {Component} from 'react';
import clsx from "clsx";
import {
    Box,
    Button,
    Checkbox,
    Dialog,
    FormControl, FormControlLabel,
    OutlinedInput,
    TextareaAutosize,
    Typography,
    TextField, IconButton, FormHelperText
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";
import {withStyles} from "@material-ui/core/styles";
import SelectSchedule from "./calendar/SelectSchedule";
import {ReactComponent as UnCheckedIcon} from "../../common/images/UnCheckedIcon.svg";
import {ReactComponent as CheckedIcon} from "../../common/images/CheckedIcon.svg";

const styles = theme => ({
    root:{

    },
    dialogBox:{
        "& .MuiPaper-root":{
            width:490,
            padding:'24px 0 24px 24px',
            boxSizing:'border-box',
            borderRadius:10,
            boxShadow:'0 2.5px 5px 0 rgba(0, 0, 0, 0.25)',
            "&::-webkit-scrollbar": {
                width: '15px',
            },
            "&::-webkit-scrollbar-thumb": {
                background: '#dbdbdb',
                borderRadius: '10px',
                backgroundClip: 'padding-box',
                border: '5px solid transparent'
            },
            "&::-webkit-scrollbar-track": {
                background: 'transparent',
                marginTop: 5,
            },
        },
        "& *": {
            fontFamily: 'NanumSquareRoundOTF' ,
        }
    },
    titleBox:{
        marginBottom:30,
        paddingRight:24
    },
    titleText:{
        fontSize:'1.25rem',
        color:'#000',
        fontWeight:600
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
        width:'100%',
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
    boxMargin:{
        marginTop:30,
        "& .MuiFormControlLabel-root":{
            marginLeft: 0,
            marginRight:0
        }
    },
    marginBottom:{
        marginBottom: 15
    },
    textStyle:{
        fontWeight:600,
        fontSize:'1.125rem',
        color:'#333',
    },
    textStyleRequired:{
        '&:after':{
            content:'"*"',
            color:'#ff0000',
        }
    },
    checkedBox:{
        "& .MuiIconButton-root":{
            padding:0
        },
        "& .MuiFormControlLabel-label":{
            fontSize:'1rem',
            color:'#333',
            marginLeft:10
        }
    },
    autoCompleteBox:{
        "& .MuiInputBase-root":{
            padding:'2.5px 6px',
        },
        "& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            border:'1px solid #d9dbde'
        },
        "& .MuiAutocomplete-input":{
            color:'#333',
            fontSize:'1rem',
            "&::placeholder":{
                color:'#a3a8af',
                opacity:1,
                fontWeight: 300,
            },
        },
        "& .MuiChip-root":{
            background:'transparent',
            "& .MuiChip-label":{
                color:'#333',
                fontSize:'1rem',
                paddingLeft:0,
                paddingRight:5
            },
            "& svg":{
                display:'none'
            }
        },
        "& .MuiAutocomplete-popupIndicator":{
            display:'none'
        }
    },
    option:{
        fontSize:'0.875rem',
        color:'#333'
    },
    buttonStyle:{
        marginTop:26,
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
    scrollBox:{
        maxHeight:'calc(100vh - 230px )',
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
    },
    helperText:{
        letterSpacing:'-.24px',
        fontSize:'0.813rem',
        fontWeight:600,
    }
});

class ScheduleRegistrationComponent extends Component {
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
                    open={this.props.dialogOpen}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.titleBox}>
                        <Typography className={classes.titleText}>일정 등록</Typography>
                        <IconButton className={classes.iconButton} disableRipple onClick={this.props.handleClose}> <DialogCloseIcon /></IconButton>
                    </Box>

                    <Box display='flex' flexDirection='column' className={classes.scrollBox}>
                        <FormControl className={classes.textField} variant="outlined">
                            <OutlinedInput
                                inputProps={{'aria-label': 'title input box'}}
                                id="outlined-title"
                                labelWidth={0}
                                placeholder='일정 제목 (최대 50자 이내)'
                            />
                        </FormControl>
                        <Box style={{width:'100%'}}>
                            <TextareaAutosize
                                name="contents"
                                minRows={5}
                                maxRows={5}
                                aria-label="content input box"
                                className={classes.textareaStyle}
                                placeholder='일정 설명 (최대 100자 이내) '
                            />
                        </Box>
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

                        {/* 일시 */}
                        <Box className={classes.boxMargin}>
                           <Typography className={clsx(classes.textStyle, classes.marginBottom,classes.textStyleRequired)}>일시</Typography>
                            <SelectSchedule/>
                        </Box>

                        {/* 보안 */}
                        <Box className={classes.boxMargin}>
                            <Typography className={clsx(classes.textStyle, classes.marginBottom)}>보안</Typography>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={<UnCheckedIcon />}
                                        checkedIcon={<CheckedIcon />}
                                        value="emailCheck"
                                    />
                                }
                                label="게스트 참석 허용"
                                className={classes.checkedBox}
                            />
                        </Box>

                        {/* 참석자 */}
                        <Box className={classes.boxMargin}>
                            <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.marginBottom}>
                                <Typography className={clsx(classes.textStyle, classes.marginBottom, classes.textStyleRequired)}>참석자</Typography>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={<UnCheckedIcon />}
                                            checkedIcon={<CheckedIcon />}
                                            value="emailCheck"
                                        />
                                    }
                                    label="모두"
                                    className={classes.checkedBox}
                                />
                            </Box>

                            <Autocomplete
                                multiple
                                id="multiple-limit-tags"
                                options={memberList}
                                classes={{
                                    option: classes.option,
                                }}
                                getOptionLabel={(option) => {
                                    if(option.type === 'member') return `@${option.title}`;
                                }}
                                filterSelectedOptions
                                size='small'
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        label=""
                                        placeholder="참석자 닉네임을 입력 또는 선택해주세요."
                                    />
                                )}
                                className={classes.autoCompleteBox}
                            />
                            <FormHelperText error className={classes.helperText}>
                                * 리더와 공동리더에게는 일정이 항상 공개됩니다
                            </FormHelperText>
                        </Box>


                        <Button className={classes.buttonStyle} disableRipple>
                            게시
                        </Button>
                    </Box>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(ScheduleRegistrationComponent);

const memberList = [
    { title: '김영희', type: 'member'},
    { title: '김철수', type: 'member' },
    { title: '아이유', type: 'member'},
    { title: '홍길동', type: 'member'},
    { title: '유관순', type: 'member'},
    { title: '세종대왕', type: 'member'},
];