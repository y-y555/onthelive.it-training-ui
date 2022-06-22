import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Tabs, Tab, FormControl, Select, MenuItem, IconButton, InputBase} from "@material-ui/core";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import {ReactComponent as CalendarBlank2} from "../../common/images/CalendarBlank2.svg";
import RoomCarouselComponent from "./RoomCarouselComponent";

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
    tabStyle:{
        display: 'inline-flex',
        position: 'relative',
        '&:after':{
            content:'""',
            width: '100%',
            height:3,
            backgroundColor:'#eee',
            display:'block',
            position:'absolute',
            bottom:0,
            left:0,
            zIndex:-1,
        },
        '& button':{
            minWidth: 100,
            fontSize:'0.938rem',
            '&.Mui-selected':{
                fontWeight:600,
                color:'#000'
            },
        },
        '& .MuiTabs-indicator':{
            height:3,
            backgroundColor:'#1664f5',
            margin:'0 15px',
            width:'80px!important',
        }
    },
    menuText:{
        fontFamily: 'NanumSquareRoundOTF' ,
        fontSize:'0.75rem',
        color:'#0d0d0d',
        "&:hover":{
            background:'#d3d7db'
        }
    },
});

const BootstrapInputSelect = withStyles(theme => ({
    root: {
        borderRadius: 4,
        height: 30,
        background:'#fff',
        paddingRight: 10,
        paddingLeft: 10,
        marginRight: 12,
        boxSizing: 'border-box'
    },
    input: {
        position: 'relative',
        backgroundColor: 'transparent',
        fontSize:'0.875rem',
        fontWeight:500,
        color:'#000',
        minWidth: 25,
        '&:focus': {
            backgroundColor: 'transparent',
        },
        '&.MuiSelect-select':{
            paddingRight:5,
        }
    },
}))(InputBase);
class SearchRoomComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomTabs: 0,
            selectValue: '인기순',
            carousel:[
                '1', '2', '3','4'
            ]
        };
    }

    handleChangeTabs = (event, roomTabs) => {
        this.setState({ roomTabs });
    };

    handleSelectChange = event => {
        this.setState({ selectValue: event.target.value });
    };

    render() {
        const { classes } = this.props;
        const { roomTabs } = this.state;
        return (
            <div className={classes.root}>
                <Box className={classes.wrap}  display='flex' justifyContent='space-between' style={{marginBottom:40}}>
                    <Tabs value={roomTabs} onChange={this.handleChangeTabs}  className={classes.tabStyle}>
                        <Tab label="강의실 (999+)" disableRipple/>
                        <Tab label="강의 (0)" disableRipple/>
                    </Tabs>
                    <Box display='flex' alignItems='center'>
                        <FormControl>
                            <Select
                                value={this.state.selectValue}
                                onChange={this.handleSelectChange}
                                input={<BootstrapInputSelect name="type" id="type-select" />}
                                IconComponent={() => <ArrowDownIcon/>}
                            >
                                <MenuItem value={"인기순"} className={classes.menuText}>인기순</MenuItem>
                                <MenuItem value={"개설일순"} className={classes.menuText}>개설일순</MenuItem>
                                <MenuItem value={"가나다순"} className={classes.menuText}>가나다순</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Box className={classes.wrap}>
                    {roomTabs === 0 &&
                    <Box>
                        <RoomCarouselComponent carousel={this.state.carousel} />
                    </Box>}
                    {roomTabs === 1 && <Box>Item Two</Box>}
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(SearchRoomComponent);

