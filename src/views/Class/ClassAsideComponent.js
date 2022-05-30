import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";

import {ReactComponent as FileFillIcon} from "../../common/images/FileFillIcon.svg";

import ClassContentInfoComponent from "./ClassContentInfoComponent";
import ClassContentSearchComponent from "./ClassContentSearchComponent";
import ClassAsiadeLatestComponent from "./ClassAsiadeLatestComponent";


const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:235,
            marginLeft:90
        },
        width:230,
        // marginLeft:50,
        marginLeft:30,
        '& ul, li':{
            listStyle:'none',
            padding:0,
            margin:0,
        }
    },
});


class ClassAsideComponent extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <ClassContentInfoComponent handleChangeSetting={this.props.handleChangeSetting}/>
                <ClassContentSearchComponent
                    classTab={this.props.classTab}
                    classSelectTag={this.props.classSelectTag}
                    noticeBoard={this.props.noticeBoard}
                    setting={this.props.setting}
                    memberRequest={this.props.memberRequest}
                    memberPermissionSetting={this.props.memberPermissionSetting}
                    addAdmin={this.props.addAdmin}
                />
                <ClassAsiadeLatestComponent/>
            </div>
        );
    }
}

export default withStyles(styles)(ClassAsideComponent);