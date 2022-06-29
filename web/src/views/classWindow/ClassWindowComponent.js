import React, {Component} from 'react';
import ClassWindowTopBarComponent from "./ClassWindowTopBarComponent";
import ContentLectureClassWindowComponent from "./ContentLectureClassWindowComponent";
import {withStyles} from "@material-ui/core/styles";
import {inject, observer} from "mobx-react";

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
        const { classes, authStore } = this.props;
        const { classTab } = this.state;

        return (
            <div className={classes.root} >
                <ClassWindowTopBarComponent isGuestUser={authStore.isGuestUser}/>
                <ContentLectureClassWindowComponent
                    classTab={classTab}
                    handleChangeTabs={this.handleChangeTabs}
                    isGuestUser={authStore.isGuestUser}
                />
            </div>
        );
    }
}

export default withStyles(styles)(inject('authStore')(observer(ClassWindowComponent)));