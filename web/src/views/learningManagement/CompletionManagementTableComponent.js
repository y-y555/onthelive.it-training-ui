import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Avatar, Box, Button, FormControl, IconButton, MenuItem, Select, TablePagination, Typography, Input, Menu } from '@material-ui/core';
import clsx from 'clsx';
import { ReactComponent as CheckCircleAgreeOffIcon } from '../../common/images/CheckCircleAgreeOffIcon.svg';
import { ReactComponent as CheckCircleAgreeOnIcon } from '../../common/images/CheckCircleAgreeOnIcon.svg';
import { ReactComponent as ArrowDownIcon } from '../../common/images/ArrowDownIcon.svg';
import { ReactComponent as AsideUserIcon } from '../../common/images/AsideUserIcon.svg';
import { ReactComponent as Browsers } from '../../common/images/Browsers.svg';
import { ReactComponent as CaretRightIcon } from '../../common/images/CaretRightIcon.svg';
import { ReactComponent as CaretLeftIcon } from '../../common/images/CaretLeftIcon.svg';
import { ReactComponent as DotIcon } from '../../common/images/DotIcon.svg';
import { ReactComponent as PlayIcon } from '../../common/images/PlayIcon.svg';
import { ReactComponent as Info } from '../../common/images/Info.svg';
import { ReactComponent as MoreIcon } from '../../common/images/DotsThreeOutlineVerticalIcon.svg';
const styles = theme => ({
    root: {},
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkBoxStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#656565',
        fontSize: '0.875rem',
        cursor: 'pointer',
        '& svg': {
            width: 20,
            height: 20,
            marginRight: 4,
            color: '#656565',
        },
    },
    checkBoxStyleOn: {
        color: '#0097FF',
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
    listStyle: {
        position: 'relative',
        marginBottom: 60,
        padding: '0 30px 30px',
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
    tableBtnStyle: {
        '&:hover': {
            background: 'transparent',
        },
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
    defaultTxt: {
        fontSize: '0.625rem',
        marginTop: 7,
        textAlign: 'right',
    },
    inputStyle: {
        width: '2rem',
        '& input': {
            textAlign: 'right',
            padding: 0,
            marginTop: 3,
        },
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
    buttonStyle: {
        padding: '3px 10px',
        marginLeft: 20,
        fontSize: '0.875rem',
        color: '#000',
        minWidth: 'auto',
        marginTop: 7,
        border: '1px solid #bfbfbf',
        borderRadius: 4,
        '&:hover': {
            backgroundColor: '#fff',
        },
    },
    titleTxt: {
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
class CompletionManagementTableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            input: true,
        };
    }
    clickMore = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    clickMoreClose = () => {
        this.setState({ anchorEl: null });
    };

    handChangeInput = () => {
        this.setState({ input: !this.state.input });
    };

    handChangeInput;

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        return (
            <div className={classes.root}>
                <Box className={classes.listStyle}>
                    <Box className={classes.listItemContent}>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                            <Box
                                onClick={this.handleChangeCheckBox}
                                className={this.props.checkBox ? classes.checkBoxStyle : clsx(classes.checkBoxStyle, classes.checkBoxStyleOn)}
                            >
                                {this.props.checkBox ? <CheckCircleAgreeOffIcon /> : <CheckCircleAgreeOnIcon />}
                                수강생 없는 강의만
                            </Box>
                            <FormControl className={classes.formControl}>
                                <Select
                                    value={this.props.filter}
                                    onChange={this.handleChangeSort}
                                    displayEmpty
                                    IconComponent={() => (
                                        <Box style={{ width: 16, height: 16, marginLeft: 5 }}>
                                            <ArrowDownIcon />{' '}
                                        </Box>
                                    )}
                                >
                                    <MenuItem value="최근등록일순" className={classes.menuItem}>
                                        최근 등록일 순
                                    </MenuItem>
                                    <MenuItem value="최근제출일순" className={classes.menuItem}>
                                        최근 제출일 순
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box>
                            {this.props.LearningList.map((list, i) => (
                                <Box className={classes.listItemStyle} style={{ padding: '6px 0' }}>
                                    <Box className={classes.flexCenter}>
                                        <Avatar className={classes.avatar}>
                                            <Browsers />
                                        </Avatar>
                                        <Box display="flex" flexDirection="column">
                                            <Typography className={classes.name}>{list.userName} </Typography>
                                            <span className={classes.groupInfo}>
                                                {list.className} | 수강생 : {list.count} | 난이도 : {list.level}
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
                                                                {this.state.input === false ? (
                                                                    <Input placeholder={list.live} className={classes.inputStyle}></Input>
                                                                ) : (
                                                                    <span onClick={this.handChangeInput}>{list.live}</span>
                                                                )}
                                                                분
                                                            </Typography>
                                                        </Box>
                                                        <Box>
                                                            <span className={classes.tag} style={{ backgroundColor: '#000' }}>
                                                                <PlayIcon /> VOD
                                                            </span>
                                                            <Typography className={classes.numTxt}>
                                                                {this.state.input === false ? (
                                                                    <Input placeholder={list.vod} className={classes.inputStyle}></Input>
                                                                ) : (
                                                                    <span onClick={this.handChangeInput}>{list.vod}</span>
                                                                )}
                                                                분
                                                            </Typography>
                                                        </Box>
                                                        <Box>
                                                            <span className={classes.tag} style={{ backgroundColor: '#00c880' }}>
                                                                실습
                                                            </span>
                                                            <Typography className={clsx(classes.numTxt, classes.onlyTxt)}>{list.training}</Typography>
                                                            <Typography className={classes.defaultTxt}>이상</Typography>
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
                                                        {this.state.input === false ? (
                                                            <Input placeholder={list.evaluation} className={classes.inputStyle}></Input>
                                                        ) : (
                                                            <span onClick={this.handChangeInput}>{list.evaluation}</span>
                                                        )}
                                                        점
                                                    </Typography>
                                                    <Typography className={classes.defaultTxt}>이상</Typography>
                                                </Box>
                                                <Box>
                                                    <span className={classes.tag} style={{ backgroundColor: '#8a42ff' }}>
                                                        과제
                                                    </span>
                                                    <Typography className={classes.numTxt}>
                                                        {this.state.input === false ? (
                                                            <Input placeholder={list.assignment} className={classes.inputStyle}></Input>
                                                        ) : (
                                                            <span onClick={this.handChangeInput}>{list.assignment}</span>
                                                        )}
                                                        점
                                                    </Typography>
                                                    <Typography className={classes.defaultTxt}>이상</Typography>
                                                </Box>
                                            </Box>
                                        </Box>

                                        <Box style={{ marginLeft: 20 }} display="flex" flexDirection="column" alignItems="flex-end">
                                            <Typography className={classes.titleTxt}>수료기준 진도율</Typography>
                                            <Typography className={classes.resultTxt}>
                                                <b>100</b>%
                                            </Typography>
                                        </Box>
                                        <Box display="flex">
                                            {this.state.input === false ? (
                                                <Button disableRipple className={classes.buttonStyle} onClick={this.handChangeInput}>
                                                    완료
                                                </Button>
                                            ) : (
                                                <Button
                                                    disableRipple
                                                    className={classes.tableBtnStyle}
                                                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                                                    aria-haspopup="true"
                                                    onClick={this.clickMore}
                                                    disableTouchRipple
                                                    disableFocusRipple
                                                >
                                                    <MoreIcon />
                                                </Button>
                                            )}

                                            <Menu
                                                id="simple-menu"
                                                anchorEl={anchorEl}
                                                open={Boolean(anchorEl)}
                                                onClose={this.clickMoreClose}
                                                className={classes.menuBox}
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'right',
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                            >
                                                <MenuItem onClick={this.clickMoreClose} className={classes.menuItem}>
                                                    수료기준 수정
                                                </MenuItem>
                                            </Menu>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={this.props.LearningList.length}
                        rowsPerPage={this.props.rowsPerPage}
                        page={this.props.page}
                        backIconButtonProps={{
                            'aria-label': '페이지당 행 수',
                        }}
                        nextIconButtonProps={{
                            'aria-label': '다음 페이지',
                        }}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />

                    {this.props.listItem === true ? (
                        <Box className={classes.listStyleOn}>
                            <Box className={classes.listItemStyleOn} onClick={this.listItemChange}>
                                <Avatar className={classes.avatar}>
                                    <Browsers />
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

export default withStyles(styles)(CompletionManagementTableComponent);
