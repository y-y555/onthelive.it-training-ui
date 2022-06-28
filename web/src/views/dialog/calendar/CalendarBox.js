import React, {Component} from 'react';
import {
    Box,
    Button
} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import CalendarShape from "./CalendarShape";
import StartTime from "./StartTime";
import MeetingTime from "./MeetingTime";


const style = theme => ({
    root:{
        padding:15,
        borderRadius:10,
        display:'flex',
        "& .MuiButton-root":{
            minWidth:0
        }
    },
    titleStyle:{
        fontFamily:'NanumSquareRoundOTF',
        color:'#000',
        fontSize:14,
        fontWeight:800,
        textAlign:'center'
    },
    buttonStyle:{
        padding:'7px 23px',
        borderRadius:6,
        background:'#18a0fb',
        fontFamily:'NanumSquareRoundOTF',
        color:'#fff',
        fontSize:14,
        "&:hover":{
            background:'#18a0fb',
        }
    }
});

class CalendarBox extends Component {

    render() {
        const { classes } = this.props;


        return (
            <div className={classes.root}>
                <CalendarShape/>
                <Box style={{paddingLeft:15}}>
                    <StartTime/>
                    <MeetingTime/>
                    <Box display='flex' justifyContent='center' pt={2}>
                        <Button className={classes.buttonStyle}>완료</Button>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(style)(CalendarBox);
