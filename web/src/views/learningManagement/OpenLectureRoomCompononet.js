import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import SearchCategoryManagementComponent from "./SearchCategoryManagementComponent";
import CourseOpenLectureTableComponent from "./CourseOpenLectureTableComponent"
const styles = theme => ({
});
class OpenLectureRoomCompononet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryTitle: "내 강의실",
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
                <CourseOpenLectureTableComponent/>
            </div>
        );
    }
}

export default withStyles(styles)(OpenLectureRoomCompononet);
