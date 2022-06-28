import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Book} from "@material-ui/icons";
import {Avatar, Box, Button, FormControl, Menu, MenuItem, Select, TableCell, Typography,TablePagination} from "@material-ui/core";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import clsx from "clsx";
import {ReactComponent as CheckCircleAgreeOffIcon} from "../../common/images/CheckCircleAgreeOffIcon.svg";
import {ReactComponent as CheckCircleAgreeOnIcon} from "../../common/images/CheckCircleAgreeOnIcon.svg";
import {ReactComponent as AsideUserIcon} from "../../common/images/AsideUserIcon.svg";
import {ReactComponent as MoreIcon} from "../../common/images/DotsThreeOutlineVerticalIcon.svg";
import {ReactComponent as DownloadSimpleIcon} from "../../common/images/DownloadSimpleIcon.svg";
const styles = theme => ({
    root:{
        backgroundColor:'#fff',
        border:'1px solid #bfbfbf',
        borderRadius:'7px 7px 0 0',
        padding:30,
        marginTop:50,
        width:790,
        margin:'0 auto -56px',
    },
    flexCenter:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    checkBoxStyle:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        color: '#656565',
        fontSize:'0.875rem',
        cursor:'pointer',
        '& svg':{
            width:20,
            height:20,
            marginRight:4,
            color:'#656565',
        }
    },
    checkBoxStyleOn:{
        color:'#0097FF',
    },
    formControl:{
        display:'flex',
        alignItems:'flex-end',
        '&>div':{
            fontSize:'0.75rem',
            fontWeight:600,
            '&:before, &:after':{
                content:'',
                display:'none',
                width:0,
                size:0,
            },
        },
        "& .MuiSelect-select:focus":{
            background:'transparent'
        },
        "& .MuiSelect-select.MuiSelect-select":{
            paddingRight:0
        }
    },
    menuItem:{
        fontFamily: 'NanumSquareRoundOTF' ,
        fontSize:'0.875rem',
        color:'#0d0d0d',
        "&:hover":{
            background:'#d3d7db'
        },
        "&.Mui-selected:hover":{
            background:'#d3d7db'
        },
        "&.Mui-selected":{
            background:'transparent'
        }
    },
    listStyle:{
        position:'relative',
        marginBottom:60,
        '&:last-child':{
            marginBottom: 0
        },
        '& h5': {
            borderBottom: '1px solid #d3d7db',
            fontSize:'0.875rem',
            fontWeight:700,
            paddingBottom:8,
        }
    },
    listItemStyle:{
        display:'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        borderBottom: '1px solid #d3d7db',
        padding:'17px 0 17px 23px',
        cursor:'pointer',
        '&:first-child':{
            borderTop: '1px solid #d3d7db',
        }
    },
    avatar:{
        marginRight: 10,
        backgroundColor:'#a3a8af',
        '& svg path':{
            fill:'#fff'
        }
    },
    name:{
        fontSize:'0.875rem',
        fontWeight:600,
        display:'flex',
        alignItems: 'center',
    },
    groupInfo:{
        fontSize:'0.75rem',
        color:'#666666',
        marginTop:7,
    },
    tableBtnStyle:{
        '&:hover':{
            background: 'transparent',
        }
    },
    tagBox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:7,
    },
    tag:{
        fontSize:'0.76rem',
        color:'#fff',
        fontWeight: 600,
        borderRadius:3,
        padding:'3px 6px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:6,
    },
    freeTxt:{
        fontSize:'0.875rem',
        color:'#1664f5',
        marginRight:12,
    },
    levelTxt:{
        display:'flex',
        alignItems:'center',
        fontSize:'0.875rem',
        fontWeight:600,
    },
    selectBadge:{
        fontSize:'0.75rem',
        marginLeft: 14,
        display:'flex',
        alignItems: 'center',
    },
    captionText:{
        fontSize:'0.75rem',
        fontWeight:600,
        paddingTop: 2,
        color:'#fff',
        width:30,
        height:16,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginLeft: 14,
    },
    captionLive:{
        backgroundColor:'#FB4A59',
        '& svg':{
            width: 5,
            height: 5
        }
    },
    captionVod:{
        backgroundColor:'#000',
        '& svg':{
            width: 9,
            height: 9
        }
    },
    captionGreen:{
        backgroundColor:'#00c880',
    },
    captionPrivate:{
        width: 60,
        backgroundColor:'transparent',
    },
    captionTextPrivate:{
        fontSize:'0.875rem',
        fontWeight:600,
        paddingTop: 2,
        color:'#0d0d0d'
    },
    captionEnd:{
        backgroundColor:'#1a5177'
    },
    downloadBox:{
        border:'1px solid #bfbfbf',
        minWidth:33,
        height:28,
        padding:0,
        display:'flex',
        alignItems:'center',
        marginLeft:'auto',
        marginBottom:20,
        '& svg':{
            width:18,
            height:18,
            '& path':{
                stroke:'#000',
            }
        },
        '&:hover':{
            background:'transparent'
        }
    },
});

class CourseAllStudentManagementTableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "최근가입일순",
            checkBox:true,
            anchorEl: null,
            tableTd:[
                {
                    userName:'김온더',
                    className:'강의실명',
                    date:'2021.12.01.',
                },
                {
                    userName:'김온더',
                    className:'강의실명',
                    date:'2021.12.02.',
                },
                {
                    userName:'김온더',
                    className:'강의실명',
                    date:'2021.12.03.',
                },
                {
                    userName:'김온더',
                    className:'강의실명',
                    date:'2021.12.04.',
                },

            ],
            page: 0,
            rowsPerPage: 5,
        };
    }
    handleChangeCheckBox= () => {
        this.setState({ checkBox: !this.state.checkBox });
    };

    clickMore = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    clickMoreClose = () => {
        this.setState({ anchorEl: null });
    };

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl} = this.state;

        return (
            <div className={classes.root}>
                <Button disableRipple className={classes.downloadBox}>
                    <DownloadSimpleIcon/>
                </Button>
                <Box display='flex' alignItems='center' justifyContent='space-between' style={{borderBottom:'1px solid #e1e1e1'}}>
                    <Box onClick={this.handleChangeCheckBox}
                    className={this.state.checkBox ? classes.checkBoxStyle : clsx(classes.checkBoxStyle,classes.checkBoxStyleOn) }>
                    {this.state.checkBox ?
                        <CheckCircleAgreeOffIcon/> :
                        <CheckCircleAgreeOnIcon/>
                    }
                    수강 기록 없는 학생만
                </Box>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.filter}
                            onChange={this.handleChangeSort}
                            displayEmpty
                            IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                        >
                            <MenuItem value="최근가입일순" className={classes.menuItem}>최근 가입일 순</MenuItem>
                            <MenuItem value="최근제출일순" className={classes.menuItem}>최근 제출일 순</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box className={classes.listStyle}>
                    {this.state.tableTd.map((td, i) => (
                    <Box className={classes.listItemStyle}>
                        <Box className={classes.flexCenter}>
                            <Avatar className={classes.avatar}><AsideUserIcon/></Avatar>
                            <Box display='flex' flexDirection='column'>
                                <Typography className={classes.name}>{td.userName} </Typography>
                                <span className={classes.groupInfo}>{td.className}  |  {td.date} 가입</span>
                            </Box>
                        </Box>
                        <Box display='flex'>
                            <Button disableRipple className={classes.tableBtnStyle}
                                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.clickMore}
                                    disableTouchRipple
                                    disableFocusRipple
                            >
                                <MoreIcon/>
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={this.clickMoreClose}
                                className={classes.menuBox }
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <MenuItem onClick={this.clickMoreClose} className={classes.menuItem}>수강생 현황</MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                    ))}

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
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(CourseAllStudentManagementTableComponent);

