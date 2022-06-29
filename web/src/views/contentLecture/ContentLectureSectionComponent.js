import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import Layout1ColumnComponent from "./Layout1columnComponent";
import Layout2ColumnComponent from "./Layout2columnComponent";

const styles = _theme => ({
    root:{
        width:'calc(100% - 133px)',
        minHeight: 'calc(100vh - 59px)',
        boxSizing:'border-box',
        display:'flex',
        justifyContent:'center',
        background:'#fafafa',
    }
});

class ContentLectureSectionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes, typeButton1, typeButton2 } = this.props;

        return (
            <div className={classes.root}>
                {typeButton1 &&
                    <Layout1ColumnComponent/>
                }
                {typeButton2 &&
                    <Layout2ColumnComponent typeButton2={typeButton2}/>
                }
            </div>
        );
    }
}

export default withStyles(styles)(ContentLectureSectionComponent);