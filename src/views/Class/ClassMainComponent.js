import React from 'react';
import { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Box} from "@material-ui/core";
import ClassTitleComponent from "./ClassTitleComponent";
import ClassTabTriggerComponent from "./ClassTabTriggerComponent";
import ClassTagComponent from "./ClassTagComponent";
import ClassAsideComponent from "./ClassAsideComponent";
import TodayScheduleComponent from "./TodayScheduleComponent";
import FullScheduleComponent from "./FullScheduleComponent";
import ReferenceRoomComponent from "./ReferenceRoomComponent";
import ClassCommunityComponent from "./ClassCommunityComponent";
import MemberListComponent from "./MemberListComponent";
import ClassBoardDetailViewComponent from "./ClassBoardDetailViewComponent";
import ClassCalendarComponent from "./ClassCalendarComponent";
import SettingComponent from "../setting/SettingComponent";
import MemberRequestComponent from "../setting/MemberRequestComponent";
import AddAdminComponent from "../setting/AddAdminComponent";
import MemberWithdrawalComponent from "../setting/MemberWithdrawalComponent";
import MemberPermissionSettingComponent from "../setting/MemberPermissionSettingComponent";
import ClassSelectTagComponent from "./ClassSelectTagComponent";
import ClassLearningStatusComponent from "./ClassLearningStatusComponent";
import ClassAssignmentTableCompononet from "./ClassAssignmentTableCompononet";
import ClassLectureIntroductionComponent from "./ClassLectureIntroductionComponent";
import ClassLectureIntroductionModifyComponent from "./ClassLectureIntroductionModifyComponent";
import ClassInquiryComponent from "./ClassInquiryComponent";



const useStyles = makeStyles((theme) => ({
    root:{
        boxSizing:'content-box',
        "& .sticky":{
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 200,
            boxShadow:'0 2px 2px 0 rgba(0, 0, 0, 0.25)'
        },
        "& .stickyCenter":{
            '@media all and (min-width: 1500px)': {
                width:730,
            },
            width:620,
            margin:'130px auto 30px',
        },
        "& .stickyLeft":{
            '@media all and (min-width: 1500px)': {
                transform: 'translate(-690px, 0)'
            },
            position:'fixed',
            top:100,
            left: '50%',
            transform: 'translate(-570px, 0)'
        },
        "& .stickyRight":{
            '@media all and (min-width: 1500px)': {
                transform: 'translate(690px, 0)'
            },
            position:'fixed',
            top:100,
            right: '50%',
            transform: 'translate(570px, 0)'
        },
    },
    wrap:{
        '@media all and (min-width: 1500px)': {
            width:1440,
        },
        width:1200,
        margin: '0 auto',
        padding:'20px 30px',
        boxSizing:'border-box',
        display:'flex',
        alignItems:'flex-start',
        justifyContent: 'space-between'
    },
    leftBox:{
        '@media all and (min-width: 1500px)': {
            width:235,
            marginRight:90
        },
        width:230,
        marginRight:30,
    },
}));

export default function ClassMainComponent() {
    const classes = useStyles();
    const [classTab, setClassTab] = React.useState(0);
    const [setting, setSetting] = React.useState(false);
    const [memberRequest, setMemberRequest] = React.useState(false);
    const [addAdmin, setAddAdmin] = React.useState(false);

    //
    const [noticeBoard, setNoticeBoard] = React.useState(false);
    const [addAdminDialogOpen, setAddAdminDialogOpen] = React.useState(false);
    const [adminDeleteDialogOpen, setAdminDeleteDialogOpen] = React.useState(false);
    const [memberWithdrawal, setMemberWithdrawalOpen] = React.useState(false);
    const [memberPermissionSetting, setMemberPermissionSetting] = React.useState(false);
    const [classSelectTag, setClassSelectTag] = React.useState(false);

    const handleChange = (event, newValue) => {
        setClassTab(newValue);
        setSetting(false);
        setMemberRequest(false);
        setAddAdmin(false);
        setMemberWithdrawalOpen(false);
        setMemberPermissionSetting(false);
        setClassSelectTag(false);
        setNoticeBoard(false);
    };

    const handleChangeNoticeBoard = () => {
        setNoticeBoard(true);
    };

    const handleChangeSetting = () => {
        setClassTab(7);
        setSetting(true);
        setMemberRequest(false);
        setAddAdmin(false);
        setMemberWithdrawalOpen(false);
        setMemberPermissionSetting(false);
        setClassSelectTag(false);
        setNoticeBoard(false);
    };

    const handleChangeMemberRequest = () => {
        setClassTab(7);
        setMemberRequest(true);
        setSetting(false);
        setAddAdmin(false);
        setMemberWithdrawalOpen(false);
        setMemberPermissionSetting(false);
        setClassSelectTag(false);
        setNoticeBoard(false);
    };

    const handleChangeAddAdmin = () => {
        setClassTab(7);
        setAddAdmin(true);
        setMemberRequest(false);
        setSetting(false);
        setMemberWithdrawalOpen(false);
        setMemberPermissionSetting(false);
        setClassSelectTag(false);
        setNoticeBoard(false);
    };
    const handleChangeMemberWithdrawal = () => {
        setClassTab(7);
        setMemberWithdrawalOpen(true);
        setAddAdmin(false);
        setMemberRequest(false);
        setSetting(false);
        setMemberPermissionSetting(false);
        setClassSelectTag(false);
        setNoticeBoard(false);
    };

    const handleChangeMemberPermissionSetting = () => {
        setClassTab(7);
        setMemberPermissionSetting(true);
        setMemberWithdrawalOpen(false);
        setAddAdmin(false);
        setMemberRequest(false);
        setSetting(false);
        setClassSelectTag(false);
        setNoticeBoard(false);
    };

    const handleChangeClassSelectTag = (tag) => {
        setClassTab(7);
        setClassSelectTag(tag);
        setMemberWithdrawalOpen(false);
        setAddAdmin(false);
        setMemberRequest(false);
        setSetting(false);
        setMemberPermissionSetting(false);
        setNoticeBoard(false);
    };


    const handleChangeAddAdminDialog = () => {
        setAddAdminDialogOpen(true);
    };

    const handleChangeAdminDeleteDialog = () => {
        setAdminDeleteDialogOpen(true);
    };

    const handleCloseAddAdminDialog = () => {
        setAddAdminDialogOpen(false);
        setAdminDeleteDialogOpen(false);
    };

    useEffect(() => {
        const header = document.getElementById("myHeader");
        const center = document.getElementById("myCenter");
        const left = document.getElementById("myLeft");
        const Right = document.getElementById("myRight");
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
                center.classList.add("stickyCenter");
                left.classList.add("stickyLeft");
                Right.classList.add("stickyRight");
            } else {
                header.classList.remove("sticky");
                center.classList.remove("stickyCenter");
                left.classList.remove("stickyLeft");
                Right.classList.remove("stickyRight");
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);

    return (
        <div className={classes.root}>
            <ClassTitleComponent/>
            <Box id="myHeader">
                <ClassTabTriggerComponent
                    classTab={classTab}
                    handleChange={handleChange}
                />
            </Box>
            <Box className={classes.wrap}>
                <Box id="myLeft">
                    {(classTab === 0 || classTab === 1 || classTab === 2 || (classTab === 4 && noticeBoard === false) || classSelectTag !== false) ?
                        <ClassTagComponent handleChangeClassSelectTag={handleChangeClassSelectTag} classSelectTag={classSelectTag}/>
                        :
                        <Box className={classes.leftBox}/>
                    }
                    {/*<ClassTagComponent handleChangeClassSelectTag={handleChangeClassSelectTag} classSelectTag={classSelectTag}/>*/}
                </Box>

                <Box id="myCenter">
                    {classTab === 0 &&
                        <TodayScheduleComponent/>
                    }
                    {classTab === 1 &&
                        // <ClassLectureIntroductionComponent/>
                        <ClassLectureIntroductionModifyComponent/>
                        // <FullScheduleComponent/>
                    }
                    {classTab === 2 &&
                        <ClassLearningStatusComponent/>
                    }
                    {classTab === 3 &&
                    // <ClassCalendarComponent/>
                        <ClassAssignmentTableCompononet/>
                    }
                    {classTab === 4 &&
                        <ClassAssignmentTableCompononet/>
                    }
                    {classTab === 5 &&
                        <ReferenceRoomComponent/>
                    }
                    {classTab === 6 ?
                        noticeBoard === true ?
                            <ClassBoardDetailViewComponent/>
                            :
                            <ClassCommunityComponent handleChangeNoticeBoard={handleChangeNoticeBoard}/>
                        :
                        null
                    }
                    {classTab === 7 &&
                    //<MemberListComponent/>
                        <ClassInquiryComponent/>
                    }

                    {classSelectTag !== false && <ClassSelectTagComponent />}

                    {setting === true &&
                    <SettingComponent
                        handleChangeMemberRequest={handleChangeMemberRequest}
                        handleChangeAddAdmin={handleChangeAddAdmin}
                        handleChangeMemberWithdrawal={handleChangeMemberWithdrawal}
                        handleChangeMemberPermissionSetting={handleChangeMemberPermissionSetting}
                    />
                    }

                    {memberRequest === true &&
                    <MemberRequestComponent />
                    }

                    {addAdmin === true &&
                    <AddAdminComponent
                        addAdminDialogOpen={addAdminDialogOpen}
                        handleCloseAddAdminDialog={handleCloseAddAdminDialog}

                        adminDeleteDialogOpen={adminDeleteDialogOpen}
                        handleChangeAdminDeleteDialog={handleChangeAdminDeleteDialog}

                        handleChangeAddAdminDialog={handleChangeAddAdminDialog}
                    />
                    }
                    {memberWithdrawal === true &&
                    <MemberWithdrawalComponent/>
                    }

                    {memberPermissionSetting === true &&
                    <MemberPermissionSettingComponent/>
                    }
                </Box>
                <Box id="myRight">
                    <ClassAsideComponent
                        handleChangeSetting={handleChangeSetting}
                        classTab={classTab}
                        classSelectTag={classSelectTag}
                        noticeBoard={noticeBoard}
                        setting={setting}
                        memberRequest={memberRequest}
                        memberPermissionSetting={memberPermissionSetting}
                        addAdmin={addAdmin}
                    />
                </Box>
            </Box>
        </div>
    );
}
