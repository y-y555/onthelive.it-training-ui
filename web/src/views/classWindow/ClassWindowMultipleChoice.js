import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {Box, Checkbox, FormControl, FormControlLabel, Input, Typography} from "@material-ui/core";
import {ReactComponent as UnCheckedIcon} from "../../common/images/UnCheckedIcon.svg";
import {ReactComponent as CheckedIcon} from "../../common/images/CheckedIcon.svg";
import CalendarButtonComponent from "../contentLecture/CalendarButtonComponent";

const styles = theme => ({
    root:{

    },
    contentsBox:{
        width: 690,
        border:'1px solid #1664f5',
        borderTop: '4px solid #1664f5',
        borderRadius:8,
        boxSizing:'border-box',
        padding: '25px 35px 5px',
        background:'#fff',
        marginBottom: 20
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
    inputBoxQuiz:{
        width:'80%',
        paddingLeft: 13,
        borderBottom:'1px solid #c4c9de',
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
    }
});

class ClassWindowMultipleChoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { classes, typeButton2 } = this.props;

        return (
            <div className={classes.root}>
                <Box className={typeButton2 ? clsx(classes.contentsBox,classes.contentsBox2) : classes.contentsBox}>
                    <Box display='flex' justifyContent='flex-end' alignItems='center' mb={1}>
                        <Box display='flex' justifyContent='center' alignItems='center' className={clsx(classes.caption, classes.captionBlue)}>
                            <Typography>평가</Typography>
                        </Box>
                        <Typography className={classes.numberText}>-/100</Typography>
                    </Box>
                    <Box className={classes.marginBottom}>
                        <Typography className={typeButton2 ? clsx(classes.textStyle, classes.textStyle2, classes.bold) : clsx(classes.textStyle, classes.bold)}>
                            온라인 강의를 듣기 위해 사용하는 플랫폼은 어떤 것이 있는지 한 가지만 선택해주세요.
                        </Typography>
                    </Box>

                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<UnCheckedIcon/>}
                                    checkedIcon={<CheckedIcon/>}
                                    disableRipple
                                />
                            }
                            label="1. 학교제공 시스템"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<UnCheckedIcon/>}
                                    checkedIcon={<CheckedIcon/>}
                                    disableRipple
                                />
                            }
                            label="2.유튜브"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<UnCheckedIcon/>}
                                    checkedIcon={<CheckedIcon/>}
                                    disableRipple
                                />
                            }
                            label="2.줌"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<UnCheckedIcon/>}
                                    checkedIcon={<CheckedIcon/>}
                                    disableRipple
                                />
                            }
                            label="2.스카이프"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<UnCheckedIcon/>}
                                    checkedIcon={<CheckedIcon/>}
                                    disableRipple
                                />
                            }
                            label="2.기타"
                        />

                    </FormControl>
                    <Box className={typeButton2 ? clsx(classes.inputBoxQuiz, classes.inputBoxIn2) : classes.inputBoxQuiz}>
                        <Input
                            placeholder=""
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />
                    </Box>

                    <Box display='flex' justifyContent='flex-end' alignItems='center' mt={3} mb={2}>
                        <Typography className={classes.bottomText}>마감됨</Typography>
                        <CalendarButtonComponent/>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(ClassWindowMultipleChoice);