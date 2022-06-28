import React, {Component} from 'react';
import clsx from "clsx";
import {withRouter} from "react-router-dom";
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    OutlinedInput,
    Typography,
    Radio,
    RadioGroup,
    TextareaAutosize
} from "@material-ui/core";
import {ReactComponent as BackArrowIcon} from "../../common/images/BackArrowIcon.svg";
import {ReactComponent as UnCheckedIcon} from "../../common/images/UnCheckedIcon.svg";
import {ReactComponent as CheckedIcon} from "../../common/images/CheckedIcon.svg";
import GalleryCheckCircleIcon from "../../common/images/GalleryCheckCircleIcon.svg";

import Gallery from "./imgGallery/Gallery";

const styles = theme => ({
    root:{
        background:'#f3f3f3',
        minHeight:'calc(100vh - 87px)',
        paddingBottom:40
    },
    titleBox:{
        width:730,
        margin:'0 auto 25px',
        paddingTop:50
    },
    titleText:{
        fontSize:'1.875rem',
        color:'#000',
        marginTop:10
    },
    backButton:{
        padding:0,
        fontSize:'1rem',
        color:'#000',
        "& span":{
            marginRight:8,
            marginBottom:1
        },
        "&:hover":{
            background:'transparent'
        }
    },
    boxStyle:{
        width:730,
        borderRadius:10,
        boxShadow:'0 2px 2px 0 rgba(0, 0, 0, 0.25)',
        background:'#fff',
        padding:'25px',
        margin:'0 auto',
        boxSizing:'border-box',
        marginBottom:20
    },
    boxTitleText:{
        fontSize:'1.25rem',
        fontWeight:600,
        color:'#0d0d0d',
        marginBottom:18
    },
    textareaStyle: {
        width:'100%',
        border:'1px solid #bec3da',
        borderRadius:5,
        padding: '11px',
        overflowY: 'auto',
        resize: 'none',
        boxSizing:'border-box',
        fontSize:'1rem',
        color:'#000',
        background:'transparent',
        "&::placeholder": {
            color:'#92979e',
            opacity:1,
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
    boxSubtitleText:{
        fontSize:'0.938rem',
        color:'rgba(0, 0, 0, 0.6)',
        margin:'17px 0 20px'
    },
    required:{
        '&:after':{
            content:'"*"',
            color:'#ff0000',
        }
    },
    textField:{
        width:'100%',
        "& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            border:'1px solid #c0c2c3'
        },
        "& .MuiOutlinedInput-root":{
            width:'100%',
            borderRadius:4,
            "&:hover":{
                borderColor:'#c0c2c3'
            }
        },
        "& .MuiOutlinedInput-input":{
            padding:'13px 18px',
            color:'#000',
            fontSize:'1rem',
            "&::placeholder":{
                color:'#92979e',
                opacity:1
            }
        },
    },
    textFieldMulti:{
        display:'flex',
        flexDirection: 'row',
        '&>div':{
            width:'32%!important',
            marginLeft:'2%',
            '&:first-child':{
                marginLeft:0,
            },
        }
    },
    radioContents:{
        width:300,
        marginRight: 50,
        "&:last-child":{
            marginRight:0
        }
    },
    radioBox:{
        margin:'0 0 5px',
        "& .MuiIconButton-root":{
            padding:0
        },
        "& .MuiFormControlLabel-label":{
            fontSize:'1.125rem',
            color:'#0d0d0d',
            marginLeft:10
        }
    },
    radioText:{
        fontSize:'0.938rem',
        color:'rgba(0, 0, 0, 0.6)'
    },
    buttonStyle:{
        width:280,
        height:60,
        borderRadius:7,
        background:'#c2c2c2',
        color:'#fff',
        fontSize:'1.25rem',
        fontWeight:600,
        marginTop:10,
        "&:hover":{
            background:'#c2c2c2',
        }
    },
    fullImgBox:{
        width:670,
        height:275,
        borderRadius: 10,
        background:'red'
    },
    saveButton:{
        background:'#1a457e',
        marginLeft: 25,
        "&:hover":{
            background:'#1a457e'
        }
    },
});

class RoomCreateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'checkA',
        };
    }

    handleClickMyRoom = () => {
        this.props.history.push("/rooms");
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.titleBox}>
                    <Button
                        className={classes.backButton}
                        startIcon={<BackArrowIcon />}
                        disableRipple
                        onClick={this.handleClickMyRoom.bind(this)}
                    >
                        강사 강의실
                    </Button>
                    <Typography className={classes.titleText}>강의실 만들기</Typography>
                </Box>

                <Box className={classes.boxStyle}>
                    <Typography className={clsx(classes.boxTitleText, classes.required)}>강의실 이름</Typography>
                    <FormControl className={classes.textField} variant="outlined">
                        <OutlinedInput
                            inputProps={{'aria-label': 'room name input box'}}
                            id="outlined-room-name"
                            labelWidth={0}
                            placeholder="강의실 이름 입력 (최대 50자)"
                        />
                    </FormControl>
                </Box>

                <Box className={classes.boxStyle}>
                    <Typography className={clsx(classes.boxTitleText, classes.required)}>공개 범위</Typography>

                    <RadioGroup
                        aria-label="position"
                        name="position"
                        value={this.state.value}
                        onChange={this.handleChange}
                        row
                    >
                        <Box className={classes.radioContents}>
                            <FormControlLabel
                                control={
                                    <Radio
                                        icon={<UnCheckedIcon />}
                                        checkedIcon={<CheckedIcon />}
                                        value="checkA"
                                    />
                                }
                                label="공개"
                                className={classes.radioBox}
                            />
                            <Typography className={classes.radioText}>누구나 강의실을 검색해 찾을 수 있고, 강의실 소개와 강의를 볼 수 있습니다.</Typography>
                        </Box>

                        <Box className={classes.radioContents}>
                            <FormControlLabel
                                control={
                                    <Radio
                                        icon={<UnCheckedIcon />}
                                        checkedIcon={<CheckedIcon />}
                                        value="checkB"
                                    />
                                }
                                label="비공개"
                                className={classes.radioBox}
                            />
                            <Typography className={classes.radioText}>강의실과 강의가 공개되지 않습니다. 초대를 통해 가입할 수 있습니다.</Typography>
                        </Box>
                    </RadioGroup>

                </Box>

                <Box className={classes.boxStyle}>
                    <Typography className={clsx(classes.boxTitleText, classes.required)}>태그</Typography>
                    <Typography className={classes.boxSubtitleText}>
                        *강의실의 성격을 나타내는 대표 태그를 입력하세요.<br/>
                        사람들이 나의 강의실과 관심사와 관련된 강의를 언제든지 쉽게 찾을 수 있습니다.
                    </Typography>
                    <FormControl className={classes.textField} variant="outlined">
                        <OutlinedInput
                            inputProps={{'aria-label': 'room tag input box'}}
                            id="outlined-room-name"
                            labelWidth={0}
                            placeholder="1개 이상 태그 입력 (콤마로 구분하여 입력해주세요. 예 - 훈련, 학습) "
                        />
                    </FormControl>
                </Box>

                <Box className={classes.boxStyle}>
                    <Typography className={classes.boxTitleText}>강의실 소개</Typography>
                    <TextareaAutosize
                        name="contents"
                        minRows={7}
                        maxRows={7}
                        aria-label="content input box"
                        className={classes.textareaStyle}
                        placeholder='강의 설명 및 커리큘럼 등 자유롭게 적어주세요. (최대 1,000자)'
                    />
                </Box>

                <Box className={classes.boxStyle}>
                    <Typography className={clsx(classes.boxTitleText, classes.required)}>커버</Typography>
                    <Gallery/>
                </Box>

                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Button className={classes.buttonStyle} disableRipple>취소</Button>
                    <Button className={clsx(classes.buttonStyle, classes.saveButton)} disableRipple>만들기</Button>
               </Box>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(RoomCreateComponent));