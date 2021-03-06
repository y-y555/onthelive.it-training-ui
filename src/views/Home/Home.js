import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Typography, Link, InputBase, IconButton, Chip} from "@material-ui/core";
import SplashImg01 from '../../common/images/SplashImg01.jpg';
import SplashImg02 from '../../common/images/SplashImg02.jpg';
import SplashImg03 from '../../common/images/SplashImg03.jpg';
import {ReactComponent as CaretRightIcon} from '../../common/images/CaretRightIcon.svg';
import HomeCarouselComponent from "./HomeCarouselComponent";
import HomeSecondCarouselComponent from "./HomeSecondCarouselComponent";
import {ReactComponent as SearchIcon} from "../../common/images/SearchIcon.svg";
import {ReactComponent as ThreeStarIcon} from "../../common/images/ThreeStarIcon.svg";
import 'pure-react-carousel/dist/react-carousel.es.css';
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot} from 'pure-react-carousel';
import clsx from "clsx";
import Footer from "../footer/Footer";

const styles = theme => ({
    root:{
    },
    splashBox:{
        '& .carousel__dot-group':{
            position:'absolute',
            right:72,
            bottom:36,
            display:'flex',
            alignItems:'center',
            justifyContent:'flex-end',
            '& button':{
                width:44,
                height:9,
                border:'0 none',
                backgroundColor:'#fff',
                borderRadius:0,
                marginRight: 8,
            },
            '& button.carousel__dot--selected':{
                backgroundColor:'#1664f5'
            }
        }
    },
    titleBox:{
        width:'100vw',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '0 center',
        '& > div': {
            '@media all and (min-width: 1500px)': {
                width: '1440px!important',
            },
            width: '1200px!important',
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: '0!important',
            paddingLeft: 32,
            // paddingBottom:'9%',
            height: 544,
            position: 'relative',
            flexDirection:'column',
            margin:'0 auto',
        }
    },
    wrap:{
        '@media all and (min-width: 1500px)': {
            width: '1440px',
        },
        width: '1200px',
        margin:'0 auto',
        position:'relative',
    },
    titleText:{
        fontSize:'2.875rem',
        fontWeight:700,
        color:'#fff',
        lineHeight:1.32
    },
    subText:{
        fontSize:'1.688rem',
        color:'#fff',
        marginTop:14
    },
    container:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    sliderBox:{
        // padding:'0 32px',
        '& .MuiTypography-h3':{
            display:'inline-flex',
            fontSize:'2rem',
            fontWeight: 600,
            marginBottom:'1rem',
            color:'#333',
            paddingRight:27,
            cursor:'pointer',
            position:'relative',
            '& > svg':{
                position: 'absolute',
                right:0,
                top:'50%',
                transform: 'translate(0px, -50%)',
                width:27,
                height:27,
                '& path':{
                    stroke:'#333'
                }
            },
            '&:hover':{
               textDecoration:'none',
            },
        }
    },
    search: {
        width:500,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        background: '#fff',
        border:'2px solid #e1e1e1',
        padding:'3px 6px 3px 22px',
        borderRadius:50,
        marginBottom: 36,
        '& .MuiInputBase-root':{
            width:'100%'
        },
        "& .MuiInputBase-input::placeholder":{
            opacity:1,
            fontSize:'1.125rem',
            color:'#92979e'
        },
        "& .MuiInputBase-input":{
            padding:'6px 7px 4px'
        }
    },
    chipBox:{
        '@media all and (min-width: 1500px)': {
            width:840,
        },
        width:640,
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        '& > div':{
            height:25,
            backgroundColor:'#eee',
            color:'#000',
            letterSpacing:'-0.3px',
            margin:'0 10px 18px 10px',
            fontSize: '0.938rem',
            cursor:'pointer',
            '&:hover':{
                border:'1px solid #dbf0ff',
                backgroundColor:'#dbf0ff!important',
                color:'#0097ff!important',
                fontWeight:600,
            },
            "&:focus":{
                border:'1px solid #eee',
                backgroundColor:'#eee',
                color:'#656565',
            }
        },
        "& .MuiChip-label":{
            paddingLeft:10,
            paddingRight:10
        }
    },
    chipActive:{
        backgroundColor:'#dbf0ff!important',
        color:'#0097ff!important',
        fontWeight:600,
    },
    // chipBoxList:{
    //     height:165,
    //     overflow:'hidden'
    // },
    tag:{
        display:'inline-flex',
        alignItems:'baseline',
        justifyContent:'center',
        borderRadius: 3,
        border:'1px solid #000',
        backgroundColor:'#ff7144',
        padding:7,
        marginRight:12,
        height:16,
    },
    tagNewbie:{
        fontSize:'0.813rem',
        fontWeight:400,
        backgroundColor:'#ffc144',
    },
});


class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagList: [
                {tag:"??????"},
                {tag:"?????????"},
                {tag:"????????????"},
                {tag:"????????????"},
                {tag:"????????????"},
                {tag:"?????????"},
                {tag:"?????????"},
                {tag:"???????????????"},
                {tag:"??????"},
                {tag:"?????????"},
                {tag:"???????????????"},
                {tag:"?????????"},
                {tag:"??????????????????"},
                {tag:"???????????????"},
            ],
            splashList: [
                {
                    id:1,
                    img:SplashImg03,
                    title:"???????????? ???????????? ?????? ????????? ???????????????!",
                    subTitle:"????????? ??????????????? ???????????? ?????? ????????? ???????????????.",
                },
                {
                    id:2,
                    img:SplashImg01,
                    title:"???????????? ???????????? ?????? ????????? ???????????????!",
                    subTitle:"????????? ??????????????? ???????????? ?????? ????????? ???????????????.",
                },
                {
                    id:3,
                    img:SplashImg02,
                    title:"?????? ???????????? ???????????? ?????? AI ?????????",
                    subTitle:"????????? ????????? ???????????? ????????? ????????? ???????????? ???????????? ????????????!",
                },
            ],
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.splashBox} >
                    <CarouselProvider
                        naturalSlideWidth={1000}
                        isIntrinsicHeight
                        visibleSlides={1}
                        totalSlides={3}
                        // totalSlides={this.state.splashList.id}
                        // hasMasterSpinner='true'
                    >
                        <Slider>
                            {this.state.splashList.map((rooms, i) => (
                            <Slide index={i}>
                                <Box className={classes.titleBox} style={{ backgroundImage: `url(${rooms.img})`, width:'100vw'}}>
                                    <Box>
                                    <Typography className={classes.titleText} component={"p"}>
                                        {rooms.title}
                                    </Typography>
                                    <Typography className={classes.subText}>
                                        {rooms.subTitle}
                                    </Typography>
                                    </Box>
                                </Box>
                            </Slide>
                            ))}
                        </Slider>
                        <div className={classes.wrap}>
                            <DotGroup>
                                {/*{this.state.splashList.map((rooms, i) => (*/}
                                {/*    <Dot slide={i} />*/}
                                {/*))}*/}
                            </DotGroup>
                        </div>
                    </CarouselProvider>
                </Box>
                <Box className={classes.container}>
                    <Box className={classes.sliderBox} style={{margin:'90px auto'}}>
                        <Link variant={"h3"}>New, ???????????? <CaretRightIcon/></Link>
                        <HomeCarouselComponent/>
                    </Box>
                    <Box className={classes.search}>
                        <InputBase
                            placeholder='????????? ?????? ????????? ??????????????????.'
                            className={classes.inputRoot}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <IconButton className={classes.searchIcon} disableRipple>
                            <SearchIcon />
                        </IconButton>
                    </Box>
                    <Box className={this.state.tagListButton === true ? classes.chipBox : clsx(classes.chipBox, classes.chipBoxList)}>
                        {this.state.tagList.map((tag, i) => (
                            <Chip
                                key={i}
                                label={tag.tag}
                                className={clsx(this.props.classSelectTag === i && classes.chipActive)}
                                onClick={() => this.props.handleChangeClassSelectTag(i)}
                            />
                        ))}
                    </Box>
                    <Box className={classes.sliderBox} style={{marginTop:90}}>
                        <Link variant={"h3"}>???????????????, ?????? ???????????? ???????????????! <CaretRightIcon/></Link>
                        <HomeSecondCarouselComponent/>
                    </Box>
                    <Box className={classes.sliderBox} style={{marginTop:80}}>
                        <Link variant={"h3"}>
                            <span className={clsx(classes.tag, classes.tagNewbie)}>NEWBIE</span>
                            ???????????? ?????? ?????? ??????<CaretRightIcon/></Link>
                        <HomeCarouselComponent/>
                    </Box>
                    <Box className={classes.sliderBox} style={{marginTop:80, marginBottom: 120}}>
                        <Link variant={"h3"}>
                            <span className={classes.tag}><ThreeStarIcon/></span>???????????? ?????? ?????? ??????<CaretRightIcon/></Link>
                        <HomeCarouselComponent/>
                    </Box>
                </Box>
                <Footer/>
            </div>
        );
    }
}

export default withStyles(styles)(TopBar);