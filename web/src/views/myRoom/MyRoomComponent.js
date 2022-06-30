import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, FormControl, InputBase, MenuItem, Select, Tab, Tabs, Typography} from "@material-ui/core";
import {ReactComponent as ButtonPlusIcon} from "../../common/images/ButtonPlusIcon.svg";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import RoomTestImg1 from "../../common/images/RoomTestImg1.png";
import RoomTestImg2 from "../../common/images/RoomTestImg2.png";
import roomGuideImg from "../../common/images/roomGuideImg.jpg";
import dummyImg1 from "../../common/images/dummyImg1.jpg";
import {withRouter} from "react-router-dom";
import {ReactComponent as LiveIcon} from "../../common/images/LiveIcon.svg";
import {ReactComponent as VodIcon} from "../../common/images/VodIcon.svg";
import {ReactComponent as BedgeNewIcon} from "../../common/images/BedgeNewIcon.svg";
import {ReactComponent as HandsClappingIcon} from "../../common/images/HandsClappingIcon.svg";
import {ReactComponent as UsersThreeIcon} from "../../common/images/UsersThreeIcon.svg";
import {ReactComponent as BookmarksSimple} from "../../common/images/BookmarksSimple.svg";
import CalendarButtonComponent from "../contentLecture/CalendarButtonComponent";
import GalleryCheckCircleIcon from "../../common/images/GalleryCheckCircleIcon.svg";
import {inject, observer} from "mobx-react";

const styles = theme => ({
    root:{
        background:'#fffdf6',
    },
    titleText:{
        '@media all and (min-width: 1500px)': {
            fontSize:'1.875rem',
        },
        fontSize:'1.563rem',
        color:'#000'
    },
    titleButton:{
        background:'transparent',
        boxShadow:'none',
        "&:hover":{
            background:'transparent',
            boxShadow:'none',
        }
    },
    arrowButtonText:{
        fontSize:'0.75rem',
        fontWeight:600,
        color:'#000',
        paddingRight:5
    },
    menuText:{
        fontFamily: 'NanumSquareRoundOTF' ,
        fontSize:'0.75rem',
        color:'#0d0d0d',
        "&:hover":{
            background:'#d3d7db'
        }
    },
    iconButton:{
        padding: 0,
        '&:hover':{
            background:'transparent'
        }
    },
    roomCreateButton:{
        '@media all and (min-width: 1500px)': {
            width:322,
            height:350,
            marginRight:30,
            marginBottom:30,
        },
        width:270,
        height:340,
        background:'#fff',
        boxShadow:' 0 2px 4px 0 rgba(0, 0, 0, 0.25)',
        borderRadius:10,
        marginRight:20,
        marginBottom:20,
        padding:0,
        cursor: 'pointer',
        "&:hover":{
            background:'#fff'
        },
        "& span":{
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }
    },
    roomButton:{
        "& span":{
            height:'inherit',
            alignItems:'flex-start',
            justifyContent:'flex-start'
        },
        "& img":{
            '@media all and (min-width: 1500px)': {
                width:322,
            },
            width:270,
            height:180,
        },
        "&:nth-child(4n+0)":{
            marginRight:0
        },
    },
    imgBox:{
        '@media all and (min-width: 1500px)': {
            width:322,
        },
        position:'relative',
        width:270,
        height:180,
    },
    imgStyle:{
        backgroundImage:`url(${roomGuideImg})`,
        backgroundPosition:'0 0',
        backgroundRepeat:'no-repeat',
        width:'100%',
        height:'180px',
        borderRadius:10,
    },
    liveBox:{
        width: 66,
        background: '#fb4a59',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        '& p':{
            color:'#fff',
            fontSize:'1.125rem',
            fontWeight: 500,
            marginLeft: 5,
            paddingTop: 3
        }
    },
    vodBox:{
        background:'#000',
        // marginLeft:5
    },
    likeBox:{
        padding: '6px 8px',
        boxSizing:'border-box',
        borderRadius: 5,
        background:'#fff',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    practice:{
        background:'#00c880',
        width:50,
        '& p':{
            marginLeft:0,
        }
    },
    likeBoxTitle:{
        fontSize: '0.75rem',
        color:'#333'
    },
    likeBoxNumber:{
        fontSize: '0.75rem',
        color:'#fb4a59'
    },
    lineStyle:{
        width: 1,
        height: 28,
        background:'#c0c2c3',
        margin: '0 8px'
    },
    roomTextBox:{
        '@media all and (min-width: 1500px)': {
            height:'calc(350px - 180px)',
        },
        width:'100%',
        height:'calc(340px - 180px)',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        padding:'12px 20px 14px',
        boxSizing:'border-box',
    },
    buttonIcon:{
        width:100,
        height:100,
        borderRadius:'50%',
        background:'#e1e1e1',
        marginBottom:21,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        width:'100%',
        fontSize:'1.5rem',
        color:'#000',
        fontWeight:600,
    },
    buttonTitle:{
        '@media all and (min-width: 1500px)': {
            fontSize:'1.125rem',
        },
        fontSize:'0.938rem',
        textAlign:'left',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp:2,
        WebkitBoxOrient:'vertical',
        marginTop: 0
    },
    guideText:{
        marginTop: 10
    },
    buttonSubText:{
        fontSize:'0.75rem',
        color:'#828282'
    },
    buttonStyle:{
        width: 110,
        height: 40,
        border:'1px solid #a3a8af',
        background:'#fff',
        borderRadius: 7,
        boxSizing:'border-box',
        '&:hover':{
            background:'#fff'
        },
        '& span':{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight:600,
            fontSize:'1rem',
            color:'#333',
        }
    },
    buttonStyle2:{
        border:'1px solid #1a457e',
        marginLeft: 20,
        '& span':{
            color:'#1a457e',
        }
    },
    roomBoxIn:{
        '@media all and (min-width: 1500px)': {
            width:1440,
            padding:'48px 30px 55px',
        },
        width:1200,
        padding:'35px 30px 55px',
        margin:'0 auto',
        boxSizing:'border-box',
        position:'relative'
    },
    titleBox:{
        marginBottom:21,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'flex-end'
    },
    explanationBox:{
        '@media all and (min-width: 1500px)': {
            width:418,
            padding:24,
            bottom:-155,
        },
        width:380,
        padding:20,
        background:'#2078e8',
        boxShadow:'0 2px 7px 0 rgba(0, 0, 0, 0.25)',
        borderRadius:10,
        position: 'absolute',
        zIndex:100,
        bottom:-140,
        left:15,
        "&::before":{
            backgroundColor: '#2078e8',
            content: "''",
            display: 'block',
            height: '13px',
            position: 'absolute',
            top: -7,
            left: '35px',
            transform: 'rotate( -45deg ) skew( 0deg )',
            width: '13px',
            boxShadow: '2px -2px 2px 0 rgb(178 178 178 / 20%)',
            zIndex:200
        }
    },
    stepText:{
        '@media all and (min-width: 1500px)': {
            fontSize:'0.875rem',
        },
        fontSize:'0.813rem',
        color:'#abd0fe',
        fontWeight:300
    },
    stepContents:{
        '@media all and (min-width: 1500px)': {
            fontSize:'1.125rem',
        },
        fontSize:'1rem',
        color:'#fff',
        margin:'14px 0 13px',
        fontWeight:300
    },
    stepCheckBtn:{
        '@media all and (min-width: 1500px)': {
            fontSize:'0.938rem',
        },
        fontSize:'0.875rem',
        padding:0,
        background:'transparent',
        color:'#a3a8af',
        fontWeight:300,
        "&:hover":{
            background:'transparent'
        }
    },
    stepBtn:{
        width:110,
        height:40,
        border:'1px solid #0097ff',
        background:'#fff',
        borderRadius:7,
        color:'#2078e8',
        fontWeight:600,
        "&:hover":{
            background:'#fff',
        }
    },
    chipBox:{
        display:'flex',
        flexDirection:'row',
        marginBottom:12,
    },
    chip:{
        maxWidth:90,
        height:'21px !important',
        backgroundColor:'#eee',
        color:'#656565',
        marginRight:6,
        padding:'0px 7px',
        fontSize: '0.75rem',
        border:'1px solid #eee',
        borderRadius:50,
        boxSizing:'border-box',
        '&:last-child':{
            marginRight:0,
        }
    },
    btnStyle:{
        '& svg':{
            marginRight:4,
        },
        '&:hover':{
            background:'transparent'
        }
    },
    trigger:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin: '0 0 auto',
        '& button':{
            minWidth:90,
            minHeight:40,
            position:'relative',
            opacity:1,
            marginRight:10,
            '&:hover':{
                fontWeight: 700,
            }
        },
        '& button.Mui-selected':{
            minWidth:90,
            minHeight:40,
            backgroundColor:'#fff',
            color:'#18427c',
            fontWeight:700,
            borderRadius:50,
            overflow:'inherit',
            border: '2px solid #18427c',
            boxSizing:'border-box'
        },
        '& .MuiTabs-indicator':{
            display:'none',
            width:0,
        }
    },
    iconStyle:{
        position:'absolute',
        right:'-2px',
        top:'-2px',
        zIndex:10,
    },
    commentStyle:{
        display:'flex',
        listStyle:'none',
        paddingInlineStart:0,
        margin:0,
        '& li': {
            fontSize:'0.875rem',
            display:'flex',
            alignItems:'center',
            marginLeft:30,
            '&:first-child':{
                marginLeft: 0,
            },
            '& svg': {
                width: 20,
                height: 20,
                marginRight:8,
                '& .like-icon':{
                    fill:'#B6B6BF'
                }
            }
        }
    }
});

const BootstrapInput = withStyles(theme => ({
    root: {
        marginLeft: 20
    },
    input: {
        borderRadius: 0,
        position: 'relative',
        backgroundColor: 'transparent',
        border: '0',
        fontSize:'0.75rem',
        fontWeight:600,
        color:'#000',
        '&:focus': {
            background:'transparent'
        },
        '&.MuiSelect-select':{
            paddingRight:5,
        }
    },
}))(InputBase);

const BootstrapInputSelect = withStyles(theme => ({
    root: {
        borderRadius: 4,
        height: 30,
        background:'#fff',
        border: '1px solid #bfbfbf',
        paddingRight: 10,
        paddingLeft: 10,
        marginRight: 12,
        boxSizing: 'border-box'
    },
    input: {
        position: 'relative',
        backgroundColor: 'transparent',
        fontSize:'0.75rem',
        fontWeight:500,
        color:'#000',
        minWidth: 25,
        '&:focus': {
            backgroundColor: 'transparent',
        },
        '&.MuiSelect-select':{
            paddingRight:5,
        }
    },
}))(InputBase);

class MyRoomComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classTab: 0,
            selectValue: '전체',
            value: '업데이트순',
            roomList: [
                {
                    img:dummyImg1,
                    title:"UNIX/Linux 보안 실무반",
                    post: true,
                    lastTime: false,
                    lastTimeText:"",
                    chip:"악성코드",
                    chip2:"쉘코드",
                    chip3:"DDEAUTO 명령어",
                    live: false,
                    vod:true,
                    practice:true,
                    student: '200',
                    like: '1200',
                    level: 1,
                },
                // {
                //     img:RoomTestImg2,
                //     title:"C 프로그래밍 언어 기초C 프로그래밍 언어 기초C 프로그래밍 언어 기초C 프로그래밍 언어 기초",
                //     post: false,
                //     postText:"",
                //     lastTime: true,
                //     chip:"특강",
                //     chip2:"수업",
                //     chip3:"수업",
                //     live: false,
                //     vod:false,
                //     student: '100',
                //     like: '200',
                //     level: 1,
                // },
            ],
            dialogOpen: false,

            //
            allDate: true
        };
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    handleSelectChange = event => {
        this.setState({ selectValue: event.target.value });
    };

    handleClickRoomType = () => {
        this.props.history.push("/roomCreate");
    };

    handleClickOpenDialog = () => {
        this.setState({ dialogOpen: true });
    };

    handleCloseDialog = () => {
        this.setState({ dialogOpen: false });
    };

    handleChangeTabs = (event, classTab) => {
        this.setState({ classTab });
    };

    handleClickClass = e => {
        this.props.history.push("/class");
    };

    render() {
        const { classes, authStore } = this.props;
        const { classTab } = this.state;

        return (
            <div className={classes.root}>
                <Box className={classes.roomBoxIn}>
                    <Box display='flex' justifyContent='space-between' mb={5}>
                        <Tabs value={classTab} onChange={this.handleChangeTabs} className={classes.trigger}>
                            <Tab label="전체 (15)"
                                 disableripple
                                 icon={<BedgeNewIcon className={classes.iconStyle} />}
                            />
                            <Tab label="진행중 (5)"
                                 disableripple
                                 icon={<BedgeNewIcon className={classes.iconStyle} />}
                            />
                            <Tab label="종료 (10)" disableripple />
                        </Tabs>

                        <Box display='flex' justifyContent='flex-end' alignItems='center'>
                            <CalendarButtonComponent allDate={this.state.allDate}/>
                            <FormControl>
                                <Select
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    input={<BootstrapInput name="type" id="type-select" />}
                                    IconComponent={() => <ArrowDownIcon/>}
                                >
                                    <MenuItem value={"업데이트순"} className={classes.menuText}>업데이트순</MenuItem>
                                    <MenuItem value={"개설일순"} className={classes.menuText}>개설일순</MenuItem>
                                    <MenuItem value={"가나다순"} className={classes.menuText}>가나다순</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>

                    <Box display='flex' flexWrap='wrap'>
                        {
                            !authStore.isGuestUser && (
                                <Box style={{position:'relative'}}>
                                    <Button className={classes.roomCreateButton} disableripple onClick={this.handleClickRoomType.bind(this)}>
                                        <Box className={classes.buttonIcon}>
                                            <ButtonPlusIcon/>
                                        </Box>
                                        <Typography className={classes.buttonText}>강의실 만들기</Typography>
                                    </Button>
                                </Box>
                            )
                        }


                        {this.state.classTab === 0 &&
                            this.state.roomList.map((rooms, i) => (
                                <Box
                                    key={i}
                                    className={clsx(classes.roomCreateButton, classes.roomButton)}
                                    disableripple
                                    onClick={this.handleClickClass} >
                                    <Box className={classes.imgBox}>

                                            <img src={rooms.img} alt='room'/>

                                        <Box display='flex' alignItems='center' style={{position:'absolute', top: 10, left: 10, borderRadius:3, overflow:'hidden'}}>

                                            {rooms.vod === true &&
                                                <Box className={clsx(classes.liveBox, classes.vodBox)}>
                                                    <VodIcon/>
                                                    <Typography>VOD</Typography>
                                                </Box>
                                            }
                                            {rooms.live === true &&
                                            <Box className={classes.liveBox}>
                                                <LiveIcon/>
                                                <Typography>LIVE</Typography>
                                            </Box>
                                            }
                                            {rooms.practice === true &&
                                            <Box className={clsx(classes.liveBox, classes.practice)}>
                                                <Typography>실습</Typography>
                                            </Box>
                                                // <span className={classes.tag} style={{backgroundColor:'#00c880'}}>실습</span>
                                            }
                                        </Box>
                                    </Box>

                                    <Box display='flex' flexDirection='column' alignItems='flex-start'
                                         className={classes.roomTextBox}>
                                        <Box display='flex' flexDirection='column' alignItems='flex-start'>
                                            <Box className={classes.chipBox}>
                                                <Typography className={classes.chip} noWrap>{rooms.chip}</Typography>
                                                <Typography className={classes.chip} noWrap>{rooms.chip2}</Typography>
                                                <Typography className={classes.chip} noWrap>{rooms.chip3}</Typography>
                                            </Box>
                                            <Typography
                                                className={clsx(classes.buttonText, classes.buttonTitle)}>{rooms.title}</Typography>
                                        </Box>
                                        <Box display='flex' alignItems='center' justifyContent='space-between' style={{width: '100%', marginTop:20}}>
                                            <ul className={classes.commentStyle}>
                                                {rooms.like &&
                                                    <li><HandsClappingIcon/> {rooms.like}</li>
                                                }
                                                {rooms.student &&
                                                    <li><UsersThreeIcon/> {rooms.student}</li>
                                                }
                                                {rooms.level &&
                                                    <li><BookmarksSimple/> 초급</li>
                                                }
                                            </ul>
                                            <BedgeNewIcon className={classes.badge}/>
                                        </Box>
                                        {/*<Box display='flex' justifyContent='center' alignItems='center' style={{width: '100%'}}>*/}
                                        {/*    <Button className={classes.buttonStyle} disableripple>*/}
                                        {/*        수강생 현황*/}
                                        {/*    </Button>*/}
                                        {/*    <Button className={clsx(classes.buttonStyle, classes.buttonStyle2)} onClick={this.handleClickClass} disableripple>*/}
                                        {/*        강의실 입장*/}
                                        {/*    </Button>*/}
                                        {/*</Box>*/}
                                    </Box>
                                </Box>
                            ))
                        }
                        {
                            !authStore.isGuestUser && (
                                <Button className={clsx(classes.roomCreateButton, classes.roomButton)} disableripple>
                                    <Box className={classes.imgStyle}>
                                        {/*<img src={RoomTestImg3} alt='room image'/>*/}
                                    </Box>
                                    <Box display='flex' flexDirection='column' alignItems='flex-start' className={classes.roomTextBox}>
                                        <Box display='flex' flexDirection='column' alignItems='flex-start'>
                                            <Typography className={clsx(classes.buttonText, classes.guideText)}>강사 가이드</Typography>
                                        </Box>
                                    </Box>
                                </Button>
                            )
                        }

                    </Box>

                </Box>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(inject('authStore')(observer(MyRoomComponent))));