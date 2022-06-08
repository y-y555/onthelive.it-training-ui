import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Select, MenuItem, FormControl, Input, Avatar, Typography, IconButton,Tooltip, Tabs, Tab} from "@material-ui/core";
import {ReactComponent as RowsListIcon} from "../../common/images/RowsListIcon.svg";
import {ReactComponent as SquaresFourIcon} from "../../common/images/SquaresFourIcon.svg";
import ScheduleCardListItemComponent from "./ScheduleCardListItemComponent";
import ScheduleCardBoardItemComponent from "./ScheduleCardBoardItemComponent";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";


const styles = theme => ({
    root:{
        '& ul, ol':{
            margin:0,
            padding:0,
            listStyle:'none',
        }
    },
    controlBox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
    },
    buttonBox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin: '0 0 auto',
        '& .MuiTabs-indicator':{
            display:'none',
            width:0,
        },
        '& button':{
            opacity: 0.5,
            minHeight:'auto',
            minWidth:'auto',
            '& .MuiTab-wrapper':{
                display:'flex',
                flexDirection:'row',
                justifyContent:'center',
            },
            '& .MuiTab-wrapper > *:first-child':{
                marginBottom:0,
            }
        },
        '& button:hover':{
            backgroundColor:'#fff',
        },
        '& .Mui-selected':{
            fontWeight:700,
        }
    },
    btnActiveStyle:{
        opacity:'1!important',
        fontWeight:700,
    },
    formControl:{
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
        fontSize:'0.75rem',
        color:'#0d0d0d',
        "&:hover":{
            background:'#d3d7db'
        },
        "&.Mui-selected":{
            background:'transparent'
        },
        "&.Mui-selected:hover":{
            background:'#d3d7db'
        },
    },
    trigger:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin: '30px 0 50px',
        '& .MuiTabs-flexContainer':{
            borderBottom: '3px solid #eeeeee',
            width: 400
        },
        '& button':{
            minWidth:90,
            minHeight:40,
            position:'relative',
            opacity:1,
            fontSize:'0.938rem',
            '&:hover':{
                fontWeight: 600,
            }
        },
        '& button.Mui-selected':{
            minWidth:90,
            minHeight:40,
            backgroundColor:'#fff',
            color:'#000',
            fontWeight:600,
            borderRadius:50,
            overflow:'inherit',
            boxSizing:'border-box'
        },
    },
});

const StyledTabs = withStyles(theme => ({
    root: {

    },
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height: 3,
        '& > span': {
            width: '70%',
            background:'#1664f5'
        },
    },
}))(props => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);



class ClassScheduleListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            situation: "전체",
            filter:"최근 등록순",
            value:0,
            classTab: 0,
        };
    }


    handleChangeList = event => {
        this.setState({ situation: event.target.value });
    };

    handleChangeFilter = event => {
        this.setState({ filter: event.target.value });
    };

    handleListTabChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeTabs = (event, classTab) => {
        this.setState({ classTab });
    };

    render() {
        const { classes } = this.props;
        const { classTab } = this.state;

        return (
            <div className={classes.root}>
                <StyledTabs value={classTab} onChange={this.handleChangeTabs} className={classes.trigger}>
                    <Tab
                        label='전체 (15)'
                        disableRipple
                    />
                    <Tab
                        label='진행중 (10)'
                        disableRipple
                    />
                    <Tab
                        label='예정 (2)'
                        disableRipple
                    />
                    <Tab
                        label='종료 (3)'
                        disableRipple
                    />
                </StyledTabs>

                <Box className={classes.controlBox}>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.situation}
                            onChange={this.handleChangeList}
                            displayEmpty
                            name="상황"
                            className={classes.select}
                            IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                        >
                            <MenuItem value="전체" className={classes.menuItem}>전체</MenuItem>
                            <MenuItem value="종료" className={classes.menuItem}>종료</MenuItem>
                            <MenuItem value="예정" className={classes.menuItem}>예정</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <ScheduleCardListItemComponent/>

            </div>
        );
    }
}

export default withStyles(styles)(ClassScheduleListComponent);