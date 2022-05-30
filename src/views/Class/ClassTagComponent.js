import React, {Component} from 'react';
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {Box, Typography, Chip, Button} from "@material-ui/core";
import {ReactComponent as ArrowDownTinyIcon} from "../../common/images/ArrowDownTinyIcon.svg"
import RoomTestImg1 from "../../common/images/RoomTestImg1.png";
import RoomTestImg2 from "../../common/images/RoomTestImg2.png";
import RoomTestImg3 from "../../common/images/RoomTestImg3.png";

const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:235,
            marginRight:90
        },
        width:230,
        // marginRight:50,
        marginRight:30,
        '&>h3':{
            fontSize:'1.25rem',
            marginBottom:30,
        }
    },
    chipBox:{
        margin:'30px 0 14px',
        '& > div':{
            height:25,
            backgroundColor:'#eee',
            color:'#656565',
            margin:'0 6px 10px 0',
            fontSize: '0.938rem',
            border:'1px solid #eee',
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
    chipBoxList:{
        height:165,
        overflow:'hidden'
    },
    btnStyle:{
        border:'1px solid #a3a8af',
        padding:'2px 6px',
        fontSize:'0.75rem',
        borderRadius:2,
        '& svg':{
            marginRight: 4,
        },
        "&:hover":{
            background:'transparent'
        }
    }
});


class ClassTagComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagListButton:false,
            chipButton:null,
            tagList: [
                {tag:"수업"},
                {tag:"스터디"},
                {tag:"노트필기"},
                {tag:"기술문서"},
                {tag:"아카데미"},
                {tag:"서비스"},
                {tag:"마케팅"},
                {tag:"렌딩페이지"},
                {tag:"노출"},
                {tag:"도달률"},
                {tag:"타겟팅광고"},
                {tag:"이탈률"},
                {tag:"시즈널키워드"},
                {tag:"연관검색어"},
                {tag:"연관검색어"},
                {tag:"연관검색어"},
                {tag:"연관검색어"},
                {tag:"연관검색어"},
                {tag:"연관검색어"},
                {tag:"연관검색어"},
                {tag:"연관검색어"},
                {tag:"연관검색어"},
                {tag:"연관검색어"},
            ],
        };
    }

    handleClick = () => {
        this.setState({ tagListButton: !this.state.tagListButton});
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Typography variant="h3">태그</Typography>
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

                {this.state.tagListButton === true ?
                    <Button className={classes.btnStyle} disableRipple onClick={this.handleClick}>
                        <ArrowDownTinyIcon style={{transform:'rotate(180deg)'}}/> 접기</Button>
                    :
                    <Button className={classes.btnStyle} disableRipple onClick={this.handleClick}>
                        <ArrowDownTinyIcon/> 더보기</Button>
                }
            </div>
        );
    }
}

export default withStyles(styles)(ClassTagComponent);