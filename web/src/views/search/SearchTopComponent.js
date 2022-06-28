import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Tab, Tabs} from "@material-ui/core";

const styles = theme => ({
    root:{
        display:'flex',
        justifyContent:'center',
        background:'#fff',
        boxShadow:'0 2px 2px 0 rgba(0, 0, 0, 0.25)'
    },
    appBar:{
        '@media all and (min-width: 1500px)': {
            width:1440,
        },
        width:1200,
        display:'flex',
        alignItems:'center',
        padding:'20px 30px 15px',
        boxSizing:'border-box',
        '& button':{
            minWidth:90,
            minHeight:40,
            position:'relative',
            opacity:1,
            marginRight:10,
            '&:hover':{
                fontWeight: 700,
            }
        },
        '& button.Mui-selected':{
            backgroundColor:'#0097FF',
            color:'#fff',
            fontWeight:700,
            borderRadius:50,
            overflow:'inherit',
        },
        '& .MuiTabs-indicator':{
            display:'none',
            width:0,
        }
    },
});

class SearchTopComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.appBar}>
                    <Tabs value={this.props.searchTab} onChange={this.props.handleChange}>
                        <Tab label="오늘 일정"/>
                        <Tab label="모든 일정" disableRipple />
                    </Tabs>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(SearchTopComponent);