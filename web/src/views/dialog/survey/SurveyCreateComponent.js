import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {Box, Button, Typography,} from "@material-ui/core";
import {ReactComponent as PollCreatePlus} from "../../../common/images/PollCreatePlus.svg";
import {ReactComponent as SurveyDragIcon} from "../../../common/images/SurveyDragIcon.svg";
import Paragraph from "./Paragraph";
import SurveyQuestion from "./SurveyQuestion";
import ParagraphAdd from "./ParagraphAdd";
import PreviewParagraph from "./PreviewParagraph";
import PreviewSingleChoice from "./PreviewSingleChoice";
import PreviewMultipleChoice from "./PreviewMultipleChoice";
import PreviewShortAnswer from "./PreviewShortAnswer";
import PreviewRating from "./PreviewRating";
import PreviewParagraphAdd from "./PreviewParagraphAdd";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const style = theme => ({
    root:{
        width:'100%',
        display:'flex',
        paddingRight: 55,
    },
    textStyle:{
        fontSize: '0.875rem',
        color: '#0d0d0d',
        fontWeight: 600,
    },
    titleStyle: {
        fontSize: '1.5rem',
        fontWeight: 800,
    },
    contentsBox:{
        width:'50%',
        paddingRight:25,
        boxSizing:'border-box'
    },
    typoStyle1:{
        fontSize: '0.75rem',
        color: '#a3a8af'
    },
    buttonStyle:{
        background:'rgba(20, 0, 254, 0.5)',
        borderRadius: 5,
        padding:'9px 16px',
        color:'#fff',
        fontWeight:300,
        marginRight:16,
        "&:hover":{
            background:'rgba(20, 0, 254, 0.5)',
        }
    },
    buttonStyle2:{
        background:'transparent',
        border:'1px solid #8a80fe',
        color:'#1400fe',
        "&:hover":{
            background:'transparent',
        }
    },
    plusIcon:{
        "& path":{
            fill:'#1400FE'
        }
    },
    surveyQuestion:{
        width: '100%',
        marginBottom: 20,
    },
    surveyQuestionContentsBox:{
        width:'100%',
        border: '1px solid #c4c9de',
        borderRadius: 8,
        padding:'11px 20px 23px',
        boxSizing: 'border-box',
        background:'#fff',
        "&:hover":{
            border: '1px solid #0097ff !important',
            borderTop: '4px solid #0097ff !important',
        },
    },
});

class SurveyCreateComponent extends Component {
    constructor(props) {
        super(props);
        this.surveyQuestionList = [];

        this.state = {
            //tmp
            selectedSurveyQuestionIndex: -1,

            leftSelect: 0,
            rightSelect: 10,

        };
    }

    componentDidMount() {
        this.surveyQuestionList = [
            <SurveyQuestion
                surveyQuestionId={0}
                leftSelect={this.state.leftSelect}
                setLeftSelect={leftSelect => this.setState({leftSelect: leftSelect})}
                rightSelect={this.state.rightSelect}
                setRightSelect={rightSelect => this.setState({rightSelect: rightSelect})}
            />
            ,
            <ParagraphAdd />
        ];
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.selectedSurveyQuestionIndex !== this.state.selectedSurveyQuestionIndex) {
            this.surveyQuestionList.forEach((v, i) => {
                if(i !== this.state.selectedSurveyQuestionIndex) {
                    const el = document.getElementById(`surveyQuestionBox-${i}`);
                    el.setAttribute("border", '1px solid #c4c9de');
                    el.setAttribute("border-top", '1px solid #c4c9de');
                    el.style.border = '1px solid #c4c9de';
                    el.style.borderTop = '1px solid #c4c9de';
                }
            });
        }
    }

    initSelectedSurveyQuestionIndex = () => this.setState({selectedSurveyQuestionIndex: -1});
    setSelectedSurveyQuestionIndex = (e, selectedSurveyQuestionIndex) => {
        e.stopPropagation();
        this.setState({selectedSurveyQuestionIndex: selectedSurveyQuestionIndex});
    };


    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root} onClick={this.initSelectedSurveyQuestionIndex}>
                <Box className={classes.contentsBox} style={{borderRight:'1px solid #dbdbdb'}} onClick={this.initSelectedSurveyQuestionIndex}>
                    <Box display='flex' justifyContent='space-between' alignItems='center' style={{margin:'0 0 50px'}} onClick={this.initSelectedSurveyQuestionIndex}>
                        <Typography className={clsx(classes.textStyle, classes.titleStyle)}>새 설문지</Typography>
                    </Box>
                    <Box>
                        {/*<Paragraph title={this.state.title} titleExplanation={this.state.titleExplanation} onChangeTitle={e => this.setState({title: e.target.value})} onChangeTitleExplanation={e => this.setState({titleExplanation: e.target.value})} />*/}
                        <Paragraph surveyQuestionInit={this.initSelectedSurveyQuestionIndex} />

                        {this.surveyQuestionList.length > 0 &&
                            <DragDropContext
                                onDragEnd={result => {
                                    if (result.type !== 'Survey') {
                                        return;
                                    }

                                    const index = parseInt(result.draggableId.split('-')[1]);
                                    const surveyQuestion = this.surveyQuestionList.splice(index, 1);
                                    this.surveyQuestionList.splice(result.destination.index, 0, surveyQuestion);
                                }}
                            >
                                <Droppable
                                    droppableId="surveyQuestionDroppable"
                                    type="Survey"
                                >
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            style={{backgroundColor: snapshot.isDraggingOver ? '#fff' : '#fff'}}
                                        >

                                            {this.surveyQuestionList.map((surveyQuestion, i) => (
                                                <Draggable
                                                    key={`surveyQuestionDraggableKey-${i}`}
                                                    draggableId={`surveyQuestionDraggableId-${i}`}
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
                                                            <div className={classes.surveyQuestion}>
                                                                <Box id={`surveyQuestionBox-${i}`}
                                                                     className={classes.surveyQuestionContentsBox}
                                                                     onClick={e => {
                                                                         this.setSelectedSurveyQuestionIndex(e,  i);

                                                                         const el = document.getElementById(`surveyQuestionBox-${i}`);
                                                                         el.setAttribute("border", '1px solid #0097ff');
                                                                         el.setAttribute("border-top", '4px solid #0097ff');
                                                                         el.style.border = '1px solid #0097ff';
                                                                         el.style.borderTop = '4px solid #0097ff';
                                                                     }}>
                                                                    <Box display={i === this.state.selectedSurveyQuestionIndex ? 'flex' : 'none'} justifyContent='center'>
                                                                        <span {...p.dragHandleProps}>
                                                                            <SurveyDragIcon
                                                                                style={{cursor: 'pointer'}}/>
                                                                        </span>
                                                                    </Box>
                                                                    {surveyQuestion}
                                                                </Box>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </DragDropContext>
                        }

                        <Box display="flex" alignItems='center' mb={1} onClick={this.initSelectedSurveyQuestionIndex}>
                            <Button className={clsx(classes.textStyle, classes.buttonStyle)}><PollCreatePlus style={{marginRight:8}}/>질문 추가</Button>
                            <Button className={clsx(classes.textStyle, classes.buttonStyle, classes.buttonStyle2)}><PollCreatePlus className={classes.plusIcon} style={{marginRight:8}}/>문단 추가</Button>
                        </Box>
                    </Box>
                </Box>

                <Box display="flex" flexDirection='column' mb={1} className={classes.contentsBox} style={{paddingLeft:30}} onClick={this.initSelectedSurveyQuestionIndex}>
                    <Box display='flex' justifyContent='space-between' alignItems='center' style={{margin:'0 0 50px'}}>
                        <Typography className={clsx(classes.textStyle, classes.titleStyle)}>새 설문지 미리보기</Typography>
                        <Typography className={clsx(classes.textStyle, classes.typoStyle1)} style={{color:'#ff0000'}}>* 필수항목</Typography>
                    </Box>
                    <Box>
                        <PreviewParagraph title={this.state.title} titleExplanation={this.state.descriptions} />
                        <PreviewSingleChoice/>
                        <PreviewMultipleChoice/>
                        <PreviewShortAnswer/>
                        <PreviewRating leftSelect={this.state.leftSelect} rightSelect={this.state.rightSelect}/>
                        <PreviewParagraphAdd survey={{title: '', descriptions: ''}}/>
                    </Box>
                </Box>

            </div>
        );
    }
}

export default withStyles(style)(SurveyCreateComponent);