import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Chip, Typography} from "@material-ui/core";
import 'pure-react-carousel/dist/react-carousel.es.css';
import {ButtonBack, ButtonNext, CarouselProvider, Slide, Slider} from 'pure-react-carousel';
import {ReactComponent as ArrowRightIcon} from '../../common/images/CaretRightIcon.svg';
import {ReactComponent as ArrowLeftIcon} from '../../common/images/ArrowIcon.svg';
import {ReactComponent as VideoPlayIcon} from '../../common/images/VideoPlayIcon.svg';
import {ReactComponent as DotIcon} from '../../common/images/DotIcon.svg';
import {ReactComponent as PlayIcon} from '../../common/images/PlayIcon.svg';
import {ReactComponent as HandsClappingIcon} from '../../common/images/HandsClappingIcon.svg';
import {ReactComponent as UsersThreeIcon} from '../../common/images/UsersThreeIcon.svg';
import {ReactComponent as BookmarksSimple} from '../../common/images/BookmarksSimple.svg';

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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '& h5':{
            fontSize: '1.125rem',
            letterSpacing:'-0.36px',
            marginTop:16,
        },
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
            '&:first-child':{
                marginLeft: 0,
            },
            '& svg': {
                width: 20,
                height: 20,
                marginRight:8,
                '& .like-icon':{
                    fill:'#B6B6BF'
                }
            }
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
    {
        'chip':[
          "22년 1기 1반"  ,
            "상시",
            "1학기",
            "2학기"
        ],
    }
];

class RoomCarouselComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagList: [
                {tag:"22년 1기 1반"},
                {tag:"상시"},
                {tag:"1학기"},
                {tag:"300분"},
            ],

        };
    }
    render() {
        const { classes, carousel } = this.props;

        return (
            <div className={classes.root}>
                {this.props.carousel.map((carousel, i) => (
            <CarouselProvider
                naturalSlideWidth={335}
                totalSlides={slides.length}
                isIntrinsicHeight
                visibleSlides={2}
                style={{marginTop: 30, position:'relative'}}
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
                                        <span className={classes.tag} style={{backgroundColor:'#000'}}>
                                            <PlayIcon style={{width:10, height:10, marginRight:2}}/> VOD</span>
                                        :
                                        null
                            }
                            <VideoPlayIcon/>
                        </div>
                        <Box className={classes.carouselContent}>
                            <Box>
                            {this.state.tagList.map((tag, i) => (
                                <Chip
                                    key={i}
                                    label={tag.tag}
                                    className={classes.chip}
                                />
                            ))}
                            <Typography variant={'h5'}>{slide.className}</Typography>
                            </Box>
                            {slide.fileName === false ?
                                <Button className={classes.enterBtn}>강의실 입장</Button>
                                :
                                <ul className={classes.commentStyle}>
                                    <li><HandsClappingIcon/> 1,200</li>
                                    <li><UsersThreeIcon/> 200</li>
                                    <li><BookmarksSimple/> 초급</li>
                                </ul>
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
                    ))}
            </div>
        );
    }
}


export default withStyles(styles)(RoomCarouselComponent);