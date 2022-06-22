import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Tabs, Tab, TabPanel, Radio, FormControlLabel, Link, Button} from "@material-ui/core";
import SearchCategoryComponent from "./SearchCategoryComponent";
import {ReactComponent as UnCheckedIcon} from "../../common/images/UnCheckedIcon.svg";
import {ReactComponent as CheckedIcon} from "../../common/images/CheckedIcon.svg";
import clsx from "clsx";
import {ReactComponent as CheckCircleAgreeOffIcon} from "../../common/images/CheckCircleAgreeOffIcon.svg";
import {ReactComponent as CheckCircleAgreeOnIcon} from "../../common/images/CheckCircleAgreeOnIcon.svg";
import HomeCarouselComponent from "../Home/HomeCarouselComponent";
import {ReactComponent as CaretRightIcon} from "../../common/images/CaretRightIcon.svg";
import {ReactComponent as ArrowUp} from "../../common/images/ArrowUpIcon.svg";
const styles = theme => ({
    root:{
    },
    wrap:{
        '@media all and (min-width: 1500px)': {
            width:1440,
        },
        width:1200,
        margin:'0 auto',
        boxSizing:'border-box',
    },
    tabTrigger:{
        marginBottom:40,
        marginTop:10,
        '& .MuiTab-root':{
            minWidth:'auto',
            fontSize:'1rem',
            marginRight:20,
            '& .MuiTab-wrapper':{
                alignItems:'flex-start'
            }
        },
        '& .MuiTabs-indicator':{
            display:'none'
        },
        '& .MuiTab-textColorInherit':{
             opacity:0.4
        },
        '& .MuiTab-textColorInherit.Mui-selected':{
            opacity:1
        }
    },
    checkBoxStyle:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        color: '#656565',
        fontSize:'0.875rem',
        cursor:'pointer',
        '& svg':{
            width:20,
            height:20,
            marginRight:4,
            color:'#656565',
        }
    },
    checkBoxStyleOn:{
        color:'#0097FF',
    },
    titleStyle:{
        display:'flex',
        alignItems:'center',
        fontSize:'2rem',
        fontWeight:600,
        color:'#333333',
        marginTop: 110,
        marginBottom: 16,
        '&:hover':{
            textDecoration:'none',
        },
        '& span':{
            color:'#1664f5',
        },
        '& svg':{
            width:25,
            height: 25,
        }
    },
    topBtn:{
        position:'fixed',
        right: 50,
        bottom:'3vh',
        borderRadius: 10,
        boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.25)',
        minHeight:50,
        minWidth:50,
        padding:0,
        backgroundColor:'#fff',
        '&:hover':{
            backgroundColor:'#fff'
        }
    }
});
class RoomsSearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: 0,
            checkBox:true,
            categoryTitle: "모든강의",
            tagList: [
                {tag:"시즈널키워드"},
                {tag:"연관검색어"},
                {tag:"수업"},
                {tag:"스터디"},
                {tag:"노트필기"},
                {tag:"기술문서"},
                {tag:"아카데미"},
                {tag:"서비스"},
                {tag:"마케팅"},
                {tag:"렌딩페이지"},
                {tag:"노출"},
                {tag:"도달률"},
                {tag:"타겟팅광고"},
                {tag:"이탈률"},
                {tag:"시즈널키워드"},
                {tag:"연관검색어"},
                {tag:"수업"},
                {tag:"스터디"},
                {tag:"노트필기"},
                {tag:"기술문서"},
                {tag:"아카데미"},
                {tag:"서비스"},
                {tag:"마케팅"},
                {tag:"렌딩페이지"},
                {tag:"노출"},
                {tag:"도달률"},
                {tag:"타겟팅광고"},
                {tag:"이탈률"},
            ],
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeCheckBox= () => {
        this.setState({ checkBox: !this.state.checkBox });
    };

    render() {
        const { classes } = this.props;
        const { tabs } = this.state;
        return (
            <div className={classes.root}>
                <SearchCategoryComponent
                    title={this.state.categoryTitle}
                    tagList={this.state.tagList}
                />

                <Box className={classes.wrap}>
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                        <Tabs value={tabs} onChange={this.handleChange} className={classes.tabTrigger}>
                            <Tab label="추천순" disableRipple />
                            <Tab label="인기순" disableRipple />
                            <Tab label="신규 등록순" disableRipple />
                            <Tab label="수강생 수순" disableRipple />
                        </Tabs>
                        <Box onClick={this.handleChangeCheckBox}
                             className={this.state.checkBox ? classes.checkBoxStyle : clsx(classes.checkBoxStyle,classes.checkBoxStyleOn) }>
                            {this.state.checkBox ?
                                <CheckCircleAgreeOffIcon/> :
                                <CheckCircleAgreeOnIcon/>
                            }
                            종료된 강의 포함
                        </Box>
                    </Box>
                    {tabs === 0 &&
                    <Box>

                        <HomeCarouselComponent/>

                        <Link variant={"h3"} className={classes.titleStyle}><span>1,234</span>개의 강의실<CaretRightIcon/></Link>


                    </Box>}
                    {tabs === 1 && <Box>인기순</Box>}
                    {tabs === 2 && <Box>신규 등록순</Box>}
                    {tabs === 3 && <Box>수강생 수순</Box>}
                </Box>
                <Button disableRipple className={classes.topBtn}>
                    <ArrowUp/>
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(RoomsSearchComponent);
