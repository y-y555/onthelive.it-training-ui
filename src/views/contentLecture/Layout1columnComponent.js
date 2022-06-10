import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import clsx from "clsx";

const styles = theme => ({
    root:{
        width:'100%',
        height: '100%',
        position:'relative'
    },
    lineRowStyle:{
        position: 'absolute',
        width: '100%',
        height: 1,
        borderBottom: '1px dashed #000',
        top: 52
    },
    lineColumnStyle:{
        position: 'absolute',
        height: '100%',
        width: 1,
        borderRight: '1px dashed #000',
    },
    lineColumnStyleLeft:{
        left: 211
    },
    lineColumnStyleRight:{
        right: 211
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
                <Box className={clsx(classes.lineColumnStyle, classes.lineColumnStyleLeft)}/>
                <Box className={clsx(classes.lineColumnStyle, classes.lineColumnStyleRight)}/>


            </div>
        );
    }
}

export default withStyles(styles)(Layout1ColumnComponent);