import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Tabs, Tab} from "@material-ui/core";
import SearchRoomComponent from './SearchRoomComponent';
import Footer from "../footer/Footer";
const styles = theme => ({
    root:{
    },
    wrap:{
        '@media all and (min-width: 1500px)': {
            width:1440,
        },
        width:1200,
        boxSizing:'border-box',
        margin: '0 auto',
    },
    triggerWrap:{
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.25)',
        padding:'18px 0',
        marginBottom:18,
        borderTop:'1px solid #c0c2c3'
    },
    trigger:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin: '0 0 auto',
        '& button':{
            minWidth:90,
            minHeight:40,
            position:'relative',
            opacity:1,
            marginRight:10,
            fontSize:'0.938rem',
            '&:hover':{
                fontWeight: 700,
            }
        },
        '& button.Mui-selected':{
            minWidth:90,
            minHeight:40,
            backgroundColor:'#fff',
            color:'#18427c',
            fontWeight:700,
            borderRadius:50,
            overflow:'inherit',
            border: '2px solid #18427c',
            boxSizing:'border-box'
        },
        '& .MuiTabs-indicator':{
            display:'none',
            width:0,
        }
    },
});
class RoomSearchAllClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classTabs: 0,
        };
    }

    handleChangeTabs = (event, classTabs) => {
        this.setState({ classTabs });
    };
    render() {
        const { classes } = this.props;
        const { classTabs } = this.state;
        return (
            <div className={classes.root}>
                <Box className={classes.triggerWrap}>
                    <Box className={classes.wrap}>
                        <Tabs value={classTabs} onChange={this.handleChangeTabs}  className={classes.trigger}>
                            <Tab label="강의실" disableRipple/>
                            <Tab label="내 강의실" disableRipple/>
                        </Tabs>
                    </Box>
                </Box>
                <Box className={classes.wrap} style={{marginBottom: 120}}>
                {classTabs === 0 && <Box>
                    <SearchRoomComponent/>
                </Box>}
                {classTabs === 1 && <Box>Item Two</Box>}
                </Box>
                <Footer/>
            </div>
        );
    }
}

export default withStyles(styles)(RoomSearchAllClassComponent);

