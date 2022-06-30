import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const DUMMY_VIDEO_SRC = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const useStyles = makeStyles(theme => ({
    videoBox:{
        width: '100%',
        height: '100%',
        overflow:'hidden',
        display:'flex',
        alignItems: 'center',
        position:'relative',
        cursor:'pointer',
    },
}));

function VideoPlayer(props) {
    console.log("Video Playing src = ", props.videoSrc);
    const classes = useStyles();
    return (
        <>
            <video controls className={classes.videoBox}>
                <source src={props.videoSrc ? props.videoSrc : DUMMY_VIDEO_SRC}/>
            </video>
        </>
    );
}

export default VideoPlayer;