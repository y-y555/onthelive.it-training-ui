import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, IconButton, Menu, MenuItem, Typography} from "@material-ui/core";
import clsx from "clsx";
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import NoticeDialogComponent from "../dialog/NoticeDialogComponent";
import {ReactComponent as MoreIcon} from "../../common/images/DotsThreeOutlineVerticalIcon.svg";

const styles = theme => ({
    root:{
        marginBottom:30,
        '& .carousel__slide-focus-ring':{
            outlineStyle: 'none'
        }
    },
    carousel:{
        position:'relative',
        border:'1px solid #C4C4C4',
        borderRadius:7,
        boxShadow:'0 1px 1px 0 #BEBEBE',
        // height:300,
    },
    title:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottom:'1px solid #D3D7DB',
        padding:'10px 14px',
        '& h4':{
            fontSize: '1.063rem',
            fontWeight:600,
            '& span':{
                fontSize:'0.75em',
                color: '#004FC4',
                backgroundColor: '#E5F0FF',
                borderRadius: 30,
                padding:'4px 6px',
                marginRight:7,
            }
        },
    },
    btnStyle:{
        fontSize:'0.875rem',
        padding:0,
        border:'1px solid #BFBFBF',
        borderRadius:3,
        minWidth:'2.8rem',
        '& span':{
            display: 'initial',
        },
        '&:hover':{
            backgroundColor:'#fff',
        }
    },
    iconButton:{
        padding: 0,
        marginLeft: 15,
        '&:hover':{
            background: 'transparent'
        }
    },
    contentsBox:{
        fontSize:'0.938rem',
        lineHeight:'1.45',
        overflowY:'auto',
        height: 100,
        padding:'14px 16px 20px',
        boxSizing:'border-box',
        '& ul': {
            paddingBottom:20
        },
        '& ul, ol':{
            margin:0,
            padding:0,
            listStyle:'none',
        },
        "&::-webkit-scrollbar": {
            width: '10px',
        },
        "&::-webkit-scrollbar-thumb": {
            background: '#bebebe',
            borderRadius: '10px',
            backgroundClip: 'padding-box',
            border: '3px solid transparent'
        },
        "&::-webkit-scrollbar-track": {
            background: 'transparent',
            marginTop: 5,
        },
    },
    dotGroup:{
        display:'flex',
        justifyContent: 'center',
        marginTop: 12,
        '&>button':{
            backgroundColor:'#fff',
            width:8,
            height:8,
            borderRadius:8,
            border:'1px solid #C4C4C4',
            padding:0,
            margin: '0 3px',
        },
        '&>button.carousel__dot--selected':{
            backgroundColor:'#6D6D70',
        },
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


class ClassNoticeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false,
            anchorEl: null,
        };
    }

    handleClickOpen = () => {
        this.setState({ dialogOpen: true });
    };

    handleClickMore = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({
            dialogOpen: false,
            anchorEl: null,
        });
    };

   render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={19}
                    totalSlides={3}
                    visibleSlides={1}
                    step={1}
                    // isPlaying={true}
                    interval={5000}
                >
                    <Slider className={classes.carousel}>
                        <Slide index={0}>
                            <Box className={classes.title}>
                                <Typography variant="h4"><span>공지</span>코로나19 예방 안내1</Typography>
                                <Box display='flex' alignItems='center'>
                                    <Button className={classes.btnStyle} onClick={this.handleClickOpen} disableRipple>등록</Button>
                                    <IconButton
                                        className={classes.iconButton}
                                        disableRipple
                                        aria-haspopup="true"
                                        onClick={this.handleClickMore}
                                    >
                                        <MoreIcon/>
                                    </IconButton>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={this.handleClose}
                                        className={classes.menuBox}
                                    >
                                        <MenuItem onClick={this.handleClose} className={classes.menuItem}>수정</MenuItem>
                                        <MenuItem onClick={this.handleClose} className={classes.menuItem}>삭제</MenuItem>
                                    </Menu>
                                </Box>
                            </Box>
                            <Box className={classes.contentsBox}>
                                <ul>
                                    <li>1. 불필요한 외출과 모임, 다중이용시설 자제</li>
                                    <li>2. 원격수업 기간 중 학원 및 교습소 등원 자제</li>
                                    <li>3. 자주 손 씻기 (손소독제 이용 또는 흐르는 물과 비누로 30초 이상 씻기)</li>
                                </ul>
                            </Box>

                        </Slide>
                        <Slide index={1}>

                            <Box className={classes.title}>
                                <Typography variant="h4"><span>공지</span>코로나19 예방 안내2</Typography>
                                <Box display='flex' alignItems='center'>
                                    <Button className={classes.btnStyle} onClick={this.handleClickOpen} disableRipple>등록</Button>
                                    <IconButton
                                        className={classes.iconButton}
                                        disableRipple
                                        aria-haspopup="true"
                                        onClick={this.handleClickMore}
                                    >
                                        <MoreIcon/>
                                    </IconButton>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={this.handleClose}
                                        className={classes.menuBox}
                                    >
                                        <MenuItem onClick={this.handleClose} className={classes.menuItem}>수정</MenuItem>
                                        <MenuItem onClick={this.handleClose} className={classes.menuItem}>삭제</MenuItem>
                                    </Menu>
                                </Box>
                            </Box>
                            <Box className={classes.contentsBox}>
                                <ul>
                                    <li>1. 불필요한 외출과 모임, 다중이용시설 자제</li>
                                    <li>2. 원격수업 기간 중 학원 및 교습소 등원 자제</li>
                                </ul>
                            </Box>
                        </Slide>
                        <Slide index={2}>
                            <Box className={classes.title}>
                                <Typography variant="h4"><span>공지</span>수업 중 유의사항</Typography>
                                <Box display='flex' alignItems='center'>
                                    <Button className={classes.btnStyle} onClick={this.handleClickOpen} disableRipple>등록</Button>
                                    <IconButton
                                        className={classes.iconButton}
                                        disableRipple
                                        aria-haspopup="true"
                                        onClick={this.handleClickMore}
                                    >
                                        <MoreIcon/>
                                    </IconButton>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={this.handleClose}
                                        className={classes.menuBox}
                                    >
                                        <MenuItem onClick={this.handleClose} className={classes.menuItem}>수정</MenuItem>
                                        <MenuItem onClick={this.handleClose} className={classes.menuItem}>삭제</MenuItem>
                                    </Menu>
                                </Box>
                            </Box>
                            <Box className={classes.contentsBox}>
                                <ul>
                                    <li>1. 불필요한 외출과 모임, 다중이용시설 자제</li>
                                    <li>2. 원격수업 기간 중 학원 및 교습소 등원 자제</li>
                                    <li>3. 자주 손 씻기 (손소독제 이용 또는 흐르는 물과 비누로 30초 이상 씻기)</li>
                                    <li>4. 수업늦지않기</li>
                                    <li>5. 수업에 집중하기 (친구들과 잡담금지)</li>
                                </ul>
                            </Box>
                        </Slide>
                    </Slider>
                    <DotGroup className={classes.dotGroup} />

                </CarouselProvider>
                <NoticeDialogComponent handleClose={this.handleClose} dialogOpen={this.state.dialogOpen} />
            </div>
        );
    }
}

export default withStyles(styles)(ClassNoticeComponent);