import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Avatar, Box, FormControl, IconButton, Menu, MenuItem, Select} from "@material-ui/core";
import clsx from "clsx";
import {ReactComponent as CheckCircleAgreeOffIcon} from "../../common/images/CheckCircleAgreeOffIcon.svg";
import {ReactComponent as CheckCircleAgreeOnIcon} from "../../common/images/CheckCircleAgreeOnIcon.svg";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import {ReactComponent as MoreIcon} from "../../common/images/DotsThreeOutlineVerticalIcon.svg";
import {ReactComponent as UsersThreeIcon} from "../../common/images/UsersThreeIcon.svg";


const styles = _theme => ({
    root:{

    },
    flexCenter:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    filterStyle:{
        display:'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        borderBottom:'1px solid #d3d7db',
        margin:'30px 0 17px',
        paddingBottom:9,
        cursor:'pointer',
    },
    listStyle:{
        marginTop:40,
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
        padding:'17px 0 17px 26px',
        '&:first-child':{
            borderTop: '1px solid #d3d7db',
        }
    },
    checkBoxStyle:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        color: '#a9adb4',
        fontSize:'0.875rem',
        '& svg':{
            width:20,
            height:20,
            marginRight:4,
        }
    },
    checkBoxStyleOn:{
        color:'#0097FF',
    },
    avatar:{
        marginRight: 10,
        '& svg path':{
            fill:'#fff'
        }
    },
    name:{
        fontSize:'0.875rem',
        fontWeight:600,
    },
    groupInfo:{
        fontSize:'0.75rem',
        color:'#979797',
        marginTop:7,
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
    menuBox:{
        "& .MuiPopover-paper":{
            boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.08)',
            borderRadius:7,
            border:'1.5px solid #d4d4d6'
        }
    },
});


class ClassMemberGroupManagementComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkBox:true,
            filter: "이름순",
            anchorElManager: null,
            anchorGeneral: null,
        };
    }

    handleChangeCheckBox= () => {
        this.setState({ checkBox: !this.state.checkBox });
    };

    handleClickManager = event => {
        this.setState({ anchorElManager: event.currentTarget });
    };
    handleClickGeneral = event => {
        this.setState({ anchorGeneral: event.currentTarget });
    };

    handleClose = () => {
        this.setState({
            anchorElManager: null,
            anchorGeneral: null,
        });
    };

    render() {
        const { classes } = this.props;
        const { anchorElManager, anchorGeneral } = this.state;
        const manager = Boolean(anchorElManager);
        const general = Boolean(anchorGeneral);

        return (
            <div className={classes.root}>
                <Box onClick={this.handleChangeCheckBox} className={classes.filterStyle} >
                    <Box className={this.state.checkBox ? classes.checkBoxStyle : clsx(classes.checkBoxStyle,classes.checkBoxStyleOn) }>
                        {this.state.checkBox ?
                            <CheckCircleAgreeOffIcon/> :
                            <CheckCircleAgreeOnIcon/>
                        }
                        내가 포함된 그룹만 보기
                    </Box>
                    <Box>
                        <FormControl className={classes.formControl}>
                            <Select
                                value={this.state.filter}
                                onChange={this.handleChangeSort}
                                // input={<Input name="age" id="age-label-placeholder" />}
                                displayEmpty
                                IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                            >
                                <MenuItem value="이름순" className={classes.menuItem}>이름순</MenuItem>
                                <MenuItem value="등록순" className={classes.menuItem}>최근 가입순</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>

                <Box className={classes.listStyle}>
                    <Box className={classes.listItemStyle}>
                        <Box className={classes.flexCenter}>
                            <Avatar className={classes.avatar}><UsersThreeIcon/></Avatar>
                            <Box display='flex' flexDirection='column'>
                                <span className={classes.name}>그룹1</span>
                                <span className={classes.groupInfo}>2021.12.01  |  2명</span>
                            </Box>
                        </Box>
                        <IconButton disableRipple
                            //aria-owns={anchorEl ? 'simple-menu' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleClickManager}
                        ><MoreIcon/></IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorElManager}
                            open={manager}
                            onClose={this.handleClose}
                            className={classes.menuBox}
                        >
                            <MenuItem onClick={this.handleClose} className={classes.menuItem}>수정</MenuItem>
                            <MenuItem onClick={this.handleClose} className={classes.menuItem}>삭제</MenuItem>
                        </Menu>
                    </Box>
                    <Box className={classes.listItemStyle}>
                        <Box className={classes.flexCenter}>
                            <Avatar className={classes.avatar}><UsersThreeIcon/></Avatar>
                            <Box display='flex' flexDirection='column'>
                                <span className={classes.name}>그룹1</span>
                                <span className={classes.groupInfo}>2021.12.01  |  2명</span>
                            </Box>
                        </Box>
                        <IconButton disableRipple
                            //aria-owns={anchorEl ? 'simple-menu' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleClickManager}
                        ><MoreIcon/></IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorElManager}
                            open={manager}
                            onClose={this.handleClose}
                            className={classes.menuBox}
                        >
                            <MenuItem onClick={this.handleClose} className={classes.menuItem}>수정</MenuItem>
                            <MenuItem onClick={this.handleClose} className={classes.menuItem}>삭제</MenuItem>
                        </Menu>
                    </Box>
                </Box>


            </div>
        );
    }
}

export default withStyles(styles)(ClassMemberGroupManagementComponent);