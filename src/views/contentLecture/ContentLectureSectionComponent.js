import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    root:{
        width:'calc(100% - 133px)',
        height: 'calc(100vh - 59px)',
        boxSizing:'border-box'
    }
});

class ContentLectureSectionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>

            </div>
        );
    }
}

export default withStyles(styles)(ContentLectureSectionComponent);