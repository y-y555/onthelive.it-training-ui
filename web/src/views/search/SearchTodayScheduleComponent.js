import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Tab, Tabs} from "@material-ui/core";
import SearchStudyComponent from "./SearchStudyComponent";
import SearchWebinarComponent from "./SearchWebinarComponent";
import SearchCodingComponent from "./SearchCodingComponent";

const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:1440,
            padding:'50px 30px 55px',
        },
        width:1200,
        padding:'35px 30px 55px',
        margin:'0 auto',
        boxSizing:'border-box',
    },
    tabStyle:{
        minHeight:30,
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
            color:'#000',
            opacity:1,
            '&.Mui-selected':{
                fontWeight:700,
                color:'#0097ff'
            },
        },
        '& .MuiTabs-indicator':{
            height:3,
            backgroundColor:'#0097ff',
            zIndex: 1
        },
        '& .MuiTab-root':{
            padding:'0 0px'
        }
    },
});

class SearchTodayScheduleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: 0,
        };
    }

    handleTabChange = (event, tabs) => {
        this.setState({ tabs });
    };

    render() {
        const { classes } = this.props;
        const {tabs} = this.state;

        return (
            <div className={classes.root}>
                <Box>
                    <Tabs value={tabs} onChange={this.handleTabChange} className={classes.tabStyle}>
                        <Tab label="스터디 (999+)" disableRipple/>
                        <Tab label="웨비나 (3)" disableRipple/>
                        <Tab label="코딩 교육 (0)" disableRipple/>
                    </Tabs>
                </Box>

                {tabs === 0 &&
                    <SearchStudyComponent/>
                }

                {tabs === 1 &&
                    <SearchWebinarComponent/>
                }

                {tabs === 2 &&
                <SearchCodingComponent/>
                }
            </div>
        );
    }
}

export default withStyles(styles)(SearchTodayScheduleComponent);