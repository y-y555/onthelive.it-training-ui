import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, FormControl, InputBase, MenuItem, Select, Tab, Tabs, Typography} from "@material-ui/core";
import {ReactComponent as CaretDown} from "../../common/images/CaretDown.svg";
import {ReactComponent as BedgeNewIcon} from "../../common/images/BedgeNewIcon.svg";

const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:1440,
        },
        display:'flex',
        justifyContent:'space-between',
        alignItems:'flex-start',
        width:1200,
        padding:'16px 30px 0',
        margin:'0 auto',
        boxSizing:'border-box',
    },
    trigger:{
        '& .MuiTab-wrapper':{
            fontSize:'1.5rem'
        },
    },
});

const StyledTabs = withStyles(theme => ({
    root: {

    },
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height: 4,
        '& > span': {
            width: '60%',
            background:'#1664f5'
        },
    },
}))(props => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

class MyRoomTopComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { classes, classTab, handleChangeTabs } = this.props;

        return (
            <div className={classes.root}>
                <Box>
                    <StyledTabs value={classTab} onChange={handleChangeTabs} className={classes.trigger}>
                        <Tab label="내 강의실" disableRipple/>
                        <Tab label="강의 관리" disableRipple/>
                    </StyledTabs>

                </Box>
                <Button className={classes.buttonStyle} disableRipple>기업 서비스</Button>
            </div>
        );
    }
}

export default withStyles(styles)(MyRoomTopComponent);