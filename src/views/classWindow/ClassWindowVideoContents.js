import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {Box, Typography} from "@material-ui/core";
import TestVideoImg from "../../common/images/TestVideoImg.png";
import {ReactComponent as VideoPlayIcon} from "../../common/images/VideoPlayIcon.svg";


const styles = theme => ({
    root:{

    },
    contentsBox:{
        width: 690,
        border:'1px solid #1664f5',
        borderTop: '4px solid #1664f5',
        borderRadius:8,
        boxSizing:'border-box',
        padding: '25px 35px 5px',
        background:'#fff',
        marginBottom: 20
    },
    contentsBox2:{
        width: '100%',
        '@media all and (min-width: 1500px)': {
            width: 690,
        },
    },
    marginBottom:{
        marginBottom:20
    },
    titleText:{
        fontSize: '1.875rem',
        fontWeight: 600
    },
    titleText2:{
        '@media all and (max-width: 1500px)': {
            fontSize: '1.25rem',
        },
    },
    videoBox:{
        width: '100%',
        height: 'auto',
        border: '1px solid rgba(0, 0, 0, 0.6)',
        borderRadius: 8,
        boxSizing: 'border-box',
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom:20
    },
    imgBox:{
        width: '100%',
        height: '100%',
        overflow:'hidden',
        display:'flex',
        alignItems: 'center',
        position:'relative',
        cursor:'pointer',
        '& > img':{
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'contain',
        },
        '& svg':{
            position:'absolute'
        }
    },
    textStyle:{
        fontSize: '1.125rem'
    },
    textStyle2:{
        '@media all and (max-width: 1500px)': {
            fontSize:'0.875rem'
        },
    },
});

class ClassWindowVideoContents extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { classes, typeButton2} = this.props;

        return (
            <div className={classes.root}>
                <Box className={typeButton2 ? clsx(classes.contentsBox,classes.contentsBox2) : classes.contentsBox} >
                    <Box className={classes.marginBottom}>
                        <Typography className={typeButton2 ? clsx(classes.titleText, classes.titleText2) :classes.titleText}>????????? ????????? ?????? ??????, ????????? ???????????? ????????????!</Typography>
                    </Box>


                    <Box className={classes.videoBox}>
                        <Box className={classes.imgBox} style={{justifyContent:'center'}}>
                            <img src={TestVideoImg} alt="?????????"/>

                            <VideoPlayIcon/>

                        </Box>
                    </Box>

                    <Box className={classes.marginBottom}>
                        <Typography className={typeButton2 ? clsx(classes.textStyle, classes.textStyle2) : classes.textStyle}>
                            ?? ????????? ??????????????? ??????<br/>
                            - Master File Table ??? ?????????????????? ??????<br/><br/>

                            ?? ????????? ??????, ?????? ??????????????????<br/>
                            - ???????????? ???????????? ??????
                        </Typography>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(ClassWindowVideoContents);