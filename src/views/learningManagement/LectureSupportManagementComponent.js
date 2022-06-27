import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Typography} from "@material-ui/core";
import SearchBoxTabComponent from "./SearchBoxTabComponent";
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
});


class LectureSupportManagementComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render() {
        const { classes, lectureSupportClassTab, handleChangeLectureSupportTabs } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.box}>
                    <Typography className={classes.titleText}>학습지원 관리</Typography>
                    <SearchBoxTabComponent
                        lectureSupportClassTab={lectureSupportClassTab}
                        handleChangeLectureSupportTabs={handleChangeLectureSupportTabs}
                    />

                    {lectureSupportClassTab === 0 &&
                    <CourseNoticeBoradComponent/>
                                        }

                    {lectureSupportClassTab === 1 &&
                        <CourseInquiryHistoryManagementComponent/>
                    }
                </Box>

                
            </div>
        );
    }
}

export default withStyles(styles)(LectureSupportManagementComponent);