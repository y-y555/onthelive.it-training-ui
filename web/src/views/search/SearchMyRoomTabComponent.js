import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Tab, Tabs} from "@material-ui/core";

const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:1440,
        },
        width:1200,
        display:'flex',
        alignItems:'center',
        padding:'20px 30px',
        boxSizing:'border-box',
        margin:'0 auto'
    },

    tabStyle:{
        display: 'inline-flex',
        position: 'relative',
        '&:after':{
            content:'""',
            width: '100%',
            height:3,
            backgroundColor:'#d3d4d5',
            display:'block',
            position:'absolute',
            bottom:0,
            left:0,
            zIndex:0,
        },
        '& button':{
            minWidth: 100,
            fontSize:'0.938rem',
            '&.Mui-selected':{
                fontWeight:700,
                color:'#0097ff'
            },
        },
        '& .MuiTabs-indicator':{
            height:3,
            backgroundColor:'#0097ff',
            zIndex:1,
        }
    },
});

class SearchMyRoomTabComponent extends Component {
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
                    <Tabs value={this.props.searchTab} onChange={this.props.handleChange}  className={classes.tabStyle}>
                        <Tab label="일정" disableRipple/>
                        <Tab label="게시판" disableRipple/>
                    </Tabs>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(SearchMyRoomTabComponent);