import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Typography} from "@material-ui/core";
import SearchBoxTabComponent from "./SearchBoxTabComponent";
import CompletionManagementComponent from "./CompletionManagementComponent";
import CourseNoticeBoradComponent from "./CourseNoticeBoradComponent";
import CourseInquiryHistoryManagementComponent from "./CourseInquiryHistoryManagementComponent";

const styles = theme => ({
    root:{
        width: '100%',
        boxSizing:'border-box',
        paddingLeft: 120
    },
    titleText:{
        fontSize: '1.5rem',
        fontWeight: 600,
        paddingTop: 22,
        paddingLeft: 30
    },
    box:{
        borderRadius: 5,
        boxSizing:'border-box',
        border:'1px solid #bfbfbf',
        background:'#fff'
    },
    paddingBox:{
        padding: '20px 30px'
    }
});


class LectureSupportManagementComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classTab: 0
        };
    }

    handleChangeTabs = (event, classTab) => {
        this.setState({ classTab });
    };
    
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.box}>
                    <Typography className={classes.titleText}>강의지원 관리</Typography>
                    <SearchBoxTabComponent
                        classTab={this.state.classTab}
                        handleChangeTabs={this.handleChangeTabs}
                    />

                    {this.state.classTab === 0 &&
                    <CourseNoticeBoradComponent/>
                                        }

                    {this.state.classTab === 1 &&
                        <Box className={classes.paddingBox}>
                            <CompletionManagementComponent/>
                        </Box>

                    }

                    {this.state.classTab === 2 &&
                        <CourseInquiryHistoryManagementComponent/>
                    }
                </Box>

                
            </div>
        );
    }
}

export default withStyles(styles)(LectureSupportManagementComponent);