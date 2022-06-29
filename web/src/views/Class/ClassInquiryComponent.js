import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Tab, Tabs} from "@material-ui/core";
import ClassServiceCenter from "./ClassServiceCenter";
import ClassInquiryDetailsComponent from "./ClassInquiryDetailsComponent";

const styles = _theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width:620,
        paddingBottom:70,
        '& ul, ol':{
            margin:0,
            padding:0,
            listStyle:'none',
        }
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
                fontWeight:700,
                color:'#000'
            },
        },
        '& .MuiTabs-indicator':{
            height:3,
            backgroundColor:'#1664f5',
            margin:'0 15px',
            width:'70px!important',
        }
    },
    optionBox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
    },
    btnStyle:{
        border: '1px solid #1664f5',
        borderRadius:7,
        color:'#1664f5',
        padding:'7px 23px',
        fontWeight:600,
        '&:hover':{
            background: 'transparent',
        }
    },
    serviceCenter:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width:620,
    }
});

class ClassInquiryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: 1,
        };
    }

    tabChange = (event, tabs) => {
        this.setState({ tabs });
    };

    render() {
        const { classes } = this.props;
        const { tabs } = this.state;
        return (
            <div className={classes.root}>
                <Tabs value={tabs} onChange={this.tabChange} className={classes.tabStyle}>
                    <Tab label="자주 묻는 질문" disableRipple/>
                    <Tab label="문의내역" disableRipple/>
                </Tabs>

                {tabs === 0 &&
                <Box className={classes.serviceCenter}>
                    <Box className={classes.optionBox}>
                        <Button className={classes.btnStyle} disableRipple>글쓰기</Button>
                    </Box>
                    <ClassServiceCenter/>
                </Box>}
                {tabs === 1 &&
                <Box>
                    <ClassInquiryDetailsComponent/>
                </Box>}
            </div>
        );
    }
}


export default withStyles(styles)(ClassInquiryComponent);