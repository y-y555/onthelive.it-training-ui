import React, {Component} from 'react';
import {Box, Button, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import CalendarShape from "../dialog/calendar/CalendarShape";
import Deadline from "./Deadline";
import {ReactComponent as ClearAll} from "../../common/images/ClearAll.svg";


const style = _theme => ({
    root:{
        padding:15,
        borderRadius:10,
        "& .MuiButton-root":{
            minWidth:0
        }
    },
    clearBtn:{
        padding:0,
        marginTop: 10,
        '&:hover':{
            background:'transparent'
        },
        '& p':{
            fontSize: '0.813rem',
            color:'#1664f5',
            marginLeft: 5
        }
    }
});

class CalendarComponent extends Component {
    render() {
        const { classes, allDate } = this.props;


        return (
            <div className={classes.root}>
                <CalendarShape/>
                {!allDate &&
                    <Box mt={2}>
                        <Deadline/>
                    </Box>
                }

                <Box display='flex' alignItems='center' justifyContent='flex-end'>
                    <Button className={classes.clearBtn} disableRipple>
                        <ClearAll/>
                        <Typography>초기화</Typography>
                    </Button>
                </Box>

            </div>
        );
    }
}

export default withStyles(style)( CalendarComponent);