import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, IconButton, MenuItem, Typography, Menu} from "@material-ui/core";
import {ReactComponent as EyeTinyIcon} from "../../common/images/EyeIcon.svg";
import {ReactComponent as HandsClappingIcon} from "../../common/images/HandsClappingIcon.svg";
import {ReactComponent as ChatCircleDotsIcon} from "../../common/images/ChatCircleDotsIcon.svg";
import {ReactComponent as MoreIcon} from "../../common/images/DotsThreeOutlineVerticalIcon.svg";
import CommentComponent from "./CommentComponent";


const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width: 730,
        },
        width: 620,
        paddingBottom: 70,
        'button:hover':{
            background: 'transparent',
        },
    },
    titleStyle:{
        display:'flex',
        alignItems: 'flex-start',
        justifyContent:'space-between',
        marginTop:30,
        borderBottom:'1px solid #d3d7db',
        paddingBottom:7,
        marginBottom: 25,
        '& h3':{
            fontSize: '1.875rem',
            fontWeight:500,
            marginBottom:8,
        },
        '& p':{
            fontSize:'0.75em',
            color:'#0d0d0d',
            marginBottom:10,
        }
    },
    tagWriter:{
        fontSize:'0.625rem',
        backgroundColor:'#5778ed',
        color:'#fff',
        padding:'2px 6px',
        marginLeft: 4,
    },
    content:{
        fontSize:'0.938rem',
        lineHeight:1.45,
    },
    boxFooter:{
        border:'0 solid #e1e1e1',
        borderWidth:'1px 0',
        marginTop:33,
        marginBottom:19,
    },
    ftCount:{
        padding:'10px 0',
        borderBottom:'1px solid #fff',
        display:'flex',
        '& div': {
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.75rem',
            color: '#7F7F7F',
            marginRight:7,
            '& svg': {
                width: 14,
                height: 14,
                opacity: 0.5,
                marginRight:4,
            }
        }
    },
    ftAdded:{
        padding:'10px 60px',
        '& button':{
            width:'50%',
            textAlign: 'center',
            cursor:'pointer',
            '&:hover':{
                background: 'transparent',
            },
            '& svg':{
                marginRight:4,
                opacity:0.5,
            },
        },
    },
    active:{
        color:'#0097ff',
        fontWeight:700,
        // '& svg':{
        //     opacity:'1!important',
        // }
    },
    iconActive:{
        fill:'#0097ff',
        '& path':{
            fill:'#0097ff',
        }
    },
    menuBox:{
        "& .MuiPopover-paper":{
            boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.08)',
            borderRadius:7,
            border:'1.5px solid #d4d4d6'
        }
    },
    menuItem:{
        fontFamily: 'NanumSquareRoundOTF' ,
        fontSize:'0.875rem',
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
});


class ClassBoardDetailViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            GoodToggle: false,
        };
    }

    handleClickEdit = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    handleChangeGoodToggle = () => {
        this.setState({ GoodToggle: !this.state.GoodToggle });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl} = this.state;

        return (
            <div className={classes.root}>
                <Box>?????? ????????? > <b>????????????</b></Box>
                <Box className={classes.titleStyle}>
                    <Box>
                        <Typography variant="h3"> ????????? ?????? ????????? ??? </Typography>
                        <Typography variant="body1">?????? <span className={classes.tagWriter}>?????????</span></Typography>
                    </Box>
                    <IconButton disableRipple
                                aria-owns={anchorEl ? 'simple-menu' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleClickEdit}
                    ><MoreIcon/></IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                        className={classes.menuBox}
                    >
                        <MenuItem onClick={this.handleClose} className={classes.menuItem}>??????</MenuItem>
                        <MenuItem onClick={this.handleClose} className={classes.menuItem}>??????</MenuItem>
                    </Menu>
                </Box>
                <Box className={classes.content}>
                    ?????? ??????????????? ?????????????????? ?????? ??? ??????????<br/>

                    ???????????? ???????????? ????????? ??????????????? ?????? ????????? ???????????? ?????????.<br/>

                    ???????????? ?????????, ?????? ??? ??????????????? ???????????? ????????? ???????????? ??????, ?????? ???????????? ????????? ?????? ?????? ??????????????? ?????? ????????????.<br/>

                    ??? ??? ???, ????????? ?????? ????????? ????????? ????????? ??? ??? ??????.????????? ????????????.<br/>

                    ?????? ????????? ?????? ????????? ?????? ????????? ???????????? ????????? ????????? ?????????.<br/>
                </Box>
                <Box className={classes.boxFooter}>
                    <Box className={classes.ftCount}>
                        <Box><EyeTinyIcon/> 10 </Box>
                        <Box><HandsClappingIcon className={this.state.GoodToggle ? classes.iconActive : null}/> 5 </Box>
                        <Box><ChatCircleDotsIcon/> 2 </Box>
                    </Box>
                    <Box className={classes.ftAdded}>
                        <Button disableRipple onClick={this.handleChangeGoodToggle} className={this.state.GoodToggle ? classes.active : null}>
                            <HandsClappingIcon/> ?????????
                        </Button>
                        <Button disableRipple>
                            <ChatCircleDotsIcon/> ?????? ??????
                        </Button>
                    </Box>
                </Box>
                <CommentComponent/>

            </div>
        );
    }
}

export default withStyles(styles)(ClassBoardDetailViewComponent);