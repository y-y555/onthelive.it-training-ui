import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {
    BottomNavigation, BottomNavigationAction,
    Box,
    Typography
} from "@material-ui/core";
import Sample1 from "../../../common/images/Sample1.jpg";

const style = theme => ({
    root:{
        width:'100%',
        border: '1px solid #c4c9de',
        borderRadius: 8,
        marginBottom: 40,
        padding:'30px 20px 25px',
        boxSizing:'border-box'
    },
    textStyle:{
        fontSize: '1.125rem',
        color: '#a3a8af',
        fontWeight: 600,
    },
    explanationText:{
        fontSize: '0.75rem',
        fontWeight: 400,
        marginTop:12
    },
    titleImgBox:{
        width: 241,
        height: 181,
        overflow:'hidden',
        display:'flex',
        alignItems:'center'
    },
    buttonBox:{
        "& .MuiBottomNavigation-root":{
            justifyContent:'flex-start',
            flexWrap:'wrap',
            height:'inherit'
        },
        "& .MuiBottomNavigationAction-root.Mui-selected":{
            border:'1px solid #0097ff',
            background:'#fff',
            paddingTop:0
        },
        "& .MuiBottomNavigationAction-label.Mui-selected":{
            color:'#0097ff',
            fontWeight: 600,
            fontSize: '1.125rem',
        },
        "& .MuiBottomNavigationAction-label":{
            fontSize: '1.125rem',
            transaction:'none',
            transitionDelay:0,
        },
        "& .MuiBottomNavigation-root button:last-child":{
            marginRight:0
        }
    },
    toggleButtonStyle:{
        maxWidth:36,
        minWidth:36,
        height:36,
        padding:0,
        background:'rgba(163, 168, 175, 0.2)',
        color:'#a3a8af',
        marginRight:6,
        marginTop:6,
        borderRadius: 4,
        border:'1px solid rgba(163, 168, 175, 0.2)',
        "&:hover":{
            border:'1px solid #0097ff',
            background:'#fff',
            color:'#0097ff',
        }
    },
    actionText:{
        fontSize: '0.625rem',
        color: '#000',
        fontWeight: 500,
    }
});

class PreviewRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ratingValue: '',
        };
    }
    handleRatingValue = (event, ratingValue) => this.setState({ ratingValue });

    render() {
        const { classes } = this.props;
        const { ratingValue } = this.state;
        const labelDefaultWidth = (41 * ((this.props.rightSelect - this.props.leftSelect) + 1));
        const maxSelect = (11 - Math.ceil((1535 - window.innerWidth)/71) - this.props.leftSelect);
        const labelWidth = window.innerWidth >= 1535 ? labelDefaultWidth : this.props.rightSelect >= maxSelect ? 41 * maxSelect : labelDefaultWidth;
        return (
            <div className={classes.root}>
                {/* 단답형 제목입력 x */}
                <Typography className={classes.textStyle}>좌측 질문 제목이 노출됩니다</Typography>
                <Typography className={clsx(classes.textStyle, classes.explanationText)}>좌측 설문지 질문에 대한 설명이 노출됩니다</Typography>

                {/* 단답형 제목입력 o (필수 체크  -> * ) */}
                {/*<Typography className={classes.textStyle} style={{color:'#0d0d0d'}}>좌측 질문 제목이 노출됩니다 <span style={{color:'#FF0000'}}>*</span></Typography>*/}
                {/*<Typography className={clsx(classes.textStyle, classes.explanationText)} style={{color:'#0d0d0d'}}>좌측 설문지 질문에 대한 설명이 노출됩니다</Typography>*/}

                {/* 이미지가 있는경우*/}
                {/*<Box className={classes.titleImgBox} mb={2}>*/}
                {/*    <img src={Sample1} alt="" style={{width:'100%'}}/>*/}
                {/*</Box>*/}

                <Box className={classes.buttonBox} mt={3}>
                    <BottomNavigation value={ratingValue} showLabels onChange={this.handleRatingValue}>
                        {this.props.leftSelect <= 0 && <BottomNavigationAction  value={0} label="0" className={clsx(classes.textStyle, classes.toggleButtonStyle)}/>}
                        {this.props.leftSelect <= 1 && <BottomNavigationAction  value={1} label="1" className={clsx(classes.textStyle, classes.toggleButtonStyle)}/>}
                        <BottomNavigationAction  value={2} label="2" className={clsx(classes.textStyle, classes.toggleButtonStyle)}/>
                        {this.props.rightSelect >= 3 && <BottomNavigationAction  value={3} label="3" className={clsx(classes.textStyle, classes.toggleButtonStyle)}/>}
                        {this.props.rightSelect >= 4 && <BottomNavigationAction  value={4} label="4" className={clsx(classes.textStyle, classes.toggleButtonStyle)}/>}
                        {this.props.rightSelect >= 5 && <BottomNavigationAction  value={5} label="5" className={clsx(classes.textStyle, classes.toggleButtonStyle)}/>}
                        {this.props.rightSelect >= 6 && <BottomNavigationAction  value={6} label="6" className={clsx(classes.textStyle, classes.toggleButtonStyle)}/>}
                        {this.props.rightSelect >= 7 && <BottomNavigationAction  value={7} label="7" className={clsx(classes.textStyle, classes.toggleButtonStyle)}/>}
                        {this.props.rightSelect >= 8 && <BottomNavigationAction  value={8} label="8" className={clsx(classes.textStyle, classes.toggleButtonStyle)}/>}
                        {this.props.rightSelect >= 9 && <BottomNavigationAction  value={9} label="9" className={clsx(classes.textStyle, classes.toggleButtonStyle)}/>}
                        {this.props.rightSelect >= 10 && <BottomNavigationAction  value={10} label="10" className={clsx(classes.textStyle, classes.toggleButtonStyle)}/>}
                    </BottomNavigation>
                    <Box display='flex' justifyContent='space-between' alignItems='center' style={{marginTop:20, minWidth: '84px', width: labelWidth}}>
                        <Typography className={clsx(classes.textStyle, classes.actionText)}>매우불만족</Typography>
                        <Typography className={clsx(classes.textStyle, classes.actionText)}>매우만족</Typography>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(style)(PreviewRating);