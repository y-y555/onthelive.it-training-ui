import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    Button,
    Tab, Tabs
} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import {ReactComponent as BedgeNewIcon} from "../../common/images/BedgeNewIcon.svg";
import {ReactComponent as PlusCircleIcon} from "../../common/images/PlusCircleIcon.svg";
import DashboardComponent from "./DashboardComponent";
import OpenLectureRoomCompononet from "./OpenLectureRoomCompononet";
import LectureSupportManagementComponent from "./LectureSupportManagementComponent";
import NoticeDialog from "./NoticeDialog";

const styles = theme => ({
    root:{
        background:'#fffdf6',
    },
    roomBoxIn:{
        '@media all and (min-width: 1500px)': {
            width:1440,
            padding:'48px 30px 55px',
        },
        width:1200,
        padding:'35px 30px 55px',
        margin:'0 auto',
        boxSizing:'border-box',
        position:'relative'
    },
    iconStyle:{
        position:'absolute',
        right:'-2px',
        top:'-2px',
        zIndex:10,
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
    btnStyle:{
        width:235,
        height:40,
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
});

class CourseManagementComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classTab: 0,
            dialogOpen: false,
        };
    }

    handleChangeTabs = (event, classTab) => {
        this.setState({ classTab });
    };

    handleClickNotice = () => {
        this.setState({ dialogOpen: true });
    };

    handleClose = () => {
        this.setState({ dialogOpen: false });
    };

    render() {
        const { classes } = this.props;
        const { classTab } = this.state;

        return (
            <div className={classes.root}>
                <Box className={classes.roomBoxIn}>
                    <Box display='flex' justifyContent='space-between' mb={5}>
                        <Tabs value={classTab} onChange={this.handleChangeTabs} className={classes.trigger}>
                            <Tab label="대시보드 " disableRipple/>
                            <Tab label="개설 강의 (5)"
                                 disableRipple
                                 icon={<BedgeNewIcon className={classes.iconStyle} />}
                            />
                            <Tab label="수강생 관리 (999+)" disableRipple />
                            <Tab label="강의지원 관리" disableRipple />
                        </Tabs>

                        {(classTab === 1 || classTab === 3) &&
                            classTab === 1 ?
                                <Button className={classes.btnStyle} disableRipple>
                                    <PlusCircleIcon/>
                                    강의 만들기
                                </Button>
                            :
                                classTab === 3 ?
                                    <Button className={classes.btnStyle} onClick={this.handleClickNotice} disableRipple>
                                        공지사항등록

                                    </Button>
                                    :
                                    null

                        }
                    </Box>

                    {/* 대시보드 */}
                    {classTab === 0 &&
                        <DashboardComponent/>
                    }

                    {/* 개설강의 */}
                    {classTab === 1 &&
                    <OpenLectureRoomCompononet/>
                    }

                    {/* 수강생 관리 */}
                    {classTab === 2 &&
                    <Box>수강생 관리</Box>
                    }

                    {/* 강의지원 관리 */}
                    {classTab === 3 &&
                        <LectureSupportManagementComponent/>
                    }


                    <NoticeDialog dialogOpen={this.state.dialogOpen} handleClose={this.handleClose}/>
                </Box>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(CourseManagementComponent));