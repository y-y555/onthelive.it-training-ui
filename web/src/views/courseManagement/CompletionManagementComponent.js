import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { ReactComponent as Info } from '../../common/images/Info.svg';
import clsx from 'clsx';
import CompletionManagementTableComponent from '../learningManagement/CompletionManagementTableComponent';
const styles = theme => ({
    root: {
        width: '100%',
    },
    box: {
        background: '#fff',
        borderRadius: 8,
        boxSizing: 'border-box',
        border: '1px solid #d3d7db',
        padding: '20px 20px 30px',
        boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.45)',
        marginBottom: 42,
    },
    titleText: {
        fontSize: '1.125rem',
        marginRight: 5,
    },
    boxIn: {
        width: '50%',
        '& table': {
            borderSpacing: 0,
            border: '1px solid #d3d7db',
            marginBottom: 130,
        },
        '& th': {
            background: 'rgba(0, 0, 0, 0.05)',
            padding: '10px 15px',
        },
        '& td': {
            verticalAlign: 'top',
            paddingTop: 15,
        },
        '& td:last-child': {
            padding: 0,
        },
        '& th, td': {
            borderBottom: '1px solid #d3d7db',
            fontSize: '0.875rem',
        },
        '& td:nth-child(2), th:nth-child(2)': {
            width: 110,
            borderLeft: '1px solid #d3d7db',
            borderRight: '1px solid #d3d7db',
        },
        '& td:nth-child(1), th:nth-child(1)': {
            width: 75,
        },
        '& ul': {
            paddingLeft: 30,
            paddingRight: 10,
        },
    },
    lastBox: {
        '& > td': {
            background: 'rgba(22, 100, 245, 0.2)',
            padding: '15px 10px',
            borderBottom: 0,
        },
    },
    boxInLeft: {
        boxSizing: 'border-box',
        paddingRight: 35,
    },
    boxLine: {
        borderRight: '1px solid #d3d7db',
        paddingRight: 30,
        height: '100%',
    },
    Percentage: {
        fontSize: '2rem',
        color: '#1664F5',
        fontWeight: 600,
    },
    textStyle: {
        fontSize: '1rem',
        marginTop: 20,
    },
});

class CompletionManagementComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '최근등록일순',
            checkBox: true,
            LearningList: [
                {
                    userName: '김온더',
                    className: '강의실명',
                    count: '02',
                    level: '초급',
                    viewActive: false,
                    live: '20',
                    vod: '70',
                    training: '완료',
                    evaluation: '40',
                    assignment: '98',
                },
                {
                    userName: '김온더',
                    className: '강의실명',
                    count: '02',
                    level: '초급',
                    viewActive: false,
                    live: '20',
                    vod: '70',
                    training: '완료',
                    evaluation: '40',
                    assignment: '98',
                },
                {
                    userName: '김온더',
                    className: '강의실명',
                    count: '02',
                    level: '초급',
                    viewActive: false,
                    live: '20',
                    vod: '70',
                    training: '완료',
                    evaluation: '40',
                    assignment: '98',
                },
            ],
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

    handleChangeCheckBox = () => {
        this.setState({ checkBox: !this.state.checkBox });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        return (
            <div className={classes.root}>
                <Box className={classes.box}>
                    <Box display="flex" alignItems="center">
                        <Typography className={classes.titleText}>수료 기준 가이드</Typography>
                        <Info />
                    </Box>

                    <Box display="flex" mt={3}>
                        <Box className={clsx(classes.boxIn, classes.boxInLeft)}>
                            <Box className={classes.boxLine}>
                                <Box display="flex" alignItems="center">
                                    <Typography className={classes.titleText}>총 진도율 기준</Typography>
                                    <Typography className={classes.Percentage}>100%</Typography>
                                </Box>

                                <Typography className={classes.textStyle}>
                                    *강의에 포함된 유형 개수별 완료 항목에 대해 100% 환산하여 반영됩니다.
                                    <br />
                                    <br />
                                    *수료 기준은 강사가 강의마다 정한 기준에 의해 상이할 수 있습니다.
                                    <br />
                                    <br />
                                    *강사가 정한 총 진도율 기준 이상이면 수료 처리 됩니다.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className={classes.boxIn}>
                            <table border="0" width="100%">
                                <thead>
                                <tr align="center" bgcolor="white">
                                    <th>평가 항목</th>
                                    <th>반영기준 (가중치)</th>
                                    <th>상세 조건</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr align="center" bgcolor="white">
                                    <td>라이브 (Live)</td>
                                    <td>20%</td>
                                    <td align="left">
                                        <ul>
                                            <li>접속 횟수 1회 이상</li>
                                            <li>참여 시간 강사가 지정한 시간 이상 시 접속으로 인정</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr align="center" bgcolor="white">
                                    <td>동영상 (VOD)</td>
                                    <td>20%</td>
                                    <td align="left">
                                        <ul>
                                            <li>조회수 1회 이상</li>
                                            <li>시청 시간 강사가 지정한 시간 이상 시 시청으로 인정</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr align="center" bgcolor="white">
                                    <td>실습</td>
                                    <td>20%</td>
                                    <td align="left">
                                        <ul>
                                            <li>1회 이상 완료 시</li>
                                            <li>여러번 실습 완료 가능 (진도율에는 반영 안 됨)</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr align="center" bgcolor="white">
                                    <td>평가</td>
                                    <td>20%</td>
                                    <td align="left">
                                        <ul>
                                            <li>한번만 제출 가능</li>
                                            <li>퀴즈 및 이미지, 텍스트 출제 시 문항별 점수 또는 오답 부여 가능</li>
                                            <li>강사가 기준 점수 입력 가능</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr align="center" bgcolor="white">
                                    <td>과제</td>
                                    <td>20%</td>
                                    <td align="left">
                                        <ul>
                                            <li>한번만 제출 가능</li>
                                            <li>강사가 기준 점수 입력 가능</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr align="center" bgcolor="white" className={classes.lastBox}>
                                    <td>총 진도율</td>
                                    <td>100%</td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </Box>
                    </Box>
                </Box>
                <CompletionManagementTableComponent
                    handleChangeCheckBox={this.handleChangeCheckBox}
                    filter={this.state.filter}
                    checkBox={this.state.checkBox}
                    LearningList={this.state.LearningList}
                    page={this.state.page}
                    rowsPerPage={this.state.rowsPerPage}
                />
            </div>
        );
    }
}

export default withStyles(styles)(CompletionManagementComponent);
