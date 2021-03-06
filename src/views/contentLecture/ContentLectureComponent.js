import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import ContentLectureTopBarComponent from "./ContentLectureTopBarComponent";
import ContentLectureTopBarPreviewComponent from "./ContentLectureTopBarPreviewComponent";
import ContentLectureSideBarComponent from "./ContentLectureSideBarComponent";
import ContentLectureSectionComponent from "./ContentLectureSectionComponent";
import ContentLecturePreviewComponent from "./ContentLecturePreviewComponent";
import ScheduleRegistrationComponent from "../dialog/ScheduleRegistrationComponent";
import VirtualMachinesDialog from "./VirtualMachinesDialog";

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
            //
            dialogOpen: false,
            virtualMachinesDialogOpen: false,

            lectureClass: false
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

    handleClickInfoDialog = () => {
        this.setState({
            dialogOpen: true,
        });
    };

    handleClickVirtualMachinesDialog = () => {
        console.log("!!!", this.state.virtualMachinesDialogOpen)
        this.setState({
            virtualMachinesDialogOpen: true,
        });
    };

    handleClose = () => {
        this.setState({
            dialogOpen: false,
            virtualMachinesDialogOpen: false,
        });
    };

    render() {
        const { classes } = this.props;
        const { preview, dialogOpen } = this.state;

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

                            //
                            handleClickInfoDialog={this.handleClickInfoDialog}
                        />
                        <ContentLecturePreviewComponent previewPc={this.state.previewPc} typeButton1={this.state.typeButton1} typeButton2={this.state.typeButton2}/>
                    </>
                    :
                    <>
                        <ContentLectureTopBarComponent
                            handleClickPreview={this.handleClickPreview}
                            //
                            handleClickInfoDialog={this.handleClickInfoDialog}

                        />
                        {this.state.lectureClass ?
                            <ContentLecturePreviewComponent
                                previewPc={this.state.previewPc}
                                typeButton1={this.state.typeButton1}
                                typeButton2={this.state.typeButton2}
                            />
                            :
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
                                    handleClickVirtualMachinesDialog={this.handleClickVirtualMachinesDialog}
                                />
                            </Box>
                        }

                    </>
                }

                {/*?????? ?????? ??????*/}
                <ScheduleRegistrationComponent handleClose={this.handleClose} dialogOpen={this.state.dialogOpen}/>

                {/* ???????????? dialog */}
                <VirtualMachinesDialog virtualMachinesDialogOpen={this.state.virtualMachinesDialogOpen} handleClose={this.handleClose}/>
            </div>
        );
    }
}

export default withStyles(styles)(ContentLectureComponent);