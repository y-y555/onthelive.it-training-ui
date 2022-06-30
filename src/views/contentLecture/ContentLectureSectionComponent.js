import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import Layout1ColumnComponent from "./Layout1columnComponent";
import Layout2ColumnComponent from "./Layout2columnComponent";

const styles = theme => ({
    root:{
        width:'calc(100% - 133px)',
        minHeight: 'calc(100vh - 59px)',
        boxSizing:'border-box',
        display:'flex',
        justifyContent:'center',
        background:'#fafafa',
    }
});

class ContentLectureSectionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes, typeButton1, typeButton2, handleClickVirtualMachinesDialog } = this.props;

        return (
            <div className={classes.root}>
                {typeButton1 &&
                    <Layout1ColumnComponent handleClickVirtualMachinesDialog={handleClickVirtualMachinesDialog} />
                }
                {typeButton2 &&
                    <Layout2ColumnComponent typeButton2={typeButton2} handleClickVirtualMachinesDialog={handleClickVirtualMachinesDialog}/>
                }
            </div>
        );
    }
}

export default withStyles(styles)(ContentLectureSectionComponent);