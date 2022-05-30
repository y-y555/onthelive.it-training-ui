import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {Drawer, IconButton, Box, Typography} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";
import galleryImg1 from "../../common/images/galleryImg1.jpg";


const styles = theme => ({
    root:{

    },
    drawerPaper:{
        "& .MuiBackdrop-root": {
            background:'transparent'
        },
        "& .MuiDrawer-paper":{
            width:234,
            marginTop:86,
            boxShadow:'0 2px 7px 0 rgba(0, 0, 0, 0.25)',
            borderTop:'1px solid #c0c2c3'
        },
        "& *": {
            fontFamily: 'NanumSquareRoundOTF' ,
        }
    },
    titleBox:{
        padding:'10px 8px',
        background:'#f0f1f1'
    },
    titleText:{
        fontSize:'1.063rem',
        fontWeight:600,
        color:'#0d0d0d'
    },
    iconButton:{
        padding:0,
        "&:hover":{
            background:'transparent'
        }
    },
    contentsBox:{
        padding:'18px 10px 13px',
        borderBottom:'1px dashed #a3a8af'
    },
    contentsColor:{
        background:'rgba(0, 151, 255, 0.2)'
    },
    marginBottom:{
        marginBottom:15
    },
    textStyle:{
        fontSize:'0.75rem',
        color:'#828282',
        lineHeight:1.2
    },
    contentsText:{
        fontSize:'0.875rem',
        color:'#0d0d0d',
        lineHeight:1.3
    },
    beforeBox:{
        display:'flex',
        "&::before":{
            display:'block',
            width:60,
            height:26,
            background:'transparent',
            content:"''"
        }
    },
    boldText:{
        fontWeight:600
    },
    imgBox:{
        width:40,
        height:25,
        borderRadius:2,
        background:'#fff',
        marginRight:10,
        "& img":{
            width:'100%',
            maxWidth:'100%'
        }
    }
});

class NotificationComponent extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Drawer
                    className={classes.drawer}
                    onClose={this.props.handleNotificationClose}
                    anchor="right"
                    open={this.props.notificationOpen}
                    className={classes.drawerPaper}
                    // classes={{
                    //     paper: classes.drawerPaper,
                    // }}
                >
                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.titleBox}>
                        <Typography className={classes.titleText}>알림</Typography>
                        <IconButton onClick={this.props.handleNotificationClose} className={classes.iconButton}>
                            <DialogCloseIcon/>
                        </IconButton>
                    </Box>

                    <Box className={clsx(classes.contentsBox, classes.contentsColor)}>
                        <Box display='flex' className={classes.marginBottom}>
                            <Box className={classes.imgBox}>
                                <img src={galleryImg1} alt="image"/>
                            </Box>
                            <Box>
                                <Typography className={classes.textStyle}>기초 수학 특강</Typography>
                                <Typography className={classes.textStyle}>방금</Typography>
                            </Box>
                        </Box>
                        <Box className={classes.beforeBox}>
                            <Typography className={classes.contentsText}><span className={classes.boldText}>김미소</span> 님이 모임에 가입했습니다.</Typography>
                        </Box>
                    </Box>

                    <Box className={classes.contentsBox}>
                        <Box display='flex' className={classes.marginBottom}>
                            <Box className={classes.imgBox}>
                                <img src={galleryImg1} alt="image"/>
                            </Box>
                            <Box>
                                <Typography className={classes.textStyle}>기초 수학 특강</Typography>
                                <Typography className={classes.textStyle}>21시간 전</Typography>
                            </Box>
                        </Box>
                        <Box className={classes.beforeBox}>
                            <Typography className={classes.contentsText}><span className={classes.boldText}>김미소</span> 님이 모임에 가입했습니다.</Typography>
                        </Box>

                    </Box>

                    <Box className={classes.contentsBox}>
                        <Box display='flex' className={classes.marginBottom}>
                            <Box className={classes.imgBox}>
                                <img src={galleryImg1} alt="image"/>
                            </Box>
                            <Box>
                                <Typography className={classes.textStyle}>기초 수학 특강</Typography>
                                <Typography className={classes.textStyle}>1일전</Typography>
                            </Box>
                        </Box>
                        <Box className={classes.beforeBox}>
                            <Typography className={classes.contentsText}><span className={classes.boldText}>이정재</span> 님이 가입 요청하였습니다.</Typography>
                        </Box>

                    </Box>

                    <Box className={classes.contentsBox}>
                        <Box display='flex' className={classes.marginBottom}>
                            <Box className={classes.imgBox}>
                                <img src={galleryImg1} alt="image"/>
                            </Box>
                            <Box>
                                <Typography className={classes.textStyle}>기초 수학 특강</Typography>
                                <Typography className={classes.textStyle}>1주일 전</Typography>
                            </Box>
                        </Box>
                        <Box className={classes.beforeBox}>
                            <Typography className={classes.contentsText}><span className={classes.boldText}>&#123;내이름&#125;</span> 님이 포함된 새 일정이 등록되었습니다.</Typography>
                        </Box>

                    </Box>
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles)(NotificationComponent);