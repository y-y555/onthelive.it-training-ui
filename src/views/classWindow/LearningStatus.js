import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Avatar, Box, Button, FormControl, IconButton, Menu, MenuItem, Select, Typography, TablePagination } from '@material-ui/core';
import clsx from 'clsx';
import { ReactComponent as CheckCircleAgreeOffIcon } from '../../common/images/CheckCircleAgreeOffIcon.svg';
import { ReactComponent as CheckCircleAgreeOnIcon } from '../../common/images/CheckCircleAgreeOnIcon.svg';
import { ReactComponent as AsideUserIcon } from '../../common/images/AsideUserIcon.svg';
import { ReactComponent as DotIcon } from '../../common/images/DotIcon.svg';
import { ReactComponent as PlayIcon } from '../../common/images/PlayIcon.svg';
import { ReactComponent as Info } from '../../common/images/Info.svg';
import { ReactComponent as Browsers } from '../../common/images/Browsers.svg';
import { ReactComponent as ArrowDownIcon } from '../../common/images/ArrowDownIcon.svg';
import { ReactComponent as ChalkboardTeacher } from '../../common/images/ChalkboardTeacher.svg';
import { ReactComponent as MoreIcon } from '../../common/images/DotsThreeOutlineVerticalIcon.svg';
import { ReactComponent as CaretLeftIcon } from '../../common/images/CaretLeftIcon.svg';
import { ReactComponent as CaretRightIcon } from '../../common/images/CaretRightIcon.svg';

const styles = theme => ({
    root: {
        // display: 'flex',
        // alignItems: 'center',
        // padding: '20px 30px',
        // boxSizing: 'border-box',
        // margin: '0 auto',

        '@media all and (min-width: 1500px)': {
            width: 730,
        },
        width: 620,
        padding: '20px 30px',
        margin: '0 auto',
        border: '1px solid #d3d7db',
        borderRadius: 8,
        '& ul, ol': {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listStyle: {
        position: 'relative',
        marginBottom: 60,
        '&:last-child': {
            marginBottom: 0,
        },
        '& h5': {
            borderBottom: '1px solid #d3d7db',
            fontSize: '0.875rem',
            fontWeight: 700,
            paddingBottom: 8,
        },
    },
    listItemStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #d3d7db',
        padding: '17px 0 17px 23px',
        cursor: 'pointer',
        '&:first-child': {
            borderTop: '1px solid #d3d7db',
        },
    },
    avatar: {
        marginRight: 10,
        backgroundColor: '#a3a8af',
        '& svg path': {
            fill: '#fff',
        },
    },
    name: {
        fontSize: '0.875rem',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
    },
    groupInfo: {
        fontSize: '0.75rem',
        color: '#666666',
        marginTop: 7,
    },
    listItemContent: {
        // padding: 21,
        // backgroundColor: '#fff',
    },
    userBar: {
        display: 'flex',
        alignItems: 'center',
        margin: '20px 0 4px',
        '& > span': {
            fontSize: '0.813rem',
            color: '#a3a8af',
            marginLeft: 4,
        },
        '& svg': {
            width: 20,
            height: 20,
            '& path': {
                fill: '#a3a8af',
            },
        },
    },
    tagBox: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        '& > div': {
            marginLeft: 6,
            textAlign: 'center',
        },
    },
    tag: {
        fontSize: '0.625rem',
        color: '#fff',
        fontWeight: 600,
        borderRadius: 3,
        padding: '3px 6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
            width: 8,
            height: 8,
            marginRight: 2,
        },
    },
    numTxt: {
        height: '1rem',
        fontSize: '0.625rem',
        color: '#000',
        '& span': {
            fontSize: '1rem',
        },
    },
    onlyTxt: {
        boxSizing: 'border-box',
        fontSize: '0.813rem',
        paddingTop: '0.187rem',
    },
    btnStyle: {
        padding: 0,
        marginLeft: 6,
        fontSize: '0.625rem',
        color: '#1664f5',
        minWidth: 'auto',
        marginTop: 7,
        '&:hover': {
            backgroundColor: '#fff',
        },
    },
    titleText: {
        fontSize: '0.75rem',
        color: '#666',
    },
    iconBtnStyle: {
        padding: 0,
        width: 14,
        height: 14,
        marginLeft: 2,
    },
    resultTxt: {
        fontSize: '0.875rem',
        '& b': {
            fontSize: '1.5rem',
            fontWeight: 600,
        },
    },
    IconButton: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
});

class LearningStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableTd: [
                {
                    userName: '김온더',
                    className: '강의실명',
                    date: '2021.12.01.',
                },
                {
                    userName: '김온더',
                    className: '강의실명',
                    date: '2021.12.02.',
                },
                {
                    userName: '김온더',
                    className: '강의실명',
                    date: '2021.12.03.',
                },
                {
                    userName: '김온더',
                    className: '강의실명',
                    date: '2021.12.04.',
                },
            ],
            LearningList: [
                {
                    userName: '김온더',
                    className: '강의실명',
                    date: '2021.12.01.',
                    name: '변요한',
                    lastDate: '2022.5.31',
                    learnCont: '5',
                    learnTime: '30',
                    learnTimeTotal: '50',
                    viewActive: false,
                },
                {
                    userName: '김온더',
                    className: '강의실명',
                    date: '2021.12.02.',
                    name: '박서윤',
                    lastDate: '2022.5.31',
                    learnCont: '5',
                    learnTime: '30',
                    learnTimeTotal: '50',
                    viewActive: false,
                },
                {
                    userName: '김온더',
                    className: '강의실명',
                    date: '2021.12.02.',
                    name: '김민준',
                    lastDate: '2022.5.31',
                    learnCont: '5',
                    learnTime: '30',
                    learnTimeTotal: '50',
                    viewActive: false,
                },
            ],
            anchorEl: null,
            page: 0,
            rowsPerPage: 5,
        };
    }

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };
    clickMore = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    clickMoreClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        return (
            <div className={classes.root}>
                <Box className={classes.listStyle}>
                    <Box className={classes.listItemContent}>
                        <Box className={classes.userBar}>
                            <ChalkboardTeacher /> <span>{this.state.LearningList.length}개</span>
                        </Box>
                        <Box>
                            {this.state.LearningList.map((list, i) => (
                                <Box className={classes.listItemStyle} style={{ padding: '6px 0' }}>
                                    <Box className={classes.flexCenter}>
                                        <Avatar className={classes.avatar}>
                                            <AsideUserIcon />
                                        </Avatar>
                                        <Box display="flex" flexDirection="column">
                                            <Typography className={classes.name}>{list.userName} </Typography>
                                            <span className={classes.groupInfo}>
                                                {list.className} | {list.date} 가입
                                            </span>
                                        </Box>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <IconButton className={classes.IconButton} disableRipple onClick={this.handleClickViewActive}>
                                            {list.viewActive === false ? <CaretRightIcon /> : <CaretLeftIcon />}
                                        </IconButton>
                                        <Box display="flex" flexDirection="column">
                                            <Box className={classes.tagBox}>
                                                {list.viewActive === false ? (
                                                    <>
                                                        <Box>
                                                            <span className={classes.tag} style={{ backgroundColor: '#fb4a59' }}>
                                                                <DotIcon /> LIVE
                                                            </span>
                                                            <Typography className={classes.numTxt}>
                                                                <span>20</span>분
                                                            </Typography>
                                                        </Box>
                                                        <Box>
                                                            <span className={classes.tag} style={{ backgroundColor: '#000' }}>
                                                                <PlayIcon /> VOD
                                                            </span>
                                                            <Typography className={classes.numTxt}>
                                                                <span>70</span>분
                                                            </Typography>
                                                        </Box>
                                                        <Box>
                                                            <span className={classes.tag} style={{ backgroundColor: '#00c880' }}>
                                                                실습
                                                            </span>
                                                            <Typography className={clsx(classes.numTxt, classes.onlyTxt)}>완료</Typography>
                                                            <Button className={classes.btnStyle} disableRipple>
                                                                실습보기
                                                            </Button>
                                                        </Box>
                                                    </>
                                                ) : null}
                                                <Box>
                                                    <span
                                                        className={classes.tag}
                                                        style={{ backgroundColor: '#4282fa', position: 'relative' }}
                                                        onClick={this.chipInfoTooltip}
                                                    >
                                                        평가
                                                        {this.state.chipInfoTooltip && (
                                                            <Box className={classes.explanationBox}>
                                                                <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                                                                    <Box className={classes.stepContents}>100점 만점</Box>
                                                                </Box>
                                                            </Box>
                                                        )}
                                                    </span>
                                                    <Typography className={classes.numTxt}>
                                                        <span>40</span>점
                                                    </Typography>
                                                    <Button className={classes.btnStyle} disableRipple>
                                                        채점하기
                                                    </Button>
                                                </Box>
                                                <Box>
                                                    <span className={classes.tag} style={{ backgroundColor: '#8a42ff' }}>
                                                        과제
                                                    </span>
                                                    <Typography className={classes.numTxt}>
                                                        <span>98</span>점
                                                    </Typography>
                                                    <Button className={classes.btnStyle} disableRipple>
                                                        과제보기
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Box>

                                        <Box style={{ marginLeft: 20 }}>
                                            <Box display="flex" justifyContent="flex-end">
                                                <Typography className={classes.titleText}>진도률</Typography>
                                                <IconButton className={classes.iconBtnStyle} onClick={this.handleClickAverageTooltip} disableRipple>
                                                    <Info />
                                                </IconButton>
                                            </Box>
                                            <Typography className={classes.resultTxt}>
                                                <b>100</b>%
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={this.state.tableTd.length}
                        rowsPerPage={this.state.rowsPerPage}
                        page={this.state.page}
                        backIconButtonProps={{
                            'aria-label': '페이지당 행 수',
                        }}
                        nextIconButtonProps={{
                            'aria-label': '다음 페이지',
                        }}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />

                    {this.state.listItem === true ? (
                        <Box className={classes.listStyleOn}>
                            <Box className={classes.listItemStyleOn} onClick={this.listItemChange}>
                                <Avatar className={classes.avatar}>
                                    <AsideUserIcon />
                                </Avatar>
                                <Box display="flex" flexDirection="column">
                                    <span className={classes.titleName}>김온더</span>
                                    <span className={classes.groupInfo}>소속강의실명 | 2021.12.01 가입 </span>
                                </Box>
                            </Box>
                        </Box>
                    ) : null}
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(LearningStatus);
