import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Box, Tab, Tabs} from '@material-ui/core';
import {inject, observer} from 'mobx-react';
import {ClassMainPath} from '../../common/ClassMainPath';
import {ToastsStore} from 'react-toasts';
import {withRouter} from '../../components/WithRouter';
import {PATH_UTIL} from '../../common/util/path.util';
import CoachMarkForm from '../../components/common/CoachMarkForm';
import {USER_TYPE} from '../../stores/UserStore';

const styles = theme => ({
    root: {
        '& *': {
            fontFamily: 'NanumSquareRoundOTF!important',
        },
        backgroundColor: '#fff',
        borderBottom: '1px solid #D3D5D5',
    },
    wrap: {
        '@media all and (min-width: 1500px)': {
            width: 1440,
        },
        width: 1200,
        margin: '0 auto',
        padding: '17px 30px 17px 30px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    trigger: {
        '@media all and (min-width: 1500px)': {
            width: 730,
        },
        width: 620,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 0 auto',
        '& button': {
            minWidth: 'calc(100% / 8)',
            minHeight: 40,
            position: 'relative',
            opacity: 1,
            '&:hover': {
                fontWeight: 700,
                color: '#18427c',
            },
            '&:disabled': {
                opacity: 1,
            },
        },
        '& button.Mui-selected': {
            backgroundColor: '#fff',
            color: '#18427c',
            fontWeight: 600,
            borderRadius: 50,
            overflow: 'inherit',
            border: '2px solid #18427c',
            boxSizing: 'border-box',
        },
        '& .MuiTabs-indicator': {
            display: 'none',
            width: 0,
        },
    },
    btnStyle: {
        '@media all and (min-width: 1500px)': {
            width: 235,
            marginLeft: 90,
        },
        width: 230,
        height: 40,
        // marginLeft:50,
        marginLeft: 30,
        border: '1px solid #1a457e',
        borderColor: () => (theme.configs.MainBtnColor ? theme.configs.MainBtnColor : '#1a457e'),
        color: '#1a457e',
        backgroundColor: '#fff',
        borderRadius: 7,
        '& svg': {
            marginRight: 4,
            '& .like-icon': {
                fill: '#1a457e',
            },
        },
        '&:hover': {
            borderColor: () => (theme.configs.MainBtnColor ? theme.configs.MainBtnColor : '#1a457e'),
            backgroundColor: '#fff',
        },
    },
    // iconStyle: {
    //     position: 'absolute',
    //     right: '-2px',
    //     top: '-2px',
    //     zIndex: 10,
    // },
    // addMemberCoachBox: {
    //     position: 'absolute',
    //     '@media all and (min-width: 1500px)': {
    //         top: 65,
    //         left: 458,
    //     },
    //     top: 65,
    //     left: 408,
    // },
    // popoverBox: {
    //     '& .MuiPopover-paper': {
    //         width: 235,
    //         boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
    //         borderRadius: 7,
    //         padding: '8px 0',
    //     },
    //     '& .MuiListItem-root': {
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         padding: '3px 10px',
    //         '&:hover': {
    //             background: '#d3d7db',
    //         },
    //     },
    //     '& .MuiListItemIcon-root': {
    //         minWidth: 20,
    //     },
    //     '& .MuiListItemText-root': {
    //         paddingLeft: 0,
    //         flex: 'none',
    //         '& span': {
    //             fontSize: '0.813rem',
    //             color: '#000',
    //         },
    //     },
    // },
});

class ClassTabTriggerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false,
            openClassJoinConfirmDialog: false,
            anchorEl: null,
        };
    }

    componentDidMount() {
        const { loginUser, isMember } = this.props;
        const pathName = window.location.pathname;
        const groupId = PATH_UTIL.getClassId(pathName);
        if (!isMember) {
            this.props.classStore.checkIsJoinApprove(loginUser.id, groupId);
        }
    }

    handleClickOpen = () => {
        this.props.roomStore.initCreateRoom();
        this.setState({ dialogOpen: true });
    };

    handleClose = () => {
        this.props.handleInitRoom();
        this.setState({ dialogOpen: false });
    };

    handleChange = (_e, value) => {
        this.props.handleChange(value);
        if (this.props.classTab !== value) {
            this.props.roomStore.initRoom();
            this.props.roomStore.initTag();
        }
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
        this.props.navigate('/contentLecture');
    };

    handleClickJoinBtn = () => {
        const { isWaitJoinApproval } = this.props.classStore;

        if (isWaitJoinApproval) {
            const { loginUser } = this.props.authStore;
            this.props.classStore.requestCancelGroupJoin(loginUser.email, {
                alert: () => {
                    ToastsStore.warning('잘못된 요청입니다. 클래스 정보를 확인해주세요.', 1500);
                },
            });
        } else {
            this.setState({ openClassJoinConfirmDialog: true });
        }
    };

    render() {
        const { classes, classTab, isMember, isLeader } = this.props;
        const { groupUserAuthority, isWaitJoinApproval, isCheckJoinApprovalLoading, isInitializingGroupDetail } = this.props.classStore;
        const { coachState } = this.props.userStore;
        const { loginUser } = this.props.authStore;

        const { anchorEl } = this.state;
        const openPopover = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <Box className={classes.wrap}>
                    <Box style={{ position: 'relative' }}>
                        <Tabs value={classTab} onChange={this.handleChange} className={classes.trigger}>
                            <Tab
                                label="강의실 홈"
                                value={ClassMainPath.todaySchedule}
                                // disabled={classTab === ClassMainPath.todaySchedule}
                                disableRipple
                                // icon={<BedgeNewIcon className={classes.iconStyle} />}
                            />

                            <Tab
                                label="강의소개"
                                value={ClassMainPath.lectureIntroduction}
                                // disabled={classTab === ClassMainPath.lectureIntroduction}
                                disableRipple
                            />
                            <Tab
                                label="학습현황"
                                value={ClassMainPath.learningStatus}
                                // disabled={classTab === ClassMainPath.learningStatus}
                                disableRipple
                            />
                            <Tab
                                label="과제"
                                value={ClassMainPath.assignment}
                                // disabled={classTab === ClassMainPath.assignment}
                                disableRipple
                            />
                            <Tab
                                label="평가"
                                value={ClassMainPath.evaluation}
                                // disabled={classTab === ClassMainPath.evaluation}
                                disableRipple
                            />

                            <Tab
                                label="자료실"
                                value={ClassMainPath.referenceRoom}
                                // disabled={classTab === ClassMainPath.referenceRoom}
                                disableRipple
                                // icon={<BedgeNewIcon className={classes.iconStyle} />}
                            />
                            {/*<Tab*/}
                            {/*    label={isLeader ? '필기 기록' : '내 필기'}*/}
                            {/*    value={ClassMainPath.penRecord}*/}
                            {/*    style={!isMember ? { display: 'none' } : null}*/}
                            {/*    // disabled={classTab === ClassMainPath.penRecord}*/}
                            {/*    disableRipple*/}
                            {/*/>*/}
                            <Tab
                                label="커뮤니티"
                                value={ClassMainPath.community}
                                // disabled={classTab === ClassMainPath.community}
                                disableRipple
                            />
                            <Tab
                                label="문의"
                                value={ClassMainPath.inquiry}
                                // disabled={classTab === ClassMainPath.member}
                                disableRipple
                            />

                            {/**/}
                            <Tab
                                label="설정"
                                value={ClassMainPath.setting}
                                // disabled={classTab === ClassMainPath.setting}
                                disableRipple
                                style={{ display: 'none' }}
                            />
                            <Tab
                                label="일정 상세"
                                value={ClassMainPath.scheduleDetail}
                                // disabled={classTab === ClassMainPath.scheduleDetail}
                                disableRipple
                                style={{ display: 'none' }}
                            />
                            <Tab
                                label="게시글 상세"
                                value={ClassMainPath.postDetail}
                                // disabled={classTab === ClassMainPath.postDetail}
                                disableRipple
                                style={{ display: 'none' }}
                            />
                            <Tab
                                label="태그"
                                value={ClassMainPath.tag}
                                // disabled={classTab === ClassMainPath.tag}
                                disableRipple
                                style={{ display: 'none' }}
                            />
                            <Tab
                                label="검색"
                                value={ClassMainPath.search}
                                // disabled={classTab === ClassMainPath.tag}
                                disableRipple
                                style={{ display: 'none' }}
                            />
                        </Tabs>

                        <Box className={classes.addMemberCoachBox}>
                            <CoachMarkForm
                                open={
                                    !coachState.hasMember &&
                                    coachState.hasGroup &&
                                    coachState.hasChild &&
                                    loginUser.type !== USER_TYPE.Guest &&
                                    classTab !== ClassMainPath.member
                                }
                                title={'학생 초대하기'}
                                msg={
                                    "멤버 탭으로 이동하여 클래스 관리에서 등록한\n학생을'멤버 초대하기' 버튼을 눌러 '학생 초대'\n목록에서 선택 초대해보세요."
                                }
                                currentStep={2}
                                totalStep={3}
                                btnText={'학생 초대하기'}
                                submit={e => this.handleChange(e, ClassMainPath.member)}
                            />
                        </Box>
                    </Box>

                    {/*<Button*/}
                    {/*    className={classes.btnStyle}*/}
                    {/*    disableRipple*/}
                    {/*    aria-owns={openPopover ? 'simple-popper' : undefined}*/}
                    {/*    onClick={this.handleClickPopover}*/}
                    {/*>*/}
                    {/*    <HandsClappingIcon />*/}
                    {/*    가입하기*/}
                    {/*</Button>*/}

                    {/*<Popover*/}
                    {/*    id="simple-popper"*/}
                    {/*    open={openPopover}*/}
                    {/*    anchorEl={anchorEl}*/}
                    {/*    onClose={this.handleClosePopover}*/}
                    {/*    className={classes.popoverBox}*/}
                    {/*    anchorOrigin={{*/}
                    {/*        vertical: 'bottom',*/}
                    {/*        horizontal: 'right',*/}
                    {/*    }}*/}
                    {/*    transformOrigin={{*/}
                    {/*        vertical: 'top',*/}
                    {/*        horizontal: 'right',*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <MenuItem onClick={this.handleClickOpen}>*/}
                    {/*        <ListItemIcon>*/}
                    {/*            <VideoCamera />*/}
                    {/*        </ListItemIcon>*/}
                    {/*        <ListItemText inset primary="라이브 강의" />*/}
                    {/*    </MenuItem>*/}

                    {/*    <MenuItem onClick={this.handleClickContentLecture}>*/}
                    {/*        <ListItemIcon>*/}
                    {/*            <ChalkboardTeacher />*/}
                    {/*        </ListItemIcon>*/}
                    {/*        <ListItemText inset primary="콘텐츠 강의" />*/}
                    {/*    </MenuItem>*/}
                    {/*</Popover>*/}
                </Box>

                {/*<ScheduleRegistrationComponent*/}
                {/*    handleClose={this.handleClose}*/}
                {/*    dialogOpen={this.state.dialogOpen}*/}
                {/*    classTab={this.props.classTab}*/}
                {/*    scrollMove={this.props.scrollMove}*/}
                {/*/>*/}
                {/*<YesOrNoDialog*/}
                {/*    open={this.state.openClassJoinConfirmDialog}*/}
                {/*    title={'클래스 가입'}*/}
                {/*    msg={'해당 클래스에 가입하시겠습니까?'}*/}
                {/*    changeDialogOpen={() => this.setState({ openClassJoinConfirmDialog: false })}*/}
                {/*    submit={() =>*/}
                {/*        this.props.classStore.joinGroup(this.props.authStore.loginUser.id, GroupJoinRequestPath.Search, {*/}
                {/*            requestGroupDetailAndCheckMember: groupId => {*/}
                {/*                this.props.requestGroupDetail(groupId);*/}
                {/*            },*/}
                {/*            alert: () => {*/}
                {/*                ToastsStore.info('가입 요청이 승인대기 중입니다.', 3000, classes.toasts);*/}
                {/*            },*/}
                {/*        })*/}
                {/*    }*/}
                {/*/>*/}
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(inject('authStore', 'classStore', 'roomStore', 'userStore')(observer(ClassTabTriggerComponent))));
