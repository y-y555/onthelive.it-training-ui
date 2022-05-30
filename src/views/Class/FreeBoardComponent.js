import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {
    IconButton,
    Box,
    Tab,
    Tabs,
    Typography,
    Select,
    Input,
    MenuItem,
    FormControl, Button
} from "@material-ui/core";
import {ReactComponent as EyeTinyIcon} from "../../common/images/EyeIcon.svg";
import {ReactComponent as HandsClappingIcon} from "../../common/images/HandsClappingIcon.svg";
import {ReactComponent as ChatCircleDotsIcon} from "../../common/images/ChatCircleDotsIcon.svg";
import {ReactComponent as BedgeNewIcon} from "../../common/images/BedgeNewIcon.svg";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import {ReactComponent as PencilLine} from "../../common/images/PencilLine.svg";
import {ReactComponent as NoFilesIcon} from "../../common/images/NoFilesIcon.svg";
import {withRouter} from "react-router-dom";
import RoomTestImg1 from "../../common/images/RoomTestImg1.png";

const styles = theme => ({
    root:{
    },
    categoryStyle:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottom:'1px solid #d3d7db',
        marginTop:30,
    },
    tabStyle:{
        // display: 'inline-flex',
        fontWeight:300,
        '& button':{
            minWidth: 'auto',
            fontSize:'0.875rem',
            padding:0,
            marginRight:30,
            color:'#a9adb4',
            '&.Mui-selected span':{
                color:'#000',
                fontWeight:700,
            },
            "& span":{
                fontWeight:300,
            },
        },
        '& .MuiTabs-indicator':{
            display: 'none',
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
        "&.Mui-selected":{
            background:'transparent'
        },
        "&.Mui-selected:hover":{
            background:'#d3d7db'
        },
    },
    title:{
        display:'flex',
        alignItems:'center',
        marginBottom:15,
        '& h4':{
            fontSize: '1.063rem',
            fontWeight:500,
            cursor:'pointer',
        },
        '& svg':{
            marginBottom: 2,
        }
    },
    notifyStyle:{
        fontSize:'0.875em',
        color: '#004FC4',
        fontWeight:600,
        backgroundColor: '#E5F0FF',
        borderRadius: 30,
        padding:'4px 6px',
        marginRight:7,
    },
    subtitleStyle:{
        fontSize: '1.063rem',
        color:'#00c880',
        marginRight:4,
        fontWeight:600
    },
    iconMargin:{
        marginLeft:5
    },
    tabLine:{
        width:1,
        height:17,
        background:'rgba(0, 0, 0, 0.2)',
        margin:'0 24px 0 12px'
    },
    //
    iconButton:{
        padding:0,
        "&:hover":{
            background:'transparent'
        }
    },
    cardBox:{
        boxShadow:'0 1px 1px 0 rgba(0, 0, 0, 0.25)',
        border:'1px solid #d3d7db',
        borderRadius:10,
        marginTop:20
    },
    boxInPadding:{
        padding:'20px 18px 15px'
    },
    boxContents:{
        margin:'25px 0 22px',
    },
    subTextBox:{
        fontSize:'0.938rem',
        color:'#000',
        whiteSpace: 'pre-wrap'
    },
    imgBox:{
        marginTop:20,
        "& > img":{
            borderRadius:15,
            width:'100%',
            height:372,
            objectFit:'cover',
        }
    },
    buttonStyle:{
        minWidth:20,
        padding:'0',
        fontSize:'0.875rem',
        color:'#a3a8af',
        fontWeight:400,
        marginLeft:5,
        "&:hover":{
            background:'transparent'
        },
    },
    textStyle:{
        fontSize:'0.75rem',
        color:'#5c5c5c'
    },
    textLine:{
        paddingRight:20,
        borderRight:'1px solid #e1e1e1',
        marginRight:20
    },
    boxFooter:{
        background:'rgba(237, 237, 237, 0.6)',
        borderRadius:10
    },
    ftCount:{
        padding:'13px 14px',
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
    },
    iconActive:{
        '& path':{
            fill:'#0097ff',
        }
    },
    noFilesBox:{
        marginTop:60
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
    }
});


class FreeBoardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: 0,
            filter: "최신순",
            labelWidth: 0,
            GoodToggle: false,
            cardViewList:[
                {
                    notice: true,
                    badge: false,
                    topic:"일정",
                    title: "수업 중 유의사항",
                    text: "자유 게시판영화 ‘매트릭스’ 보신 적 있나요?\n그렇다면 주인공인 네오가 ‘훈련’을 받는 장면을 기억하실 거예요. 해변에서 달리고, 점점 더 강해지도록 운동하는 장면을 보여주는 대신, 다른 캐릭터가 네오의 뇌에 직접 프로그램을 집어 넣습니다. 몇 초 후, 네오는 눈을 뜨고몇 초 후",
                    name: "강효주",
                    date: "2021.12.15",
                    imgShow: false,
                    img: ""
                },
                {
                    notice: false,
                    badge: true,
                    topic:"이것저것",
                    title: "수업 중 유의사항",
                    text: "자유 게시판영화 ‘매트릭스’ 보신 적 있나요?",
                    name: "강효주",
                    date: "2021.12.15",
                    imgShow: false,
                    img: ""
                },
                {
                    notice: false,
                    badge: true,
                    topic:"정보/팁",
                    title: "언제 외국어 쉽게 익히는 법",
                    text: "자유 게시판영화 ‘매트릭스’ 보신 적 있나요?",
                    name: "강효주",
                    date: "2021.12.15",
                    imgShow: true,
                    img: RoomTestImg1
                },
            ],
        };
    }

    handleChangeBoard = (event, board) => {
        this.setState({ board });
    };

    handleChange = event => {
        this.setState({ filter: event.target.value });
    };

    handleChangeGoodToggle = () => {
        this.setState({ GoodToggle: !this.state.GoodToggle });
    };

    ellipsisText = (text) => text.length > 147 ? text.substr(0, 147) + '...' : text;

    render() {
        const { classes } = this.props;
        const { board } = this.state;

        return (
            <div>
                <Box className={classes.categoryStyle}>
                    <Tabs value={board} onChange={this.handleChangeBoard} className={classes.tabStyle}>
                        <Tab label="전체" disableRipple/>
                        <Tab label="이것저것" disableRipple/>
                        <Tab label="일정" disableRipple/>
                        <Tab label="기사/뉴스" disableRipple/>
                        <Tab label="정보/팁" disableRipple/>
                        <Tab label="홍보/광고" disableRipple/>
                    </Tabs>

                    <Box display='flex' alignItems='center'>
                        <IconButton className={classes.iconButton} onClick={this.props.handleChangeTopicDialogOpen} disableRipple>
                            <PencilLine/>
                        </IconButton>
                        <span className={classes.tabLine} />
                        <FormControl className={classes.formControl}>
                            <Select
                                value={this.state.filter}
                                onChange={this.handleChange}
                                displayEmpty
                                IconComponent={() => <Box style={{width:16, height:16, marginLeft:5}}><ArrowDownIcon/> </Box>}
                            >
                                <MenuItem value="최신순" className={classes.menuItem}>최신순</MenuItem>
                                <MenuItem value="등록순" className={classes.menuItem}>등록순</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                {board === 0 &&
                    <Box>
                        {this.state.cardViewList.map((cardView, i) => (
                            <Box className={classes.cardBox}>
                                <Box className={classes.boxInPadding}>
                                    <Box className={classes.title}>
                                        {cardView.notice === true &&
                                            <span className={classes.notifyStyle}>공지</span>
                                        }
                                        <span className={classes.subtitleStyle}>[{cardView.topic}]</span>
                                        <Typography variant="h4" >{cardView.title}</Typography>
                                        {cardView.badge === true &&
                                            <BedgeNewIcon className={classes.iconMargin}/>
                                        }
                                    </Box>
                                    <Box className={classes.boxContents}>
                                        <span className={classes.subTextBox}>
                                            {this.ellipsisText(cardView.text)}
                                        </span>
                                        {cardView.text.length > 147 &&
                                            <Button className={classes.buttonStyle} onClick={this.props.handleChangeNoticeBoard} disableRipple>더보기</Button>
                                        }
                                        {cardView.imgShow === true &&
                                            <Box className={classes.imgBox}>
                                                <img src={cardView.img} alt='image'/>
                                            </Box>
                                        }
                                    </Box>
                                    <Box display='flex' alignItems='center'>
                                        <Typography className={clsx(classes.textStyle, classes.textLine)}>{cardView.name}</Typography>
                                        <Typography className={classes.textStyle}>{cardView.date}</Typography>
                                    </Box>
                                </Box>
                                <Box className={classes.boxFooter}>
                                    <Box className={classes.ftCount}>
                                        <Box><EyeTinyIcon/> 10 </Box>
                                        <Box><HandsClappingIcon className={this.state.GoodToggle ? classes.iconActive : null}/> 5 </Box>
                                        <Box><ChatCircleDotsIcon/> 2 </Box>
                                    </Box>
                                    <Box className={classes.ftAdded}>
                                        <Button disableRipple onClick={this.handleChangeGoodToggle} className={this.state.GoodToggle ? classes.active : null}>
                                            <HandsClappingIcon/> 좋아요
                                        </Button>
                                        <Button onClick={this.props.handleChangeNoticeBoard} disableRipple>
                                            <ChatCircleDotsIcon/> 댓글 달기
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                }
                {board === 1 &&
                <Box>
                    {this.state.cardViewList.map((cardView, i) => (
                        <Box className={classes.cardBox}>
                            <Box className={classes.boxInPadding}>
                                <Box className={classes.title}>
                                    {cardView.notice === true &&
                                    <span className={classes.notifyStyle}>공지</span>
                                    }
                                    <span className={classes.subtitleStyle}>[{cardView.topic}]</span>
                                    <Typography variant="h4">{cardView.title}</Typography>
                                    {cardView.badge === true &&
                                    <BedgeNewIcon className={classes.iconMargin}/>
                                    }
                                </Box>
                                <Box className={classes.boxContents}>
                                        <span className={classes.subTextBox}>
                                            {this.ellipsisText(cardView.text)}
                                        </span>
                                    {cardView.text.length > 147 &&
                                    <Button className={classes.buttonStyle} onClick={this.props.handleChangeNoticeBoard}  disableRipple>더보기</Button>
                                    }
                                    {cardView.imgShow === true &&
                                    <Box className={classes.imgBox}>
                                        <img src={cardView.img} alt='image'/>
                                    </Box>
                                    }
                                </Box>
                                <Box display='flex' alignItems='center'>
                                    <Typography className={clsx(classes.textStyle, classes.textLine)}>{cardView.name}</Typography>
                                    <Typography className={classes.textStyle}>{cardView.date}</Typography>
                                </Box>
                            </Box>
                            <Box className={classes.boxFooter}>
                                <Box className={classes.ftCount}>
                                    <Box><EyeTinyIcon/> 10 </Box>
                                    <Box><HandsClappingIcon className={this.state.GoodToggle ? classes.iconActive : null}/> 5 </Box>
                                    <Box><ChatCircleDotsIcon/> 2 </Box>
                                </Box>
                                <Box className={classes.ftAdded}>
                                    <Button disableRipple onClick={this.handleChangeGoodToggle} className={this.state.GoodToggle ? classes.active : null}>
                                        <HandsClappingIcon/> 좋아요
                                    </Button>
                                    <Button onClick={this.props.handleChangeNoticeBoard} disableRipple>
                                        <ChatCircleDotsIcon/> 댓글 달기
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
                }
                {board === 2 &&
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' className={classes.noFilesBox}>
                        <Box display='flex' alignItems='center' justifyContent='center' className={classes.iconBox}>
                            <NoFilesIcon/>
                        </Box>
                        <Typography className={classes.memberNoText}>게시된 글이 없습니다.</Typography>
                    </Box>
                }
                {board === 3 &&
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' className={classes.noFilesBox}>
                        <Box display='flex' alignItems='center' justifyContent='center' className={classes.iconBox}>
                            <NoFilesIcon/>
                        </Box>
                        <Typography className={classes.memberNoText}>게시된 글이 없습니다.</Typography>
                    </Box>
                }
                {board === 4 &&
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' className={classes.noFilesBox}>
                        <Box display='flex' alignItems='center' justifyContent='center' className={classes.iconBox}>
                            <NoFilesIcon/>
                        </Box>
                        <Typography className={classes.memberNoText}>게시된 글이 없습니다.</Typography>
                    </Box>
                }
                {board === 5 &&
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' className={classes.noFilesBox}>
                        <Box display='flex' alignItems='center' justifyContent='center' className={classes.iconBox}>
                            <NoFilesIcon/>
                        </Box>
                        <Typography className={classes.memberNoText}>게시된 글이 없습니다.</Typography>
                    </Box>
                }
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(FreeBoardComponent));