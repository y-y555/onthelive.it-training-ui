import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import ContentLectureTopBarComponent from "./ContentLectureTopBarComponent";
import ContentLectureSideBarComponent from "./ContentLectureSideBarComponent";
import ContentLectureSectionComponent from "./ContentLectureSectionComponent";

const styles = theme => ({
    root:{

    }
});

class ContentLectureComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <ContentLectureTopBarComponent/>
                <Box display='flex'>
                    <ContentLectureSideBarComponent/>
                    <ContentLectureSectionComponent/>
                </Box>

            </div>
        );
    }
}

export default withStyles(styles)(ContentLectureComponent);