import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Avatar, Box, IconButton, Typography} from "@material-ui/core";
import {ReactComponent as ArrowIcon} from "../../common/images/ArrowIcon.svg";
import clsx from "clsx";
import {ReactComponent as Info} from "../../common/images/Info.svg";
import {ReactComponent as X} from "../../common/images/X.svg";

const styles = theme => ({
    root:{
        width:690,
        margin:'0 auto'
    },
    avatar:{
        width: 40,
        height: 40,
        marginRight: 10
    },
    nameText:{
        fontSize:'0.875rem',
        color:'#000',
        fontWeight: 600,
    },
    timeText:{
        fontSize: '0.75rem',
        color: '#666'
    },
    iconButton:{
        padding: 0,
        '&:hover':{
            background:'transparent'
        }
    },
    spanText:{
        color:'#000',
        fontWeight: 600
    },
    numberText:{
        fontSize: '0.75rem',
        color: '#666',
        margin: '0 10px'
    },
    textStyle2:{
        fontSize:'1.125rem',
        color:'#4282fa',
        fontWeight:600,
    },
    numberBox:{
        background: '#4282fa',
        borderRadius: 2,
        height: 27,
        margin:'0 10px 0 8px',
        padding: '2px 35px',
        '& p':{
            color: '#fff',
            fontWeight: 600,
            fontSize: '1.375rem'
        }
    },
    colorText:{
        color:'#8a42ff'
    },
    colorBox:{
        background:'#8a42ff'
    },
    explanationBox:{
        width:255,
        padding:'10px',
        background:'#2078e8',
        boxShadow:'0 2px 7px 0 rgba(0, 0, 0, 0.25)',
        borderRadius:3,
        position: 'absolute',
        zIndex:100,
        bottom:-75,
        right: -129,
        "&::before":{
            backgroundColor: '#2078e8',
            content: "''",
            display: 'block',
            height: '13px',
            position: 'absolute',
            top: -6,
            left: 130,
            transform: 'rotate( -227deg ) skew( 0deg )',
            width: '13px',
            zIndex:300
        },
        '& svg':{
            width: 16,
            height: 16
        },
    },
    stepContents:{
        fontSize: '0.813rem',
        color:'#fff',
        fontWeight:300,
        padding:0,
        margin:0,
        paddingLeft:'1.2rem',
        '& li':{
            marginTop:8,
            listStyle:'none',
            '&:first-child':{
                marginTop:0,
            }
        }
    },
});

class StudentsListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoTooltip:false,
        };
    }

    handleClickTooltip = () => {
        this.setState({ infoTooltip: !this.state.infoTooltip });
    };

    handleCloseInfoTooltip = () => {
        this.setState({ infoTooltip: false });
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Box display='flex' alignItems='center' justifyContent='space-between' mb={5}>
                    <Box display='flex' alignItems='center'>
                        <Avatar className={classes.avatar} />
                        <Box>
                            <Typography className={classes.nameText}>윤채원</Typography>
                            <Typography className={classes.timeText}>마지막 학습일 : -  |  학습횟수 0회  |  학습시간 00분/30분 </Typography>
                        </Box>
                    </Box>
                    <Box display='flex' alignItems='center'>
                        <IconButton className={classes.iconButton} disableRipple>
                            <ArrowIcon/>
                        </IconButton>
                        <Typography className={classes.numberText}><span className={classes.spanText}>1</span>/20</Typography>
                        <IconButton className={classes.iconButton} disableRipple>
                            <ArrowIcon style={{transform: 'scaleX(-1)'}}/>
                        </IconButton>
                    </Box>
                </Box>

                <Box display='flex' justifyContent='flex-end' alignItems='center' mb={4}>
                    <Box display='flex' alignItems='center'>
                        <Typography className={classes.textStyle2}>평가</Typography>
                        <Box className={classes.numberBox}><Typography>-/300</Typography></Box>
                    </Box>

                    <Box display='flex' alignItems='center' ml={3}>
                        <Typography className={clsx(classes.textStyle2, classes.colorText)}>과제</Typography>
                        <Box className={clsx(classes.numberBox, classes.colorBox)}><Typography>-/100</Typography></Box>
                    </Box>
                    <Box style={{position:'relative'}}>
                        <IconButton className={classes.iconButton} onClick={this.handleClickTooltip} disableRipple>
                            <Info/>
                        </IconButton>
                        {this.state.infoTooltip &&
                            <Box className={classes.explanationBox}>
                                <Box display='flex' justifyContent='space-between' alignItems='flex-start'>
                                    <ul className={classes.stepContents}>
                                        <li>평가, 과제에서 점수가 있는 항목의 채점 결과총점입니다.<br/>
                                            강의 완료 후 최종 점수가 표시됩니다.</li>
                                    </ul>
                                    <IconButton className={classes.iconButton} onClick={this.handleCloseInfoTooltip} disableRipple>
                                        <X/>
                                    </IconButton>
                                </Box>
                            </Box>
                        }
                    </Box>

                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(StudentsListComponent);