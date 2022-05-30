import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import ClassNoticeComponent from "./ClassNoticeComponent";
import ScheduleCardListItemComponent from "./ScheduleCardListItemComponent";
import {
    Box,
    Button,
    ClickAwayListener,
    FormControl,
    Input,
    MenuItem,
    Paper, Popper,
    Select,
    TextField,
    Typography
} from "@material-ui/core";
import {ReactComponent as CalendarBlank} from "../../common/images/CalendarBlank.svg";
import clsx from "clsx";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";

const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width:620,
        paddingBottom:70
    },
    controlBox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:7,
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
    datePickers:{
        fontFamily: 'NanumSquareRoundOTF' ,
        display:'flex',
        alignItems:'center',
        '& input':{
            padding:'7px 10px',
        },
        '& .Mui-focused':{
            borderColor:'#0097FF'
        }
    }
});


class FullScheduleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            situation: "전체",
            selectedDate:'2021년 2월 25일',
        };
    }

    handleChange = event => {
        this.setState({ situation: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <ClassNoticeComponent/>
                <Box className={classes.controlBox}>
                    <Box className={classes.datePickers}>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                // label="일정날짜"
                                type="date"
                                defaultValue="2021.12.21"
                                className={classes.textField}
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                        <span style={{margin:'0 10px'}}>~</span>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                // label="일정날짜"
                                type="date"
                                defaultValue="2021.12.21"
                                className={classes.textField}
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </Box>


                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.situation}
                            onChange={this.handleChange}
                            displayEmpty
                            className={classes.select}
                            IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                        >
                            <MenuItem value="전체" className={classes.menuItem}>전체</MenuItem>
                            <MenuItem value="종료" className={classes.menuItem}>종료</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <ScheduleCardListItemComponent/>
            </div>
        );
    }
}

export default withStyles(styles)(FullScheduleComponent);