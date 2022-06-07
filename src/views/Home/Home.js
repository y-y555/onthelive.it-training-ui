import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Typography, Link, InputBase, IconButton, Chip} from "@material-ui/core";
import MainImage from '../../common/images/SplashImg01.jpg';
import {ReactComponent as CaretRightIcon} from '../../common/images/CaretRightIcon.svg';
import HomeCarouselComponent from "./HomeCarouselComponent";
import {ReactComponent as SearchIcon} from "../../common/images/SearchIcon.svg";
import {ReactComponent as ThreeStarIcon} from "../../common/images/ThreeStarIcon.svg";
import clsx from "clsx";

const styles = theme => ({
    root:{
    },
    splashBox:{
        backgroundImage: `url(${MainImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center center',
        width:'100%',
        position:'relative',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
    },
    titleBox:{
        '@media all and (min-width: 1500px)': {
            width:1440,
        },
        width:1200,
        boxSizing:'border-box',
        display : 'flex',
        justifyContent : 'flex-start',
        paddingTop:'15%',
        paddingLeft:32,
        paddingBottom:'9%',
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
        justifyContent:'center'
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
    chipGroup:{
        width:860,
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
    },
    chip:{
        fontSize:'0.938rem',
        color:'#000',
        letterSpacing:'-0.3px',
        backgroundColor:'#eee',
        margin:'0 10px 18px 10px',
    },
    tag:{
        display:'inline-flex',
        alignItems:'center',
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

        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.splashBox} >
                    <Box className={classes.titleBox}>
                        <Box>
                            <Typography className={classes.titleText} component={"p"}>
                                정보보호 전문가가 되고 싶다면 부스트코스!
                            </Typography>
                            <Typography className={classes.subText}>
                                실무형 실습강의로 정보보호 기술 역량을 키워보세요.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.container}>
                    <Box className={classes.sliderBox} style={{margin:'90px 0'}}>
                        <Link variant={"h3"}>New, 최신강의 <CaretRightIcon/></Link>
                        <HomeCarouselComponent/>
                    </Box>
                    <Box className={classes.search}>
                        <InputBase
                            placeholder='배우고 싶은 강의를 검색해보세요.'
                            className={classes.inputRoot}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <IconButton className={classes.searchIcon} disableRipple>
                            <SearchIcon />
                        </IconButton>
                    </Box>
                    <Box className={classes.chipGroup}>
                        <Chip label="22년 1기 1반" className={classes.chip} />
                        <Chip label="상시" className={classes.chip} />
                        <Chip label="1학기" className={classes.chip} />
                        <Chip label="300분" className={classes.chip} />
                        <Chip label="22년 1기 1반" className={classes.chip} />
                        <Chip label="상시" className={classes.chip} />
                        <Chip label="1학기" className={classes.chip} />
                        <Chip label="300분" className={classes.chip} />
                        <Chip label="22년 1기 1반" className={classes.chip} />
                        <Chip label="상시" className={classes.chip} />
                        <Chip label="1학기" className={classes.chip} />
                        <Chip label="300분" className={classes.chip} />
                    </Box>
                    <Box className={classes.sliderBox} style={{marginTop:90}}>
                        <Link variant={"h3"}>처음이라면, 오픈 강의부터 훑어보세요! <CaretRightIcon/></Link>
                        <HomeCarouselComponent/>
                    </Box>
                    <Box className={classes.sliderBox} style={{marginTop:80}}>
                        <Link variant={"h3"}>
                            <span className={clsx(classes.tag, classes.tagNewbie)}>NEWBIE</span>
                            초보자를 위한 입문 강의<CaretRightIcon/></Link>
                        <HomeCarouselComponent/>
                    </Box>
                    <Box className={classes.sliderBox} style={{marginTop:80}}>
                        <Link variant={"h3"}>
                            <span className={classes.tag}><ThreeStarIcon/></span>전문가를 위한 심화 강의<CaretRightIcon/></Link>
                        <HomeCarouselComponent/>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(TopBar);