import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    root:{
        
    },
});

class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    
    render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.root}>
                대시보드
            </div>
        );
    }
}

export default withStyles(styles)(DashboardComponent);