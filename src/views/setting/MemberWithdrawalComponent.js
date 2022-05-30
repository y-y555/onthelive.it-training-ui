import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Avatar, Box, Button, FormControl, MenuItem, Select, Typography} from "@material-ui/core";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import TestAvatar from "../../common/images/TestAvatar.jpg";
import clsx from "clsx";
import MemberWithdrawalDialogComponent from "./dialog/MemberWithdrawalDialogComponent";

const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width:620,
        paddingBottom:70
    },
    titleText:{
        fontSize:'0.938rem',
        color:'#000',
        marginBottom:35
    },
    textStyle:{
        fontSize:'0.875rem',
        color:'#000'
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
    listTopBorder:{
        borderTop:'1px solid #e1e1e1',
        marginTop:7
    },
    listBox:{
        padding:'15px 0 15px 25px',
        borderBottom:'1px solid #e1e1e1'
    },
    avatar:{
        width:40,
        height:40,
        marginRight:15
    },
    nameText:{
        fontSize:'0.875rem',
        fontWeight: 600,
        color:'#000'
    },
    dateText:{
        fontSize:'0.75rem',
        color:'#a3a8af'
    },
    buttonStyle:{
        background:'#ff2a3d',
        borderRadius:4,
        width:70,
        height:30,
        color:'#fff',
        fontSize:'0.75rem',
        "&:hover":{
            background:'#ff2a3d',
        }
    },
});

class MemberWithdrawalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "이름순",
            memberWithdrawalDialogOpen:false,
        };
    }

    handleChangeFilter = event => {
        this.setState({ filter: event.target.value });
    };

    handleClickMemberWithdrawalDialogOpen = () => {
        this.setState({ memberWithdrawalDialogOpen: true });
    };

    handleClose = () => {
        this.setState({
            memberWithdrawalDialogOpen: false ,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box>
                    <Typography className={classes.titleText}>
                        <b>강제 탈퇴</b>
                    </Typography>
                </Box>

                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Typography className={classes.textStyle}>강제탈퇴 처리하면 복구 할 수 없습니다.</Typography>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.filter}
                            onChange={this.handleChangeFilter}
                            displayEmpty
                            IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                        >
                            <MenuItem value="이름순" className={classes.menuItem}>이름순</MenuItem>
                            <MenuItem value="가입 최근순" className={classes.menuItem}>가입 최근순</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box className={classes.listTopBorder}>
                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.listBox}>
                        <Box display='flex' alignItems='center'>
                            <Avatar src={TestAvatar} alt="member image" className={classes.avatar} />
                            <Box>
                                <Typography className={classes.nameText}>변요한</Typography>
                                <Typography className={classes.dateText}>2021년 12월 21일 요청</Typography>
                            </Box>
                        </Box>

                        <Box>
                            <Button className={classes.buttonStyle} onClick={this.handleClickMemberWithdrawalDialogOpen} disableRipple>강제탈퇴</Button>
                        </Box>
                    </Box>
                </Box>

                <MemberWithdrawalDialogComponent memberWithdrawalDialogOpen={this.state.memberWithdrawalDialogOpen} handleClose={this.handleClose}/>
            </div>
        );
    }
}

export default withStyles(styles)(MemberWithdrawalComponent);