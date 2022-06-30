import React, { Component } from 'react';
import { Avatar, Box, Button, IconButton, Tooltip, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { ReactComponent as SmileyFillIcon } from '../../common/images/SmileyFillIcon.svg';
import { ReactComponent as AlarmFillIcon } from '../../common/images/AlarmFillIcon.svg';
import { ReactComponent as LinkFillIcon } from '../../common/images/LinkFillIcon.svg';
import { ReactComponent as ChartBarFillIcon } from '../../common/images/ChartBarFillIcon.svg';
import { ReactComponent as StudentFillIcon } from '../../common/images/StudentFillIcon.svg';
import { ReactComponent as HandsClappingIcon } from '../../common/images/HandsClappingIcon.svg';
import { ReactComponent as ChatCircleDotsIcon } from '../../common/images/ChatCircleDotsIcon.svg';
import { ReactComponent as ChatIcon } from '../../common/images/ChatIcon.svg';
import { ReactComponent as DotIcon } from '../../common/images/DotIcon.svg';
import { ReactComponent as BookmarksSimple } from '../../common/images/BookmarksSimple.svg';
import { ReactComponent as BookmarksSimpleGreen } from '../../common/images/BookmarksSimpleGreen.svg';
import { ReactComponent as BookmarksSimpleRed } from '../../common/images/BookmarksSimpleRed.svg';
import clsx from 'clsx';
import { withRouter } from 'react-router-dom';
import { ReactComponent as EyeTinyIcon } from '../../common/images/EyeIcon.svg';
import { ReactComponent as VodIcon } from '../../common/images/VodIcon.svg';
import { ReactComponent as LockKey } from '../../common/images/LockKey.svg';
import { ReactComponent as AsideUserIcon } from '../../common/images/AsideUserIcon.svg';

const styles = theme => ({
    root: {
        '& ul, ol': {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    listBox: {
        border: '1px solid #c4c4c4',
        borderRadius: 10,
        boxShadow: '0 1px 1px 0 #BEBEBE',
        marginBottom: 20,
    },
    liveBox: {
        borderColor: '#00C880',
        borderTopWidth: 7,
    },
    vodBox: {
        borderColor: '#000',
        borderTopWidth: 7,
    },
    privateBox: {
        borderColor: '#a3a8af',
        borderTopWidth: 7,
    },
    listBoxContent: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '25px 20px 20px 40px',
        cursor: 'pointer',
    },
    titleText: {
        fontSize: '1.563rem',
        color: '#0d0d0d',
        fontWeight: 600,
    },
    subText: {
        '@media all and (min-width: 1500px)': {
            width: 480,
        },
        marginTop: 5,
        fontSize: '0.938rem',
        lineHeight: 1.3,
        fontWeight: 600,
        color: '#0d0d0d',
        width: 420,
        textAlign: 'left',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        marginBottom: 20,
    },
    avatar: {
        background: '#a3a8af',
        '& svg': {
            width: 20,
            height: 20,
            '& path': {
                fill: '#fff',
            },
        },
    },
    avatarList: {
        display: 'flex',
        '& li': {
            marginTop: 5,
            marginRight: '-6px',
            '&>div': {
                width: 27,
                height: 27,
                zIndex: 10,
                border: '1px solid #fff',
                overflow: 'hidden',
            },
            '&:last-child': {
                zIndex: 20,
            },
        },
    },
    avatarLastStyle: {
        width: 27,
        height: 27,
        backgroundColor: '#F1F1F1',
        border: '1px solid #fff',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        fontSize: '0.688rem',
    },
    privateText: {
        color: 'rgba(13, 13, 13, 0.3)',
    },
    listBoxTitleEnd: {
        textDecoration: 'line-through',
    },
    caption: {
        width: 45,
        height: 20,
        borderRadius: 2,
        boxSizing: 'border-box',
        marginBottom: 20,
        marginRight: 7,
        color: '#fff',
        '& svg': {
            marginRight: 3,
        },
    },
    captionText: {
        fontSize: '0.75rem',
        fontWeight: 600,
        paddingTop: 2,
    },
    captionLive: {
        backgroundColor: '#FB4A59',
        '& svg': {
            width: 5,
            height: 5,
        },
    },
    captionVod: {
        backgroundColor: '#000',
        '& svg': {
            width: 9,
            height: 9,
        },
    },
    captionGreen: {
        backgroundColor: '#00c880',
    },
    captionBlue: {
        backgroundColor: '#4282fa',
    },
    captionPurple: {
        backgroundColor: '#8a42ff',
    },
    captionPrivate: {
        width: 60,
        backgroundColor: 'transparent',
    },
    captionTextPrivate: {
        fontSize: '0.875rem',
        fontWeight: 600,
        paddingTop: 2,
        color: '#0d0d0d',
    },
    captionEnd: {
        backgroundColor: '#505050',
    },
    listStyle: {
        margin: '8px 0!important',
        '& li': {
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.875rem',
            marginTop: 7,
            '&:first-child': {
                marginTop: 0,
            },
            '& svg': {
                marginRight: 4,
            },
        },
    },
    asideControl: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    iconButtonBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginBottom: 15,
        '& button': {
            padding: 0,
            marginBottom: 4,
        },
    },
    rightText: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: '0.875rem',
        fontWeight: 600,
        color: '#333',
        '& svg': {
            marginRight: 3,
        },
    },
    rightBox: {
        borderRadius: 30,
        padding: '4px 10px 6px',
        height: 24,
        boxSizing: 'border-box',
        background: '#fff',
        fontSize: '0.875rem',
        marginRight: 14,
        border: '1px solid #000',
        color: '#000',
    },
    rightBox1: {
        border: '1px solid #0097ff',
        color: '#0097ff',
    },
    rightBox2: {
        border: '1px solid #8f8f8f',
        color: '#8f8f8f',
    },
    lightTooltip: {
        backgroundColor: '#FFFFF5',
        color: '#000',
        border: '1px solid #000',
        fontSize: '0.688rem',
        borderRadius: 0,
        marginLeft: 0,
        marginTop: 15,
    },
    btnOutlineStyle: {
        width: 110,
        boxSizing: 'border-box',
        border: '1px solid #0097FF',
        background: '#0097FF',
        color: '#fff',
        fontWeight: 600,
        padding: '6px 0',
        borderRadius: 7,
        fontSize: '0.938rem',
        '&:hover': {
            background: '#0097FF',
        },
    },
    btnOutlineStyle1: {
        border: '1px solid #bfbfbf',
        color: '#000',
        background: '#fff',
        '&:hover': {
            background: '#fff',
        },
    },
    btnPrivate: {
        border: '1px solid #bfbfbf',
        color: '#bfbfbf',
        background: '#fff',
        '&:hover': {
            background: '#fff',
        },
    },
    boxFooter: {
        backgroundColor: '#EDEDED',
        borderRadius: 10,
    },
    ftCount: {
        padding: '14px 24px',
        borderBottom: '1px solid #fff',
        display: 'flex',
        '& div': {
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.938rem',
            fontWeight: 600,
            color: 'rgba(0, 0, 0, 0.8)',
            marginRight: 25,
            '& svg': {
                width: 17,
                height: 17,
                marginRight: 4,
            },
        },
    },
    iconColor: {
        '& .like-icon': {
            fill: '#0097ff',
        },
    },
    numberText: {
        fontSize: '0.938rem',
        color: '#000',
        marginLeft: 5,
        marginTop: 2,
    },
    ftAdded: {
        padding: '5px 60px',
        '& button': {
            width: '50%',
            textAlign: 'center',
            cursor: 'pointer',
            fontSize: '0.938rem',
            color: '#000',
            '&:hover': {
                background: 'transparent',
            },
            '& svg': {
                marginRight: 5,
                opacity: '0.6',
            },
        },
    },
});

class ScheduleCardListItemComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '라이브',
            like: false,
        };
    }

    handleChangeLikeButton = () => {
        this.setState({ like: !this.state.like });
    };

    handleClickDetail = e => {
        this.props.navigate('/scheduleDetail');
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {/* 라이브  */}
                <Box className={clsx(classes.listBox, classes.liveBox)}>
                    <Box className={classes.listBoxContent} onClick={this.handleClickDetail}>
                        <Box>
                            <Box display="flex" justifyContent="center" alignItems="center" className={clsx(classes.caption, classes.captionLive)}>
                                <DotIcon />
                                <Typography className={classes.captionText}>LIVE</Typography>
                            </Box>
                            <Typography className={classes.titleText}>ISMS-P 인증심사 및 심사원 대비반</Typography>
                            <Typography variant="subtitle1" className={classes.subText}>
                                본 과정은 ISMS-P 통합 인증심사를 위한 종합 가이드로, ISMS-P 인증심사를 앞두고 있는 기업의 실무자와 심사원 자격 대비를
                                앞두고 있는 분들을 위한 과정입니다. ISMS-P...
                            </Typography>
                            <ul className={classes.avatarList}>
                                <li>
                                    <Avatar className={classes.avatar}>
                                        <AsideUserIcon />
                                    </Avatar>
                                </li>
                                <li>
                                    <Avatar className={classes.avatar}>
                                        <AsideUserIcon />
                                    </Avatar>
                                </li>
                                <li>
                                    <Avatar className={classes.avatar}>
                                        <AsideUserIcon />
                                    </Avatar>
                                </li>
                                <li>
                                    <div className={classes.avatarLastStyle}>+12</div>
                                </li>
                            </ul>
                        </Box>
                        <Box className={classes.asideControl}>
                            <Box display="flex" alignItems="center" mb={2}>
                                <Box className={clsx(classes.rightBox, classes.rightBox1)}>진행중</Box>
                                <Typography className={classes.rightText}>
                                    <BookmarksSimple />
                                    초급
                                </Typography>
                            </Box>

                            <Button className={classes.btnOutlineStyle} disableRipple>
                                강의하기
                            </Button>
                        </Box>
                    </Box>
                    <Box className={classes.boxFooter}>
                        <Box className={classes.ftCount}>
                            <Box>
                                <HandsClappingIcon className={this.state.like ? classes.iconColor : null} /> 5{' '}
                            </Box>
                            <Box>
                                <ChatCircleDotsIcon /> 2{' '}
                            </Box>
                        </Box>
                        <Box className={classes.ftAdded}>
                            <Button disableRipple onClick={this.handleChangeLikeButton}>
                                <HandsClappingIcon /> 좋아요
                            </Button>
                            <Button disableRipple onClick={this.handleClickDetail}>
                                <ChatCircleDotsIcon /> 댓글 달기
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {/* VOD, 실습  */}
                <Box className={clsx(classes.listBox, classes.vodBox)}>
                    <Box className={classes.listBoxContent} onClick={this.handleClickDetail}>
                        <Box>
                            <Box display="flex" alignItems="center">
                                <Box display="flex" justifyContent="center" alignItems="center" className={clsx(classes.caption, classes.captionVod)}>
                                    <VodIcon />
                                    <Typography className={classes.captionText}>VOD</Typography>
                                </Box>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    className={clsx(classes.caption, classes.captionGreen)}
                                >
                                    <Typography className={classes.captionText}>실습</Typography>
                                </Box>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    className={clsx(classes.caption, classes.captionBlue)}
                                >
                                    <Typography className={classes.captionText}>평가</Typography>
                                </Box>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    className={clsx(classes.caption, classes.captionPurple)}
                                >
                                    <Typography className={classes.captionText}>과제</Typography>
                                </Box>
                            </Box>

                            <Typography className={classes.titleText}>디지털 포렌식 전문가 2급 자격 대비반</Typography>
                            <Typography variant="subtitle1" className={classes.subText}>
                                디지털 포렌식의 기본적인 내용을 전체적으로 평가하며 컴퓨터 구조, 네트워크, 데이터베이스, 기초실무 이론을 습득할 수
                                있다.
                            </Typography>
                            <ul className={classes.avatarList}>
                                <li>
                                    <Avatar className={classes.avatar}>
                                        <AsideUserIcon />
                                    </Avatar>
                                </li>
                                <li>
                                    <Avatar className={classes.avatar}>
                                        <AsideUserIcon />
                                    </Avatar>
                                </li>
                                <li>
                                    <Avatar className={classes.avatar}>
                                        <AsideUserIcon />
                                    </Avatar>
                                </li>
                                <li>
                                    <div className={classes.avatarLastStyle}>+12</div>
                                </li>
                            </ul>
                        </Box>
                        <Box className={classes.asideControl}>
                            <Box>
                                <Box display="flex" alignItems="center" mb={2}>
                                    <Box className={classes.rightBox}>진행종료</Box>
                                    <Typography className={classes.rightText}>
                                        <BookmarksSimpleGreen />
                                        중급
                                    </Typography>
                                </Box>

                                <Box className={classes.iconButtonBox}>
                                    {/*<Tooltip title="링크" placement="right" classes={{ tooltip: classes.lightTooltip }}><IconButton><LinkFillIcon/></IconButton></Tooltip>*/}
                                    <Tooltip title="학습결과" placement="right" classes={{ tooltip: classes.lightTooltip }}>
                                        <IconButton>
                                            <ChartBarFillIcon />
                                        </IconButton>
                                    </Tooltip>
                                    {/*<Tooltip title="학생관리" placement="right" classes={{ tooltip: classes.lightTooltip }}><IconButton><StudentFillIcon/></IconButton></Tooltip>*/}
                                </Box>
                            </Box>
                            <Button className={clsx(classes.btnOutlineStyle, classes.btnOutlineStyle1)} disableRipple>
                                강의보기
                            </Button>
                        </Box>
                    </Box>
                    <Box className={classes.boxFooter}>
                        <Box className={classes.ftCount}>
                            <Box>
                                <HandsClappingIcon className={this.state.like ? classes.iconColor : null} /> 5{' '}
                            </Box>
                            <Box>
                                <ChatCircleDotsIcon /> 2{' '}
                            </Box>
                        </Box>
                        <Box className={classes.ftAdded}>
                            <Button disableRipple onClick={this.handleChangeLikeButton}>
                                <HandsClappingIcon /> 좋아요
                            </Button>
                            <Button disableRipple onClick={this.handleClickDetail}>
                                <ChatCircleDotsIcon /> 댓글 달기
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {/* 비공개  */}
                <Box className={clsx(classes.listBox, classes.privateBox)}>
                    <Box className={classes.listBoxContent} onClick={this.handleClickDetail}>
                        <Box>
                            <Box display="flex" justifyContent="center" alignItems="center" className={clsx(classes.caption, classes.captionPrivate)}>
                                <LockKey />
                                <Typography className={classes.captionTextPrivate}>비공개</Typography>
                            </Box>

                            <Typography className={clsx(classes.titleText, classes.privateText)}>디지털 포렌식 전문가 2급 자격 대비반</Typography>
                            <Typography variant="subtitle1" className={clsx(classes.subText, classes.privateText)}>
                                디지털 포렌식의 기본적인 내용을 전체적으로 평가하며 컴퓨터 구조, 네트워크, 데이터베이스, 기초실무 이론을 습득할 수
                                있다.
                            </Typography>
                            <ul className={classes.avatarList}>
                                <li>
                                    <Avatar className={classes.avatar}>
                                        <AsideUserIcon />
                                    </Avatar>
                                </li>
                                <li>
                                    <Avatar className={classes.avatar}>
                                        <AsideUserIcon />
                                    </Avatar>
                                </li>
                                <li>
                                    <Avatar className={classes.avatar}>
                                        <AsideUserIcon />
                                    </Avatar>
                                </li>
                                <li>
                                    <div className={classes.avatarLastStyle}>+12</div>
                                </li>
                            </ul>
                        </Box>
                        <Box className={classes.asideControl}>
                            <Box>
                                <Box display="flex" alignItems="center" mb={2}>
                                    <Box className={clsx(classes.rightBox, classes.rightBox2)}>진행종료</Box>
                                    <Typography className={classes.rightText}>
                                        <BookmarksSimpleRed />
                                        고급
                                    </Typography>
                                </Box>
                            </Box>
                            <Button className={clsx(classes.btnOutlineStyle, classes.btnPrivate)} disableRipple>
                                강의보기
                            </Button>
                        </Box>
                    </Box>
                    <Box className={classes.boxFooter}>
                        <Box className={classes.ftCount}>
                            <Box>
                                <HandsClappingIcon className={this.state.like ? classes.iconColor : null} /> 5{' '}
                            </Box>
                            <Box>
                                <ChatCircleDotsIcon /> 2{' '}
                            </Box>
                        </Box>
                        <Box className={classes.ftAdded}>
                            <Button disableRipple onClick={this.handleChangeLikeButton}>
                                <HandsClappingIcon /> 좋아요
                            </Button>
                            <Button disableRipple onClick={this.handleClickDetail}>
                                <ChatCircleDotsIcon /> 댓글 달기
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {/*  종료  */}
                <Box className={classes.listBox}>
                    <Box className={classes.listBoxContent} onClick={this.handleClickDetail}>
                        <Box>
                            <Box display="flex" justifyContent="center" alignItems="center" className={clsx(classes.caption, classes.captionEnd)}>
                                <Typography className={classes.captionText}>종료</Typography>
                            </Box>
                            <Typography className={clsx(classes.titleText, classes.listBoxTitleEnd)}>온더라이브 기획미팅</Typography>
                            <Typography variant="subtitle1" className={classes.subText}>
                                하반기 온라인 마케팅 서비스 기획 회의
                            </Typography>
                            <ul className={classes.avatarList}>
                                <li>
                                    <Avatar className={classes.avatar}>
                                        <AsideUserIcon />
                                    </Avatar>
                                </li>
                                <li>
                                    <Avatar className={classes.avatar}>
                                        <AsideUserIcon />
                                    </Avatar>
                                </li>
                                <li>
                                    <Avatar className={classes.avatar}>
                                        <AsideUserIcon />
                                    </Avatar>
                                </li>
                                <li>
                                    <div className={classes.avatarLastStyle}>+12</div>
                                </li>
                            </ul>
                        </Box>
                        <Box className={classes.asideControl}>
                            <Typography className={classes.rightText}>
                                <BookmarksSimple />
                                초급
                            </Typography>
                            <Box className={classes.iconButtonBox}>
                                <Tooltip title="학습결과" placement="right" classes={{ tooltip: classes.lightTooltip }}>
                                    <IconButton>
                                        <ChartBarFillIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.boxFooter}>
                        <Box className={classes.ftCount}>
                            <Box>
                                <HandsClappingIcon className={this.state.like ? classes.iconColor : null} /> 5{' '}
                            </Box>
                            <Box>
                                <ChatCircleDotsIcon /> 2{' '}
                            </Box>
                        </Box>
                        <Box className={classes.ftAdded}>
                            <Button disableRipple>
                                <HandsClappingIcon /> 좋아요
                            </Button>
                            <Button disableRipple onClick={this.handleClickDetail}>
                                <ChatCircleDotsIcon /> 댓글 달기
                            </Button>
                        </Box>
                    </Box>
                </Box>
                {/*  종료  */}
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(ScheduleCardListItemComponent));
