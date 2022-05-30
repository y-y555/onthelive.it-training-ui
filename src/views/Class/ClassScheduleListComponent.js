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
        justifyContent:'space-between',
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
});



class ClassScheduleListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            situation: "현재 진행중",
            filter:"최근 등록순",
            value:0,
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

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <Box className={classes.controlBox}>

                    <Tabs value={value} onChange={this.handleListTabChange} className={classes.buttonBox}>
                        <Tab label="리스트" icon={<RowsListIcon />} disableRipple />
                        <Tab label="보드" icon={<SquaresFourIcon />} disableRipple />
                    </Tabs>
                    <FormControl className={classes.formControl}>
                        {value === 0 &&
                            <Select
                                value={this.state.situation}
                                onChange={this.handleChangeList}
                                displayEmpty
                                name="상황"
                                className={classes.select}
                                IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                            >
                                <MenuItem value="현재 진행중" className={classes.menuItem}>현재 진행중</MenuItem>
                                <MenuItem value="종료" className={classes.menuItem}>종료</MenuItem>
                                <MenuItem value="예정" className={classes.menuItem}>예정</MenuItem>
                            </Select>
                        }
                        {value === 1 &&
                        <Select
                            value={this.state.filter}
                            onChange={this.handleChangeFilter}
                            displayEmpty
                            name="상황"
                            className={classes.select}
                            IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                        >
                            <MenuItem value="최근 등록순" className={classes.menuItem}>최근 등록순</MenuItem>
                            <MenuItem value="참석 일정말" className={classes.menuItem}>참석 일정만</MenuItem>
                        </Select>
                        }
                    </FormControl>
                </Box>


                {value === 0 &&
                    <div>
                        <ScheduleCardListItemComponent/>
                    </div>
                }
                {value === 1 &&
                    <div>
                        <ScheduleCardBoardItemComponent/>
                    </div>
                }

            </div>
        );
    }
}

export default withStyles(styles)(ClassScheduleListComponent);