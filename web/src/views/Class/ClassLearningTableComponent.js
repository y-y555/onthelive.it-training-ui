import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Avatar, Box, Button, FormControl, MenuItem, Select} from "@material-ui/core";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import {ReactComponent as Browsers} from "../../common/images/Browsers.svg";
import clsx from "clsx";

const styles = theme => ({
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
});
class ClassLearningTableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkBox:true,
            filter: "이름순",
            anchorElManager: null,
            anchorGeneral: null,
            listItem:false,
            LearningList:[
                {name:'변요한',lastDate:'2022.5.31',learnCont:'5',learnTime:'30',learnTimeTotal:'50',state:'학습완료'},
                {name:'박서윤',lastDate:'2022.5.31',learnCont:'5',learnTime:'30',learnTimeTotal:'50',state:'학습전'},
                {name:'김민준',lastDate:'2022.5.31',learnCont:'5',learnTime:'30',learnTimeTotal:'50',state:'학습중'},
            ],
            tableItem: [
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

            ],
        };
    }

    handleChangeCheckBox= () => {
        this.setState({ checkBox: !this.state.checkBox });
    };

    handleClickManager = event => {
        this.setState({ anchorElManager: event.currentTarget });
    };
    handleClickGeneral = event => {
        this.setState({ anchorGeneral: event.currentTarget });
    };

    listItemChange= () => {
        this.setState({ listItem: !this.state.listItem });
    };


    handleClose = () => {
        this.setState({
            anchorElManager: null,
            anchorGeneral: null,
        });
    };


    render() {
        const { classes, children } = this.props;
        const { anchorElManager, anchorGeneral } = this.state;
        const manager = Boolean(anchorElManager);
        const general = Boolean(anchorGeneral);

        return (
            <div className={classes.root}>
                <Box>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.filter}
                            onChange={this.handleChangeSort}
                            displayEmpty
                            IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                        >
                            <MenuItem value="이름순" className={classes.menuItem}>최근 등록일 순</MenuItem>
                            <MenuItem value="등록순" className={classes.menuItem}>최근 제출일 순</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box className={classes.listStyle}>
                    {children}
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(ClassLearningTableComponent);