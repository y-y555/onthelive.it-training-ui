import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Typography} from "@material-ui/core";
import {ReactComponent as CheckCircle} from "../../common/images/CheckCircle.svg";
import {ReactComponent as PlayCircle} from "../../common/images/PlayCircle.svg";
import {ReactComponent as Code} from "../../common/images/Code.svg";
import {ReactComponent as Exam} from "../../common/images/Exam.svg";
import {ReactComponent as Notebook} from "../../common/images/Notebook.svg";
import clsx from "clsx";

const styles = theme => ({
    root:{
        width: 133,
        height: 'calc(100vh - 59px)',
        padding: '20px 12px',
        borderRight: '1px solid #c0c2c3',
        boxSizing:'border-box'
    },
    titleText:{
        fontSize: '0.875rem',
        fontWeight: 600,
        marginBottom: 16
    },
    textStyle:{
        fontSize: '0.813rem',
        color:'#000'
    },
    buttonStyle:{
        padding: 0,
        '&:hover':{
            background:'transparent'
        }
    },
    iconStyle:{
        '& .check-circle':{
            fill:'#a3a8af'
        }
    },
    imgButtonStyle:{
        width: '100%',
        height: 137,
        padding: 7,
        background:'#d9d9d9',
        borderRadius: 7,
        marginTop:5,
        marginBottom: 20,
        boxSizing: 'border-box',
        '&:hover':{
            background:'#d9d9d9'
        },
        '& > span':{
            height: '100%',
        }
    },
    imgButtonStyleSelect:{
        border:'3px solid rgba(22, 100, 245, 0.8)'
    },
    columnBox:{
        '& > span':{
            display:'flex',
            flexDirection:'column'
        }
    },
    rowBox:{
        width: '50%',
        height: '100%',
        padding: 3,
        background:'#fff',
        borderRadius: 5,
        boxSizing:'border-box',
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center'
    },
    spanBox:{
        width: '100%',
        background:'#fff',
        padding: 3,
        borderRadius: 5,
        boxSizing:'border-box',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    margin:{
        marginTop: 4,
        marginBottom: 4
    },
    lineStyle:{
        width:37,
        height: 1,
        background:'#dedede',
        marginTop:3,
        marginBottom:3
    }
});

class ContentLectureSideBarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes, typeButton1, typeButton2, handleChangeTypeButton1, handleChangeTypeButton2 } = this.props;

        return (
            <div className={classes.root}>
                <Typography className={classes.titleText}>레이아웃</Typography>
                <Box>
                   <Button className={classes.buttonStyle} onClick={handleChangeTypeButton1} disableRipple>
                       <CheckCircle className={typeButton1 ? null : classes.iconStyle}/>
                       <Typography className={classes.textStyle}>1단 세로형</Typography>
                   </Button>
                    <Button className={clsx(classes.imgButtonStyle, classes.columnBox, typeButton1 ? classes.imgButtonStyleSelect : null)} onClick={handleChangeTypeButton1} disableRipple>
                        <span className={classes.spanBox}><PlayCircle/></span>
                        <span className={clsx(classes.spanBox, classes.margin)}><Code/></span>
                        <span className={classes.spanBox}><Exam/></span>
                   </Button>
                </Box>
                <Box>
                    <Button className={classes.buttonStyle} onClick={handleChangeTypeButton2} disableRipple>
                        <CheckCircle className={typeButton2 ? null : classes.iconStyle}/>
                        <Typography className={classes.textStyle}>2단 세로형</Typography>
                    </Button>
                    <Button className={clsx(classes.imgButtonStyle, typeButton2 ? classes.imgButtonStyleSelect : null)} onClick={handleChangeTypeButton2} disableRipple>
                        <span className={classes.rowBox} style={{marginRight:5}}>
                            <PlayCircle/>
                            <span className={classes.lineStyle} />
                            <Code/>
                            <span className={classes.lineStyle} />
                            <Notebook/>
                        </span>
                        <span className={classes.rowBox}>
                            <Exam/>
                        </span>
                    </Button>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(ContentLectureSideBarComponent);