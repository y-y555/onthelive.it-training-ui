import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button} from "@material-ui/core";
import clsx from "clsx";

const styles = _theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width:620,
        paddingBottom:70
    },
    btnStyle:{
        width:280,
        height:60,
        textAlign:'center',
        color:'#fff',
        backgroundColor:'#c2c2c2',
        fontSize:'1.125rem',
        fontWeight:600,
        borderRadius:7,
        '&:hover':{
            backgroundColor:'#c2c2c2',
        }
    },
    btnConfirm:{
        backgroundColor:'#1a457e',
        marginLeft:28,
        '&:hover':{
            backgroundColor:'#1a457e',
        }
    }
});
class ClassLectureIntroductionModifyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Box display='flex' alignItems='center' justifyContent='flex-end'>
                    <Button className={classes.btnStyle} disableRipple>취소</Button>
                    <Button className={clsx(classes.btnStyle, classes.btnConfirm)} disableRipple>저장</Button>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(ClassLectureIntroductionModifyComponent);
