import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Chip, FormControl, MenuItem, Select, Typography, Button} from "@material-ui/core";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import {ReactComponent as LockKey} from "../../common/images/LockKey.svg";
import clsx from "clsx";
const styles = theme => ({
    root:{
        paddingTop:30,
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
    chipBox:{
        '& div':{
            marginRight:12,
            fontSize:'0.938rem'
        }
    },
    chipGreen:{
        backgroundColor:'#dcf8ed',
        color:'#00824f'
    },
    chipYellow:{
        backgroundColor:'#fef5e4',
        color:'#c38700'
    },
    chipRed:{
        backgroundColor:'#ffe8e9',
        color:'#dc3a42'
    },
    boxStyle:{
        padding:18,
        boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.25)',
        border: '1px solid #d3d7db',
        borderRadius:10,
        display:'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        marginTop: 20,
        '&:first-of-type':{
            marginTop:0,
        }
    },
    name:{
        fontSize:'0.875rem',
        color:'#666',
        marginLeft:8,
    },
    boxContents:{
        fontSize:'1.063rem',
        color:'#000',
        display:'flex',
        alignItems:'center',
        marginTop:10,
    },
    secret:{
        color:'rgba(13, 13, 13, 0.3)',
        '& svg path':{
            fill:'rgba(13, 13, 13, 0.3)',
        }
    },
    stateStyle:{
        fontSize:'1.5rem'
    },
    btnStyle:{
        border: '1px solid #333',
        borderRadius:7,
        color:'#000',
        padding:'7px 23px',
        fontWeight:600,
        fontSize:'0.938rem',
        '&:hover':{
            background: 'transparent',
        }
    },
});
class ClassInquiryDetailsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "전체",
        };
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Box className={classes.chipBox}>
                        <Chip label="수강생" className={classes.chipGreen}/>
                        <Chip label="예비 수강생" className={classes.chipYellow}/>
                        <Chip label="강사" className={classes.chipRed}/>
                    </Box>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.filter}
                            onChange={this.handleChangeSort}
                            displayEmpty
                            IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                        >
                            <MenuItem value="전체" className={classes.menuItem}>전체</MenuItem>
                            <MenuItem value="답변완료" className={classes.menuItem}>답변완료</MenuItem>
                            <MenuItem value="미답변" className={classes.menuItem}>미답변</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box style={{marginTop:8}}>
                    <Box className={classes.boxStyle}>
                        <Box>
                            <Box display='flex' alignItems='center'>
                                <Chip label="수강생" className={classes.chipGreen}/>
                                <span className={classes.name}>강효주  |  2022.6.1.</span>
                            </Box>
                            <Typography className={clsx(classes.boxContents, classes.secret)}><LockKey/> 비밀글입니다.</Typography>
                        </Box>
                        <Box>
                            <Typography className={classes.stateStyle}>답변완료</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.boxStyle}>
                        <Box>
                            <Box display='flex' alignItems='center'>
                                <Chip label="예비 수강생" className={classes.chipYellow}/>
                                <span className={classes.name}>안은찬  |  2022.6.13.</span>
                            </Box>
                            <Typography className={classes.boxContents}>오늘 강의질문입니다.</Typography>
                        </Box>
                        <Box>
                            <Button className={classes.btnStyle}>답변작성</Button>
                        </Box>
                    </Box>
                </Box>
            </div>
        );
    }
}


export default withStyles(styles)(ClassInquiryDetailsComponent);