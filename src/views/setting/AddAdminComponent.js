import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {Box, FormControl, MenuItem, Select, Typography, Button, Avatar} from "@material-ui/core";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import TestAvatar from "../../common/images/TestAvatar.jpg";
import {ReactComponent as AsideUserIcon} from "../../common/images/AsideUserIcon.svg";
import AddAdminDialogComponent from "./dialog/AddAdminDialogComponent";
import AdminDeleteDialogComponent from "./dialog/AdminDeleteDialogComponent";

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
        marginBottom:10
    },
    optionBox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
        marginBottom:32
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
    textStyle:{
        fontSize:'0.875rem',
        color:'#000'
    },
    spanStyle:{
        fontWeight:600,
        textDecoration:'underline'
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
    boxStyle:{
        fontFamily:'Montserrat',
        fontSize:'0.625rem',
        fontWeight:'bold',
        padding:'2px 5px 0px',
        background:'#00c880',
        color:'#fff',
        marginLeft:7
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
});

class AddAdminComponent extends Component {
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
                        <b>관리자</b> • 1명
                    </Typography>
                </Box>
                <Box className={classes.optionBox}>
                    <Button className={classes.btnStyle} onClick={this.props.handleChangeAddAdminDialog} disableRipple>관리자 추가</Button>
                </Box>

                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Typography className={classes.textStyle}>관리자는 <span className={classes.spanStyle}>멤버 권한 설정</span>에서 지정할 수 있습니다.</Typography>
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
                            <Box display='flex' alignItems='center'>
                                <Typography className={classes.nameText}>김온더</Typography>
                                <Typography className={classes.boxStyle}>주최자</Typography>
                            </Box>
                        </Box>

                    </Box>

                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.listBox}>
                        <Box display='flex' alignItems='center'>
                            <Avatar src={TestAvatar} alt="member image" className={classes.avatar} />
                            <Box display='flex' alignItems='center'>
                                <Typography className={classes.nameText}>배수지</Typography>
                                <Typography className={classes.boxStyle}>이동욱</Typography>
                            </Box>
                        </Box>

                        <Box display='flex' alignItems='center'>
                            <Button className={classes.buttonStyle} onClick={this.props.handleChangeAdminDeleteDialog} disableRipple>제외</Button>
                        </Box>
                    </Box>
                </Box>

                {/* dialog */}
                <AddAdminDialogComponent addAdminDialogOpen={this.props.addAdminDialogOpen} handleCloseAddAdminDialog={this.props.handleCloseAddAdminDialog}/>
                <AdminDeleteDialogComponent adminDeleteDialogOpen={this.props.adminDeleteDialogOpen} handleCloseAddAdminDialog={this.props.handleCloseAddAdminDialog}/>
            </div>
        );
    }
}

export default withStyles(styles)(AddAdminComponent);