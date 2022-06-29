import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, FormControl, MenuItem, OutlinedInput, Select, Typography} from "@material-ui/core";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";

const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width:620,
        paddingBottom:70
    },
    titleText:{
        fontSize:'0.938rem',
        color:'#000',
    },
    listTopBorder:{
        borderTop:'1px solid #e1e1e1',
        marginTop:7
    },
    listBox:{
        padding:'21px 0',
        borderBottom:'1px solid #e1e1e1'
    },
    textStyle:{
        fontSize:'0.875rem',
        color:'#000'
    },
    formControl:{
        "& .MuiOutlinedInput-root":{
            width:128,
            height:28
        },
        "& .MuiSelect-root":{
            fontSize:'0.875rem',
            color:'#000',
            paddingTop:0,
            paddingBottom:0,

        },
        "& .MuiOutlinedInput-input":{
            padding:'18.5px 5px 18.5px 14px'
        },
        "& .MuiSelect-select:focus":{
            background:'transparent'
        },
        "& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":{
            borderRadius:4,
            borderColor:'#bfbfbf',
            borderWidth:1
        },
    },
    menuItem:{
        fontFamily: 'NanumSquareRoundOTF' ,
        fontSize:'0.875rem',
        color:'#333',
        "&:hover":{
            background:'#e8e8e8'
        },
        "&.Mui-selected:hover":{
            background:'#e8e8e8'
        },
        "&.Mui-selected":{
            background:'transparent'
        }
    },
});

class MemberPermissionSettingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            information: '리더만',
            notice: '리더와 관리자',
            scheduleRegistration: '모든 멤버',
            writeAComment: '모든 멤버',
            editSchedule: '등록자 본인',
            memberInvitation: '모든 멤버',
            membershipApplication: '모든 멤버',
            memberComments: '리더와 관리자',
            noticeRegistration:'리더와 관리자',
            deletePost:'리더만',
            topic:'리더만',
            folder:'리더만',
            surveyCreate:'리더만',
            surveyFolderCreate:'리더만',
        };
    }

    handleChangeInformation = event => {
        this.setState({ information: event.target.value });
    };

    handleChangeNotice = event => {
        this.setState({ notice: event.target.value });
    };

    handleChangeScheduleRegistration = event => {
        this.setState({ scheduleRegistration: event.target.value });
    };

    handleChangeWriteAComment = event => {
        this.setState({ writeAComment: event.target.value });
    };

    handleChangeEditSchedule = event => {
        this.setState({ editSchedule: event.target.value });
    };

    handleChangeMemberInvitation = event => {
        this.setState({ memberInvitation: event.target.value });
    };

    handleChangeMembershipApplication = event => {
        this.setState({ membershipApplication: event.target.value });
    };

    handleChangeMemberComments = event => {
        this.setState({ memberComments: event.target.value });
    };

    handleChangeNoticeRegistration = event => {
        this.setState({ noticeRegistration: event.target.value });
    };

    handleChangeDeletePost = event => {
        this.setState({ deletePost: event.target.value });
    };

    handleChangeTopic = event => {
        this.setState({ topic: event.target.value });
    };

    handleChangeFolder = event => {
        this.setState({ folder: event.target.value });
    };

    handleChangeSurveyCreate = event => {
        this.setState({ surveyCreate: event.target.value });
    };

    handleChangeSurveyFolderCreate = event => {
        this.setState({ surveyFolderCreate: event.target.value });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Box>
                    <Typography className={classes.titleText}>
                        <b>멤버 권한 설정</b>
                    </Typography>
                </Box>

                <Box className={classes.listTopBorder}>
                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.listBox}>
                        <Typography className={classes.textStyle}>모임 이름 및 커버 등 정보</Typography>

                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                value={this.state.information}
                                onChange={this.handleChangeInformation}
                                input={
                                    <OutlinedInput
                                        name="select"
                                        id="outlined-select-simple"
                                    />
                                }
                                IconComponent={() => <Box style={{width:16, height:16, marginRight:8}}><ArrowDownIcon/> </Box>}
                            >
                                <MenuItem className={classes.menuItem} value="리더만">리더만</MenuItem>
                                <MenuItem className={classes.menuItem} value="리더와 관리자">리더와 관리자</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.listBox}>
                        <Typography className={classes.textStyle}>공지글</Typography>

                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                value={this.state.notice}
                                onChange={this.handleChangeNotice}
                                input={
                                    <OutlinedInput
                                        name="select"
                                        id="outlined-select-simple"
                                    />
                                }
                                IconComponent={() => <Box style={{width:16, height:16, marginRight:8}}><ArrowDownIcon/> </Box>}
                            >
                                <MenuItem className={classes.menuItem} value="리더만">리더만</MenuItem>
                                <MenuItem className={classes.menuItem} value="리더와 관리자">리더와 관리자</MenuItem>
                                <MenuItem className={classes.menuItem} value="모든 멤버">모든 멤버</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.listBox}>
                        <Typography className={classes.textStyle}>일정 등록</Typography>

                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                value={this.state.scheduleRegistration}
                                onChange={this.handleChangeScheduleRegistration}
                                input={
                                    <OutlinedInput
                                        name="select"
                                        id="outlined-select-simple"
                                    />
                                }
                                IconComponent={() => <Box style={{width:16, height:16, marginRight:8}}><ArrowDownIcon/> </Box>}
                            >
                                <MenuItem className={classes.menuItem} value="리더만">리더만</MenuItem>
                                <MenuItem className={classes.menuItem} value="리더와 관리자">리더와 관리자</MenuItem>
                                <MenuItem className={classes.menuItem} value="모든 멤버">모든 멤버</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.listBox}>
                        <Typography className={classes.textStyle}>일정별 댓글 쓰기</Typography>

                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                value={this.state.writeAComment}
                                onChange={this.handleChangeWriteAComment}
                                input={
                                    <OutlinedInput
                                        name="select"
                                        id="outlined-select-simple"
                                    />
                                }
                                IconComponent={() => <Box style={{width:16, height:16, marginRight:8}}><ArrowDownIcon/> </Box>}
                            >
                                <MenuItem className={classes.menuItem} value="리더만">리더만</MenuItem>
                                <MenuItem className={classes.menuItem} value="리더와 관리자">리더와 관리자</MenuItem>
                                <MenuItem className={classes.menuItem} value="모든 멤버">모든 멤버</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.listBox}>
                        <Typography className={classes.textStyle}>일정 수정</Typography>

                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                value={this.state.editSchedule}
                                onChange={this.handleChangeEditSchedule}
                                input={
                                    <OutlinedInput
                                        name="select"
                                        id="outlined-select-simple"
                                    />
                                }
                                IconComponent={() => <Box style={{width:16, height:16, marginRight:8}}><ArrowDownIcon/> </Box>}
                            >
                                <MenuItem className={classes.menuItem} value="리더만">리더만</MenuItem>
                                <MenuItem className={classes.menuItem} value="리더와 관리자">리더와 관리자</MenuItem>
                                <MenuItem className={classes.menuItem} value="등록자 본인">등록자 본인</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.listBox}>
                        <Typography className={classes.textStyle}>멤버 초대</Typography>

                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                value={this.state.memberInvitation}
                                onChange={this.handleChangeMemberInvitation}
                                input={
                                    <OutlinedInput
                                        name="select"
                                        id="outlined-select-simple"
                                    />
                                }
                                IconComponent={() => <Box style={{width:16, height:16, marginRight:8}}><ArrowDownIcon/> </Box>}
                            >
                                <MenuItem className={classes.menuItem} value="리더만">리더만</MenuItem>
                                <MenuItem className={classes.menuItem} value="리더와 관리자">리더와 관리자</MenuItem>
                                <MenuItem className={classes.menuItem} value="모든 멤버">모든 멤버</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.listBox}>
                        <Typography className={classes.textStyle}>멤버 가입신청 승인</Typography>

                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                value={this.state.membershipApplication}
                                onChange={this.handleChangeMembershipApplication}
                                input={
                                    <OutlinedInput
                                        name="select"
                                        id="outlined-select-simple"
                                    />
                                }
                                IconComponent={() => <Box style={{width:16, height:16, marginRight:8}}><ArrowDownIcon/> </Box>}
                            >
                                <MenuItem className={classes.menuItem} value="리더만">리더만</MenuItem>
                                <MenuItem className={classes.menuItem} value="리더와 관리자">리더와 관리자</MenuItem>
                                <MenuItem className={classes.menuItem} value="모든 멤버">모든 멤버</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.listBox}>
                        <Typography className={classes.textStyle}>다른 멤버의 댓글</Typography>

                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                value={this.state.memberComments}
                                onChange={this.handleChangeMemberComments}
                                input={
                                    <OutlinedInput
                                        name="select"
                                        id="outlined-select-simple"
                                    />
                                }
                                IconComponent={() => <Box style={{width:16, height:16, marginRight:8}}><ArrowDownIcon/> </Box>}
                            >
                                <MenuItem className={classes.menuItem} value="리더만">리더만</MenuItem>
                                <MenuItem className={classes.menuItem} value="리더와 관리자">리더와 관리자</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.listBox}>
                        <Typography className={classes.textStyle}>커뮤니티 게시글 공지 등록</Typography>

                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                value={this.state.noticeRegistration}
                                onChange={this.handleChangeNoticeRegistration}
                                input={
                                    <OutlinedInput
                                        name="select"
                                        id="outlined-select-simple"
                                    />
                                }
                                IconComponent={() => <Box style={{width:16, height:16, marginRight:8}}><ArrowDownIcon/> </Box>}
                            >
                                <MenuItem className={classes.menuItem} value="리더만">리더만</MenuItem>
                                <MenuItem className={classes.menuItem} value="리더와 관리자">리더와 관리자</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.listBox}>
                        <Typography className={classes.textStyle}>커뮤니티 게시글 삭제</Typography>

                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                value={this.state.deletePost}
                                onChange={this.handleChangeDeletePost}
                                input={
                                    <OutlinedInput
                                        name="select"
                                        id="outlined-select-simple"
                                    />
                                }
                                IconComponent={() => <Box style={{width:16, height:16, marginRight:8}}><ArrowDownIcon/> </Box>}
                            >
                                <MenuItem className={classes.menuItem} value="리더만">리더만</MenuItem>
                                <MenuItem className={classes.menuItem} value="리더와 관리자">리더와 관리자</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.listBox}>
                        <Typography className={classes.textStyle}>커뮤니티 토픽 설정</Typography>

                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                value={this.state.topic}
                                onChange={this.handleChangeTopic}
                                input={
                                    <OutlinedInput
                                        name="select"
                                        id="outlined-select-simple"
                                    />
                                }
                                IconComponent={() => <Box style={{width:16, height:16, marginRight:8}}><ArrowDownIcon/> </Box>}
                            >
                                <MenuItem className={classes.menuItem} value="리더만">리더만</MenuItem>
                                <MenuItem className={classes.menuItem} value="리더와 관리자">리더와 관리자</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.listBox}>
                        <Typography className={classes.textStyle}>자료실 폴더 만들기</Typography>

                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                value={this.state.folder}
                                onChange={this.handleChangeFolder}
                                input={
                                    <OutlinedInput
                                        name="select"
                                        id="outlined-select-simple"
                                    />
                                }
                                IconComponent={() => <Box style={{width:16, height:16, marginRight:8}}><ArrowDownIcon/> </Box>}
                            >
                                <MenuItem className={classes.menuItem} value="리더만">리더만</MenuItem>
                                <MenuItem className={classes.menuItem} value="리더와 관리자">리더와 관리자</MenuItem>
                                <MenuItem className={classes.menuItem} value="모든 멤버">모든 멤버</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.listBox}>
                        <Typography className={classes.textStyle}>설문조사 만들기</Typography>

                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                value={this.state.surveyCreate}
                                onChange={this.handleChangeSurveyCreate}
                                input={
                                    <OutlinedInput
                                        name="select"
                                        id="outlined-select-simple"
                                    />
                                }
                                IconComponent={() => <Box style={{width:16, height:16, marginRight:8}}><ArrowDownIcon/> </Box>}
                            >
                                <MenuItem className={classes.menuItem} value="리더만">리더만</MenuItem>
                                <MenuItem className={classes.menuItem} value="리더와 관리자">리더와 관리자</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.listBox}>
                        <Typography className={classes.textStyle}>설문조사 폴더 만들기</Typography>

                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                value={this.state.surveyFolderCreate}
                                onChange={this.handleChangeSurveyFolderCreate}
                                input={
                                    <OutlinedInput
                                        name="select"
                                        id="outlined-select-simple"
                                    />
                                }
                                IconComponent={() => <Box style={{width:16, height:16, marginRight:8}}><ArrowDownIcon/> </Box>}
                            >
                                <MenuItem className={classes.menuItem} value="리더만">리더만</MenuItem>
                                <MenuItem className={classes.menuItem} value="리더와 관리자">리더와 관리자</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                </Box>

            </div>
        );
    }
}

export default withStyles(styles)(MemberPermissionSettingComponent);