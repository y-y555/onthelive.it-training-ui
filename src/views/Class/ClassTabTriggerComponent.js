import React, {Component} from 'react';
import { render } from "react-dom";
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {Box, Tabs, Tab, Button, MenuItem, Popover, ListItemText, ListItemIcon} from "@material-ui/core";
import {ReactComponent as PlusCircleIcon} from "../../common/images/PlusCircleIcon.svg";
import {ReactComponent as BedgeNewIcon} from "../../common/images/BedgeNewIcon.svg";
import {ReactComponent as VideoCamera} from "../../common/images/VideoCamera.svg";
import {ReactComponent as ChalkboardTeacher} from "../../common/images/ChalkboardTeacher.svg";
import ScheduleRegistrationComponent from "../dialog/ScheduleRegistrationComponent";
import NoticeDialogComponent from "../dialog/NoticeDialogComponent";
import {withRouter} from "react-router-dom";

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
            minWidth:82,
            minHeight:40,
            position:'relative',
            opacity:1,
            marginRight:10,
            fontSize: '0.938rem',
            '&:hover':{
                fontWeight: 700,
                color:'#18427c',
            }
        },
        '& button.Mui-selected':{
            backgroundColor:'#fff',
            color:'#18427c',
            fontWeight:600,
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
    btnStyle:{
        '@media all and (min-width: 1500px)': {
            width:235,
            marginLeft:90
        },
        width:230,
        height:40,
        // marginLeft:50,
        marginLeft:30,
        backgroundColor:'#1a457e',
        color:'#fff',
        borderRadius:7,
        '& svg':{
          marginRight:4,
        },
        '&:hover':{
            backgroundColor:'#1a457e',
        }
    },
    iconStyle:{
        position:'absolute',
        right:'-2px',
        top:'-2px',
        zIndex:10,
    },
    popoverBox:{
        '& .MuiPopover-paper': {
            width: 235,
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
            borderRadius: 7,
            padding: '8px 0',
        },
        '& .MuiListItem-root': {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            padding: '3px 10px',
            '&:hover': {
                background: '#d3d7db',
            },
        },
        '& .MuiListItemIcon-root': {
            minWidth: 20,
        },
        '& .MuiListItemText-root': {
            paddingLeft: 0,
            flex: 'none',
            '& span': {
                fontSize: '0.813rem',
                color:'#000'
            },
        },
    }
});

class ClassTabTriggerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false,
            anchorEl: null,
        };
    }


    handleClickOpen = () => {
        this.setState({ dialogOpen: true });
    };

    handleClose = () => {
        this.setState({ dialogOpen: false });
    };

    handleClickPopover = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClosePopover = () => {
        this.setState({
            anchorEl: null,
        });
    };

    handleClickContentLecture = e => {
        this.props.history.push("/contentLecture");
    };

    render() {
        const { classes, classTab } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <Box className={classes.wrap}>
                    <Tabs value={classTab} onChange={this.props.handleChange} className={classes.trigger}>
                        <Tab label="강의실 홈"
                            disableRipple
                            icon={<BedgeNewIcon className={classes.iconStyle} />}
                        />
                        <Tab label="강의소개" disableRipple />
                        <Tab label="학습현황" disableRipple />
                        <Tab label="과제" disableRipple />
                        <Tab label="평가" disableRipple />
                        <Tab label="자료실"
                             disableRipple
                             icon={<BedgeNewIcon className={classes.iconStyle} />}
                        />
                        <Tab label="커뮤니티" disableRipple />
                        <Tab label="문의" disableRipple />
                    </Tabs>

                    <Button
                        className={classes.btnStyle}
                        disableRipple
                        aria-owns={open ? 'simple-popper' : undefined}
                        onClick={this.handleClickPopover}
                    >
                        <PlusCircleIcon/>
                        강의 만들기
                    </Button>

                    <Popover
                        id="simple-popper"
                        open={open}
                        anchorEl={anchorEl}
                        onClose={this.handleClosePopover}
                        className={classes.popoverBox}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={this.handleClickOpen}>
                            <ListItemIcon>
                                <VideoCamera/>
                            </ListItemIcon>
                            <ListItemText inset primary="라이브 강의" />
                        </MenuItem>

                        <MenuItem onClick={this.handleClickContentLecture}>
                            <ListItemIcon>
                                <ChalkboardTeacher/>
                            </ListItemIcon>
                            <ListItemText inset primary="콘텐츠 강의" />
                        </MenuItem>
                    </Popover>

                </Box>

                <ScheduleRegistrationComponent handleClose={this.handleClose} dialogOpen={this.state.dialogOpen}/>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(ClassTabTriggerComponent));