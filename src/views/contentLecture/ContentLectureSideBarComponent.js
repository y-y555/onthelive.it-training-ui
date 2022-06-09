import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    root:{
        
    }
});

class ContentLectureSideBarComponent extends Component {
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

export default withStyles(styles)(ContentLectureSideBarComponent);