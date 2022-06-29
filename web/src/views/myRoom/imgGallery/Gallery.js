import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import galleryImg1 from "../../../common/images/galleryImg1.jpg";
import galleryImg2 from "../../../common/images/galleryImg2.jpg";
import galleryImg3 from "../../../common/images/galleryImg3.jpg";
import galleryImg4 from "../../../common/images/galleryImg4.jpg";
import galleryImg5 from "../../../common/images/galleryImg5.jpg";
import galleryImg6 from "../../../common/images/galleryImg6.jpg";
import galleryImg7 from "../../../common/images/galleryImg7.jpg";
import CameraIcon from "../../../common/images/CameraIcon.svg";
import {Box, Typography} from "@material-ui/core";
import GalleryCheckCircleIcon from "../../../common/images/GalleryCheckCircleIcon.svg";

const styles = theme => ({
    root:{
        "& .imgList":{
            listStyle:'none',
            display:'flex',
            flexWrap:'wrap',
            paddingLeft:0,
            marginTop:0,
            marginBottom:0
        },
        "& .imgList li":{
            width:160,
            height:65,
            margin:'0 5px 10px',
            cursor:'pointer',
            overflow:'hidden',
            borderRadius:10,
        },
        "& .imgSelect":{
            "& img":{
                width:'100%',
                maxWidth:'100%',
                objectFit: 'cover',
            }
        },
        "& .imgButton":{
            background:'#e9e9e9',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            "& p":{
                fontSize:'0.875rem',
                color:'rgba(0, 0, 0, 0.8)',
                marginLeft:5
            }
        }
    },
    imgBox:{
        width:670,
        height:275,
        overflow:'hidden',
        borderRadius:10,
        "& img":{
            width:'100%',
            maxWidth:'100%',
            objectFit: 'cover'
        }
    },
    textStyle:{
        fontSize:'0.938rem',
        color:'rgba(0, 0, 0, 0.6)',
        margin:'24px 0 11px'
    },
    imgSelect:{
        "& img":{
            width:'100%',
            maxWidth:'100%',
            objectFit: 'cover',
        }
    },
    imageSelect1:{
        position:'relative',
        "&::before":{
            display:'block',
            position:'absolute',
            width:'154px',
            height:'59px',
            background:'rgba(0, 151, 255, 0.5)',
            border:'3px solid #1a457e',
            borderRadius:10,
            content:"''",
            backgroundImage:`url(${GalleryCheckCircleIcon})`,
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center'

        },
        "& img":{
            width:'100%',
            maxWidth:'100%',
            objectFit: 'cover',
        }
    },
});

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img1: true,
            img2: false,
            img3: false,
            img4: false,
            img5: false,
            img6: false,
            img7: false,
        };
    }

    handleClickImg1 = () => {
        this.setState({
            img1: true,
            img2: false,
            img3: false,
            img4: false,
            img5: false,
            img6: false,
            img7: false,
        });
    };
    handleClickImg2 = () => {
        this.setState({
            img1: false,
            img2: true,
            img3: false,
            img4: false,
            img5: false,
            img6: false,
            img7: false,
        });
    };
    handleClickImg3 = () => {
        this.setState({
            img1: false,
            img2: false,
            img3: true,
            img4: false,
            img5: false,
            img6: false,
            img7: false,
        });
    };
    handleClickImg4 = () => {
        this.setState({
            img1: false,
            img2: false,
            img3: false,
            img4: true,
            img5: false,
            img6: false,
            img7: false,
        });
    };
    handleClickImg5 = () => {
        this.setState({
            img1: false,
            img2: false,
            img3: false,
            img4: false,
            img5: true,
            img6: false,
            img7: false,
        });
    };
    handleClickImg6 = () => {
        this.setState({
            img1: false,
            img2: false,
            img3: false,
            img4: false,
            img5: false,
            img6: true,
            img7: false,
        });
    };
    handleClickImg7 = () => {
        this.setState({
            img1: false,
            img2: false,
            img3: false,
            img4: false,
            img5: false,
            img6: false,
            img7: true,
        });
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Box className={classes.imgBox}>
                    <img src={galleryImg1} alt={"갤러리 이미지"}/>
                </Box>
                <p className={classes.textStyle}>모임을 대표하는 커버를 아래에서 선택하거나 직접 등록하세요.</p>
                <ul className="imgList">
                    <li className="imgButton">
                        <img src={CameraIcon} alt="camera icon" />
                        <Typography>직접선택</Typography>
                    </li>
                    <li onClick={this.handleClickImg1} className={this.state.img1 === true ? classes.imageSelect1 : classes.imgSelect}>
                        <img src={galleryImg1} alt={"갤러리 이미지"}/>
                    </li>
                    <li onClick={this.handleClickImg2} className={this.state.img2 === true ? classes.imageSelect1 : classes.imgSelect}>
                        <img src={galleryImg2} alt={"갤러리 이미지"}/>
                    </li>
                    <li onClick={this.handleClickImg3} className={this.state.img3 === true ? classes.imageSelect1 : classes.imgSelect}>
                        <img src={galleryImg3} alt={"갤러리 이미지"}/>
                    </li>
                    <li onClick={this.handleClickImg4} className={this.state.img4 === true ? classes.imageSelect1 : classes.imgSelect}>
                        <img src={galleryImg4} alt={"갤러리 이미지"}/>
                    </li>
                    <li onClick={this.handleClickImg5} className={this.state.img5 === true ? classes.imageSelect1 : classes.imgSelect}>
                        <img src={galleryImg5} alt={"갤러리 이미지"}/>
                    </li>
                    <li onClick={this.handleClickImg6} className={this.state.img6 === true ? classes.imageSelect1 : classes.imgSelect}>
                        <img src={galleryImg6} alt={"갤러리 이미지"}/>
                    </li>
                    <li onClick={this.handleClickImg7} className={this.state.img7 === true ? classes.imageSelect1 : classes.imgSelect}>
                        <img src={galleryImg7} alt={"갤러리 이미지"}/>
                    </li>
                 </ul>
            </div>
        );
    }
}

export default withStyles(styles)(Gallery);
