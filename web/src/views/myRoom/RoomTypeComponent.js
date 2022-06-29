import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Typography} from "@material-ui/core";
import {ReactComponent as BackArrowIcon} from "../../common/images/BackArrowIcon.svg";
import {withRouter} from "react-router-dom";

const styles = theme => ({
    root:{
        background:'#f3f3f3',
        height:'calc(100vh - 87px)',
    },
    titleBox:{
        width:1026,
        margin:'0 auto 25px',
        paddingTop:50
    },
    titleText:{
        fontSize:'1.875rem',
        color:'#000',
        marginTop:10
    },
    backButton:{
        padding:0,
        fontSize:'1rem',
        color:'#000',
        "& span":{
            marginRight:8,
            marginBottom:1
        },
        "&:hover":{
            background:'transparent'
        }
    },
    roomTypeBox:{
        width:322,
        boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.25)',
        borderRadius:10,
        marginRight:30,
        background:'#fff',
        padding:0,
        "&:last-child":{
            marginRight: 0
        },
        "&:hover":{
            background:'#fff',
        },
        "& span":{
            flexDirection:'column'
        }
    },
    iconBox:{
        width:'100%',
        height:200,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        background:'#fff4d8'
    },
    greenBox:{
        background:'#d8ffdc'
    },
    contentsBox:{
        padding:'32px 32px 42px'
    },
    textStyle:{
        fontSize:'1.5rem',
        fontWeight:600,
        color:'#656565'
    },
    typeText:{
        color:'#000',
        marginBottom:14
    },
    contentsText:{
        fontWeight:'normal',
        fontSize:'1rem',
        textTransform:'initial '
    }
});

class RoomTypeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomType: [
                {
                    title:"아이콘",
                    type: "스터디",
                    color:'green',
                    contents:"It is a long established fact that a \n" +
                        "reader will be distracted by the read\n" +
                        " content of a page when looking"
                },
                {
                    title:"아이콘",
                    type: "웨비나",
                    color:'yellow',
                    contents:"It is a long established fact that a \n" +
                        "reader will be distracted by the read\n" +
                        " content of a page when looking"
                },
                {
                    title:"아이콘",
                    type: "코딩 교육",
                    color:'yellow',
                    contents:"It is a long established fact that a \n" +
                        "reader will be distracted by the read\n" +
                        " content of a page when looking"
                },
            ],
        };
    }

    handleClickMyRoom = () => {
        this.props.history.push("/rooms");
    };

    handleClickRoomCreate = () => {
        this.props.history.push("/roomCreate");
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.titleBox}>
                    <Button
                        className={classes.backButton}
                        startIcon={<BackArrowIcon />}
                        disableRipple
                        onClick={this.handleClickMyRoom.bind(this)}
                    >
                        내모임
                    </Button>
                    <Typography className={classes.titleText}>모임 유형 선택</Typography>
                </Box>
                <Box display='flex' justifyContent='center'>
                    {this.state.roomType.map((rooms, i) => (
                        <Button key={i} className={classes.roomTypeBox} disableRipple onClick={this.handleClickRoomCreate.bind(this)}>
                            <Box className={rooms.color === "green" ? clsx(classes.iconBox, classes.greenBox) : classes.iconBox}>
                                <Typography className={classes.textStyle}>{rooms.title}</Typography>
                            </Box>

                            <Box className={classes.contentsBox}>
                                <Typography className={clsx(classes.textStyle, classes.typeText)}>{rooms.type}</Typography>
                                <Typography className={clsx(classes.textStyle, classes.contentsText)}>{rooms.contents}</Typography>
                            </Box>

                        </Button>
                    ))}
                </Box>
            </div>
        );
    }
}

export default  withRouter(withStyles(styles)(RoomTypeComponent));