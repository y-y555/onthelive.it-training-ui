import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Typography} from "@material-ui/core";
import clsx from "clsx";
import {ReactComponent as DotIcon} from "../../common/images/DotIcon.svg";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/ko';
import ArrowIcon from "../../common/images/ArrowIcon.svg";

const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width:620,
        paddingBottom:70
    },
    calenderStyle:{
        '& .rbc-toolbar':{
            flexDirection: 'row-reverse',
            justifyContent:'flex-end',
            margin:'30px 0 10px'
        },
        '& .rbc-toolbar-label':{
            display:'flex',
            fontSize:'1.5rem',
            fontWeight:600,
            flexGrow:0
        },
        '& .rbc-btn-group':{
            position:'relative',
            width:170,
            '& button':{
                cursor:'pointer',
            },
            '& button:hover, button:focus, button:active':{
                background: 'transparent',
                boxShadow: 'none',
            },
            '& button:first-child':{
                borderRadius:4,
                // marginRight:20,
                position:'absolute',
                right:0
            },
            '& button:not(:first-child)':{
                border:0,
                textIndent: '-99999px',
                overflow: 'hidden',
                position:'relative',
                '&:before':{
                    position:'absolute',
                    left:0,
                    top:0,
                    textIndent:0,
                    transform: 'translate(50%, 50%)',
                }
            },
            '& button:nth-child(2)':{
                marginLeft:15,
            },
            '& button:nth-child(2):before':{
                content:"''",
                width:18,
                height:18,
                backgroundImage:`url(${ArrowIcon})`,
                backgroundSize:'100%',
                marginLeft:-10,
                marginTop:-5,
            },
            '& button:nth-child(3):before':{
                content:"''",
                width:18,
                height:18,
                backgroundImage:`url(${ArrowIcon})`,
                backgroundSize:'100%',
                marginLeft:15,
                transform: 'rotate(180deg) !important',
                marginTop:4
            },
            '&:last-child':{
                display:'none',
                textIndent:'-999',
                size:0,
                overflow:'hidden',
            },
        },
        '& .rbc-month-view':{
            borderRadius:10,
            borderColor:'#d7dbdf',
        },
        '& .rbc-header':{
            padding:13,
            color:'#4f5660',
            '&:first-child':{
                color:'#e90326',
            },
            '&:last-child':{
                color:'#2789cc'
            },
            '& span':{
                fontWeight:400,
            }
        },
        '& .rbc-month-row>div':{
            fontSize:'0.75rem',
        },
        '& .rbc-date-cell':{
            textAlign: 'left',
            padding:9,
            fontWeight:600,
            '&:first-child':{
                color:'#e90326',
            },
            '&:last-child':{
                color:'#2789cc'
            },
        },
        '& .rbc-today':{
            background: 'transparent',
        },
        '& .rbc-current a':{
            backgroundColor:'#a3dfff',
            color:'#fff',
            padding:6,
            borderRadius:20,
        },
        '& .rbc-off-range':{
            opacity:0.5,
        },
        '& .rbc-off-range-bg':{
            background: 'transparent',
        },
    },
    dailyBox:{
        display:'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.25)',
        border: '1px solid #e1e4e7',
        borderRadius: 8,
        padding:20,
        marginTop:20,
    },
    date:{
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        textAlign:'center',
        fontSize:'0.875rem',
        width: 80,
        '& b':{
            fontSize: '1.875rem',
            fontWeight:700,
        },
    },
    content:{
        width:'65%',
        '& h5':{
            fontSize:'1.063rem',
            fontWeight:600,
            margin:'3px 0'
        },
    },
    caption:{
        backgroundColor:'transparent',
        color:'#fff',
        padding:'2px 6px',
        fontSize:'0.625rem',
        fontFamily:'Montserrat!important',
        textTransform:'uppercase',
        fontWeight:800,
        display:'inline-flex',
        alignItems:'center',
        '& svg':{
            marginRight:3,
        },
    },
    captionLive:{
        backgroundColor:'#FB4A59',
    },
    btnOutlineStyle:{
        border:'1px solid #0097FF',
        color:'#0097FF',
        fontWeight:600,
        padding:'6px 27px',
        borderRadius:7,
        "&:hover":{
            background: 'transparent',
        }
    },
});




class ClassCalendarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        };
    }
    render() {
        const { classes } = this.props;
        moment.locale('ko-KR');
        const localizer = momentLocalizer(moment);
        const formats = { monthHeaderFormat: 'yyyy년 MM월' };
        const messages = { today: '오늘' };

        return (
            <div className={classes.root}>
                <Calendar
                    localizer={localizer}
                    // events={myEventsList}
                    style={{ height: 500 }}
                    className={classes.calenderStyle}
                    formats={formats}
                    messages={messages}
                />
                <Box className={classes.dailyBox}>
                    <Box className={classes.date}> <b>6</b> 금요일</Box>
                    <Box className={classes.content}>
                        <span className={clsx(classes.caption, classes.captionLive)}><DotIcon/>Live</span>
                        <Typography variant="h5">온더라이브 기획미팅</Typography>
                        <Typography variant="body2">오전 11:00 ~ 오후 13:00</Typography>
                    </Box>
                    <Button className={classes.btnOutlineStyle} disableRipple>참석하기</Button>
                </Box>

            </div>
        );
    }
}

export default withStyles(styles)(ClassCalendarComponent);