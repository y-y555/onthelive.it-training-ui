import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, IconButton, InputBase, Tab, Tabs} from "@material-ui/core";
import {ReactComponent as SearchIcon} from "../../common/images/SearchIcon.svg";

const styles = theme => ({
    root:{
        width: '100%'
    },
    box:{
        padding:'22px 30px',
        boxSizing:'border-box',
        borderBottom:'1px solid #e1e1e1',
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
            minWidth:70,
            minHeight:25,
            position:'relative',
            opacity:1,
            marginRight:10,
            background:'#D2D2D2',
            borderRadius:50,
            fontSize: '0.938rem',
            paddingTop:0,
            paddingBottom:0
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
        "&:hover":{
            background:'transparent',
        },
        '& path':{
            stroke:'#a3a8af'
        }
    },
    search: {
        width:500,
        height: 32,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        background: '#fff',
        border:'1px solid #bfbfbf',
        padding:'3px 6px 3px',
        borderRadius:4,
        "& .MuiInputBase-input::placeholder":{
            opacity:1,
            fontSize:'0.875rem',
            color:'#A3A8AF'
        },
        '& .MuiInputBase-root':{
            width: '90%'
        },
        "& .MuiInputBase-input":{
            padding:5,
        },
        "&:focus-within":{
            border:'1px solid #1664F5',
        },
    },
});

class SearchBoxTabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes, lectureSupportClassTab, handleChangeLectureSupportTabs } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.box}>
                    <Tabs value={lectureSupportClassTab} onChange={handleChangeLectureSupportTabs} className={classes.trigger}>
                        <Tab label="공지사항 " disableRipple/>
                        <Tab label="내 문의내역" disableRipple />
                    </Tabs>

                    <Box className={classes.search} for={"input"}>
                        <InputBase
                            id={"input"}
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