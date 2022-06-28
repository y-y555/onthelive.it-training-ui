import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    Button,
    FormControl,
    Select,
    MenuItem, Avatar, Typography, IconButton, Menu, Tab, Tabs
} from "@material-ui/core";
import {ReactComponent as CheckCircleAgreeOffIcon} from "../../common/images/CheckCircleAgreeOffIcon.svg";
import {ReactComponent as CheckCircleAgreeOnIcon} from "../../common/images/CheckCircleAgreeOnIcon.svg";
import {ReactComponent as MoreIcon} from "../../common/images/DotsThreeOutlineVerticalIcon.svg";
import clsx from "clsx";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import AddGroupDialogComponent from "../dialog/AddGroupDialogComponent";
import InvitationDialogComponent from '../dialog/InvitationDialogComponent';
import {ReactComponent as FolderPlusIcon} from "../../common/images/FolderPlusIcon.svg";
import ClassMemberManagementComponent from "./ClassMemberManagementComponent";
import ClassMemberGroupManagementComponent from "./ClassMemberGroupManagementComponent";
import MemberGroupSearchDialogComponent from "./MemberGroupSearchDialogComponent";


const styles = theme => ({
    root: {
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width:620,
        paddingBottom:70,
        '& ul, ol':{
            margin:0,
            padding:0,
            listStyle:'none',
        }
    },
    tabStyle:{
        display: 'inline-flex',
        position: 'relative',
        '&:after':{
            content:'""',
            width: '100%',
            height:3,
            backgroundColor:'#eee',
            display:'block',
            position:'absolute',
            bottom:0,
            left:0,
            zIndex:-1,
        },
        '& button':{
            minWidth: 100,
            fontSize:'0.938rem',
            '&.Mui-selected':{
                fontWeight:700,
                color:'#0097ff'
            },
        },
        '& .MuiTabs-indicator':{
            height:3,
            backgroundColor:'#0097ff',
        }
    },
    flexCenter:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    optionBox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
        marginTop:9,
        '& button':{
            marginLeft:14,
        }
    },
    btnStyle:{
        border: '1px solid #0097ff',
        borderRadius:7,
        color:'#0097ff',
        padding:'7px 23px',
        fontWeight:600,
        '&:hover':{
            background: 'transparent',
        }
    },
    btnStyle2:{
        border: '1px solid #bfbfbf',
        fontSize:'0.875rem',
        borderRadius:7,
        color:'#000',
        padding:'3px 10px',
        fontWeight:600,
        '&:hover':{
            background: 'transparent',
        }
    },
    formControl:{
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
        fontSize:'0.75rem',
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
    menuBox:{
        "& .MuiPopover-paper":{
            boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.08)',
            borderRadius:7,
            border:'1.5px solid #d4d4d6'
        }
    },
});


class MemberListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: 0,
            invitationDialogOpen: false,
            AddGroupDialogOpen:false,
            memberGroupSearch:false,
        };
    }


    handleChangeSort = event => {
        this.setState({ filter: event.target.value });
    };

    handleChangeInvitationDialogOpen = () => {
        this.setState({ invitationDialogOpen: true });
    };

    handleChangeAddGroupDialogOpen = () => {
        this.setState({ AddGroupDialogOpen: true });
    };

    handleChangeMemberGroupSearch = () => {
        this.setState({ memberGroupSearch: true });
    };

    handleClose = () => {
        this.setState({
            tabs: 0,
            anchorEl: null,
            invitationDialogOpen: false,
            AddGroupDialogOpen:false,
            memberGroupSearch:false,
        });
    };


    handleTabChange = (event, tabs) => {
        this.setState({ tabs });
    };

    render() {
        const { classes } = this.props;
        const { tabs} = this.state;



        return (
            <div className={classes.root}>
                {/*<Box><b>멤버</b> • 1,200명</Box>*/}
                <Tabs value={tabs} onChange={this.handleTabChange} className={classes.tabStyle}>
                    <Tab label="멤버 (999+)" disableRipple/>
                    <Tab label="그룹 (3)" disableRipple/>
                </Tabs>

                <Box className={classes.optionBox}>
                    <Button className={classes.btnStyle} onClick={this.handleChangeInvitationDialogOpen} disableRipple>멤버 초대하기</Button>
                    <IconButton disableRipple><FolderPlusIcon/></IconButton>
                    <Button className={classes.btnStyle2} onClick={this.handleChangeAddGroupDialogOpen} disableRipple>+ 새 그룹 만들기</Button>
                </Box>

                {tabs === 0 &&
                    <ClassMemberManagementComponent />
                }
                {tabs === 1 &&
                    <ClassMemberGroupManagementComponent/>
                }
                <InvitationDialogComponent
                    invitationDialogOpen={this.state.invitationDialogOpen}
                    handleClose={this.handleClose}
                />
                <AddGroupDialogComponent
                    AddGroupDialogOpen={this.state.AddGroupDialogOpen}
                    handleClose={this.handleClose}
                    handleChangeMemberGroupSearch={this.handleChangeMemberGroupSearch}
                />
                <MemberGroupSearchDialogComponent
                    memberGroupSearch={this.state.memberGroupSearch}
                    handleClose={this.handleClose}
                />
            </div>
        );
    }
}

export default withStyles(styles)(MemberListComponent);