import React from "react";
import {withStyles} from "@material-ui/core/styles";


const style = theme => ({
    root:{

    }
});


class DialogComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>



            </div>
        );
    }
};

export default withStyles(style)(DialogComponent);