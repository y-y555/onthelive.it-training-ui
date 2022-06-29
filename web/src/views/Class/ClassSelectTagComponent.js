import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import ScheduleCardListItemComponent from "./ScheduleCardListItemComponent";
import {ReactComponent as AsideUserIcon} from "../../common/images/AsideUserIcon.svg";
import {Typography} from "@material-ui/core";

const styles = _theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width:620,
        paddingBottom:70,
        '& h4':{
            fontSize:'1.5rem',
            marginTop:20,
            display:'flex',
            alignItems:'center',
            '& svg':{
                width: 24,
                height:24,
                marginRight:4,
            }
        },
    },
    textStyle:{
        fontSize: '0.875rem',
        color:'#7d7d7d',
        margin: '14px 0 17px',
    }
});


class ClassSelectTagComponent extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Typography variant="h4"><AsideUserIcon/> <b>김도현</b> 님 </Typography>
                <Typography variant="body2" className={classes.textStyle}> 2개의 일정이 등록되어 있습니다.</Typography>
                <ScheduleCardListItemComponent/>
            </div>
        );
    }
}

export default withStyles(styles)(ClassSelectTagComponent);