import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Avatar, Box, Button, FormControl, IconButton, Menu, MenuItem, Select, TableCell, Typography } from '@material-ui/core';
import { ReactComponent as ArrowDownIcon } from '../../common/images/ArrowDownIcon.svg';
import { ReactComponent as Browsers } from '../../common/images/Browsers.svg';
import clsx from 'clsx';
import { ReactComponent as CheckCircleAgreeOffIcon } from '../../common/images/CheckCircleAgreeOffIcon.svg';
import { ReactComponent as CheckCircleAgreeOnIcon } from '../../common/images/CheckCircleAgreeOnIcon.svg';
import { ReactComponent as AsideUserIcon } from '../../common/images/AsideUserIcon.svg';
import StudentPreviousBoardComponent from './StudentPreviousBoardComponent';
const styles = theme => ({
    root: {
        '@media all and (min-width: 1500px)': {
            width: 730,
        },
        width: 620,
        paddingBottom: 70,
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
    filterStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #d3d7db',
        margin: '30px 0 17px',
        paddingBottom: 9,
        cursor: 'pointer',
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
    },
    groupInfo: {
        fontSize: '0.75rem',
        color: '#979797',
        marginTop: 7,
    },
    formControl: {
        display: 'flex',
        alignItems: 'flex-end',
        '&>div': {
            fontSize: '0.75rem',
            fontWeight: 600,
            '&:before, &:after': {
                content: '',
                display: 'none',
                width: 0,
                size: 0,
            },
        },
        '& .MuiSelect-select:focus': {
            background: 'transparent',
        },
        '& .MuiSelect-select.MuiSelect-select': {
            paddingRight: 0,
        },
    },
    menuItem: {
        fontFamily: 'NanumSquareRoundOTF',
        fontSize: '0.875rem',
        color: '#0d0d0d',
        '&:hover': {
            background: '#d3d7db',
        },
        '&.Mui-selected:hover': {
            background: '#d3d7db',
        },
        '&.Mui-selected': {
            background: 'transparent',
        },
    },
    menuBox: {
        '& .MuiPopover-paper': {
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.08)',
            borderRadius: 7,
            border: '1.5px solid #d4d4d6',
        },
    },
    checkBoxStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#a9adb4',
        fontSize: '0.875rem',
        cursor: 'pointer',
        '& svg': {
            width: 20,
            height: 20,
            marginRight: 4,
            color: '#a9adb4',
        },
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
    },
    checkBoxStyleOn: {
        color: '#0097FF',
    },
    listStyleOn: {
        borderRadius: 10,
        overflow: 'hidden',
        boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.45)',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 99,
        width: '100%',
    },
    listItemStyleOn: {
        backgroundColor: '#eee',
        padding: '21px 25px',
        cursor: 'pointer',
    },
    titleName: {
        fontSize: '1.25rem',
    },
    listItemContent: {
        padding: 21,
        backgroundColor: '#fff',
    },
    stateStyle: {
        fontSize: '1.5rem',
        color: '#8f8f8f',
    },
    btnStyle: {
        borderRadius: 4,
        border: '1px solid #bfbfbf',
        backgroundColor: '#fff',
        color: '#000',
        fontSize: '0.875rem',
        padding: '6px 23px',
        marginLeft: 20,
        '&:hover': {
            backgroundColor: '#fff',
        },
    },
    btnStyleActive: {
        backgroundColor: '#1664f5',
        borderColor: '#1664f5',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#1664f5',
        },
    },
});
class StudentClassEvaluationTableCompononet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkBox: true,
            filter: '?????? ????????? ???',
            anchorElManager: null,
            anchorGeneral: null,
            listItem: false,
            LearningList: [
                { name: '?????????', lastDate: '2022.5.31', learnCont: '5', learnTime: '30', learnTimeTotal: '50', state: '????????????' },
                { name: '?????????', lastDate: '2022.5.31', learnCont: '5', learnTime: '30', learnTimeTotal: '50', state: '?????????' },
                { name: '?????????', lastDate: '2022.5.31', learnCont: '5', learnTime: '30', learnTimeTotal: '50', state: '?????????' },
            ],
            boardList: [
                { name: '??????', count: '3' },
                { name: '?????? ??????', count: '2' },
                { name: '?????????', count: '1' },
            ],
        };
    }

    handleChangeCheckBox = () => {
        this.setState({ checkBox: !this.state.checkBox });
    };

    handleClickManager = event => {
        this.setState({ anchorElManager: event.currentTarget });
    };
    handleClickGeneral = event => {
        this.setState({ anchorGeneral: event.currentTarget });
    };

    listItemChange = () => {
        this.setState({ listItem: !this.state.listItem });
    };

    handleClose = () => {
        this.setState({
            anchorElManager: null,
            anchorGeneral: null,
        });
    };

    handleChangeSort = event => {
        this.setState({ filter: event.target.value });
    };

    render() {
        const { classes } = this.props;
        const { anchorElManager, anchorGeneral } = this.state;
        const manager = Boolean(anchorElManager);
        const general = Boolean(anchorGeneral);

        return (
            <div className={classes.root}>
                <StudentPreviousBoardComponent boardList={this.state.boardList} />
                <Box>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.filter}
                            onChange={this.handleChangeSort}
                            displayEmpty
                            IconComponent={() => (
                                <Box style={{ width: 16, height: 16, marginLeft: 5 }}>
                                    <ArrowDownIcon />{' '}
                                </Box>
                            )}
                        >
                            <MenuItem value="?????? ????????? ???" className={classes.menuItem}>
                                ?????? ????????? ???
                            </MenuItem>
                            <MenuItem value="???????????? ???" className={classes.menuItem}>
                                ???????????? ???
                            </MenuItem>
                            <MenuItem value="?????? ?????????" className={classes.menuItem}>
                                ?????? ?????????
                            </MenuItem>
                            <MenuItem value="????????? ???" className={classes.menuItem}>
                                ????????? ???
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box className={classes.listStyle}>
                    <Box className={classes.listItemStyle} onClick={this.listItemChange}>
                        <Box className={classes.flexCenter}>
                            <Avatar className={classes.avatar}>
                                <Browsers />
                            </Avatar>
                            <Box display="flex" flexDirection="column">
                                <span className={classes.name}>????????? ?????? ????????????</span>
                                <span className={classes.groupInfo}>2022.6.1. | ???????????? : ~2022.6.1. | ????????? : 2022.5.11 ?????? 2:22 </span>
                            </Box>
                        </Box>
                        <Box display="flex">
                            <Typography className={classes.stateStyle} style={{ color: '#f51666' }}>
                                ????????????
                            </Typography>
                            <Button className={classes.btnStyle} disableRipple>
                                ????????????
                            </Button>
                        </Box>
                    </Box>
                    {this.state.listItem === true ? (
                        <Box className={classes.listStyleOn}>
                            <Box className={classes.listItemStyleOn} onClick={this.listItemChange}>
                                <Box display="flex" flexDirection="column">
                                    <span className={classes.titleName}>????????? ?????? ????????????</span>
                                    <span className={classes.groupInfo}>2022.6.1. | ???????????? : ~2022.6.1. | ????????? : 2022.5.11 ?????? 2:22</span>
                                </Box>
                            </Box>
                            <Box className={classes.listItemContent}>
                                <Box display="flex" alignItems="center" justifyContent="space-between" style={{ borderBottom: '1px solid #ddd' }}>
                                    <Box
                                        onClick={this.handleChangeCheckBox}
                                        className={this.state.checkBox ? classes.checkBoxStyle : clsx(classes.checkBoxStyle, classes.checkBoxStyleOn)}
                                    >
                                        {this.state.checkBox ? <CheckCircleAgreeOffIcon /> : <CheckCircleAgreeOnIcon />}
                                        ???????????? ????????????
                                    </Box>
                                    <FormControl className={classes.formControl}>
                                        <Select
                                            value={this.state.filter}
                                            onChange={this.handleChangeSort}
                                            displayEmpty
                                            IconComponent={() => (
                                                <Box style={{ width: 16, height: 16, marginLeft: 5 }}>
                                                    <ArrowDownIcon />{' '}
                                                </Box>
                                            )}
                                        >
                                            <MenuItem value="?????? ??????????????? ???" className={classes.menuItem}>
                                                ?????? ??????????????? ???
                                            </MenuItem>
                                            <MenuItem value="?????? ????????? ???" className={classes.menuItem}>
                                                ?????? ????????? ???
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box className={classes.userBar}>
                                    <AsideUserIcon /> <span>{this.state.LearningList.length}???</span>
                                </Box>
                                <Box>
                                    {this.state.LearningList.map((list, i) => (
                                        <Box className={classes.listItemStyle}>
                                            <Box className={classes.flexCenter}>
                                                <Avatar className={classes.avatar}>
                                                    <Browsers />
                                                </Avatar>
                                                <Box display="flex" flexDirection="column">
                                                    <span className={classes.name}>{list.name}</span>
                                                    <span className={classes.groupInfo}>
                                                        ????????? ????????? : {list.lastDate} | ?????? ?????? {list.learnCont}??? | ?????? ?????? {list.learnTime}???/
                                                        {list.learnTimeTotal}???
                                                    </span>
                                                </Box>
                                            </Box>
                                            {list.state === '????????????' ? (
                                                <Typography className={classes.stateStyle} style={{ color: '#f51666' }}>
                                                    ????????????
                                                </Typography>
                                            ) : list.state === '?????????' ? (
                                                <Typography className={classes.stateStyle}>?????????</Typography>
                                            ) : list.state === '?????????' ? (
                                                <Typography className={classes.stateStyle} style={{ color: '#1664f5' }}>
                                                    ?????? ???
                                                </Typography>
                                            ) : null}
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    ) : null}

                    <Box className={classes.listItemStyle}>
                        <Box className={classes.flexCenter}>
                            <Avatar className={classes.avatar}>
                                <Browsers />
                            </Avatar>
                            <Box display="flex" flexDirection="column">
                                <span className={classes.name}>????????? ?????? ?????? ????????? 1</span>
                                <span className={classes.groupInfo}>2022.6.1. | ???????????? : ~2022.6.1. | ????????? : -</span>
                            </Box>
                        </Box>
                        <Box display="flex">
                            <Typography className={classes.stateStyle}>?????????</Typography>
                            <Button className={clsx(classes.btnStyle, classes.btnStyleActive)} disableRipple>
                                ????????????
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(StudentClassEvaluationTableCompononet);
