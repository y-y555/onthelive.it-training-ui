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
                        ?????? ?????????
                    </Button>
                    <Typography className={classes.titleText}>????????? ?????????</Typography>
                </Box>

                <Box className={classes.boxStyle}>
                    <Typography className={clsx(classes.boxTitleText, classes.required)}>????????? ??????</Typography>
                    <FormControl className={classes.textField} variant="outlined">
                        <OutlinedInput
                            inputProps={{'aria-label': 'room name input box'}}
                            id="outlined-room-name"
                            labelWidth={0}
                            placeholder="????????? ?????? ?????? (?????? 50???)"
                        />
                    </FormControl>
                </Box>

                <Box className={classes.boxStyle}>
                    <Typography className={clsx(classes.boxTitleText, classes.required)}>?????? ??????</Typography>

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
                                label="??????"
                                className={classes.radioBox}
                            />
                            <Typography className={classes.radioText}>????????? ???????????? ????????? ?????? ??? ??????, ????????? ????????? ????????? ??? ??? ????????????.</Typography>
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
                                label="?????????"
                                className={classes.radioBox}
                            />
                            <Typography className={classes.radioText}>???????????? ????????? ???????????? ????????????. ????????? ?????? ????????? ??? ????????????.</Typography>
                        </Box>
                    </RadioGroup>

                </Box>

                <Box className={classes.boxStyle}>
                    <Typography className={clsx(classes.boxTitleText, classes.required)}>??????</Typography>
                    <Typography className={classes.boxSubtitleText}>
                        *???????????? ????????? ???????????? ?????? ????????? ???????????????.<br/>
                        ???????????? ?????? ???????????? ???????????? ????????? ????????? ???????????? ?????? ?????? ??? ????????????.
                    </Typography>
                    <FormControl className={classes.textField} variant="outlined">
                        <OutlinedInput
                            inputProps={{'aria-label': 'room tag input box'}}
                            id="outlined-room-name"
                            labelWidth={0}
                            placeholder="1??? ?????? ?????? ?????? (????????? ???????????? ??????????????????. ??? - ??????, ??????) "
                        />
                    </FormControl>
                </Box>

                <Box className={classes.boxStyle}>
                    <Typography className={classes.boxTitleText}>????????? ??????</Typography>
                    <TextareaAutosize
                        name="contents"
                        minRows={7}
                        maxRows={7}
                        aria-label="content input box"
                        className={classes.textareaStyle}
                        placeholder='?????? ?????? ??? ???????????? ??? ???????????? ???????????????. (?????? 1,000???)'
                    />
                </Box>

                <Box className={classes.boxStyle}>
                    <Typography className={clsx(classes.boxTitleText, classes.required)}>??????</Typography>
                    <Gallery/>
                </Box>

                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Button className={classes.buttonStyle} disableRipple>??????</Button>
                    <Button className={clsx(classes.buttonStyle, classes.saveButton)} disableRipple>?????????</Button>
               </Box>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(RoomCreateComponent));