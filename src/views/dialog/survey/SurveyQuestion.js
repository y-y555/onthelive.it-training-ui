import React, {Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
    Box,
    Input,
    Typography,
    IconButton,
    Button,
    FormControlLabel,
    Checkbox,
    Popover,
    MenuList,
    MenuItem,
    Select,
    FormControl,
    BottomNavigationAction,
    BottomNavigation
} from "@material-ui/core";
import { ReactComponent as SurveyImgIcon } from "../../../common/images/SurveyImgIcon.svg";
import { ReactComponent as SurveyCloseIcon } from "../../../common/images/SurveyCloseIcon.svg";
import Sample1 from '../../../common/images/Sample1.jpg';
import {ReactComponent as MoreIcon} from "../../../common/images/MoreIcon.svg";
import {ReactComponent as SurveyDragIcon} from "../../../common/images/SurveyDragIcon.svg";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const style = theme => ({
    root:{
        width: '100%',
        marginBottom: 40
    },
    textStyle:{
        fontSize: '0.875rem',
        color: '#0d0d0d',
        fontWeight: 500,
    },
    contentsBox:{
        width:'100%',
        border: '1px solid #c4c9de',
        borderRadius: 8,
        padding:'11px 20px 23px',
        "&:hover":{
            border: '1px solid #0097ff !important',
            borderTop: '4px solid #0097ff !important',
        },
    },
    buttonBox:{
        "& .MuiBottomNavigation-root":{
            justifyContent:'flex-start',
            flexWrap:'wrap',
            height:'inherit'
        },
        "& .MuiBottomNavigationAction-root.Mui-selected":{
            border:'1px solid #0097ff',
            background:'#d3edff',
            paddingTop:0
        },
        "& .MuiBottomNavigationAction-label.Mui-selected":{
            color:'#0097ff',
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
        marginRight:10,
        marginTop:10,
        borderRadius: 50,
        border:'1px solid #d0d0d0',
        "&:hover":{
            border:'1px solid #0097ff',
            background:'#d3edff',
            color:'#0097ff',
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
    imgBox:{
        width: 192,
        height: 144,
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
    actionsBox:{
        marginTop:30,
        "& .MuiFormControlLabel-label":{
            fontSize: '0.875rem',
            color: '#0d0d0d',
            fontWeight: 600,
        }
    },
    popoverBox:{
        "& .MuiPopover-paper":{
            borderRadius:7,
            boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.25)'
        }
    },
    menuText:{
        fontSize:'0.75rem',
        color:'#000',
        "&:hover":{
            background:'#d0d0d0'
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
});

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};


class SurveyQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surveyType: 'SingleChoice',
            essential: false,
            anchorEl: null,
            explanationOpen: false,

            isFocused: false,
        };
    }

    componentDidMount() {

        const targets = document.getElementsByName(`surveyQuestion-${this.props.surveyQuestionId}-questionItem`);
        if(targets.length > 0) {
            targets.forEach(el => el.addEventListener('focusin', () => this.setState({isFocused: true})));
            targets.forEach(el => el.addEventListener('focusout', () => this.setState({isFocused: false})));
        }
    }

    handleChange = event => {
        this.setState({ essential: event.target.checked });
    };
    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };
    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };
    handleExplanationClick = () => {
        this.setState({ explanationOpen: true });
        this.setState({
            anchorEl: null,
        });
    };
    handleExplanationClose = () => {
        this.setState({ explanationOpen: false });
    };
    handleLeftChange = event => {
        // this.setState({ leftSelect: event.target.value });
        this.props.setLeftSelect(event.target.value);
    };
    handleRightChange = event => {
        // this.setState({ rightSelect: event.target.value });
        this.props.setRightSelect(event.target.value);
    };
    handleSurveyType = (event, surveyType) => this.setState({ surveyType });


    render() {
        const { classes } = this.props;
        const { surveyType, anchorEl } = this.state;
        const open = Boolean(anchorEl);
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
                <Box display='flex' justifyContent='space-between' alignItems='flex-start' mt={2} mb={2}>
                    <Box className={classes.imgBox}>
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                        <label htmlFor="icon-button-file">
                            <img src={Sample1} alt="" style={{width:'100%', cursor:'pointer'}} aria-label="upload picture"/>
                        </label>
                    </Box>
                    <IconButton className={classes.iconButtonStyle}>
                        <SurveyCloseIcon/>
                    </IconButton>
                </Box>
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
                <Box display='flex' justifyContent='space-between' alignItems='flex-start' mt={2} mb={2}>
                    <Box className={classes.imgBox}>
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                        <label htmlFor="icon-button-file">
                            <img src={Sample1} alt="" style={{width:'100%', cursor:'pointer'}} aria-label="upload picture"/>
                        </label>
                    </Box>
                    <IconButton className={classes.iconButtonStyle}>
                        <SurveyCloseIcon/>
                    </IconButton>
                </Box>
            </Box>
        ];

        const surveyChoice = (
            <Box className={classes.contentsBoxIn}>
                {titleInput}
                {this.state.explanationOpen && {explanationInput}}
                {titleImage}

                <DragDropContext
                    onDragEnd={result => {
                        // example -
                        console.log("drag end", result);

                        if(result.type !== `ExampleInput-${this.props.surveyQuestionId}`) { return; }

                        const index = parseInt(result.draggableId.split('-')[1]);
                        const exampleInput = exampleInputList.splice(index, 1);
                        exampleInputList.splice(result.destination.index, 0, exampleInput);
                    }}
                >
                    <Droppable
                        droppableId={`exampleInputDroppable-${this.props.surveyQuestionId}`}
                        type={`ExampleInput-${this.props.surveyQuestionId}`}
                    >
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={{backgroundColor: snapshot.isDraggingOver ? '#fff' : '#fff'}}
                            >

                                {exampleInputList.map((exampleInput, i) => (
                                    <Draggable
                                        key={`exampleInputDraggableKey-${i}`}
                                        draggableId={`exampleInputDraggableId-${i}`}
                                        index={i}
                                    >
                                        {(p, s) => (
                                            <div
                                                ref={p.innerRef}
                                                {...p.draggableProps}
                                                style={
                                                    p.draggableProps.style
                                                }
                                            >
                                                <span {...p.dragHandleProps}>
                                                    {exampleInput}
                                                </span>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>

                <Box display='flex' alignItems='center' mt={4} mb={5}>
                    <Button className={clsx(classes.textStyle, classes.addButton)}>+ 보기 추가</Button>
                    <Typography className={classes.textStyle} style={{color:'#000', padding:'0 10px'}}> 또는 </Typography>
                    <Button className={clsx(classes.textStyle, classes.addButton)}>+ 기타 추가</Button>
                </Box>
            </Box>
        );

        const surveyActions = (
            <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.actionsBox}>
                <FormControlLabel control={<Checkbox value="essential" color="primary"/>} label="필수" />
                <IconButton style={{padding:5}} aria-owns={open ? 'simple-popper' : undefined} onClick={this.handleClick}>
                    <MoreIcon style={{width:25, height:25}}/>
                </IconButton>
                <Popover
                    id="simple-popper"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    className={classes.popoverBox}
                >
                    <MenuList>
                        <MenuItem className={clsx(classes.textStyle,classes.menuText)} onClick={this.handleExplanationClick}>설명</MenuItem>
                        <MenuItem className={clsx(classes.textStyle,classes.menuText)}>복사</MenuItem>
                        <MenuItem className={clsx(classes.textStyle,classes.menuText)}>삭제</MenuItem>
                    </MenuList>
                </Popover>
            </Box>
        );

        return (
            <>
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
                    {surveyActions}
                </>
                }

                {surveyType === "MultipleChoice" &&
                <>
                    {surveyChoice}
                    {surveyActions}
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
                    {surveyActions}
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
                    {surveyActions}
                </>
                }
            </>
        );
    }
}

export default withStyles(style)(SurveyQuestion);