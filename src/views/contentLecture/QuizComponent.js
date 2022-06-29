import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    BottomNavigation, BottomNavigationAction,
    Box,
    Button,
    Checkbox, ClickAwayListener, FormControl,
    FormControlLabel,
    IconButton,
    Input, InputAdornment, MenuItem,
    MenuList, Paper,
    Popover, Popper, Select, TextField,
    Typography
} from "@material-ui/core";
import clsx from "clsx";
import {ReactComponent as SurveyImgIcon} from "../../common/images/SurveyImgIcon.svg";
import {ReactComponent as SurveyCloseIcon} from "../../common/images/SurveyCloseIcon.svg";
import Sample1 from "../../common/images/Sample1.jpg";
import {ReactComponent as SurveyDragIcon} from "../../common/images/SurveyDragIcon.svg";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {ReactComponent as MoreIcon} from "../../common/images/MoreIcon.svg";
import {ReactComponent as PollCreatePlus} from "../../common/images/PollCreatePlus.svg";
import {ReactComponent as ClipboardTextIcon} from "../../common/images/ClipboardTextIcon.svg";
import {ReactComponent as UnCheckedIcon} from "../../common/images/UnCheckedIcon.svg";
import {ReactComponent as CheckedIcon} from "../../common/images/CheckedIcon.svg";
import {ReactComponent as CalendarBlank2} from "../../common/images/CalendarBlank2.svg";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import CalendarComponent from "./CalendarComponent";
import CalendarButtonComponent from "./CalendarButtonComponent";
import AnswerComponent from "./AnswerComponent";

const styles = theme => ({
    root:{

    },
    boxIn:{
        width: '100%',
        boxSizing:'border-box',
        padding: '0 50px 20px',
        borderRadius: 8,
        border:'1px solid rgba(0, 0, 0, 0.6)',
        boxShadow: '0 0 1px 0 rgba(0, 0, 0, 0.25), 0 2px 1px 0 rgba(0, 0, 0, 0.05)',
        marginBottom: 20
    },
    textStyle:{
        fontSize: '0.875rem',
        color: '#0d0d0d',
        fontWeight: 500,
    },
    buttonBox:{
        "& .MuiBottomNavigation-root":{
            justifyContent:'space-between',
            flexWrap:'wrap',
            height:'inherit'
        },
        "& .MuiBottomNavigationAction-root.Mui-selected":{
            border:'1px solid #1664f5',
            background:'#d8e5fc',
            paddingTop:0
        },
        "& .MuiBottomNavigationAction-label.Mui-selected":{
            color:'#1664f5',
            fontWeight: 600,
            fontSize: '0.875rem',
        },
        "& .MuiBottomNavigationAction-label":{
            fontSize: '0.875rem',
            transaction:'none',
            transitionDelay:0,
        }
    },
    toggleButtonStyle:{
        maxWidth:110,
        minWidth:110,
        height:40,
        padding:0,
        background:'#d0d0d0',
        color:'rgba(0, 0, 0, 0.6)',
        borderRadius: 50,
        border:'1px solid #d0d0d0',
        marginTop: 10,
        boxSizing:'border-box',
        "&:hover":{
            border:'1px solid #1664f5',
            background:'#d8e5fc',
            color:'#1664f5',
            fontWeight: 600
        }
    },
    imgText:{
        fontSize: '0.75rem',
        fontWeight: 400,
        color: '#a3a8af',
        marginTop: 21,
        marginBottom: 15
    },
    contentsBoxIn:{
        "& .MuiInput-underline:after, .MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before ":{
            borderBottom:0
        },
    },
    inputBox:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        borderBottom:'1px solid #c4c9de',
    },
    inputBoxIn:{
        width:'100%',
        paddingLeft: 13,
        "&::placeholder":{
            color:'#a3a8af'
        }
    },
    input: {
        display: 'none',
    },
    iconButtonStyle:{
        padding:10,
        "&:hover":{
            background:'transparent'
        }
    },
    titleImgBox:{
        width: 241,
        height: 181,
        overflow:'hidden',
        display:'flex',
        alignItems:'center',
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
    formControlBox: {
        width:'100%',
        border: 0,
        borderRadius: 5,
        "& .MuiSelect-select, .MuiSelect-select:focus": {
            background: 'transparent',
        },
        "& .MuiOutlinedInput-input": {
            padding: '10px 11px',
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            border: '1px solid #b7bcd6',
        },
    },
    selectBox: {
        width: '100%',
    },
    optionStyle: {
        color: '#303030'
    },
    bottomButton:{
        background:'#568cf0',
        borderRadius: 5,
        color:'#fff',
        padding: '6px 15px',
        marginLeft: 30,
        '& span':{
            fontWeight: 300,
        },
        '&:hover':{
            background:'#568cf0',
        }
    },
    actionsBox:{
        "& .MuiFormControlLabel-label":{
            fontSize: '0.875rem',
            color: '#0d0d0d',
            fontWeight: 600,
        }
    },
});

class QuizComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surveyType: 'SingleChoice',
        };
    }

    handleSurveyType = (event, surveyType) => this.setState({ surveyType });

    render() {
        const { classes } = this.props;
        const { surveyType } = this.state;


        const titleInput = (
            <Box className={classes.inputBox} mt={1}>
                <Input
                    placeholder="질문 제목을 입력하세요."
                    className={clsx(classes.textStyle, classes.inputBoxIn)}
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                />

                {/* 이미지 선택 -> <SurveyImgIcon/> display:'none' , 이미지 <SurveyCloseIcon/> 클릭 -> <SurveyImgIcon/> 보여짐 */}
                <>
                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                    <label htmlFor="icon-button-file">
                        <IconButton className={classes.iconButtonStyle} aria-label="upload picture" component="span">
                            <SurveyImgIcon/>
                        </IconButton>
                    </label>
                </>
            </Box>
        );

        const explanationInput = (
            <Box className={classes.inputBox} mt={1}>
                <Input
                    placeholder="질문에 대한 설명을 입력하세요."
                    className={clsx(classes.textStyle, classes.inputBoxIn)}
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                />
                <IconButton className={classes.iconButtonStyle} onClick={this.handleExplanationClose}>
                    <SurveyCloseIcon/>
                </IconButton>
            </Box>
        );

        const titleImage = (
            <Box display='flex' justifyContent='space-between' alignItems='flex-start' mt={2} mb={2}>
                <Box className={classes.titleImgBox}>
                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                    <label htmlFor="icon-button-file">
                        <img src={Sample1} alt="" style={{width:'100%', cursor:'pointer'}} aria-label="upload picture"/>
                    </label>
                </Box>
                <IconButton className={classes.iconButtonStyle}>
                    <SurveyCloseIcon/>
                </IconButton>
            </Box>
        );


        const exampleInputList = [
            <Box key={0}>
                <Box display='flex' alignItems='center'>
                    {this.state.isFocused &&
                    <SurveyDragIcon style={{cursor: 'pointer', width: 14, height: 10, marginRight: 10, marginTop: 8}}/>
                    }

                    <Box className={classes.inputBox} mt={1}>
                        <Input
                            name={`surveyQuestion-${this.props.surveyQuestionId}-questionItem`}
                            placeholder="질문 보기를 입력하세요."
                            className={clsx(classes.textStyle, classes.inputBoxIn)}
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />

                        {/* 이미지 선택 -> <SurveyImgIcon/> display:'none' , 이미지 <SurveyCloseIcon/> 클릭 -> <SurveyImgIcon/> 보여짐 */}
                        {/* 첫번째 보기는 <SurveyCloseIcon/> x , 두번째 보기부터 아이콘 생성 */}
                        <Box display='flex' alignItems='flex-start'>
                            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                            <label htmlFor="icon-button-file">
                                <IconButton className={classes.iconButtonStyle} aria-label="upload picture" component="span">
                                    <SurveyImgIcon/>
                                </IconButton>
                            </label>

                            <IconButton className={classes.iconButtonStyle}>
                                <SurveyCloseIcon/>
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
                {/*<Box display='flex' justifyContent='space-between' alignItems='flex-start' mt={2} mb={2}>*/}
                {/*    <Box className={classes.titleImgBox}>*/}
                {/*        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />*/}
                {/*        <label htmlFor="icon-button-file">*/}
                {/*            <img src={Sample1} alt="" style={{width:'100%', cursor:'pointer'}} aria-label="upload picture"/>*/}
                {/*        </label>*/}
                {/*    </Box>*/}
                {/*    <IconButton className={classes.iconButtonStyle}>*/}
                {/*        <SurveyCloseIcon/>*/}
                {/*    </IconButton>*/}
                {/*</Box>*/}
            </Box>,

            <Box key={1}>
                <Box display='flex' alignItems='center'>
                    {this.state.isFocused &&
                    <SurveyDragIcon style={{cursor: 'pointer', width: 14, height: 10, marginRight: 10, marginTop: 8}}/>
                    }

                    <Box className={classes.inputBox} mt={1}>
                        <Input
                            name={`surveyQuestion-${this.props.surveyQuestionId}-questionItem`}
                            placeholder="질문 보기를 입력하세요."
                            className={clsx(classes.textStyle, classes.inputBoxIn)}
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />

                        {/* 이미지 선택 -> <SurveyImgIcon/> display:'none' , 이미지 <SurveyCloseIcon/> 클릭 -> <SurveyImgIcon/> 보여짐 */}
                        {/* 첫번째 보기는 <SurveyCloseIcon/> x , 두번째 보기부터 아이콘 생성 */}
                        <Box display='flex' alignItems='flex-start'>
                            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                            <label htmlFor="icon-button-file">
                                <IconButton className={classes.iconButtonStyle} aria-label="upload picture" component="span">
                                    <SurveyImgIcon/>
                                </IconButton>
                            </label>

                            <IconButton className={classes.iconButtonStyle}>
                                <SurveyCloseIcon/>
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
                {/*<Box display='flex' justifyContent='space-between' alignItems='flex-start' mt={2} mb={2}>*/}
                {/*    <Box className={classes.titleImgBox}>*/}
                {/*        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />*/}
                {/*        <label htmlFor="icon-button-file">*/}
                {/*            <img src={Sample1} alt="" style={{width:'100%', cursor:'pointer'}} aria-label="upload picture"/>*/}
                {/*        </label>*/}
                {/*    </Box>*/}
                {/*    <IconButton className={classes.iconButtonStyle}>*/}
                {/*        <SurveyCloseIcon/>*/}
                {/*    </IconButton>*/}
                {/*</Box>*/}
            </Box>
        ];

        const surveyChoice = (
            <Box className={classes.contentsBoxIn}>
                {titleInput}
                {this.state.explanationOpen && {explanationInput}}
                {titleImage}

                {exampleInputList}

                <Box display='flex' alignItems='center' mt={4} mb={3}>
                    <Button className={clsx(classes.textStyle, classes.addButton)} disableRipple>+ 보기 추가</Button>
                    <Typography className={classes.textStyle} style={{color:'#000', padding:'0 10px'}}> 또는 </Typography>
                    <Button className={clsx(classes.textStyle, classes.addButton)} disableRipple>+ 기타 추가</Button>
                </Box>
            </Box>
        );

        return (
            <div className={classes.root}>
                <Box className={classes.boxIn}>
                    <Box className={classes.buttonBox} mt={3}>
                        <BottomNavigation value={surveyType} showLabels onChange={this.handleSurveyType}>
                            <BottomNavigationAction  value="SingleChoice" label="객관식 단일형" className={clsx(classes.textStyle, classes.toggleButtonStyle)}/>
                            <BottomNavigationAction  value="MultipleChoice" label="객관식 다중형" className={clsx(classes.textStyle, classes.toggleButtonStyle)}/>
                            <BottomNavigationAction  value="ShortAnswer" label="주관식 단답형" className={clsx(classes.textStyle, classes.toggleButtonStyle)}/>
                            <BottomNavigationAction  value="RatingType" label="점수 척도형" className={clsx(classes.textStyle, classes.toggleButtonStyle)} style={{marginRight: 0}}/>
                        </BottomNavigation>
                    </Box>

                    <Typography className={clsx(classes.textStyle, classes.imgText)}>이미지 추가 시 권장 사이즈는 241*181px 이상입니다.</Typography>

                    {surveyType === "SingleChoice" &&
                    <>
                        {surveyChoice}
                        <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.actionsBox}>
                            <FormControlLabel control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} value="essential" color="primary"/>} label="필수" />
                        </Box>
                        <AnswerComponent/>
                    </>
                    }

                    {surveyType === "MultipleChoice" &&
                    <>
                        {surveyChoice}
                        <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.actionsBox}>
                            <FormControlLabel control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} value="essential" color="primary"/>} label="필수" />
                        </Box>
                        <AnswerComponent/>
                    </>
                    }

                    {surveyType === "ShortAnswer" &&
                    <>
                        <Box className={classes.contentsBoxIn}>
                            {titleInput}

                            {this.state.explanationOpen &&
                            <>
                                {explanationInput}
                            </>
                            }

                            {titleImage}
                        </Box>
                        <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.actionsBox}>
                            <FormControlLabel control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} value="essential" color="primary"/>} label="필수" />
                        </Box>
                        <AnswerComponent/>
                    </>
                    }

                    {surveyType === "RatingType" &&
                    <>
                        <Box className={classes.contentsBoxIn}>
                            {titleInput}

                            {this.state.explanationOpen &&
                            <>
                                {explanationInput}
                            </>
                            }

                            {titleImage}

                            <Box display='flex' alignItems='center'>
                                <FormControl variant={'outlined'} className={classes.formControlBox}>
                                    <Select
                                        native
                                        value={this.props.leftSelect}
                                        onChange={this.handleLeftChange}
                                        className={clsx(classes.textStyle, classes.selectBox)}

                                    >
                                        <option value={0} className={clsx(classes.textStyle, classes.optionStyle)}>0</option>
                                        <option value={1} className={clsx(classes.textStyle, classes.optionStyle)}>1</option>

                                    </Select>
                                </FormControl>

                                <Typography className={classes.textStyle} style={{margin:'0 25px'}}> ~ </Typography>

                                <FormControl variant={'outlined'} className={classes.formControlBox}>
                                    <Select
                                        native
                                        value={this.props.rightSelect}
                                        onChange={this.handleRightChange}
                                        className={clsx(classes.textStyle, classes.selectBox)}

                                    >
                                        <option value={2} className={clsx(classes.textStyle, classes.optionStyle)}>2</option>
                                        <option value={3} className={clsx(classes.textStyle, classes.optionStyle)}>3</option>
                                        <option value={4} className={clsx(classes.textStyle, classes.optionStyle)}>4</option>
                                        <option value={5} className={clsx(classes.textStyle, classes.optionStyle)}>5</option>
                                        <option value={6} className={clsx(classes.textStyle, classes.optionStyle)}>6</option>
                                        <option value={7} className={clsx(classes.textStyle, classes.optionStyle)}>7</option>
                                        <option value={8} className={clsx(classes.textStyle, classes.optionStyle)}>8</option>
                                        <option value={9} className={clsx(classes.textStyle, classes.optionStyle)}>9</option>
                                        <option value={10} className={clsx(classes.textStyle, classes.optionStyle)}>10</option>
                                    </Select>
                                </FormControl>

                            </Box>

                            <Box className={classes.inputBox} mt={1}>
                                <Input
                                    placeholder="왼쪽 레이블 (선택)"
                                    className={clsx(classes.textStyle, classes.inputBoxIn)}
                                    inputProps={{
                                        'aria-label': 'Description',
                                    }}
                                />
                            </Box>
                            <Box className={classes.inputBox} mt={1}>
                                <Input
                                    placeholder="오른쪽 레이블 (선택)"
                                    className={clsx(classes.textStyle, classes.inputBoxIn)}
                                    inputProps={{
                                        'aria-label': 'Description',
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.actionsBox}>
                            <FormControlLabel control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} value="essential" color="primary"/>} label="필수" />
                        </Box>
                        <AnswerComponent/>
                    </>
                    }
                </Box>
                <Box display='flex' justifyContent='space-between' alignItems='center' style={{marginBottom: 20}}>
                    <Button className={classes.bottomButton} disableRipple><PollCreatePlus style={{marginRight:8}}/>질문 추가</Button>
                    <CalendarButtonComponent/>
                </Box>

            </div>
        );
    }
}

export default withStyles(styles)(QuizComponent);