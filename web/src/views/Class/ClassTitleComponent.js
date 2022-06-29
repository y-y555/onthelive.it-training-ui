import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Typography} from "@material-ui/core";
import {ReactComponent as BackgroundImageIcon} from "../../common/images/BackgroundImageIcon.svg";
import IntroductionDialogComponent from "../dialog/IntroductionDialogComponent";

const styles = _theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:1440,
        },
        width:1200,
        margin:'30px auto 20px',
        padding:'0 30px',
        boxSizing:'border-box',
        display:'flex',
        alignItems:'flex-start',
        justifyContent: 'flex-end'
},
    visualBox:{
        '@media all and (min-width: 1500px)': {
            width: 730,
        },
        width: 620,
        height: 300,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#D8F6FF',
        borderRadius:10,
        margin: '0 0 auto',
    },
    titleBox:{
        '@media all and (min-width: 1500px)': {
            width:235,
            marginLeft:90,
        },
        width:230,
        // marginLeft:50,
        marginLeft:30,
        '&>h3':{
            fontSize:'1.875rem',
            fontWeight:500,
            marginBottom:24,
        },
    },
    subTextBox:{
        fontSize:'1.125rem',
        color:'#000',
    },
    buttonStyle:{
        minWidth:20,
        padding:'0',
        fontSize:'0.875rem',
        color:'#a3a8af',
        fontWeight:400,
        marginLeft:5,
        "&:hover":{
            background:'transparent'
        },
    }
});

class ClassTitleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen:false,
            text:"엑셀 강의에 부록처럼 달린 스프레드시트 수업은 이제 그만! 진짜 배우고 싶었던 엑셀 강의에 부록처럼 달린 스프레드시트 수업은 이제 그만!"
        };
    }

    handleClickOpen = () => {
        this.setState({ dialogOpen: true });
    };

    handleClose = () => {
        this.setState({ dialogOpen: false });
    };

    ellipsisText = (text) => text.length > 47 ? text.substr(0, 47) + '...' : text;

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.visualBox}>
                    <BackgroundImageIcon/>
                </Box>
                <Box className={classes.titleBox}>
                    <Typography variant="h3">구글 스프레드시트로 게을러도 완벽하게 일하는 법</Typography>
                    <Box>
                        <span className={classes.subTextBox}>
                            {this.ellipsisText(this.state.text)}
                        </span>

                        {this.state.text.length > 49 &&
                            <Button className={classes.buttonStyle} onClick={this.handleClickOpen} disableRipple>더보기</Button>
                        }
                    </Box>
                </Box>

                <IntroductionDialogComponent dialogOpen={this.state.dialogOpen} handleClose={this.handleClose}/>
            </div>
        );
    }
}

export default withStyles(styles)(ClassTitleComponent);