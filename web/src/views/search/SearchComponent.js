import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import SearchTopComponent from "./SearchTopComponent";
import SearchTodayScheduleComponent from "./SearchTodayScheduleComponent";
import SearchMyRoomComponent from "./SearchMyRoomComponent";

const styles = theme => ({
    root:{
        background:'#f3f3f3',
        minHeight:'calc(100vh - 87px)',
    },
});

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTab:0
        };
    }

    handleChange = (event, searchTab) => {
        this.setState({ searchTab });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <SearchTopComponent searchTab={this.state.searchTab} handleChange={this.handleChange}/>
                {this.state.searchTab === 0 &&
                    <SearchTodayScheduleComponent/>
                }
                {this.state.searchTab === 1 &&
                    <SearchMyRoomComponent/>
                }
            </div>
        );
    }
}

export default withStyles(styles)(SearchComponent);