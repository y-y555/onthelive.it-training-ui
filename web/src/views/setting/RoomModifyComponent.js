import React, {Component} from 'react';
import clsx from "clsx";
import {withRouter} from "react-router-dom";
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    OutlinedInput,
    Radio,
    RadioGroup,
    TextareaAutosize,
    Typography,
} from "@material-ui/core";
import Gallery from "./imgGallery/Gallery";
import {ReactComponent as UnCheckedIcon} from "../../common/images/UnCheckedIcon.svg";
import {ReactComponent as CheckedIcon} from "../../common/images/CheckedIcon.svg";
import ColorCheckIcon from "../../common/images/ColorCheckIcon.svg";
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import {SketchPicker} from 'react-color'
import reactCSS from 'reactcss'

const styles = theme => ({
    root:{
        background:'#f3f3f3',
        minHeight:'calc(100vh - 87px)',
        paddingTop:48,
        paddingBottom:40
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
    boxSubtitleText:{
        fontSize:'0.938rem',
        color:'rgba(0, 0, 0, 0.6)',
        margin:'17px 0 20px'
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
            padding:'11px',
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
        background:'#0097ff',
        marginLeft: 25,
        "&:hover":{
            background:'#0097ff'
        }
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
    textStyle:{
        fontSize:'0.938rem',
        color:'rgba(0, 0, 0, 0.6)',
    },
    textStyleRequired:{
        '&:after':{
            content:'"*"',
            color:'#ff0000',
        }
    },
    formControl:{
        "& .MuiFormControlLabel-root":{
            marginTop:24,
        },
        "& .MuiFormControlLabel-label":{
            fontSize:'1.125rem',
            color:'#0d0d0d'
        },
        "& .MuiButtonBase-root:hover":{
            background:'transparent'
        }
    },
    marginTop:{
        marginTop:24,
        marginLeft:96
    },
    colorBox: {
        width:136,
        borderRadius:7,
        background:'linear-gradient(to bottom, #dbdbdb, #dbdbdb), linear-gradient(186deg, #3a3a3a 132%, #19191a -16%)',
        padding:'14px 15px',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        "& .MuiToggleButton-root": {
            width: 18,
            height:18,
            cursor:'pointer',
            margin:'4px 6px',
            transition:'all 0.3s ease-out',
            position:'relative',
            borderRadius:4,
            border:0
        },
    },
    sketchPickerBox:{
        // picker box
        "& .sketch-picker":{
            width:'300px !important',
            borderRadius:'7px !important',
            boxShadow:'0px 2px 7px 2px rgb(0 0 0 / 25%) !important',
            padding:'13px 14px 20px !important'
        },
        //큰색상 box
        "& .sketch-picker > div:first-child":{
            borderRadius:'10px !important',
            marginBottom:'10px !important'
        },
        //큰색상 box 선택 원
        "& .sketch-picker > div:first-child > div:first-child > div:last-child > div:last-child > div":{
            width:'15px !important',
            height:'15px !important',
            border:'8px solid #fff',
            boxShadow:'none !important',
            transform:'translate(-14px, -14px) !important'
        },
        //슬라이드 색상 bar 선택원
        "& .hue-horizontal > div:last-child > div":{
            width:'13px !important',
            // height:'10px !important',
            borderRadius:'50% !important',
            marginTop:'0 !important',
            transform:'translateX(-7px) !important'

        },
        //슬라이드색상 bar
        "& .sketch-picker > div:nth-of-type(2) > div:nth-of-type(1) div:nth-of-type(1) ":{
            height:'13px !important',
            borderRadius:24,
        },
        //투명색상
        "& .sketch-picker > div:nth-of-type(2) > div:nth-of-type(1) div:nth-of-type(2) ":{
            display:'none !important'
        },
        //미리보기 선택색상
        "& .sketch-picker > div:nth-of-type(2) > div:nth-of-type(2)":{
            display:'none !important'
        },
        //선택 색상
        "& .sketch-picker > div:last-child":{
            display:'none !important'
        },
        "& .sketch-picker > div:nth-of-type(3) > div > div":{
            display:'flex',
            flexDirection:'column-reverse',
        },
        "& input":{
            // border:'1px solid rgba(0, 0, 0, 0.2) !important',
            borderRadius:'8px !important',
            paddingTop:'10px !important',
            paddingBottom:'10px !important',
            textAlign:'center !important',
            fontSize:'0.813rem !important'
        },
        "& label":{
            fontSize:'0.75rem',
            color:'#111',
            fontWeight:800,
            textAlign:'left !important',
            marginBottom:5,
            marginTop:5
        }
    }
});

class RoomModifyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'checkA',
            selectedValue: "a",
            newColor : '#004dc9',
            color: {
                r: '232',
                g: '150',
                b: '35',
                a: '1'
            },
        };
    }

    colors = [
        '#004dc9', '#005ff9', '#2596ff', '#76bdff',
        '#f21313', '#f26716', '#6600cc' , '#04bf7b'
    ];

    handleChangeSketchPicker = (color) => {
        this.setState({ color: color.rgb })
    };

    handleSeasons = (event, newColor) => {
        this.setState({newColor : newColor});
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    handleChangeColor = event => {
        this.setState({ selectedValue: event.target.value });
    };

    render() {
        const {classes} = this.props;

        const styles = reactCSS({
            'default': {
                color: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px',
                    // background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
                },
                swatch: {
                    padding: '5px',
                    background: '#fff',
                    borderRadius: '1px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {

                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });

        return (
            <div className={classes.root}>
                <Box className={classes.boxStyle}>
                    <Typography className={clsx(classes.boxTitleText, classes.textStyleRequired)}>모임 이름</Typography>
                    <FormControl className={classes.textField} variant="outlined">
                        <OutlinedInput
                            inputProps={{'aria-label': 'room name input box'}}
                            id="outlined-room-name"
                            labelWidth={0}
                            placeholder="모임 이름 입력 (최대 50자)"
                        />
                    </FormControl>
                </Box>

                <Box className={classes.boxStyle}>
                    <Typography className={classes.boxTitleText}>소개</Typography>
                    <TextareaAutosize
                        name="contents"
                        minRows={7}
                        maxRows={7}
                        aria-label="content input box"
                        className={classes.textareaStyle}
                        placeholder='소개 (최대 1,000자 이내) '
                    />
                </Box>

                <Box className={classes.boxStyle}>
                    <Typography className={clsx(classes.boxTitleText, classes.textStyleRequired)}>모임태그</Typography>
                    <Typography className={classes.boxSubtitleText}>모임의 성격을 나타내는 대표 태그를 입력하세요.<br/>
                        사람들이 나의 모임이나 관심사와 관련된 모임도 언제든지 쉽게 찾을 수 있습니다.</Typography>
                    <FormControl className={clsx(classes.textField, classes.textFieldMulti)} variant="outlined">
                        <OutlinedInput
                            inputProps={{'aria-label': 'room tag input box'}}
                            id="outlined-room-name"
                            labelWidth={0}
                            placeholder="태그 (최대 25자 이내)"
                        />
                        <OutlinedInput
                            inputProps={{'aria-label': 'room tag input box'}}
                            id="outlined-room-name"
                            labelWidth={0}
                            placeholder="태그 (최대 25자 이내)"
                        />
                        <OutlinedInput
                            inputProps={{'aria-label': 'room tag input box'}}
                            id="outlined-room-name"
                            labelWidth={0}
                            placeholder="태그 (최대 25자 이내)"
                        />
                    </FormControl>
                </Box>


                <Box className={classes.boxStyle}>
                    <Typography className={clsx(classes.boxTitleText, classes.textStyleRequired)}>커버</Typography>
                    <Gallery/>
                </Box>

                <Box className={classes.boxStyle}>
                    <Typography className={classes.boxTitleText}>색상 테마</Typography>
                    <Typography className={classes.textStyle}>모임을 표현하는 버튼, 상단바, 메뉴 색상을 설정하세요.</Typography>

                    <Box display='flex'>
                        <Box>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <RadioGroup
                                    aria-label="Radio"
                                    name="Radio"
                                    className={classes.group}
                                    value={this.state.selectedValue}
                                    onChange={this.handleChangeColor}
                                >
                                    <FormControlLabel
                                        value="a"
                                        control={<Radio icon={<UnCheckedIcon/>} checkedIcon={<CheckedIcon/>} disableRipple/>}
                                        label="간편 선택"
                                    />
                                    <FormControlLabel
                                        value="b"
                                        control={<Radio icon={<UnCheckedIcon/>} checkedIcon={<CheckedIcon/>} disableRipple/>}
                                        label="직접 선택"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Box>

                        {this.state.selectedValue === "a" ?
                            <Box className={clsx(classes.marginTop, classes.colorBox)}>
                                <ToggleButtonGroup
                                    value={this.state.newColor}
                                    exclusive
                                    onChange={this.handleSeasons}
                                    aria-label="text newColor"
                                    style={{ display: 'flex',  flexWrap:'wrap',}}
                                >
                                    {this.colors.map(color => (
                                        <ToggleButton
                                            key={color}
                                            style={this.state.newColor === color ? {background: color, transform:'scale(1.3)'} : {background: color}}
                                            value={color}
                                        >
                                            {this.state.newColor === color &&
                                                <img src={ColorCheckIcon} alt="색상선택"/>
                                            }
                                        </ToggleButton>

                                    ))}
                                </ToggleButtonGroup>
                            </Box>
                            :
                            <Box className={clsx(classes.marginTop, classes.sketchPickerBox)}>
                                <div style={ styles.popover }>
                                    <SketchPicker color={ this.state.color } onChange={ this.handleChangeSketchPicker } />
                                </div>
                            </Box>
                        }

                    </Box>
                </Box>



                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Button className={classes.buttonStyle} disableRipple>취소</Button>
                    <Button className={clsx(classes.buttonStyle, classes.saveButton)} disableRipple>완료</Button>
               </Box>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(RoomModifyComponent));