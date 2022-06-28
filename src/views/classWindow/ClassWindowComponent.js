import React, {Component} from 'react';
import ClassWindowTopBarComponent from "./ClassWindowTopBarComponent";
import ContentLectureClassWindowComponent from "./ContentLectureClassWindowComponent";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    root:{

    }
});

class ClassWindowComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <ClassWindowTopBarComponent/>
                <ContentLectureClassWindowComponent/>
            </div>
        );
    }
}

export default withStyles(styles)(ClassWindowComponent);