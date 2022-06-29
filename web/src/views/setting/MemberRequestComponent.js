import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {Avatar, Box, Button, FormControl, MenuItem, Select, Typography} from "@material-ui/core";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import TestAvatar from "../../common/images/TestAvatar.jpg";

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
    iconBox:{
        marginBottom:13,
        width:44,
        height:44,
        background:'#e9e9e9',
        borderRadius:'50%',
        "& svg":{
            width:27,
            height:27
        },
        "& .aside-user":{
            fill:'#000'
        }
    },
    memberNoText:{
        fontSize:'1.063rem',
        color:'#a9adb4'
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
        background:'#c2c2c2',
        borderRadius:4,
        width:70,
        height:30,
        color:'#fff',
        fontSize:'0.75rem',
        "&:hover":{
            background:'#c2c2c2',
        }
    },
    okButton:{
        background:'#0097ff',
        marginLeft:8,
        "&:hover":{
            background:'#0097ff',
        }
    }
});

class MemberRequestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "이름순",
        };
    }

    handleChangeFilter = event => {
        this.setState({ filter: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box>
                    <Typography className={classes.titleText}>
                        <b>멤버요청</b> • 2명
                    </Typography>
                </Box>

                {/* 멤버 요청이 없을경우 */}
                {/*<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>*/}
                {/*    <Box display='flex' alignItems='center' justifyContent='center' className={classes.iconBox}>*/}
                {/*        <AsideUserIcon/>*/}
                {/*    </Box>*/}
                
                {/*    <Typography className={classes.memberNoText}>가입 신청자가 없습니다.</Typography>*/}
                {/*</Box>*/}


                {/* // */}
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Typography className={classes.textStyle}>한 달이 지난 가입신청은 자동 거절 됩니다.</Typography>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.filter}
                            onChange={this.handleChangeFilter}
                            displayEmpty
                            IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                        >
                            <MenuItem value="이름순" className={classes.menuItem}>이름순</MenuItem>
                            <MenuItem value="등록순" className={classes.menuItem}>요청 최근순</MenuItem>
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

                        <Box display='flex' alignItems='center'>
                            <Button className={classes.buttonStyle} disableRipple>거절</Button>
                            <Button className={clsx(classes.buttonStyle, classes.okButton)} disableRipple>승인</Button>
                        </Box>
                    </Box>

                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.listBox}>
                        <Box display='flex' alignItems='center'>
                            <Avatar src={TestAvatar} alt="member image" className={classes.avatar} />
                            <Box>
                                <Typography className={classes.nameText}>배수지</Typography>
                                <Typography className={classes.dateText}>2021년 12월 23일 요청</Typography>
                            </Box>
                        </Box>

                        <Box display='flex' alignItems='center'>
                            <Button className={classes.buttonStyle} disableRipple>거절</Button>
                            <Button className={clsx(classes.buttonStyle, classes.okButton)} disableRipple>승인</Button>
                        </Box>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(MemberRequestComponent);