import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Chip, Button} from "@material-ui/core";
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide ,ButtonBack,ButtonNext} from 'pure-react-carousel';
import {ReactComponent as ArrowRightIcon} from '../../common/images/CaretRightIcon.svg';
import {ReactComponent as ArrowLeftIcon} from '../../common/images/ArrowIcon.svg';
import {ReactComponent as VideoPlayIcon} from '../../common/images/VideoPlayIcon.svg';
import {ReactComponent as DotIcon} from '../../common/images/DotIcon.svg';
import {ReactComponent as PlayIcon} from '../../common/images/PlayIcon.svg';
import {ReactComponent as HandsClappingIcon} from '../../common/images/HandsClappingIcon.svg';
import {ReactComponent as UsersThreeIcon} from '../../common/images/UsersThreeIcon.svg';
import {ReactComponent as BookmarksSimple} from '../../common/images/BookmarksSimple.svg';
import dummyImg1 from '../../common/images/dummyImg1.jpg';
import dummyImg2 from '../../common/images/dummyImg2.jpg';
import dummyImg3 from '../../common/images/dummyImg3.jpg';
import dummyImg4 from '../../common/images/dummyImg4.jpg';
import {Typography} from "@material-ui/core";
import clsx from "clsx";

const styles = theme => ({
    root:{
        position:'relative',
        // width:'calc(100vw - 64px)',
        '@media all and (min-width: 1500px)': {
            width:1440,
        },
        width:1200,
        boxSizing:'border-box',
        margin: '0 auto',
    },
    carousel:{
        // overflowY:'visible',
        '@media all and (min-width: 1500px)': {
            width:1440,
        },
        width:1200,
        // boxSizing:'border-box',
        // margin: '0 auto',
        // '& > div > div':{
        //     width: '100%!important',
        // }
        '& .carousel__slider-tray':{
            padding:'4px 2px',
        }
    },
    slideItem:{
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
        height:350,
        borderRadius:10,
        marginRight: 30,
        width:'calc(10% - 24px)!important',
    },
    video:{
        width:'100%',
        height:200,
        // backgroundColor:'#666',
        borderRadius:10,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position:'relative',
        overflow:'hidden',
    },
    playBtn:{
        position:'absolute',
        top:'calc(50% - 40px)',
        left:'calc(50% - 40px)',
        // transform: 'translate(50%, 50%)',
    },
    tagWrap:{
        position:'absolute',
        top:16,
        left:20,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
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
        marginRight:4,
    },
    carouselContent:{
        minHeight:150,
        padding:'14px 20px',
        boxSizing:'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '& h5':{
            fontSize: '1.125rem',
            letterSpacing:'-0.36px',
            minHeight: '3rem',
        },
    },
    chip:{
        fontSize:'0.75rem',
        color:'#656565',
        backgroundColor:'#eee',
        marginRight:7,
        marginBottom:8,
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
        borderRadius:7,
        '&:hover':{
            backgroundColor:'transparent'
        }
    },
    commentStyle:{
        display:'flex',
        listStyle:'none',
        paddingInlineStart:0,
        margin: '20px 0 0 0',
        '& li': {
            fontSize:'0.875rem',
            display:'flex',
            alignItems:'center',
            marginLeft:30,
            letterSpacing: '-0.5px',
            '&:first-child':{
                marginLeft: 0,
            },
            '& svg': {
                width: 20,
                height: 20,
                marginRight:5,
                '& .like-icon':{
                    fill:'#B6B6BF'
                }
            }
        }
    }
});

let id = 0;
function createData(className, chip1, chip2, chip3, Live, VOD, practice, button, free, img) {
    id += 1;
    return { id, className, chip1, chip2, chip3, Live, VOD, practice, button, free, img};
}
const slides = [
    createData('국제표준 및 보안감사', "ISO","ISO27001","보안통제", false, true, false, false, false, dummyImg4),
    createData('디지털 포렌식 전문가 2급 자격 대비반', "포렌식","자격","데이터", false,false,true, false,false, dummyImg2),
    createData('악성문서 파일 분석', '악성코드', "쉘코드", "DDEAUTO 명령어",true,false,false, false,false, dummyImg1),
    createData('최신 해킹사례 및 분석', "사이버보안","랜섬웨어","모의훈련",false, true, false, false, true, dummyImg3),
    {

    }
];

class HomeSecondCarouselComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
            <CarouselProvider
                naturalSlideWidth={335}
                // naturalSlideHeight={100}
                totalSlides={slides.length}
                isIntrinsicHeight
                visibleSlides={2}
            >
                <Slider className={classes.carousel}>
                    {slides.map(slide => (
                    <Slide index={slide.id} className={classes.slideItem}>
                        <div className={classes.video}>
                            <div className={classes.tagWrap}>
                                {slide.VOD === true ?
                                    <span className={classes.tag} style={{backgroundColor:'#000'}}>
                                            <PlayIcon style={{width:10, height:10, marginRight:2}}/> VOD</span>
                                    :
                                    null
                                }
                                {slide.practice === true ?
                                    <span className={classes.tag} style={{backgroundColor:'#00c880'}}>실습</span>
                                    :
                                    null
                                }
                                {slide.Live === true ?
                                    <span className={classes.tag} style={{backgroundColor:'#fb4a59'}}>
                                        <DotIcon style={{width:10, height:10, marginRight:2}}/> LIVE</span>
                                    :null}
                            </div>
                            <VideoPlayIcon className={classes.playBtn}/>
                            <img src={slide.img} alt={slide.id} style={{width:'100%', height:'100%'}}/>
                        </div>
                        <Box className={classes.carouselContent}>
                            <Box>
                                <Box style={{marginBottom:8}}>
                                    <Chip
                                        label={slide.chip1}
                                        className={classes.chip}
                                    />
                                    <Chip
                                        label={slide.chip2}
                                        className={classes.chip}
                                    />
                                    <Chip
                                        label={slide.chip3}
                                        className={classes.chip}
                                    />
                                </Box>
                            <Typography variant={'h5'}>{slide.className}</Typography>
                            </Box>
                                <Button className={classes.enterBtn}>강의실 입장</Button>
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


export default withStyles(styles)(HomeSecondCarouselComponent);