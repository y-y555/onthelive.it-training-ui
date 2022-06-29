import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import ClassNumericalComponent from "./ClassNumericalComponent";
import ClassLearningTableComponent from "./ClassLearningTableComponent";
import {inject, observer} from "mobx-react";
import LearningTableForStudent from "./tables/LearningTableForStudent";
import LearningTableForTeacher from "./tables/LearningTableForTeacher";

const styles = _theme => ({

});
class ClassLearningStatusComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progressValue:'37.5',
            progress2Value:'50.0',
            totalLearningTime:'100시간 10분',
            learningTime:'1시간 20분',
            toolTipOpen: false,
            infoTooltip: false,
        };
    }

    handleCloseInfoTooltip = () => {
        this.setState({ infoTooltip: false });
    };

    handleClickInfoTooltip = () => {
        this.setState({ infoTooltip: !this.state.infoTooltip });
    };

    handleCloseTooltip = () => {
        this.setState({ toolTipOpen: !this.state.toolTipOpen  });
    };

    selectRenderTable = () => {
        const { authStore } = this.props;
        if(authStore.isGuestUser) {
            return <LearningTableForStudent />
        }
        return <LearningTableForTeacher />
    }

    render() {
        const { classes, authStore } = this.props;
        const RenderTable = this.selectRenderTable();
        return (
            <div className={classes.root}>
                <ClassNumericalComponent
                    handleClickInfoTooltip={this.handleClickInfoTooltip}
                    handleCloseTooltip={this.handleCloseTooltip}
                    handleCloseInfoTooltip={this.handleCloseInfoTooltip}
                    progressValue={this.state.progressValue}
                    progress2Value={this.state.progress2Value}
                    totalLearningTime={this.state.totalLearningTime}
                    learningTime={this.state.learningTime}
                    toolTipOpen={this.state.toolTipOpen}
                    infoTooltip={this.state.infoTooltip}/>
                <ClassLearningTableComponent>
                    {RenderTable}
                </ClassLearningTableComponent>
            </div>
        );
    }
}

export default withStyles(styles)(inject('authStore')(observer(ClassLearningStatusComponent)));
