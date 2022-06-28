import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    root:{

    }
});

class LearningStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes, typeButton1, typeButton2, previewPc } = this.props;

        return (
            <div className={classes.root}>
                학습현황
            </div>
        );
    }
}

export default withStyles(styles)(LearningStatus);