import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Chip, FormControl, MenuItem, Select, Typography, Button, TextareaAutosize} from "@material-ui/core";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import {ReactComponent as LockKey} from "../../common/images/LockKey.svg";
import {ReactComponent as ArrowElbowDownRight} from "../../common/images/ArrowElbowDownRight.svg";
import clsx from "clsx";
const styles = theme => ({
    root:{
        paddingTop:30,
        '& .MuiChip-label':{
            fontSize:'0.938rem'
        }
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
        cursor:'pointer',
        '&:first-of-type':{
            marginTop:0,
        }
    },
    boxStyleOn:{
        padding:18,
        borderRadius:'10px 10px 0 0',
        display:'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        marginTop: 20,
        backgroundColor:'#fff',
        cursor:'pointer',
        '&:first-of-type':{
            marginTop:0,
        }
    },
    boxWrap:{
        position:'absolute',
        top:0,
        left:0,
        width: '100%',
        zIndex:99,
        boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.25)',
        borderRadius:10,
        border: '1px solid #d3d7db',
        backgroundColor:'#fff',
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
    boxContentForm:{
        width:'100%'
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
    btnStyleWrap:{
        display:'flex',
        alignItems:'center',
        '& button':{
            fontSize:'0.75rem',
            minWidth:'auto',
            paddingLeft:4,
            marginLeft: 4,
            '&:hover':{
                background: 'transparent',
            }
        }
    },
    btnStyle:{
        border: '1px solid #333',
        borderRadius:7,
        color:'#000',
        padding:'7px 23px',
        fontWeight:600,
        fontSize:'0.938rem',
        backgroundColor:'#fff',
        '&:hover':{
            backgroundColor:'#fff',
        }
    },
    btnStyleDefault :{
        borderRadius:7,
        color:'#fff',
        padding:'7px 23px',
        fontWeight:600,
        fontSize:'0.938rem',
        background: '#c7c9cc',
        '&:hover':{
            background: '#c7c9cc',
        }
    },
    replyBox:{
        borderTop:'1px solid rgba(192, 194, 195, 0.7)',
        backgroundColor:'rgba(238, 238, 238, 0.2)',
        padding:'18px 18px 32px 18px',
        borderRadius:'0 0 10px 10px',
        display:'flex',
        alignItems:'flex-start',
        justifyContent: 'space-between',
    },
    replyBoxForm:{
        borderTop:'1px solid rgba(192, 194, 195, 0.7)',
        backgroundColor:'rgba(238, 238, 238, 0.2)',
        padding:18,
        borderRadius:'0 0 10px 10px',
        display:'flex',
        alignItems:'flex-start',
        justifyContent: 'space-between',
        flexDirection:'column',
    },
    textarea:{
        border:'0 none',
        background: 'transparent',
        fontSize:'1.063rem',
        '&:placeholder':{
            color:'#92979e',
        },
        '&:focus-visible':{
            border:0,
            outline:0,
        }
    }
});
class ClassInquiryDetailsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "??????",
            boxOn:false,
            boxAnswer:false,
        };
    }

    boxOnChange= () => {
        this.setState({ boxOn: !this.state.boxOn });
    };

    boxAnswerChange= () => {
        this.setState({ boxAnswer: !this.state.boxAnswer });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Box className={classes.chipBox}>
                        <Chip label="?????????" className={classes.chipGreen}/>
                        <Chip label="?????? ?????????" className={classes.chipYellow}/>
                        <Chip label="??????" className={classes.chipRed}/>
                    </Box>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.state.filter}
                            onChange={this.handleChangeSort}
                            displayEmpty
                            IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                        >
                            <MenuItem value="??????" className={classes.menuItem}>??????</MenuItem>
                            <MenuItem value="????????????" className={classes.menuItem}>????????????</MenuItem>
                            <MenuItem value="?????????" className={classes.menuItem}>?????????</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box style={{marginTop:8, position:"relative"}}>
                    <Box className={classes.boxStyle} onClick={this.boxOnChange}>
                        <Box>
                            <Box display='flex' alignItems='center'>
                                <Chip label="?????????" className={classes.chipGreen}/>
                                <span className={classes.name}>?????????  |  2022.6.1.</span>
                            </Box>
                            <Typography className={clsx(classes.boxContents, classes.secret)}><LockKey/> ??????????????????.</Typography>
                        </Box>
                        {this.state.boxOn === false ?
                        <Box>
                            <Typography className={classes.stateStyle}>????????????</Typography>
                        </Box>
                            :
                            null
                        }
                    </Box>
                    {this.state.boxOn === true ?
                        <Box className={classes.boxWrap} onClick={this.boxOnChange}>
                            <Box className={classes.boxStyleOn}>
                                <Box>
                                    <Box display='flex' alignItems='center'>
                                        <Chip label="?????????" className={classes.chipGreen}/>
                                        <span className={classes.name}>?????????  |  2022.6.1.</span>
                                    </Box>
                                    <Typography className={classes.boxContents}>?????? ?????????????????????.</Typography>
                                </Box>
                            </Box>
                            <Box className={classes.replyBox}>
                                <Box display='flex' alignItems='flex-start' >
                                    <ArrowElbowDownRight/>
                                    <Box style={{marginTop:6, marginLeft:8}}>
                                        <Box display='flex' alignItems='center'>
                                            <Chip label="??????" className={classes.chipRed}/>
                                            <span className={classes.name}>2022.6.1.</span>
                                        </Box>
                                        <Typography className={classes.boxContents}>?????? ?????????????????????.</Typography>
                                    </Box>
                                </Box>
                                <Box className={classes.btnStyleWrap}>
                                    <Button disableRipple>??????</Button> | <Button disableRipple>??????</Button>
                                </Box>
                            </Box>
                        </Box>
                        :
                        null
                    }
                    </Box>
                    <Box style={{marginTop:20, position:"relative"}}>
                        <Box className={classes.boxStyle} onClick={this.boxAnswerChange}>
                            <Box>
                                <Box display='flex' alignItems='center'>
                                    <Chip label="?????? ?????????" className={classes.chipYellow}/>
                                    <span className={classes.name}>?????????  |  2022.6.13.</span>
                                </Box>
                                <Typography className={classes.boxContents}>?????? ?????????????????????.</Typography>
                            </Box>
                            <Box>
                                <Button className={classes.btnStyle}>????????????</Button>
                            </Box>
                        </Box>
                        {this.state.boxAnswer === true ?
                            <Box className={classes.boxWrap}>
                                <Box className={classes.boxStyleOn} onClick={this.boxAnswerChange}>
                                    <Box>
                                        <Box display='flex' alignItems='center'>
                                            <Chip label="?????? ?????????" className={classes.chipYellow}/>
                                            <span className={classes.name}>?????????  |  2022.6.13.</span>
                                        </Box>
                                        <Typography className={classes.boxContents}>?????? ?????????????????????.</Typography>
                                    </Box>
                                    <Box>
                                        <Button className={classes.btnStyle}>????????????</Button>
                                    </Box>
                                </Box>
                                <Box className={classes.replyBoxForm}>
                                    <Box display='flex' alignItems='flex-start' style={{width:'100%'}} >
                                        <ArrowElbowDownRight/>
                                        <Box style={{marginTop:6, marginLeft:8, width:'100%'}}>
                                            <Box display='flex' alignItems='center'>
                                                <Chip label="??????" className={classes.chipRed}/>
                                            </Box>
                                            <Box className={clsx(classes.boxContents,classes.boxContentForm)}>
                                                <TextareaAutosize
                                                    aria-label="minimum height"
                                                    minRows={2}
                                                    placeholder="????????? ??????????????????."
                                                    style={{ width: '100%' }}
                                                    className={classes.textarea}
                                                />
                                                </Box>
                                        </Box>
                                    </Box>
                                    <Box style={{marginLeft:'auto', marginTop:'20px'}}>
                                        <Button className={classes.btnStyleDefault} disableRipple>????????????</Button>
                                    </Box>
                                </Box>
                            </Box>
                            :
                            null
                        }
                    </Box>
            </div>
        );
    }
}


export default withStyles(styles)(ClassInquiryDetailsComponent);