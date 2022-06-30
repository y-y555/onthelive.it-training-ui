import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import DragDropComponent from "./DragDropComponent";

const styles = theme => ({
    root:{
        width:'100%',
        minHeight: '100%',
        position:'relative',
        display:'flex',
        justifyContent:'space-between'
    },
    lineRowStyle:{
        position: 'absolute',
        width: '100%',
        height: 1,
        borderBottom: '1px dashed #000',
        top: 52
    },
    box:{
        '@media all and (min-width: 1960px)': {
            width: 890,
        },
        width: 'calc(45% - 1px)',
        margin:'0 auto'
    },
    centerLine:{
        width:1,
        height: 'calc(100% - 52px)',
        background:'#DBDBDB',
        marginTop: 52
    },

    lineColumnStyle:{
        width: '100%',
        height: '100%',
        borderRight: '1px dashed #000',
        borderLeft: '1px dashed #000',
        paddingTop: 90,
        boxSizing: 'border-box'
    },
});

class Layout2ColumnComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes, typeButton2, handleClickVirtualMachinesDialog } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.lineRowStyle}/>

                <Box className={classes.box}>
                    <Box className={classes.lineColumnStyle}>
                        <DragDropComponent typeButton2={typeButton2} handleClickVirtualMachinesDialog={handleClickVirtualMachinesDialog} />
                    </Box>
                </Box>

                <Box className={classes.centerLine}/>

                <Box className={classes.box}>
                    <Box className={classes.lineColumnStyle}>
                        <DragDropComponent typeButton2={typeButton2} handleClickVirtualMachinesDialog={handleClickVirtualMachinesDialog}/>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(Layout2ColumnComponent);