import React, {useState} from 'react';
import {Avatar, Box, Button, Typography} from "@material-ui/core";
import {ReactComponent as Browsers} from "../../../common/images/Browsers.svg";
import {ReactComponent as AsideUserIcon} from "../../../common/images/AsideUserIcon.svg";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width:620,
        paddingBottom:70,
        '& ul, ol':{
            margin:0,
            padding:0,
            listStyle:'none',
        }
    },
    flexCenter:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    filterStyle:{
        display:'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        borderBottom:'1px solid #d3d7db',
        margin:'30px 0 17px',
        paddingBottom:9,
        cursor:'pointer',
    },
    listStyle:{
        position:'relative',
        marginBottom:60,
        '&:last-child':{
            marginBottom: 0
        },
        '& h5': {
            borderBottom: '1px solid #d3d7db',
            fontSize:'0.875rem',
            fontWeight:700,
            paddingBottom:8,
        }
    },
    listItemStyle:{
        display:'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        borderBottom: '1px solid #d3d7db',
        padding:'17px 0 17px 23px',
        cursor:'pointer',
        '&:first-child':{
            borderTop: '1px solid #d3d7db',
        }
    },
    avatar:{
        marginRight: 10,
        backgroundColor:'#a3a8af',
        '& svg path':{
            fill:'#fff'
        }
    },
    name:{
        fontSize:'0.875rem',
        fontWeight:600,
    },
    lineThrough:{
        textDecoration:'line-through'
    },
    groupInfo:{
        fontSize:'0.75rem',
        color:'#979797',
        marginTop:7,
    },
    formControl:{
        display:'flex',
        alignItems:'flex-end',
        '&>div':{
            fontSize:'0.75rem',
            fontWeight:600,
            '&:before, &:after':{
                content:'',
                display:'none',
                width:0,
                size:0,
            },
        },
        "& .MuiSelect-select:focus":{
            background:'transparent'
        },
        "& .MuiSelect-select.MuiSelect-select":{
            paddingRight:0
        }
    },
    menuItem:{
        fontFamily: 'NanumSquareRoundOTF' ,
        fontSize:'0.875rem',
        color:'#0d0d0d',
        "&:hover":{
            background:'#d3d7db'
        },
        "&.Mui-selected:hover":{
            background:'#d3d7db'
        },
        "&.Mui-selected":{
            background:'transparent'
        }
    },
    menuBox:{
        "& .MuiPopover-paper":{
            boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.08)',
            borderRadius:7,
            border:'1.5px solid #d4d4d6'
        }
    },
    checkBoxStyle:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        color: '#a9adb4',
        fontSize:'0.875rem',
        cursor:'pointer',
        '& svg':{
            width:20,
            height:20,
            marginRight:4,
            color:'#a9adb4',
        }
    },
    userBar:{
        display:'flex',
        alignItems:'center',
        margin:'20px 0 4px',
        '& > span':{
            fontSize:'0.813rem',
            color:'#a3a8af',
            marginLeft:4
        }
    },
    checkBoxStyleOn:{
        color:'#0097FF',
    },
    listStyleOn:{
        borderRadius: 10,
        overflow:'hidden',
        boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.45)',
        position:'absolute',
        top:0,
        left:0,
        zIndex:99,
        width:'100%'
    },
    listItemStyleOn:{
        backgroundColor: '#eee',
        padding:'21px 25px',
        cursor:'pointer',
    },
    titleName:{
        fontSize:'1.25rem'
    },
    listItemContent:{
        padding:21,
        backgroundColor:'#fff'
    },
    stateStyle:{
        fontSize:'1.5rem',
        color:'#8f8f8f',
        marginRight:30,
    },
    btnStyle:{
        borderRadius:4,
        border:'1px solid #bfbfbf',
        backgroundColor:'#fff',
        color:'#000',
        fontSize:'0.875rem',
        padding:'6px 23px',
        '&:hover':{
            backgroundColor:'#fff',
        }
    },
    btnStyleActive:{
        backgroundColor:'#1664f5',
        borderColor:'#1664f5',
        color:'#fff',
        '&:hover':{
            backgroundColor:'#1664f5',
        }
    }
}))

const DUMMY_TABLE_ITEMS = [
    {
        title:"파이썬 기본 문법 익히기 1",
        date:'2022.5.31',
        time:'30',
        totalTime:'50',
        state:'학습완료',
        btn:'복습하기'
    },
    {
        title:"파이썬 기본 문법 익히기 2",
        date:'2022.5.31',
        time:'20',
        totalTime:'50',
        state:'수강중',
        btn:'학습하기'
    },
    {
        title:"파이썬 기본 문법 익히기 3",
        date:'2022.5.31',
        time:'0',
        totalTime:'50',
        state:'수강대기',
        btn:'학습하기'
    },
]


function LearningTableForStudent(props) {
    const [tableItems, setTableItems] = useState(DUMMY_TABLE_ITEMS);
    const classes = useStyles();

    return (
        <>
            {tableItems.map((item, i) => (
                <Box key={i} className={classes.listItemStyle}>
                    <Box className={classes.flexCenter}>
                        <Avatar className={classes.avatar}><Browsers/></Avatar>
                        <Box display='flex' flexDirection='column'>
                            <span className={item.btn === '학습하기' ?  classes.name : clsx(classes.name, classes.lineThrough)  } >{item.title}</span>
                            <span className={classes.groupInfo}>{item.date}  |  {item.time}분/{item.totalTime}분</span>
                        </Box>
                    </Box>
                    <Box display='flex' alignItems='center'>
                        {item.state === '학습완료' ?
                            <span className={classes.stateStyle} style={{color:'#f51666'}}>학습완료</span>
                            :
                            (item.state === "수강중") ?
                                <span className={classes.stateStyle} style={{color:'#1664f5'}}>수강중</span>
                                :
                                (item.state === "수강대기") ?
                                    <span className={classes.stateStyle} style={{color:'#8f8f8f'}}>수강대기</span>
                                    :
                                    null
                        }
                        {item.btn === '복습하기' ?
                            <Button className={classes.btnStyle} disableRipple>복습하기</Button>
                            :
                            (item.btn === '학습하기') ?
                                <Button className={clsx(classes.btnStyle, classes.btnStyleActive)} disableRipple>학습하기</Button>
                                :
                                null
                        }
                    </Box>
                </Box>
            ))}
        </>
    );
}

export default LearningTableForStudent;