import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Typography} from "@material-ui/core";
import TestVideoImg from "../../common/images/TestVideoImg.png";
import {ReactComponent as VideoPlayIcon} from '../../common/images/VideoPlayIcon.svg';

const styles = theme => ({
    root:{
        width:'100%',
        minHeight: 'calc(100vh - 59px)',
        background:'#fafafa',
        padding: 20,
        boxSizing:'border-box'
    },
    topText:{
        width: 70,
        fontSize: '1.25rem',
    },
    chip:{
        padding: '4px 10px',
        background: '#eee',
        borderRadius: 30,
        margin: '3px 6px',
        '&:hover':{
            background:'#eee'
        }
    },
    contentsBox:{
        width: 690,
        border:'1px solid #1664f5',
        borderTop: '4px solid #1664f5',
        borderRadius:8,
        boxSizing:'border-box',
        padding: '25px 35px 5px',
        background:'#fff'
    },
    titleText:{
        fontSize: '2.125rem',
        fontWeight: 600
    },
    videoBox:{
        width: '100%',
        height: 360,
        border: '1px solid rgba(0, 0, 0, 0.6)',
        borderRadius: 8,
        boxSizing: 'border-box',
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom:20
    },
    marginBottom:{
        marginBottom:20
    },
    textStyle:{
        fontSize: '1.125rem'
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
});

class ContentLecturePreviewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chipList: [
                {name: 'Spring Security'},
                {name: '암호화'},
                {name: '윈도우 파일 시스템'},
                {name: '네트워크 프로토콜'},
                {name: 'SSL'},
                {name: 'IPSEC'},
                {name: '윈도우 및 리눅스 방화벽'},
            ]
        };
    }

    render() {
        const { classes, previewPc } = this.props;

        return (
            <div className={classes.root}>
                <Box display='flex' alignItems='flex-start' mb={6}>
                    <Typography className={classes.topText}>태그</Typography>
                    <Box display='flex' alignItems='center' flexWrap='wrap'>
                        {this.state.chipList.map((chip, i) => (
                            <Button key={i} className={classes.chip} disableRipple>{chip.name}</Button>
                        ))}
                    </Box>
                </Box>

                {previewPc &&
                    <Box display='flex' justifyContent='center' >
                        <Box className={classes.contentsBox} >
                            <Box className={classes.marginBottom}>
                                <Typography className={classes.titleText}>인터넷 기반의 각종 해킹, 침해에 대응하는 보안기술!</Typography>
                            </Box>


                            <Box className={classes.videoBox}>
                                <Box className={classes.imgBox} style={{justifyContent:'center'}}>
                                    <img src={TestVideoImg} alt="동영상"/>

                                    <VideoPlayIcon/>

                                </Box>
                            </Box>

                            <Box className={classes.marginBottom}>
                                <Typography className={classes.textStyle}>
                                    · 윈도우 파일시스템 구조<br/>
                                    - Master File Table 및 개인정보파일 검색<br/><br/>

                                    · 메모리 분석, 파일 실행이력관리<br/>
                                    - 네트워크 프로토콜 구조
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                }
            </div>
        );
    }
}

export default withStyles(styles)(ContentLecturePreviewComponent);