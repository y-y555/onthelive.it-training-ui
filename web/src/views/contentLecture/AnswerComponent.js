import React, {Component} from 'react';
import {Box, Button, Checkbox, FormControlLabel, TextField, Typography} from "@material-ui/core";
import {ReactComponent as UnCheckedIcon} from "../../common/images/UnCheckedIcon.svg";
import {ReactComponent as CheckedIcon} from "../../common/images/CheckedIcon.svg";
import clsx from "clsx";
import {ReactComponent as ClipboardTextIcon} from "../../common/images/ClipboardTextIcon.svg";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    root:{

    },
    answerShadow:{
        boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.45)',
        borderRadius: '0 0 8px 8px'
    },
    answerBox:{
        width: '100%',
        boxSizing:'border-box',
        padding: '15px',
        background:'#eee',
        border: '1px solid #c4c4c4',
        marginTop: 10,
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        borderRadius: 0,
        '& path':{
            stroke:'#1664f5'
        },
        '&:hover':{
            background:'#eee',
        }
    },
    answerBoxSelect:{
        '& path':{
            stroke:'#000'
        },
    },
    scoreText:{
        fontSize: '0.875rem',
        color:'#1664f5',
        marginLeft: 8
    },
    lineStyle:{
        width: 2,
        height: 14,
        background:'#1664f5',
        margin: '0 8px'
    },
    answerBoxIn:{
        background:'#fff',
        padding: 20,
        borderRadius: '0 0 8px 8px'
    },
    answerText:{
        fontSize:'0.875rem',
    },
    textField:{
        marginLeft: 10,
        '& .MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before, .MuiInput-underline:after':{
            borderBottom:'1px solid #c4c9de'
        }
    },
    textFieldWidth:{
        width: '100%',
        margin: '10px 0'
    },
    formControlLabelBox:{
        marginTop: 10,
        '& .MuiFormControlLabel-label':{
            fontSize:'0.875rem',
            color:'#0d0d0d'
        }
    },
    answerButton:{
        width: 120,
        height: 40,
        borderRadius:7,
        border: '1px solid #333',
        background:'#fff',
        marginTop: 20,
        '& span':{
            fontSize: '0.938rem',
            fontWeight: 900
        },
        '&:hover':{
            background:'#fff'
        }
    },
    textStyle:{
        fontSize: '0.875rem',
        color: '#0d0d0d',
        fontWeight: 500,
    },
    addButton:{
        color:'#0097ff',
        textDecoration:'underline',
        padding:0,
        "&:hover":{
            background:'transparent',
            textDecoration:'underline',
        }
    },
});

class AnswerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answerBtn: false,
        };
    }

    handleClickAnswer = () => {
        this.setState({
            answerBtn: !this.state.answerBtn,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box className={this.state.answerBtn ? classes.answerShadow : 0}>
                    <Button className={this.state.answerBtn ? clsx(classes.answerBox, classes.answerBoxSelect) : classes.answerBox} onClick={this.handleClickAnswer} disableRipple>
                        {!this.state.answerBtn ?
                            <>
                                <ClipboardTextIcon/>
                                <Typography className={classes.scoreText}>답안</Typography>
                                <Box className={classes.lineStyle} />
                                <Typography className={classes.scoreText}>5점</Typography>
                            </>
                            :
                            <>
                                <ClipboardTextIcon/>
                                <Typography className={classes.scoreText}>정답을 선택하세요.</Typography>
                            </>
                        }
                    </Button>
                    {this.state.answerBtn &&
                    <Box className={classes.answerBoxIn}>
                        <Box display='flex' justifyContent='flex-end' alignItems='center' style={{width: '100%'}}>
                            <Typography className={classes.answerText}>점수</Typography>
                            <TextField
                                placeholder="숫자만 입력하세요."
                                className={classes.textField}
                            />
                        </Box>
                        <Box>
                            <TextField
                                placeholder=""
                                className={clsx(classes.textField, classes.textFieldWidth)}
                                defaultValue='질문 제목 동일하게 출력'
                            />
                            <TextField
                                placeholder="정답을 입력하세요."
                                className={clsx(classes.textField, classes.textFieldWidth)}
                            />
                            <Button className={clsx(classes.textStyle, classes.addButton)} style={{margin: '10px 0 0'}} disableRipple>+ 정답 추가</Button>
                            <Box>
                                <FormControlLabel
                                    className={classes.formControlLabelBox}
                                    control={
                                        <Checkbox
                                            icon={<UnCheckedIcon />}
                                            checkedIcon={<CheckedIcon />}
                                            value="essential"
                                            color="primary"
                                        />
                                    }
                                    label="다른 답은 모두 오답으로 표시"
                                />
                            </Box>

                            <Box display='flex' justifyContent='center'>
                                <Button className={classes.answerButton} disableRipple>완료</Button>
                            </Box>


                        </Box>
                    </Box>
                    }
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(AnswerComponent);