import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import clsx from "clsx";
import DragDropComponent from "./DragDropComponent";
import SurveyCreateComponent from "../dialog/survey/SurveyCreateComponent";

const styles = theme => ({
    root:{
        width:'100%',
        minHeight: '100%',
        position:'relative',
    },
    lineRowStyle:{
        position: 'absolute',
        width: '100%',
        height: 1,
        borderBottom: '1px dashed #000',
        top: 52
    },
    dragDropBox:{
        width: 890,
        height: '100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        paddingTop: 52,
        boxSizing:'border-box',
        margin:'0 auto',
        borderRight: '1px dashed #000',
        borderLeft: '1px dashed #000',
    }
});

class Layout1ColumnComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.lineRowStyle}/>
                <Box className={classes.dragDropBox}>
                    <DragDropComponent/>
                </Box>

            </div>
        );
    }
}

export default withStyles(styles)(Layout1ColumnComponent);