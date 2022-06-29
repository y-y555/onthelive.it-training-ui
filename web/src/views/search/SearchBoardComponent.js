import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Typography} from "@material-ui/core";
import {ReactComponent as UsersThreeIcon} from "../../common/images/UsersThreeIcon.svg";
import {ReactComponent as EyeTinyIcon} from "../../common/images/EyeIcon.svg";
import {ReactComponent as HandsClappingIcon} from "../../common/images/HandsClappingIcon.svg";
import {ReactComponent as ChatCircleDotsIcon} from "../../common/images/ChatCircleDotsIcon.svg";

const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:1440,
        },
        width:1200,
        margin: '0 auto',
        padding:'20px 30px',
        boxSizing:'border-box',
        display:'flex',
        alignItems:'flex-start',
        justifyContent: 'space-between',
        flexDirection:'column',
        '& h5':{
            fontSize:'1.25rem',
            marginBottom:25,
        }
    },
    noBoardBox:{
        paddingBottom:150
    },
    boardBoxIn:{
        paddingBottom:54
    },
    boardBoxStyle:{
        '@media all and (min-width: 1500px)': {
            width:320,
            height:210,
            marginRight:30,
            marginBottom:30,
        },
        width:268,
        minHeight:200,
        boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.25)',
        borderRadius:10,
        marginRight:20,
        marginBottom:20,
        border:'1px solid rgba(163, 168, 175, 0.5)',
        boxSizing:'border-box',
        backgroundColor:'#fff',
        "&:nth-child(4n+0)":{
            marginRight:0
        },
    },
    roomNameBox:{
        padding:'17px 15px',
        borderBottom:'1px solid #d3d7db',
        "& svg":{
            marginRight:8
        }
    },
    roomNameText:{
        '@media all and (min-width: 1500px)': {
            fontSize:'1.063rem',
        },
        width:250,
        fontSize:'0.875rem',
        color:'#000'
    },
    contentsBox:{
        padding:'10px 15px',
        boxSizing:'border-box',
        "& svg":{
            width:22,
            height:22,
            "& .st0":{
                fill:'#00c880'
            }
        }
    },
    boardTitleText:{
        '@media all and (min-width: 1500px)': {
            fontSize:'1rem',
        },
        fontSize:'0.938rem',
        color:'#000',
        fontWeight:600,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp:2,
        WebkitBoxOrient:'vertical',
        margin:'7px 0 13px',
        '& span':{
            color:'#00c880',
            fontWeight:700,
        }
    },
    count:{
        display: 'flex',
        margin:'30px 0 20px',
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
    writerContent:{
        display: 'flex',
        alignItems: 'center',
        fontSize:'0.75rem',
        color:'#5c5c5c',
    },
    gutters:{
        margin:'0 20px',
        display:'block',
        height: 21,
        width: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
});

class SearchBoardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: true,
            boardData: [
                {roomName:"기초수학특강", boardType:"이것저것", title:"외국어 쉽게 익히는 법", view: "10", good:"5", comment:'2', writer:'강효주', date:'2021.12.15'},
                {roomName:"하루영어클럽", boardType:"이것저것", title:"외국어 쉽게 익히는 법2", view: "6", good:"2", comment:'1', writer:'강효주', date:'2021.12.15'},
            ],
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Typography variant="h5">검색결과(2)</Typography>
                <Box>
                    {this.state.board === false ?
                        <Box className={classes.noBoardBox}>
                            <Typography className={classes.textStyle}>검색결과가 없습니다.</Typography>
                        </Box>
                        :
                        <Box display='flex' alignItems='center' flexWrap='wrap' className={classes.boardBoxIn}>
                            {this.state.boardData.map((board, i) => (
                                <Box key={i} className={classes.boardBoxStyle}>
                                    <Box display='flex' alignItems='center' className={classes.roomNameBox}>
                                        <UsersThreeIcon/>
                                        <Typography className={classes.roomNameText} noWrap>{board.roomName}</Typography>
                                    </Box>
                                    <Box className={classes.contentsBox}>
                                        <Typography className={classes.boardTitleText}>
                                            <span>[{board.boardType}]</span> {board.title}
                                        </Typography>
                                        <Box className={classes.count}>
                                            <Box><EyeTinyIcon/> {board.view} </Box>
                                            <Box><HandsClappingIcon/> {board.good} </Box>
                                            <Box><ChatCircleDotsIcon/> {board.comment} </Box>
                                        </Box>
                                        <Box className={classes.writerContent}>
                                            {board.writer} <span className={classes.gutters}> </span> {board.date}
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    }
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(SearchBoardComponent);