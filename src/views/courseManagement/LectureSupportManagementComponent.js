import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import SearchBoxTabComponent from "./SearchBoxTabComponent";
import CompletionManagementComponent from "./CompletionManagementComponent";

const styles = theme => ({
    root:{
        width: '100%',
        boxSizing:'border-box',
        paddingLeft: 120
    },
    titleText:{
        fontSize: '1.5rem',
        fontWeight: 600,
    },
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
                <Typography className={classes.titleText}>강의지원 관리</Typography>
                <SearchBoxTabComponent
                    classTab={this.state.classTab}
                    handleChangeTabs={this.handleChangeTabs}
                />
                
                {this.state.classTab === 0 &&
                    "공지사항"
                }

                {this.state.classTab === 1 &&
                    <CompletionManagementComponent/>
                }

                {this.state.classTab === 2 &&
                    "문의 내역 관리"
                }
                
            </div>
        );
    }
}

export default withStyles(styles)(LectureSupportManagementComponent);