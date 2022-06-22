import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, IconButton, InputBase, Tab, Tabs} from "@material-ui/core";
import {ReactComponent as BedgeNewIcon} from "../../common/images/BedgeNewIcon.svg";
import {ReactComponent as SearchIcon} from "../../common/images/SearchIcon.svg";

const styles = theme => ({
    root:{
        width: '100%'
    },
    box:{
        padding:'20px 30px',
        boxSizing:'border-box',
        background:'#eee',
        border:'1px solid #C4C4C4',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    trigger:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin: '0 0 auto',
        '& button':{
            minWidth:90,
            minHeight:30,
            position:'relative',
            opacity:1,
            marginRight:10,
            background:'#D2D2D2',
            borderRadius:50,
        },
        '& button.Mui-selected':{
            minWidth:90,
            minHeight:30,
            backgroundColor:'#1664F5',
            color:'#fff',
            fontWeight:700,
            overflow:'inherit',
            boxSizing:'border-box'
        },
        '& .MuiTabs-indicator':{
            display:'none',
            width:0,
        }
    },
    searchIcon:{
        padding:7,
        background:'#f8f8f8',
        "&:hover":{
            background:'#f8f8f8',
        }
    },
    search: {
        width:300,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        background: '#fff',
        border:'1px solid #C4C4C4',
        padding:'3px 6px 3px',
        borderRadius:3,
        "& .MuiInputBase-input::placeholder":{
            opacity:1,
            fontSize:'0.875rem',
            color:'#A3A8AF'
        },
        "& .MuiInputBase-input":{
            padding:5
        }
    },
});

class SearchBoxTabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes, classTab, handleChangeTabs } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.box}>
                    <Tabs value={classTab} onChange={handleChangeTabs} className={classes.trigger}>
                        <Tab label="공지사항 " disableRipple/>
                        <Tab label="이수/수료 관리" disableRipple/>
                        <Tab label="문의 내역 관리" disableRipple />
                    </Tabs>

                    <Box className={classes.search}>
                        <InputBase
                            placeholder='검색'
                            className={classes.inputRoot}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <IconButton className={classes.searchIcon} disableRipple>
                            <SearchIcon />
                        </IconButton>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(SearchBoxTabComponent);