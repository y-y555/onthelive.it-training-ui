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
    },
    searchCategoryComponent:{
        padding:'50px 0 50px 33px',
        borderBottom:'1px solid #c0c2c3',
    }

});
class RoomsSearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: 0,
            checkBox:true,
            categoryTitle: "????????????",
            tagList: [
                {tag:"??????????????????"},
                {tag:"???????????????"},
                {tag:"??????"},
                {tag:"?????????"},
                {tag:"????????????"},
                {tag:"????????????"},
                {tag:"????????????"},
                {tag:"?????????"},
                {tag:"?????????"},
                {tag:"???????????????"},
                {tag:"??????"},
                {tag:"?????????"},
                {tag:"???????????????"},
                {tag:"?????????"},
                {tag:"??????????????????"},
                {tag:"???????????????"},
                {tag:"??????"},
                {tag:"?????????"},
                {tag:"????????????"},
                {tag:"????????????"},
                {tag:"????????????"},
                {tag:"?????????"},
                {tag:"?????????"},
                {tag:"???????????????"},
                {tag:"??????"},
                {tag:"?????????"},
                {tag:"???????????????"},
                {tag:"?????????"},
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
                <Box className={classes.searchCategoryComponent}>
                    <SearchCategoryComponent
                        title={this.state.categoryTitle}
                        tagList={this.state.tagList}
                    />
                </Box>
                <Box className={classes.wrap}>
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                        <Tabs value={tabs} onChange={this.handleChange} className={classes.tabTrigger}>
                            <Tab label="?????????" disableRipple />
                            <Tab label="?????????" disableRipple />
                            <Tab label="?????? ?????????" disableRipple />
                            <Tab label="????????? ??????" disableRipple />
                        </Tabs>
                        <Box onClick={this.handleChangeCheckBox}
                             className={this.state.checkBox ? classes.checkBoxStyle : clsx(classes.checkBoxStyle,classes.checkBoxStyleOn) }>
                            {this.state.checkBox ?
                                <CheckCircleAgreeOffIcon/> :
                                <CheckCircleAgreeOnIcon/>
                            }
                            ????????? ?????? ??????
                        </Box>
                    </Box>
                    {tabs === 0 &&
                    <Box>

                        <HomeCarouselComponent/>

                        <Link variant={"h3"} className={classes.titleStyle}><span>1,234</span>?????? ?????????<CaretRightIcon/></Link>


                    </Box>}
                    {tabs === 1 && <Box>?????????</Box>}
                    {tabs === 2 && <Box>?????? ?????????</Box>}
                    {tabs === 3 && <Box>????????? ??????</Box>}
                </Box>
                <Button disableRipple className={classes.topBtn}>
                    <ArrowUp/>
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(RoomsSearchComponent);
