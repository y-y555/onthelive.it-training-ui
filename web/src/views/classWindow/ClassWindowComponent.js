import React, {Component} from 'react';
import ClassWindowTopBarComponent from "./ClassWindowTopBarComponent";
import ContentLectureClassWindowComponent from "./ContentLectureClassWindowComponent";
import {withStyles} from "@material-ui/core/styles";

const styles = _theme => ({
    root:{}
});

class ClassWindowComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classTab: 0,
        };
    }

    handleChangeTabs = (event, classTab) => {
        this.setState({ classTab });
    };

    render() {
        const { classes } = this.props;
        const { classTab } = this.state;

        return (
            <div className={classes.root} >
                <ClassWindowTopBarComponent/>
                <ContentLectureClassWindowComponent
                    classTab={classTab}
                    handleChangeTabs={this.handleChangeTabs}
                />
            </div>
        );
    }
}

export default withStyles(styles)(ClassWindowComponent);