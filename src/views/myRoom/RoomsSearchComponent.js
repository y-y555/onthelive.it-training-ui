import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import SearchCategoryComponent from "./SearchCategoryComponent";
const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:1440,
        },
        width:1200,
        padding:'16px 30px 0',
        margin:'0 auto',
        boxSizing:'border-box',
    },

});
class RoomsSearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <SearchCategoryComponent/>
            </div>
        );
    }
}

export default withStyles(styles)(RoomsSearchComponent);
