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
    TextField, IconButton, FormHelperText, RadioGroup, Radio
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
        marginBottom: 30,
        marginTop: 5,
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
            fontSize:'0.938rem',
            "&::placeholder":{
                color:'#a3a8af',
                opacity:1,
                fontWeight: 300,
            },
        },
    },
    textareaStyle: {
        width:'100%',
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
    marginBottom:{
        marginBottom: 15
    },
    textStyle:{
        fontWeight:600,
        fontSize:'1.125rem',
        color:'#333',
    },
    textStyle1:{
        fontSize:'0.813rem',
        color:'#a3a8af',
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
    boxTitleText:{
        fontSize:'1.125rem',
        fontWeight:'bold',
        marginBottom: 15
    },
    required:{
        '&:after':{
            content:'"*"',
            color:'#ff0000',
        }
    },
    formControl:{
        marginBottom:30,
        "& .MuiFormControlLabel-label":{
            fontSize:'1rem',
            color:'#333'
        },
        '& .MuiFormControlLabel-root':{
            marginLeft: 0,
            marginRight: 38,
            '& > span':{
                padding: '9px 9px 9px 0'
            }
        },
        "& .MuiButtonBase-root:hover":{
            background:'transparent'
        }
    },
});

class ScheduleRegistrationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: "a",
            selectedLevelValue: "c",
        };
    }

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
    };

    handleChangeLevel = event => {
        this.setState({ selectedLevelValue: event.target.value });
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
                        <Typography className={classes.titleText}>강의 기본 정보</Typography>
                        <IconButton className={classes.iconButton} disableRipple onClick={this.props.handleClose}> <DialogCloseIcon /></IconButton>
                    </Box>

                    <Box display='flex' flexDirection='column' className={classes.scrollBox}>
                        <Typography className={clsx(classes.boxTitleText, classes.required)}>강의 이름</Typography>
                        <FormControl className={classes.textField} variant="outlined">
                            <OutlinedInput
                                inputProps={{'aria-label': 'title input box'}}
                                id="outlined-title"
                                labelWidth={0}
                                placeholder='제목 (최대 50자)'
                            />
                        </FormControl>
                        <Typography className={clsx(classes.boxTitleText, classes.required)}>공개여부</Typography>

                        <FormControl component="fieldset" className={classes.formControl}>
                            <RadioGroup
                                row
                                aria-label="Radio"
                                name="Radio"
                                className={classes.group}
                                value={this.state.selectedValue}
                                onChange={this.handleChange}
                            >
                                <FormControlLabel
                                    value="a"
                                    control={<Radio icon={<UnCheckedIcon/>} checkedIcon={<CheckedIcon/>} disableRipple/>}
                                    label="공개"
                                />

                                <FormControlLabel
                                    value="b"
                                    control={<Radio icon={<UnCheckedIcon/>} checkedIcon={<CheckedIcon/>} disableRipple/>}
                                    label="비공개"
                                />
                            </RadioGroup>
                            <Typography className={classes.textStyle1}>모든 수강생이 강의를 볼 수 있습니다.</Typography>
                        </FormControl>


                        <Typography className={clsx(classes.boxTitleText, classes.required)}>태그</Typography>
                        <Typography className={classes.textStyle1}>
                            * 모든 강의의 성격을 나타내는 대표 태그를 입력하세요.<br/>
                            사람들이 나의 강의를 언제든지 쉽게 찾을 수 있습니다.
                        </Typography>
                        <FormControl className={classes.textField} variant="outlined">
                            <OutlinedInput
                                inputProps={{'aria-label': 'tag input box'}}
                                id="outlined-title"
                                labelWidth={0}
                                placeholder='1개 이상 태그 입력 (콤마로 구분하여 입력해주세요. 예 - 훈련, 학습)'
                            />
                        </FormControl>

                        <Typography className={clsx(classes.boxTitleText, classes.required)}>난이도</Typography>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <RadioGroup
                                row
                                aria-label="Radio"
                                name="Radio"
                                className={classes.group}
                                value={this.state.selectedLevelValue}
                                onChange={this.handleChangeLevel}
                            >
                                <FormControlLabel
                                    value="c"
                                    control={<Radio icon={<UnCheckedIcon/>} checkedIcon={<CheckedIcon/>} disableRipple/>}
                                    label="초급"
                                />

                                <FormControlLabel
                                    value="d"
                                    control={<Radio icon={<UnCheckedIcon/>} checkedIcon={<CheckedIcon/>} disableRipple/>}
                                    label="중급"
                                />

                                <FormControlLabel
                                    value="e"
                                    control={<Radio icon={<UnCheckedIcon/>} checkedIcon={<CheckedIcon/>} disableRipple/>}
                                    label="고급"
                                />
                            </RadioGroup>
                        </FormControl>
                        <Typography className={clsx(classes.textStyle, classes.marginBottom)}>강의소개</Typography>
                        <Box style={{width:'100%'}}>
                            <TextareaAutosize
                                name="contents"
                                minRows={6}
                                maxRows={6}
                                aria-label="content input box"
                                className={classes.textareaStyle}
                                placeholder='강의 설명 및 커리큘럼 등 자유롭게 적어주세요. (최대 1,000자) '
                            />
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