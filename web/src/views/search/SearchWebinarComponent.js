import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Typography} from "@material-ui/core";
import clsx from "clsx";
import RoomTestImg2 from "../../common/images/RoomTestImg2.png";
import {ReactComponent as AsideUsersThreeIcon} from "../../common/images/AsideUsersThreeIcon.svg";

const styles = theme => ({
    root:{
        marginTop:30
    },
    roomCreateButton:{
        '@media all and (min-width: 1500px)': {
            width:322,
            height:360,
            marginRight:30,
            marginBottom:30,
        },
        width:270,
        height:350,
        background:'#fff',
        boxShadow:' 0 2px 4px 0 rgba(0, 0, 0, 0.25)',
        borderRadius:10,
        marginRight:20,
        marginBottom:20,
        padding:0,
        "&:nth-child(4n+0)":{
            marginRight:0
        },
        "&:hover":{
            background:'#fff'
        },
        "& span":{
            display:'flex',
            flexDirection:'column',
            height:'inherit',
            alignItems:'flex-start',
            justifyContent:'flex-start'
        },
        "& img":{
            '@media all and (min-width: 1500px)': {
                width:322,
            },
            width:270,
            height:180,
        }
    },
    roomTextBox:{
        '@media all and (min-width: 1500px)': {
            height:'calc(360px - 180px)',
        },
        width:'100%',
        height:'calc(350px - 180px)',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        padding:'12px 20px 14px',
        boxSizing:'border-box',
    },
    chipBox:{
        display:'flex',
        flexDirection:'row',
        marginBottom:12,
    },
    chip:{
        height:'21!important',
        backgroundColor:'#eee',
        color:'#656565',
        marginRight:6,
        padding:'0px 7px',
        fontSize: '0.75rem',
        border:'1px solid #eee',
        borderRadius:50,
    },
    buttonText:{
        '@media all and (min-width: 1500px)': {
            fontSize:'1.125rem',
        },
        width:'100%',
        fontSize:'0.938rem',
        color:'#000',
        fontWeight:600,
    },
    buttonTitle:{
        textAlign:'left',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp:1,
        WebkitBoxOrient:'vertical'
    },
    subText:{
        fontSize:'0.875rem',
        color:'#000',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp:3,
        WebkitBoxOrient:'vertical',
        margin:'5px 0'
    },
    svgIcon:{
        marginRight:5 ,
        width:15,
        height:15
    },
    buttonSubText:{
        fontSize:'0.75rem',
        color:'#828282'
    },
});


class SearchStudyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomList: [
                {
                    img:RoomTestImg2,
                    title:"Java/Spring기반 서비스",
                    contents:"Microservice Architecture의 정의와 장단점, 전환을 고민해야 하는 시점 등, 안정적이면서도 빠른 대응이 가능한 애플리케이션 개발의 중요",
                    PersonnelIcon: false,
                    Personnel:26,
                    chip1:"수업",
                    chip2:"특강",
                    chip3:"스터디"
                },
                {
                    img:RoomTestImg2,
                    title:"Java/Spring기반 서비스",
                    contents:"Microservice Architecture의 정의와 장단점, 전환을 고민해야 하는 시점 등, 안정적이면서도 빠른 대응이 가능한 애플리케이션 개발의 중요",
                    PersonnelIcon: false,
                    Personnel:26,
                    chip1:"수업",
                    chip2:"특강",
                    chip3:"스터디"
                },
                {
                    img:RoomTestImg2,
                    title:"Java/Spring기반 서비스",
                    contents:"Microservice Architecture의 정의와 장단점, 전환을 고민해야 하는 시점 등, 안정적이면서도 빠른 대응이 가능한 애플리케이션 개발의 중요",
                    PersonnelIcon: false,
                    Personnel:26,
                    chip1:"수업",
                    chip2:"특강",
                    chip3:"스터디"
                },
            ],
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {this.state.roomList.map((rooms, i) => (
                    <Button key={i} className={classes.roomCreateButton} disableRipple>
                        <img src={rooms.img} alt='room image'/>
                        <Box display='flex' flexDirection='column' alignItems='flex-start' className={classes.roomTextBox}>
                            <Box display='flex' flexDirection='column' alignItems='flex-start'>
                                <Box display='flex' alignItems='center'>
                                    <Box className={classes.chipBox}>
                                        <Typography className={classes.chip}>{rooms.chip1}</Typography>
                                    </Box>
                                    <Box className={classes.chipBox}>
                                        <Typography className={classes.chip}>{rooms.chip2}</Typography>
                                    </Box>
                                    <Box className={classes.chipBox}>
                                        <Typography className={classes.chip}>{rooms.chip3}</Typography>
                                    </Box>
                                </Box>
                                <Typography className={clsx(classes.buttonText, classes.buttonTitle)}>{rooms.title}</Typography>
                                <Typography className={classes.subText}>{rooms.contents}</Typography>
                            </Box>
                            <Box display='flex' alignItems='center'>
                                <AsideUsersThreeIcon className={classes.svgIcon}/>
                                <Typography className={classes.buttonSubText}>멤버:{rooms.Personnel}명</Typography>
                            </Box>
                        </Box>
                    </Button>
                ))}
            </div>
        );
    }
}

export default withStyles(styles)(SearchStudyComponent);