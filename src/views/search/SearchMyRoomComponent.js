import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import SearchMyRoomTabComponent from "./SearchMyRoomTabComponent";
import SearchScheduleComponent from "./SearchScheduleComponent";
import SearchBoardComponent from "./SearchBoardComponent";

const styles = theme => ({
    root:{
        background:'#f3f3f3',
    },
});

class SearchMyRoomComponent extends Component {
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
                <SearchMyRoomTabComponent searchTab={this.state.searchTab} handleChange={this.handleChange}/>
                    {this.state.searchTab === 0 &&
                    <SearchScheduleComponent/>
                    }
                    {this.state.searchTab === 1 &&
                    <SearchBoardComponent/>
                    }
            </div>
        );
    }
}

export default withStyles(styles)(SearchMyRoomComponent);