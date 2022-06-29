import React, {useEffect, useMemo, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box} from '@material-ui/core';
import ClassTitleComponent from './StudentClassTitleComponent';
import ClassTabTriggerComponent from './StudentClassTabTriggerComponent';
import ClassTagComponent from '../class/ClassTagComponent';
import ClassAsideComponent from '../class/ClassAsideComponent';
import TodayScheduleComponent from '../class/TodayScheduleComponent';
import ClassLectureIntroductionModifyComponent from '../class/ClassLectureIntroductionModifyComponent';
import ClassLearningStatusComponent from '../class/ClassLearningStatusComponent';
import ClassAssignmentTableCompononet from './StudentClassAssignmentTableCompononet';
import StudentClassEvaluationTableCompononet from './StudentClassEvaluationTableCompononet';
import ClassInquiryComponent from '../class/ClassInquiryComponent';
import ReferenceRoomComponent from '../class/ReferenceRoomComponent';
import ClassCommunityComponent from '../class/ClassCommunityComponent';
import MemberListComponent from '../class/MemberListComponent';
import SettingComponent from '../setting/SettingComponent';
import {inject, observer} from 'mobx-react';
import {PATH_UTIL} from '../../common/util/path.util';
import {withRouter} from '../../components/WithRouter';
import ScheduleClassificationComponent, {CLASSIFICATION_TYPE} from '../class/ScheduleClassificationComponent';
import {Route, Routes} from 'react-router-dom';
import {ClassMainPath} from '../../common/ClassMainPath';
import ClassScheduleDetailContentComponent from '../class/ClassScheduleDetailContentComponent';
import {injectIntl} from 'react-intl';
import ClassBoardDetailViewComponent from '../class/ClassBoardDetailViewComponent';
import WrittenRecordComponent from '../class/WrittenRecordComponent';
import RoomInvitationDialogComponent from '../invitation/RoomInvitationDialogComponent';
import RoomInvitationConfirmDialogComponent from '../invitation/RoomInvitationConfirmDialogComponent';
import {SessionStorageGroupInviteToken} from '../../stores/ClassStore';
import ClassSelectSearchComponent from '../class/ClassSelectSearchComponent';
import EmptyPage from '../../components/common/EmptyPage';

const useStyles = makeStyles(_theme => ({
    root: {
        height: '100vh',
        boxSizing: 'content-box',
        '& .sticky': {
            position: 'absolute',
            top: 0,
            width: '100%',
            zIndex: 200,
            boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.25)',
        },
        '& .stickyCenter': {
            '@media all and (min-width: 1500px)': {
                width: 730,
            },
            width: 620,
            margin: '80px auto 30px',
        },
        '& .stickyLeft': {
            '@media all and (min-width: 1500px)': {
                transform: 'translate(-690px, 0)',
            },
            position: 'fixed',
            top: 100,
            left: '50%',
            transform: 'translate(-570px, 0)',
        },
        '& .stickyRight': {
            '@media all and (min-width: 1500px)': {
                transform: 'translate(690px, 0)',
            },
            position: 'fixed',
            top: 100,
            right: '50%',
            transform: 'translate(570px, 0)',
        },
    },
    wrap: {
        '@media all and (min-width: 1500px)': {
            width: 1440,
        },
        width: 1200,
        margin: '0 auto',
        padding: '20px 30px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    leftBox: {
        '@media all and (min-width: 1500px)': {
            width: 235,
            marginRight: 90,
        },
        width: 230,
        marginRight: 30,
    },
}));

export const SORT_BY = {
    name: 'name',
    createdDatetime: 'createdDatetime',
    updateDatetime: 'updatedDatetime',
};

function useMergeState(initializeState) {
    const [state, setState] = useState(initializeState);
    const setMergedState = newState => setState(prevState => Object.assign({}, prevState, newState));

    return [state, setMergedState];
}

function StudentClassMainComponent(props) {
    const classes = useStyles();
    const [userRequests, setUserRequests] = useMergeState({
        classTab: PATH_UTIL.getMainTabName(props.location.pathname),
        noticeBoard: false,
        classSelectTag: undefined,
        isMember: undefined,
        selectedClassification: CLASSIFICATION_TYPE.None,
        isGroupJoinResultDialogOpen: false,
        isInviteDialogOpen: false,
        isLeader: false,
    });

    const loginUser = props.authStore.loginUser;
    const pathName = useMemo(() => {
        return PATH_UTIL.getMainTabName(props.location.pathname);
    });

    useEffect(() => {
        setUserRequests(
            userRequests.selectedClassification === CLASSIFICATION_TYPE.None
                ? { classTab: pathName, classSelectTag: undefined }
                : { classTab: pathName, classSelectTag: undefined, selectedClassification: CLASSIFICATION_TYPE.None },
        );
        props.roomStore.changeClassTap(pathName);
        if (props.fixedTopBarHeight) {
            props.scrollMove();
        }
    }, [pathName]);

    const handleChange = newValue => {
        // setUserRequests(
        //     userRequests.selectedClassification === CLASSIFICATION_TYPE.None
        //         ? { classTab: newValue, classSelectTag: undefined }
        //         : { classTab: newValue, classSelectTag: undefined, selectedClassification: CLASSIFICATION_TYPE.None },
        // );
        // props.roomStore.changeClassTap(newValue);
        // if (props.fixedTopBarHeight) {
        //     props.scrollMove();
        // }
        // props.navigate(newValue);
        moveTo(newValue);
    };

    const moveTo = classMainPath => {
        props.navigate(classMainPath);
    };

    const handleChangeClassSelectTag = tag => {
        setUserRequests({ selectedClassification: CLASSIFICATION_TYPE.Tag, classSelectTag: tag });
        if (userRequests.classTab === ClassMainPath.community) {
            props.postStore.getPostListByTag(tag);
        } else {
            props.roomStore.getRoomListBySelectedTag(tag);
        }

        props.navigate(`${ClassMainPath.tag}`, { replace: false });
    };

    const handleChangeSearch = keyword => {
        setUserRequests({ classSelectTag: undefined });
        props.roomStore.changeClassTap(ClassMainPath.search);
        props.searchStore.initSubCurrentPage();
        props.navigate(`${ClassMainPath.search}/${keyword}`, { replace: false });
    };

    const handleInitRoom = () => {
        props.roomStore.initCreateRoom();
    };

    const handleSetClassificationScheduleView = () => {
        setUserRequests({ selectedClassification: CLASSIFICATION_TYPE.Owner });
        props.navigate(ClassMainPath.tag, { replace: false });
    };

    const handleInitSelectedClassification = () => {
        setUserRequests({ selectedClassification: CLASSIFICATION_TYPE.None });
    };

    const handleClickScheduleDetail = roomId => {
        props.navigate(`${ClassMainPath.scheduleDetail}/${roomId}`, { replace: false });
        props.scrollMove();
    };

    const handleClickPostDetail = (e, postId) => {
        e.stopPropagation();
        props.navigate(`${ClassMainPath.postDetail}/${postId}`, { replace: false });
        props.scrollMove();
    };

    // useEffect 에서 비동기로 사용 - june
    const requestGroupDetail = async groupId => {
        await props.classStore.getGroupDetail(groupId, {
            checkMember: () =>
                setUserRequests({
                    isMember: props.classStore.isGroupMember(loginUser.id),
                    isLeader: props.classStore.isGroupLeader(loginUser.id),
                }),
            getGroupAuthority: () => requestGroupAuthority(groupId),
            setGroupColor: groupColor => props.orgStore.setGroupColor(groupColor),
        });
    };

    const requestJoinGroupFromInvite = (userId, requestPath) => {
        props.classStore.joinGroup(userId, requestPath, {
            requestGroupDetailAndCheckMember: groupId => {
                requestGroupDetail(groupId);
            },
            openJoinSuccessDialog: () => {
                sessionStorage.removeItem(SessionStorageGroupInviteToken);
                setUserRequests({ isGroupJoinResultDialogOpen: true });
            },
        });
    };

    const handleInitPagination = () => {
        props.paginationStore.initPagination();
    };

    const requestGroupAuthority = groupId => {
        props.classStore.getGroupAuthorities(groupId, {
            setGroupUserAuthority: authorities => {
                props.classStore.setGroupUserAuthority(loginUser.id, authorities);
            },
        });
    };

    const handleChangePage = page => {
        props.paginationStore.changePage(page);
    };

    useEffect(() => {
        const inviteToken = sessionStorage.getItem(SessionStorageGroupInviteToken);
        if (inviteToken) {
            setUserRequests({ isInviteDialogOpen: true });
        } else {
            setUserRequests({ isInviteDialogOpen: false });
        }
    }, [sessionStorage.getItem(SessionStorageGroupInviteToken)]);

    useEffect(async () => {
        const groupId = PATH_UTIL.getClassId(props.location.pathname);
        props.roomStore.initRoom();
        if (groupId) {
            if (groupId !== props.classStore.selectedGroupId) {
                props.classStore.setSelectedGroupId(groupId);
            }
            const nPS = props.neoPenStore;

            nPS.resetUserNotes();

            await requestGroupDetail(groupId);

            const isLeader = props.classStore.isGroupLeader(loginUser.id);
            const userEmail = loginUser.email;

            await props.classStore.getAllGroupUsers(userEmail, groupId, {});

            await nPS.getAllPaperGroups(groupId, userEmail);

            await nPS.getUserNotes(props.classStore.selectedAllGroupUsers, isLeader);
        } else {
            console.log('NotAcceptable Path');
            props.navigate('/rooms', { replace: true });
        }
        return () => {
            props.roomStore.initRoom();
            props.classStore.initClass();
        };
    }, []);

    useEffect(() => {
        const header = document.getElementById('myHeader');
        const center = document.getElementById('myCenter');
        const left = document.getElementById('myLeft');
        const Right = document.getElementById('myRight');
        if (props.fixedTopBarHeight) {
            header.classList.add('sticky');
            center.classList.add('stickyCenter');
            left.classList.add('stickyLeft');
            Right.classList.add('stickyRight');
        } else {
            header.classList.remove('sticky');
            center.classList.remove('stickyCenter');
            left.classList.remove('stickyLeft');
            Right.classList.remove('stickyRight');
        }
    }, [props.fixedTopBarHeight]);

    return (
        <div className={classes.root}>
            <>
                <ClassTitleComponent
                    selectedGroupDetail={props.classStore.selectedGroupDetail}
                    scrollMove={props.scrollMove}
                    handleChange={handleChange}
                />
                <Box id="myHeader">
                    <ClassTabTriggerComponent
                        loginUser={loginUser}
                        classTab={userRequests.classTab}
                        classPath={props.params}
                        handleChange={handleChange}
                        handleInitRoom={handleInitRoom}
                        isMember={userRequests.isMember}
                        isLeader={userRequests.isLeader}
                        requestGroupDetail={requestGroupDetail}
                        scrollMove={props.scrollMove}
                    />
                </Box>

                <Box className={classes.wrap}>
                    <Box id="myLeft">
                        {pathName === ClassMainPath.setting ||
                        userRequests.classTab === ClassMainPath.referenceRoom ||
                        userRequests.classTab === ClassMainPath.member ||
                        userRequests.classTab === ClassMainPath.penRecord ? (
                            <Box className={classes.leftBox} />
                        ) : (
                            <ClassTagComponent
                                classTab={userRequests.classTab}
                                classPath={props.params}
                                handleChangeClassSelectTag={handleChangeClassSelectTag}
                                classSelectTag={userRequests.classSelectTag}
                                roomTagList={props.classStore.detailTagList}
                            />
                        )}
                    </Box>
                    <Box id="myCenter">
                        <Routes>
                            <Route
                                path={ClassMainPath.todaySchedule}
                                element={
                                    <TodayScheduleComponent
                                        isScrollEnd={props.isScrollEnd}
                                        handleClickDetail={handleClickScheduleDetail}
                                        classPath={props.params}
                                        isMember={userRequests.isMember}
                                        isLeader={userRequests.isLeader}
                                    />
                                }
                            />
                            <Route path={ClassMainPath.lectureIntroduction} element={<ClassLectureIntroductionModifyComponent />} />
                            <Route path={ClassMainPath.learningStatus} element={<ClassLearningStatusComponent />} />
                            <Route path={ClassMainPath.assignment} element={<ClassAssignmentTableCompononet />} />
                            <Route path={ClassMainPath.evaluation} element={<StudentClassEvaluationTableCompononet />} />
                            <Route
                                path={ClassMainPath.referenceRoom}
                                element={<ReferenceRoomComponent changePage={handleChangePage} initPagination={handleInitPagination} />}
                            />
                            <Route path={ClassMainPath.penRecord} element={<WrittenRecordComponent isLeader={userRequests.isLeader} />} />
                            <Route
                                path={ClassMainPath.community}
                                element={
                                    <ClassCommunityComponent
                                        classTab={userRequests.classTab}
                                        handleClickPostDetail={handleClickPostDetail}
                                        currentTab={props.params}
                                        topicList={props.classStore.selectedGroupDetail.topicList}
                                        isScrollEnd={props.isScrollEnd}
                                        isMember={userRequests.isMember}
                                    />
                                }
                            />
                            <Route path={ClassMainPath.inquiry} element={<ClassInquiryComponent />} />

                            <Route
                                path={ClassMainPath.member}
                                element={
                                    <MemberListComponent
                                        loginUser={loginUser}
                                        classTab={userRequests.classTab}
                                        setClassificationView={handleSetClassificationScheduleView}
                                    />
                                }
                            />
                            <Route
                                path={`${ClassMainPath.setting}/*`}
                                element={
                                    userRequests.isMember ? (
                                        <SettingComponent
                                            classMainNavigate={props.navigate}
                                            selectedGroupDetail={props.classStore.selectedGroupDetail}
                                            loginUser={loginUser}
                                        />
                                    ) : (
                                        <EmptyPage />
                                    )
                                }
                            />
                            <Route
                                path={ClassMainPath.tag}
                                element={
                                    <ScheduleClassificationComponent
                                        handleClickDetail={handleClickScheduleDetail}
                                        handleClickPostDetail={handleClickPostDetail}
                                        classSelectTag={userRequests.classSelectTag}
                                        classTab={userRequests.classTab}
                                        classification={userRequests.selectedClassification}
                                        initClassification={handleInitSelectedClassification}
                                        isMember={userRequests.isMember}
                                        isLeader={userRequests.isLeader}
                                        isScrollEnd={props.isScrollEnd}
                                        scrollHeight={props.scrollHeight}
                                        calcScrollEnd={props.calcScrollEnd}
                                    />
                                }
                            />
                            <Route
                                path={`${ClassMainPath.scheduleDetail}/:roomId`}
                                element={
                                    <ClassScheduleDetailContentComponent
                                        currentTab={props.params}
                                        classTab={userRequests.classTab}
                                        isMember={userRequests.isMember}
                                        isLeader={userRequests.isLeader}
                                        isScrollEnd={props.isScrollEnd}
                                        scrollMove={props.scrollMove}
                                    />
                                }
                            />
                            <Route
                                path={`${ClassMainPath.postDetail}/:postId`}
                                element={
                                    <ClassBoardDetailViewComponent
                                        currentTab={props.params}
                                        isMember={userRequests.isMember}
                                        isScrollEnd={props.isScrollEnd}
                                        scrollMove={props.scrollMove}
                                    />
                                }
                            />
                            <Route
                                path={`${ClassMainPath.search}/:keyword`}
                                element={
                                    <ClassSelectSearchComponent
                                        currentTab={props.params}
                                        isMember={userRequests.isMember}
                                        isScrollEnd={props.isScrollEnd}
                                        handleClickDetail={handleClickScheduleDetail}
                                    />
                                }
                            />
                        </Routes>
                    </Box>
                    <Box id="myRight">
                        <ClassAsideComponent
                            handleChangeSearch={handleChangeSearch}
                            scrollMove={props.scrollMove}
                            moveTo={moveTo}
                            classPath={props.params}
                            classTab={userRequests.classTab}
                            classSelectTag={userRequests.classSelectTag}
                            noticeBoard={userRequests.noticeBoard}
                            selectedGroupDetail={props.classStore.selectedGroupDetail}
                            isMember={userRequests.isMember}
                        />
                    </Box>
                </Box>
                <RoomInvitationDialogComponent
                    open={userRequests.isInviteDialogOpen}
                    inviteGroup={props.classStore.inviteGroup}
                    joinGroup={requestJoinGroupFromInvite}
                    loginUser={loginUser}
                    requestGroupDetail={requestGroupDetail}
                />
                <RoomInvitationConfirmDialogComponent
                    open={userRequests.isGroupJoinResultDialogOpen}
                    onClose={() => setUserRequests({ isGroupJoinResultDialogOpen: false })}
                />
            </>
        </div>
    );
}
export default withRouter(
    inject(
        'classStore',
        'authStore',
        'roomStore',
        'postStore',
        'classTeamStore',
        'paginationStore',
        'avatarStore',
        'orgStore',
        'searchStore',
        'neoPenStore',
    )(injectIntl(observer(StudentClassMainComponent))),
);
