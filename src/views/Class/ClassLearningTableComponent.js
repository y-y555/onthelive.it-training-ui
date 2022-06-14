import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Avatar, Box, FormControl, IconButton, Menu, MenuItem, Select, Typography} from "@material-ui/core";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import {ReactComponent as Browsers} from "../../common/images/Browsers.svg";
const styles = theme => ({
    root:{
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
    },
    groupInfo:{
        fontSize:'0.75rem',
        color:'#979797',
        marginTop:7,
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
class ClassLearningTableComponent extends Component {
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
                <Box>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.filter}
                            onChange={this.handleChangeSort}
                            displayEmpty
                            IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                        >
                            <MenuItem value="이름순" className={classes.menuItem}>최근 등록일 순</MenuItem>
                            <MenuItem value="등록순" className={classes.menuItem}>최근 제출일 순</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box className={classes.listStyle}>
                    <Box className={classes.listItemStyle}>
                        <Box className={classes.flexCenter}>
                            <Avatar className={classes.avatar}><Browsers/></Avatar>
                            <Box display='flex' flexDirection='column'>
                                <span className={classes.name}>파이썬 환경 셋팅하기</span>
                                <span className={classes.groupInfo}>2022.6.1.  |  학습완료 10명  •  진행중 3명  •  미수강 4명 </span>
                            </Box>
                        </Box>
                       <Typography><span style={{fontSize:'1.875rem'}}>20</span>명</Typography>
                    </Box>
                    <Box className={classes.listItemStyle}>
                        <Box className={classes.flexCenter}>
                            <Avatar className={classes.avatar}><Browsers/></Avatar>
                            <Box display='flex' flexDirection='column'>
                                <span className={classes.name}>파이썬 기본 문법 익히기 1</span>
                                <span className={classes.groupInfo}>2022.5.31.  |  학습완료 15명  •  진행중 4명  •  미수강 1명   |  5명 작성</span>
                            </Box>
                        </Box>
                        <Typography><span style={{fontSize:'1.875rem'}}>17</span>명</Typography>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(ClassLearningTableComponent);