import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import ContentLectureTopBarComponent from "./ContentLectureTopBarComponent";
import ContentLectureTopBarPreviewComponent from "./ContentLectureTopBarPreviewComponent";
import ContentLectureSideBarComponent from "./ContentLectureSideBarComponent";
import ContentLectureSectionComponent from "./ContentLectureSectionComponent";
import ContentLecturePreviewComponent from "./ContentLecturePreviewComponent";

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
            preview: false,
            previewPc: true,
            previewMobile: false,
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

    handleClickPreview = () => {
        this.setState({
            preview: true,
        });
    };
    handleClickBack = () => {
        this.setState({
            preview: false,
        });
    };

    handleClickPreviewPc = () => {
        this.setState({
            previewPc: true,
            previewMobile: false,
        });
    };

    handleClickPreviewMobile = () => {
        this.setState({
            previewPc: false,
            previewMobile: true,
        });
    };

    render() {
        const { classes } = this.props;
        const { preview } = this.state;

        return (
            <div className={classes.root}>
                {preview ?
                    <>
                        <ContentLectureTopBarPreviewComponent
                            handleClickBack={this.handleClickBack}
                            handleClickPreviewPc={this.handleClickPreviewPc}
                            handleClickPreviewMobile={this.handleClickPreviewMobile}
                            previewPc={this.state.previewPc}
                            previewMobile={this.state.previewMobile}
                        />
                        <ContentLecturePreviewComponent previewPc={this.state.previewPc}/>
                    </>
                    :
                    <>
                        <ContentLectureTopBarComponent handleClickPreview={this.handleClickPreview}/>
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
                    </>
                }




            </div>
        );
    }
}

export default withStyles(styles)(ContentLectureComponent);