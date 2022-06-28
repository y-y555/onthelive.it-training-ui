import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    IconButton,
    InputBase,
    Avatar,
    Badge,
    Popover,
    Button,
    Typography,
    MenuList,
    MenuItem, Select, FormControl
} from "@material-ui/core";
import {ReactComponent as OntheliveLogo} from "../../common/images/ItLogo.svg";
import {ReactComponent as BellRingingIcon} from "../../common/images/BellRingingIcon.svg";
import {ReactComponent as CircleWavyQuestionIcon} from "../../common/images/CircleWavyQuestionIcon.svg";
import {ReactComponent as SearchIcon} from "../../common/images/SearchIcon.svg";
import {Link, withRouter} from "react-router-dom";
import TestAvatar from "../../common/images/TestAvatar.jpg";
import {ReactComponent as BedgeNewIcon} from "../../common/images/BedgeNewIcon.svg";
import NotificationComponent from "../Notification/NotificationComponent";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import {inject, observer} from "mobx-react";

const styles = theme => ({
    root:{
        display:'flex',
        justifyContent:'center',
        background:'#fff',
        borderBottom:'1px solid #c0c2c3',
    },
    appBar:{
        '@media all and (min-width: 1500px)': {
            width:1440,
        },
        width:1200,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'24px 32px',
        boxSizing:'border-box'
    },
    iconButton:{
        padding:0,
        "&:hover":{
            background:'transparent'
        }
    },
    iconMargin:{
        margin:'0 25px'
    },
    searchIcon:{
        padding:7,
        background:'#f8f8f8',
        "&:hover":{
            background:'#f8f8f8',
        }
    },
    search: {
        width:365,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        background: '#fff',
        border:'2px solid #e1e1e1',
        padding:'3px 6px 3px 22px',
        borderRadius:50,
        marginLeft: 41,
        "& .MuiInputBase-input::placeholder":{
            opacity:1,
            fontSize:'1.125rem',
            color:'#92979e'
        },
        "& .MuiInputBase-input":{
            padding:'6px 7px 4px'
        }
    },
    buttonStyle:{
        fontSize:'0.938rem',
        color:'#000',
        fontWeight:600,
        padding:0,
        "&:hover":{
            background:'transparent'
        }
    },
    lineStyle:{
        width:1,
        height:17,
        background:'#e1e1e1',
        margin:'0 24px 0 12px'
    },
    badgeBox:{
        position:'relative'
    },
    badge:{
        position:'absolute',
        right:-8,
        top:-5
    },
    inputRoot: {
        color: '#000',
        fontSize:'1.125rem',
        width:'100%',
        marginRight:10
    },
    avatar:{
        width:40,
        height:40,
        background:'#568cf0'
    },
    iconColor:{
        "& .question-icon":{
            fill:'#0097ff'
        },
        '& .bellringing-icon': {
            fill: '#0097ff',
        },
    },
    avatarMember:{
        width:60,
        height:60,
    },
    popover:{
        "& .MuiPaper-root":{
            borderRadius:10,
            boxShadow:'0 2px 7px 0 rgba(0, 0, 0, 0.25)',
        },
        "& .MuiPopover-paper":{
            width:300,
            padding:'25px 10px 10px',
            overflow:'inherit',
            marginTop:18,
            marginLeft:36,
            "&::before":{
                backgroundColor: '#fff',
                content: "''",
                display: 'block',
                height: '13px',
                position: 'absolute',
                top: -6,
                right: '50px',
                transform: 'rotate( -45deg ) skew( 0deg )',
                width: '13px',
                boxShadow: '2px -2px 2px 0 rgb(178 178 178 / 20%)',
                zIndex:200
            }
        },
    },
    popoverIn:{
        fontFamily: 'NanumSquareRoundOTF' ,
        position:'relative',

    },
    avatarBox:{
        marginBottom:25,
    },
    avatarMargin:{
        marginRight: 12
    },
    nameText:{
        fontSize:'1.063rem',
        color:'#000',
        fontWeight:600,
        lineHeight:1.2
    },
    emailText:{
        width:230,
        fontSize:'0.875rem',
        color:'#a3a8af',
        marginBottom:5
    },
    formControl:{
        '& .MuiOutlinedInput-root, .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            borderColor:'#a3a8af',
            borderWidth:1
        },
        '& .MuiOutlinedInput-input':{
            padding:'5px 10px'
        },
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
    menuText:{
        fontFamily: 'NanumSquareRoundOTF' ,
        fontSize:'0.75rem',
        color:'#0d0d0d',
        "&:hover":{
            background:'#d3d7db'
        },
        "&.Mui-selected":{
            background:'transparent'
        },
        "&.Mui-selected:hover":{
            background:'#d3d7db'
        },
    },
    menuItem:{
        fontFamily: 'NanumSquareRoundOTF' ,
        display:'flex',
        justifyContent:'center',
        fontSize:'1.063rem',
        color:'#000',
        "&:hover":{
            background:'transparent'
        }
    },
    menuItemLine:{
        borderBottom:'1px solid #c0c2c3'
    },
});

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: 2,
        top: 19,
        border: `1px solid #fff`,
        width:12,
        height:12,
        borderRadius:'50%',
        background:'#00c880',
        overlap : 'rectangular',
    },
}))(Badge);

const StyledBadgeMember = withStyles((theme) => ({
    badge: {
        right: 6,
        top: 37,
        border: `1px solid #fff`,
        width:15,
        height:15,
        borderRadius:'50%',
        background:'#00c880',
        overlap : 'rectangular',
    },
}))(Badge);

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            notificationOpen: false,
            filter: "온라인",
        };
    }

    handleChangeFilter = event => {
        this.setState({ filter: event.target.value });
    };

    handleNotificationOpen = () => {
        this.setState({ notificationOpen: true });
    };

    handleNotificationClose = () => {
        this.setState({ notificationOpen: false });
    };

    handleClickProfileSettings = e => {
        this.props.history.push("/profileSettings");
        this.setState({
            anchorEl: null,
        });
    };

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    handleClickServiceCenter = e => {
        this.props.history.push("/serviceCenter");
    };

    handleClickRooms = e => {
        this.props.history.push("/rooms");
    };

    handleClickLogout = e => {
        e.preventDefault();

        this.props.authStore.doLogout();
    }


    render() {
        const { classes } = this.props;
        const { anchorEl, notificationOpen } = this.state;
        const open = Boolean(anchorEl);
        const bellIconClassName = notificationOpen ? classes.iconColor : null;

        return (
            <div className={classes.root} >
                <Box className={classes.appBar}>
                    <Box display='flex' alignItems='center'>
                        <Link to="/rooms">
                            <OntheliveLogo/>
                        </Link>
                        <Box className={classes.search}>
                            <InputBase
                                placeholder='모임, 일정 검색을 검색해보세요.'
                                className={classes.inputRoot}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <IconButton className={classes.searchIcon} disableRipple>
                                <SearchIcon />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box display='flex' alignItems='center'>
                        <Button className={classes.buttonStyle} onClick={this.handleClickRooms} disableRipple>
                            강의 관리
                        </Button>

                        <span className={classes.lineStyle}/>

                        <Box className={classes.badgeBox}>
                            <IconButton
                                className={classes.iconButton}
                                onClick={this.handleNotificationOpen}
                                disableRipple
                            >
                                <BellRingingIcon className={clsx(bellIconClassName)}/>
                            </IconButton>
                            <BedgeNewIcon className={classes.badge}/>
                        </Box>
                        
                        {/*알림*/}
                        <NotificationComponent notificationOpen={notificationOpen} handleNotificationClose={this.handleNotificationClose}/>

                        <IconButton className={clsx(classes.iconButton, classes.iconMargin)} onClick={this.handleClickServiceCenter} disableRipple>
                            <CircleWavyQuestionIcon/>

                            {/* 고객센터 페이지 일때  */}
                            {/*<CircleWavyQuestionIcon className={classes.iconColor}/>*/}
                        </IconButton>

                        <IconButton
                            className={classes.iconButton}
                            aria-owns={open ? 'simple-popper' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleClick}
                            disableRipple
                        >
                            <StyledBadge
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                    overlap : 'rectangular',
                                }}
                                variant="dot"
                                overlap='rectangular'
                            >
                                <Avatar className={classes.avatar}>N</Avatar>
                            </StyledBadge>
                        </IconButton>

                        <Popover
                            id="simple-popper"
                            open={open}
                            anchorEl={anchorEl}
                            onClose={this.handleClose}
                            className={classes.popover}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <Box className={classes.popoverIn}>
                                <Box display='flex' alignItems='center' className={classes.avatarBox}>
                                    <Box className={classes.avatarMargin}>
                                        <StyledBadgeMember
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right',
                                                overlap : 'rectangular',
                                            }}
                                            variant="dot"
                                            overlap='rectangular'
                                        >
                                            <Avatar src={TestAvatar} alt="profile image" className={classes.avatarMember}>N</Avatar>
                                        </StyledBadgeMember>
                                    </Box>
                                    <Box>
                                        <Typography className={classes.nameText}>김민희</Typography>
                                        <Typography className={classes.emailText} noWrap>minikim81@gmail.com</Typography>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <Select
                                                value={this.state.filter}
                                                onChange={this.handleChangeFilter}
                                                displayEmpty
                                                name="상황"
                                                className={classes.select}
                                                IconComponent={() => <Box style={{width:16, height:16, marginLeft:5, marginRight:5}}><ArrowDownIcon/> </Box>}
                                            >
                                                <MenuItem value="온라인" className={classes.menuText}>온라인</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Box>
                                <MenuList>
                                    <MenuItem className={clsx(classes.menuItem, classes.menuItemLine)} onClick={this.handleClickProfileSettings} disableRipple>프로필 설정</MenuItem>
                                    <MenuItem
                                        className={classes.menuItem}
                                        disableRipple
                                        onClick={this.handleClickLogout}
                                    >로그아웃</MenuItem>
                                </MenuList>
                            </Box>
                        </Popover>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(inject('authStore')(observer(TopBar))));