import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Book} from "@material-ui/icons";
import {
    Avatar,
    Box,
    Button,
    FormControl,
    Menu,
    MenuItem,
    Select,
    TableCell,
    Typography,
    TablePagination,
    IconButton
} from "@material-ui/core";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import clsx from "clsx";
import {ReactComponent as CheckCircleAgreeOffIcon} from "../../common/images/CheckCircleAgreeOffIcon.svg";
import {ReactComponent as CheckCircleAgreeOnIcon} from "../../common/images/CheckCircleAgreeOnIcon.svg";
import {ReactComponent as Browsers} from "../../common/images/Browsers.svg";
import {ReactComponent as MoreIcon} from "../../common/images/DotsThreeOutlineVerticalIcon.svg";
import {ReactComponent as BookmarksSimple} from "../../common/images/BookmarksSimple.svg";
import {ReactComponent as BookmarksSimpleGreen} from "../../common/images/BookmarksSimpleGreen.svg";
import {ReactComponent as BookmarksSimpleRed} from "../../common/images/BookmarksSimpleRed.svg";
import {ReactComponent as DotIcon} from "../../common/images/DotIcon.svg";
import {ReactComponent as PlayIcon} from "../../common/images/PlayIcon.svg";
import {ReactComponent as LockKey} from "../../common/images/LockKey.svg";
import {ReactComponent as AsideUserIcon} from "../../common/images/AsideUserIcon.svg";
import {ReactComponent as X} from "../../common/images/X.svg";
import CancelApprovalDialogComponent from "./CancelApprovalDialogComponent";
import NoticeDialogComponent from "../dialog/NoticeDialogComponent";
import StudentStatusDetailComponent from "./StudentStatusDetailComponent";
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
    // listStyleOn:{
    //     borderRadius: 10,
    //     overflow:'hidden',
    //     boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.45)',
    //     position:'absolute',
    //     top:0,
    //     left:0,
    //     zIndex:99,
    //     width:'100%'
    // },
    // listItemStyleOn:{
    //     backgroundColor: '#eee',
    //     padding:'21px 25px',
    //     cursor:'pointer',
    //     display:'flex',
    //     alignItems:'center',
    //     justifyContent:'space-between',
    // },
    // titleName:{
    //     fontSize:'1.25rem'
    // },
    // listItemContent:{
    //     padding:21,
    //     backgroundColor:'#fff'
    // },
    // stateStyle:{
    //     fontSize:'1.5rem',
    //     color:'#8f8f8f',
    // },
    // userBar:{
    //     display:'flex',
    //     alignItems:'center',
    //     margin:'20px 0 4px',
    //     '& > span':{
    //         fontSize:'0.813rem',
    //         color:'#a3a8af',
    //         marginLeft:4
    //     }
    // },
    // btnStyle:{
    //     backgroundColor:'#fff',
    //     border:'1px solid #bfbfbf',
    //     borderRadius:4,
    //     fontSize:'0.938rem',
    //     padding:'4px 12px',
    //     "&:hover":{
    //         background:'#fff'
    //     }
    // },
    // txtGray:{
    //     color:'#8f8f8f',
    // },
    // txtRed:{
    //     color:'#ff1226',
    //     fontSize:'1rem',
    //     "&:hover":{
    //         background:'transparent'
    //     }
    // },
    explanationBox:{
        width:255,
        padding:'10px',
        background:'#2078e8',
        boxShadow:'0 2px 7px 0 rgba(0, 0, 0, 0.25)',
        borderRadius:3,
        position: 'absolute',
        zIndex:100,
        bottom:-70,
        left: 48,
        "&::before":{
            backgroundColor: '#2078e8',
            content: "''",
            display: 'block',
            height: '13px',
            position: 'absolute',
            top: -6,
            left: 130,
            transform: 'rotate( -227deg ) skew( 0deg )',
            width: '13px',
            zIndex:300
        },
        '& svg':{
            width: 16,
            height: 16
        },
    },
    stepContents:{
        fontSize: '0.813rem',
        color:'#fff',
        fontWeight:300,
        padding:0,
        margin:0,
        paddingLeft:'1.2rem',
        '& li':{
            marginTop:8,
            '&:first-child':{
                marginTop:0,
            }
        }
    },
});



class CourseOpenLectureTableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "??????????????????",
            filterOn: "????????????????????????",
            checkBox:true,
            anchorEl: null,
            tableTd:[
                {
                    title:'?????????????????? & ??????',
                    className:'????????????',
                    count:'02',
                    level:'??????',
                    secret:false,
                    stateEnd:true,
                    freeClass:false,
                    badge:['LIVE', 'VOD', '??????', '??????', '??????'],
                },
                {
                    title:'????????????????????????',
                    className:'????????????',
                    count:'02',
                    level:'??????',
                    secret:false,
                    stateEnd:false,
                    freeClass:false,
                    badge:['??????', '??????'],
                },
                {
                    title:'Hacking Trace',
                    className:'????????????',
                    count:'120',
                    level:'??????',
                    secret:true,
                    stateEnd:false,
                    freeClass:true,
                    badge:['LIVE', '??????', '??????'],
                },
                {
                    title:'Forensic ?????????',
                    className:'????????????',
                    count:'02',
                    level:'??????',
                    secret:false,
                    stateEnd:false,
                    freeClass:false,
                    badge:['??????', '??????'],
                },
                {
                    title:'??????????????????',
                    className:'????????????',
                    count:'02',
                    level:'??????',
                    secret:false,
                    stateEnd:false,
                    freeClass:false,
                    badge:['??????', '??????'],
                },
            ],
            page: 0,
            rowsPerPage: 5,
            listItem:false,
            LearningList:[
                 {name:'?????????',lastDate:'2022.5.31',learnCont:'5',learnTime:'30',learnTimeTotal:'50',state:'????????????', confirm:'????????????'},
                // {name:'?????????',lastDate:'2022.5.31',learnCont:'5',learnTime:'30',learnTimeTotal:'50',state:'?????????', confirm:'?????????'},
                // {name:'?????????',lastDate:'2022.5.31',learnCont:'5',learnTime:'30',learnTimeTotal:'50',state:'?????????', confirm:'????????????'},
            ],
            dialogOpen: false,
        };
    }

    listItemChange= () => {
        this.setState({ listItem: !this.state.listItem });
    };

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

    handleClickOpen = () => {
        this.setState({ dialogOpen: true });
    };

    handleClose = () => {
        this.setState({
            dialogOpen: false,
            anchorEl: null,
        });
    };
    render() {
        const { classes } = this.props;
        const { anchorEl} = this.state;

        return (
            <div className={classes.root}>
                <Box display='flex' alignItems='center' justifyContent='space-between' style={{borderBottom:'1px solid #e1e1e1'}}>
                    <Box onClick={this.handleChangeCheckBox}
                    className={this.state.checkBox ? classes.checkBoxStyle : clsx(classes.checkBoxStyle,classes.checkBoxStyleOn) }>
                    {this.state.checkBox ?
                        <CheckCircleAgreeOffIcon/> :
                        <CheckCircleAgreeOnIcon/>
                    }
                    ????????? ?????? ?????????
                </Box>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.filter}
                            onChange={this.handleChangeSort}
                            displayEmpty
                            IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                        >
                            <MenuItem value="??????????????????" className={classes.menuItem}>?????? ????????? ???</MenuItem>
                            <MenuItem value="??????????????????" className={classes.menuItem}>?????? ????????? ???</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box className={classes.listStyle}>
                    {this.state.tableTd.map((td, i) => (
                    <Box className={classes.listItemStyle}  onClick={this.listItemChange}>
                        <Box className={classes.flexCenter}>
                            <Avatar className={classes.avatar}><Browsers/></Avatar>
                            <Box display='flex' flexDirection='column'>
                                <Box className={classes.name}>{td.title}
                                    {td.secret === true ?
                                    <Typography className={clsx(classes.selectBadge)}><LockKey/> ?????????</Typography>
                                        :
                                        null
                                    }
                                    {td.stateEnd === true ?
                                    <Typography className={clsx(classes.captionText,classes.captionEnd)}>??????</Typography>
                                        :
                                        null
                                    }
                                </Box>
                                <span className={classes.groupInfo}>{td.className}  |  ????????? : {td.count}???   |  ????????? : {td.level}</span>
                            </Box>
                        </Box>
                        <Box display='flex'>
                            <Box display='flex' flexDirection='column'>
                                <Box className={classes.tagBox}>
                                    {/*{td.badge.map((name, i) => (*/}
                                         <span className={classes.tag} style={{backgroundColor:'#00c880'}}>??????</span>
                                         <span className={classes.tag} style={{backgroundColor:'#fb4a59'}}>
                                             <DotIcon style={{width:10, height:10, marginRight:2}}/> LIVE</span>
                                         <span className={classes.tag} style={{backgroundColor:'#000'}}>
                                             <PlayIcon style={{width:10, height:10, marginRight:2}}/> VOD</span>
                                       <span className={classes.tag} style={{backgroundColor:'#4282fa'}}>??????</span>
                                         <span className={classes.tag} style={{backgroundColor:'#8a42ff'}}>??????</span>
                                </Box>
                                <Box display='flex' justifyContent='flex-end' alignItems='center'>
                                    {td.freeClass === true ?
                                        <Typography className={classes.freeTxt}>????????????</Typography>
                                        :
                                        null
                                    }
                                    {td.level === '??????' ?
                                        <Typography className={classes.levelTxt}><BookmarksSimple/> ??????</Typography>
                                        :
                                        (td.level === '??????') ?
                                            <Typography className={classes.levelTxt}><BookmarksSimpleGreen/> ??????</Typography>
                                            :
                                            (td.level === '??????') ?
                                                <Typography className={classes.levelTxt}><BookmarksSimpleRed/> ??????</Typography>
                                                :
                                                null
                                        }
                                </Box>
                            </Box>
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
                                <MenuItem onClick={this.clickMoreClose} className={classes.menuItem}>?????? ?????? ??????</MenuItem>
                                <MenuItem onClick={this.clickMoreClose} className={classes.menuItem}>????????? ??????</MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                    ))}


                    {this.state.listItem === true ?
                        <div>
                            <StudentStatusDetailComponent
                                handleClickOpen={this.handleClickOpen}
                                handleClose={this.handleClose}
                                dialogOpen={this.state.dialogOpen}
                                handleChangeCheckBox={this.handleChangeCheckBox}
                                handleChangeSort={this.handleChangeSort}
                                listItemChange={this.listItemChange}
                                filterOn={this.state.filterOn}
                                LearningList={this.state.LearningList}
                                tableTd={this.state.tableTd}
                            />
                            <CancelApprovalDialogComponent
                                handleClose={this.handleClose} dialogOpen={this.state.dialogOpen}
                            />
                        </div>
                        :
                        null
                    }



                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={this.state.tableTd.length}
                        rowsPerPage={this.state.rowsPerPage}
                        page={this.state.page}
                        backIconButtonProps={{
                            'aria-label': '???????????? ??? ???',
                        }}
                        nextIconButtonProps={{
                            'aria-label': '?????? ?????????',
                        }}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(CourseOpenLectureTableComponent);

