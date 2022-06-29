import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import DragDropComponent from "./DragDropComponent";

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
    lineColumnStyle:{
        width: '100%',
        height: '100%',
        borderRight: '1px dashed #000',
        borderLeft: '1px dashed #000',
        paddingTop: 90,
        boxSizing: 'border-box'
    },
    dragDropBox:{
        width: 890,
        height: '100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        boxSizing:'border-box',
        margin:'0 auto',
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
                    <Box className={classes.lineColumnStyle}>
                        <DragDropComponent/>
                    </Box>
                </Box>

            </div>
        );
    }
}

export default withStyles(styles)(Layout1ColumnComponent);