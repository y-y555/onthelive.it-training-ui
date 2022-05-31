import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Chip, Button} from "@material-ui/core";
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide ,ButtonBack,ButtonNext} from 'pure-react-carousel';
import {ReactComponent as ArrowRightIcon} from '../../common/images/CaretRightIcon.svg';
import {ReactComponent as ArrowLeftIcon} from '../../common/images/ArrowIcon.svg';
import {ReactComponent as VideoPlayIcon} from '../../common/images/VideoPlayIcon.svg';
import {ReactComponent as DotIcon} from '../../common/images/DotIcon.svg';
// import {ReactComponent as PlayIcon} from '../../common/images/PlayIcon.svg';
import {Typography} from "@material-ui/core";

const styles = theme => ({
    root:{
        position:'relative',
        width:'calc(100vw - 64px)',
    },
    carousel:{
        overflow:'visible',
        // '& > div > div':{
        //     width: '100%!important',
        // }
    },
    slideItem:{
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
        height:350,
        borderRadius:10,
        marginRight: 30,
    },
    video:{
        width:'100%',
        height:200,
        backgroundColor:'#666',
        borderRadius:10,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position:'relative',
    },
    tag:{
        fontSize:'1.125rem',
        color:'#fff',
        fontWeight: 600,
        borderRadius:3,
        padding:'3px 6px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:16,
        left:20,
    },
    carouselContent:{
        minHeight:150,
        padding:'14px 20px',
        boxSizing:'border-box',
        '& h5':{
            fontSize: '1.125rem',
            letterSpacing:'-0.36px',
            marginTop:16,
        }
    },
    chip:{
        fontSize:'0.75rem',
        color:'#656565',
        backgroundColor:'#eee',
        marginRight:7,
    },

    btnGroup:{
        '& > button':{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            position:'absolute',
            top:'50%',
            transform: 'translate(0px, -50%)',
            backgroundColor:'#fff',
            border:'0 none',
            width:40,
            height:40,
            borderRadius: 40,
            boxShadow: '0 1px 7px 0 rgb(0 0 0 / 20%)',
            '&:hover svg':{
                opacity:'0.3'
            }
        }
    },
    btnLeftStyle:{
        left:-16,
    },
    btnRightStyle:{
        right:-16,
    },
    enterBtn:{
        display: 'block',
        border:'1px solid #1a457e',
        color:'#1a457e',
        fontSize:'1rem',
        fontWeight:600,
        height:40,
        width:200,
        margin: '17px auto',
        '&:hover':{
            backgroundColor:'transparent'
        }
    }
});

let id = 0;
function createData(className, chip, tag, button) {
    id += 1;
    return { id, className, chip, tag, button};
}
const slides = [
    createData('ISMS-P 인증심사 및 심사원 대비반', '22년 1기 1반', false, false),
    createData('디지털 포렌식 전문가 2급 자격 대비반', '상시', '실습', false),
    createData('최신 해킹사례 및 분석', '1학기', 'LIVE', false),
    createData('최신 해킹사례 및 분석', '1학기', 'VOD', false),
];

class HomeCarouselComponent extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
            <CarouselProvider
                naturalSlideWidth={20}
                // naturalSlideHeight={100}
                totalSlides={3}
                isIntrinsicHeight
                visibleSlides={3}
            >
                <Slider className={classes.carousel}>
                    {slides.map(slide => (
                    <Slide index={slide.id} className={classes.slideItem}>
                        <div className={classes.video}>
                            {slide.tag === '실습' ?
                                <span className={classes.tag} style={{backgroundColor:'#00c880'}}>실습</span>
                                :
                                (slide.tag === "LIVE") ?
                                    <span className={classes.tag} style={{backgroundColor:'#fb4a59'}}>
                                        <DotIcon style={{width:10, height:10, marginRight:2}}/> LIVE</span>
                                    :
                                    (slide.tag === "VOD") ?
                                        <span className={classes.tag} style={{backgroundColor:'#000'}}>VOD</span>
                                        :
                                        null
                            }
                            <VideoPlayIcon/>
                        </div>
                        <Box className={classes.carouselContent}>
                            <Chip label={slide.chip} className={classes.chip} />
                            <Chip label="상시" className={classes.chip} />
                            <Chip label="1학기" className={classes.chip} />
                            <Chip label="300분" className={classes.chip} />
                            <Typography variant={'h5'}>{slide.className}</Typography>
                            {slide.fileName === false ?
                                <Button className={classes.enterBtn}>강의실 입장</Button>
                                :
                                null
                            }
                        </Box>
                    </Slide>
                    ))}
                </Slider>
                <Box className={classes.btnGroup}>
                    <ButtonBack className={classes.btnLeftStyle}><ArrowLeftIcon/></ButtonBack>
                    <ButtonNext className={classes.btnRightStyle}><ArrowRightIcon/></ButtonNext>
                </Box>
            </CarouselProvider>
            </div>
        );
    }
}


export default withStyles(styles)(HomeCarouselComponent);