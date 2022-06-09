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
            typeButton1: true,
            typeButton2: false,
        };
    }

    handleChangeTypeButton1 = () => {
        this.setState({
            typeButton1: true,
            typeButton2: false,
        });
    };

    handleChangeTypeButton2 = () => {
        this.setState({
            typeButton1: false,
            typeButton2: true,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <ContentLectureTopBarComponent/>
                <Box display='flex'>
                    <ContentLectureSideBarComponent
                        typeButton1={this.state.typeButton1}
                        typeButton2={this.state.typeButton2}
                        handleChangeTypeButton1={this.handleChangeTypeButton1}
                        handleChangeTypeButton2={this.handleChangeTypeButton2}
                    />
                    <ContentLectureSectionComponent
                        typeButton1={this.state.typeButton1}
                        typeButton2={this.state.typeButton2}
                    />
                </Box>

            </div>
        );
    }
}

export default withStyles(styles)(ContentLectureComponent);