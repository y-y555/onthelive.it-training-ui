import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const DUMMY_VIDEO_SRC = 'https://objectstorage.ap-seoul-1.oraclecloud.com/p/PIFkPHLeN1hSgBXoC8va3GHjDGhyapumJbPP8bgn_JuiyAVeEIK5iKLbhUhlY-4n/n/cnlkg4dnisfp/b/training-contents-develop/o/%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%20HWP%20%E1%84%86%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%20%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%20%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%85%E1%85%A3%E1%86%A8.mp4';

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