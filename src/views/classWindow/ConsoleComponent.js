import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Typography} from "@material-ui/core";
import {ReactComponent as Info} from "../../common/images/Info.svg";
import clsx from "clsx";
import TestVideoImg from "../../common/images/TestVideoImg.png";

const styles = theme => ({
    root:{
        width: 690,
        boxSizing:'border-box',
        marginBottom: 20
    },
    root2:{
        width: '100%',
        '@media all and (min-width: 1500px)': {
            width: 690,
        },
    },
    titleText:{
        fontSize: '0.875rem',
    },
    bold:{
        fontWeight: 600,
        textAlign:'center'
    },
    textColor:{
        position: 'absolute',
        color:'#fff',
        textAlign:'center'
    },
    boxStyle:{
        position: 'relative',
        width:'100%',
        height: 360,
        background:'#848484',
        marginBottom: 14,
        marginTop: 14,
        cursor:'pointer',
        backgroundImage:`url(${TestVideoImg})`,
        backgroundPosition: 'center',
        backgroundSize:'cover',
        '@media all and (max-width: 1300px)': {
            height: 280,
        },
    },
    boxStyle2:{
        height: 200,
        '@media all and (max-width: 1300px)': {
            height: 160,
        },
    },
    layoutBox:{
        width: 'calc((100% /2) - 10px)'
    }
});

class ConsoleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes, typeButton2, image1 } = this.props;

        return (
            <div className={typeButton2 ? classes.root2 : classes.root}>
                <Box display='flex' alignItems='center' justifyContent='flex-start'>
                    <Info style={{marginRight: 5}}/>
                    <Typography className={classes.titleText}>이미지를 클릭하면 새탭에서 콘솔이 실행됩니다. </Typography>
                </Box>

                {!typeButton2 ?
                    <Box display='flex' flexDirection='column' alignItems='center'>
                        <Box display='flex' justifyContent='center' alignItems='center' className={classes.boxStyle}>
                            <Typography className={clsx(classes.titleText, classes.textColor)}>이미지를 클릭하면 새탭에서<br/>콘솔이 실행됩니다.</Typography>
                        </Box>
                        <Typography className={clsx(classes.titleText, classes.bold)}>Windows 10 and later x64 </Typography>
                    </Box>
                    :
                    image1 ?
                        <Box display='flex' flexDirection='column' alignItems='center'>
                            <Box display='flex' justifyContent='center' alignItems='center' className={classes.boxStyle}>
                                <Typography className={clsx(classes.titleText, classes.textColor)}>이미지를 클릭하면 새탭에서<br/>콘솔이 실행됩니다.</Typography>
                            </Box>
                            <Typography className={clsx(classes.titleText, classes.bold)}>Windows 10 and later x64 </Typography>
                        </Box>

                        :
                        <Box display='flex' justifyContent='space-between' alignItems='flex-start'>
                            <Box display='flex' flexDirection='column' alignItems='center' className={classes.layoutBox}>
                                <Box display='flex' justifyContent='center' alignItems='center' className={image1 ? classes.boxStyle : clsx(classes.boxStyle, classes.boxStyle2)}>
                                    <Typography className={clsx(classes.titleText, classes.textColor)}>이미지를 클릭하면 새탭에서<br/>콘솔이 실행됩니다.</Typography>
                                </Box>
                                <Typography className={clsx(classes.titleText, classes.bold)}>Windows 10 and later x64 </Typography>
                            </Box>
                            <Box display='flex' flexDirection='column' alignItems='center' className={classes.layoutBox}>
                                <Box display='flex' justifyContent='center' alignItems='center' className={image1 ? classes.boxStyle : clsx(classes.boxStyle, classes.boxStyle2)}>
                                    <Typography className={clsx(classes.titleText, classes.textColor)}>이미지를 클릭하면 새탭에서<br/>콘솔이 실행됩니다.</Typography>
                                </Box>
                                <Typography className={clsx(classes.titleText, classes.bold)}>Linux CentOS 7</Typography>
                            </Box>
                        </Box>

                }

            </div>
        );
    }
}

export default withStyles(styles)(ConsoleComponent);