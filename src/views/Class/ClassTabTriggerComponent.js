import React, {Component} from 'react';
import { render } from "react-dom";
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {Box, Tabs, Tab, Button} from "@material-ui/core";
import {ReactComponent as PlusCircleIcon} from "../../common/images/PlusCircleIcon.svg";
import {ReactComponent as BedgeNewIcon} from "../../common/images/BedgeNewIcon.svg";
import ScheduleRegistrationComponent from "../dialog/ScheduleRegistrationComponent";
import NoticeDialogComponent from "../dialog/NoticeDialogComponent";

const styles = theme => ({
    root:{
        "& *": {
            fontFamily: 'NanumSquareRoundOTF!important' ,
        },
        backgroundColor:'#fff',
        borderBottom :'1px solid #D3D5D5'
    },
    wrap:{
        '@media all and (min-width: 1500px)': {
            width:1440,
        },
        width:1200,
        margin: '0 auto',
        padding:'17px 30px 17px 30px',
        boxSizing:'border-box',
        display:'flex',
        alignItems:'flex-start',
        justifyContent: 'flex-end'
    },
    trigger:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width: 620,
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
    btnStyle:{
        '@media all and (min-width: 1500px)': {
            width:235,
            marginLeft:90
        },
        width:230,
        height:40,
        // marginLeft:50,
        marginLeft:30,
        backgroundColor:'#0097FF',
        color:'#fff',
        borderRadius:7,
        '& svg':{
          marginRight:4,
        },
        '&:hover':{
            backgroundColor:'#0097FF',
        }
    },
    iconStyle:{
        position:'absolute',
        right:'-2px',
        top:'-2px',
        zIndex:10,
    }
});




class ClassTabTriggerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false,
        };
    }


    handleClickOpen = () => {
        this.setState({ dialogOpen: true });
    };

    handleClose = () => {
        this.setState({ dialogOpen: false });
    };

    render() {
        const { classes, classTab } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.wrap}>
                    <Tabs value={classTab} onChange={this.props.handleChange} className={classes.trigger}>
                        <Tab label="오늘 일정"
                            disableRipple
                            icon={<BedgeNewIcon className={classes.iconStyle} />}
                        />
                        <Tab label="모든 일정" disableRipple />
                        <Tab label="캘린더" disableRipple />
                        <Tab label="자료실"
                             disableRipple
                             icon={<BedgeNewIcon className={classes.iconStyle} />}
                        />
                        <Tab label="커뮤니티" disableRipple />
                        <Tab label="맴버" disableRipple />
                    </Tabs>

                    <Button className={classes.btnStyle}onClick={this.handleClickOpen}  disableRipple><PlusCircleIcon/> 새 일정 등록하기</Button>

                </Box>

                <ScheduleRegistrationComponent handleClose={this.handleClose} dialogOpen={this.state.dialogOpen}/>
            </div>
        );
    }
}

export default withStyles(styles)(ClassTabTriggerComponent);