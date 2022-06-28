import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

const style = theme => ({
    root: {
        // 달력
        "& .react-calendar":{
            width:250,
            maxWidth:250,
            borderRadius:16,
            border:'1px solid #d7dbdf',
            padding:'10px 5px',
            "& .saturday": {
                color: 'black'
            }
        },
        "& .react-calendar__navigation__label__labelText":{
            fontFamily:'NanumSquareRoundOTF',
            color:'#000',
            fontSize:15,
            fontWeight:800,
        } ,
        "& .react-calendar__navigation button:enabled:hover":{
            background:'transparent'
        },
        "& .react-calendar__month-view__weekdays__weekday":{
            "& abbr":{
                fontFamily:'NanumSquareRoundOTF',
                fontSize:14,
                color:'#4f5660',
                fontWeight:'normal',
                textDecoration:'none'
            }
        },
        "& .react-calendar__month-view__days__day":{
            borderRadius:'50%',
            "& abbr":{
                fontFamily:'NanumSquareRoundOTF',
                fontSize:12,
                fontWeight:800,
            }
        },
        "& .react-calendar__navigation button[disabled]":{
            background:'transparent'
        }
        // "& .react-calendar__tile--now":{
        //     background:'rgba(0, 0, 0, 0.05)',
        //     "&:enabled:hover":{
        //         background:'#1087ff',
        //         color:'#fff'
        //     },
        //     "&:enabled:focus":{
        //         background:'#1087ff',
        //     },
        // },
    },
});

class CalendarShape extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:new Date(),
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Calendar
                    locale="ko"
                    calendarType="US"
                    onChange={this.onChange}
                    value={this.state.value}
                    minDetail='month'
                    prev2Label={null}
                    next2Label={null}
                    formatDay={(locale, date) => dayjs(date).format('D')}
                    tileClassName={({ activeStartDate, date, view }) => {
                        return view === 'month' && date.getDay() === 6 ? 'saturday' : null;
                    }}
                    // tileContent={({ activeStartDate, date, view }) => {
                    //     return view === 'month' && date.getDay() === 6 ? <p style={{color: 'black'}}>{date.getDay()}</p> : null;
                    // }}
                />
            </div>
        );
    }
}

export default withStyles(style)(CalendarShape);