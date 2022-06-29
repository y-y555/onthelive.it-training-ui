import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import SearchCategoryManagementComponent from "./SearchCategoryManagementComponent";
import CourseClassManagementTableComponent from "./CourseClassManagementTableComponent";

const styles = theme => ({
});
class CourseStudentManagementComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryTitle: "모든 수강생",
            tagList: [
                {tag:"전체"},
                {tag:"강의실 이름 1"},
                {tag:"강의실 이름 2"},
                {tag:"강의실 이름 3"},
                {tag:"강의실 이름 4"},
                {tag:"강의실 이름 5"},
                {tag:"강의실 이름 6"},
                {tag:"강의실 이름 7"},
                {tag:"강의실 이름 8"},
            ],
        };
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <SearchCategoryManagementComponent
                    title={this.state.categoryTitle}
                    tagList={this.state.tagList}
                />
                {/*<CourseAllStudentManagementTableComponent/>*/}
                <CourseClassManagementTableComponent/>
            </div>
        );
    }
}

export default withStyles(styles)(CourseStudentManagementComponent);
