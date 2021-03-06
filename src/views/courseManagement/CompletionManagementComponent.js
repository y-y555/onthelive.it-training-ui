import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { ReactComponent as Info } from '../../common/images/Info.svg';
import clsx from 'clsx';
import CompletionManagementTableComponent from './CompletionManagementTableComponent';
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
            filter: '??????????????????',
            checkBox: true,
            LearningList: [
                {
                    userName: '?????????',
                    className: '????????????',
                    count: '02',
                    level: '??????',
                    viewActive: false,
                    live: '20',
                    vod: '70',
                    training: '??????',
                    evaluation: '40',
                    assignment: '98',
                },
                {
                    userName: '?????????',
                    className: '????????????',
                    count: '02',
                    level: '??????',
                    viewActive: false,
                    live: '20',
                    vod: '70',
                    training: '??????',
                    evaluation: '40',
                    assignment: '98',
                },
                {
                    userName: '?????????',
                    className: '????????????',
                    count: '02',
                    level: '??????',
                    viewActive: false,
                    live: '20',
                    vod: '70',
                    training: '??????',
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
                        <Typography className={classes.titleText}>?????? ?????? ?????????</Typography>
                        <Info />
                    </Box>

                    <Box display="flex" mt={3}>
                        <Box className={clsx(classes.boxIn, classes.boxInLeft)}>
                            <Box className={classes.boxLine}>
                                <Box display="flex" alignItems="center">
                                    <Typography className={classes.titleText}>??? ????????? ??????</Typography>
                                    <Typography className={classes.Percentage}>100%</Typography>
                                </Box>

                                <Typography className={classes.textStyle}>
                                    *????????? ????????? ?????? ????????? ?????? ????????? ?????? 100% ???????????? ???????????????.
                                    <br />
                                    <br />
                                    *?????? ????????? ????????? ???????????? ?????? ????????? ?????? ????????? ??? ????????????.
                                    <br />
                                    <br />
                                    *????????? ?????? ??? ????????? ?????? ???????????? ?????? ?????? ?????????.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className={classes.boxIn}>
                            <table border="0" width="100%">
                                <thead>
                                <tr align="center" bgcolor="white">
                                    <th>?????? ??????</th>
                                    <th>???????????? (?????????)</th>
                                    <th>?????? ??????</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr align="center" bgcolor="white">
                                    <td>????????? (Live)</td>
                                    <td>20%</td>
                                    <td align="left">
                                        <ul>
                                            <li>?????? ?????? 1??? ??????</li>
                                            <li>?????? ?????? ????????? ????????? ?????? ?????? ??? ???????????? ??????</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr align="center" bgcolor="white">
                                    <td>????????? (VOD)</td>
                                    <td>20%</td>
                                    <td align="left">
                                        <ul>
                                            <li>????????? 1??? ??????</li>
                                            <li>?????? ?????? ????????? ????????? ?????? ?????? ??? ???????????? ??????</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr align="center" bgcolor="white">
                                    <td>??????</td>
                                    <td>20%</td>
                                    <td align="left">
                                        <ul>
                                            <li>1??? ?????? ?????? ???</li>
                                            <li>????????? ?????? ?????? ?????? (??????????????? ?????? ??? ???)</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr align="center" bgcolor="white">
                                    <td>??????</td>
                                    <td>20%</td>
                                    <td align="left">
                                        <ul>
                                            <li>????????? ?????? ??????</li>
                                            <li>?????? ??? ?????????, ????????? ?????? ??? ????????? ?????? ?????? ?????? ?????? ??????</li>
                                            <li>????????? ?????? ?????? ?????? ??????</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr align="center" bgcolor="white">
                                    <td>??????</td>
                                    <td>20%</td>
                                    <td align="left">
                                        <ul>
                                            <li>????????? ?????? ??????</li>
                                            <li>????????? ?????? ?????? ?????? ??????</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr align="center" bgcolor="white" className={classes.lastBox}>
                                    <td>??? ?????????</td>
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
