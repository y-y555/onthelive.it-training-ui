import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, MenuItem, Popover} from "@material-ui/core";
import clsx from "clsx";

const styles = theme => ({
    root:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft: 13,
        paddingRight: 13,
        boxSizing:'border-box',
        marginTop: 25,
        marginBottom: 20,
    },
    listButtonStyle:{
        width: 120,
        height: 32,
        boxSizing:'border-box',
        borderRadius: 2,
        background:'#c7c9cc',
        color:'rgba(0, 0, 0, 0.6)',
        fontSize: '0.875rem',
        '&:hover':{
            background:'#c7c9cc',
        },
    },
    listButtonStyle2:{
        '@media all and (max-width: 1550px)': {
            width: 100,
        },
        '@media all and (max-width: 1360px)': {
            width: 80,
        },
    },
    focusListButtonStyle:{
        background:'#d8e5fc',
        border:'1px solid #1664f5',
        borderBottom:0,
        color:'#1664f5',
        fontWeight: 600,
        '&:hover':{
            background:'#d8e5fc',
        },
    },
    popoverBox:{
        '& .MuiPaper-root':{
            display:'flex',
            alignItems:'center',
            border:'1px solid #1664f5',
            boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.25)',
            borderRadius: 2,
            '& li':{
                fontSize:'0.813rem',
                fontFamily: 'NanumSquareRoundOTF' ,
                '&:hover':{
                    background:'transparent'
                }
            },
            '& .MuiMenuItem-root':{
                paddingTop: 10,
                paddingBottom: 10
            }
        }
    },
    lineStyle:{
        width: 1,
        height: 19,
        background: '#A3A8AF'
    }
});

class ButtonTopComponent extends Component {
    render() {
        const { classes, typeButton2, handleClickVideoPopover, handleClickTrainingPopover, handleClickEvaluationPopover, handleClickTaskPopover,  videoAnchorEl, trainingAnchorEl, evaluationAnchorEl, taskAnchorEl,  videoOpen, trainingOpen, valuationOpen, taskOpen, handleClosePopover, handleClickVideo, handleClickImage, handleClickText, handleClickVirtualMachines, handleClickQuiz  } = this.props;

        return (
            <div className={classes.root}>
                <Button
                    className={typeButton2 ? videoOpen ? clsx(classes.listButtonStyle, classes.listButtonStyle2, classes.focusListButtonStyle) : clsx(classes.listButtonStyle, classes.listButtonStyle2) : videoOpen ? clsx(classes.listButtonStyle, classes.focusListButtonStyle) : classes.listButtonStyle}
                    aria-owns={videoOpen ? 'simple-popper' : undefined}
                    onClick={handleClickVideoPopover}
                    disableRipple
                >
                    ?????????
                </Button>
                <Button
                    className={typeButton2 ? trainingOpen ? clsx(classes.listButtonStyle, classes.listButtonStyle2, classes.focusListButtonStyle) : clsx(classes.listButtonStyle, classes.listButtonStyle2) : trainingOpen ? clsx(classes.listButtonStyle, classes.focusListButtonStyle) : classes.listButtonStyle}
                    aria-owns={trainingOpen ? 'simple-popper' : undefined}
                    onClick={handleClickTrainingPopover}
                    disableRipple
                >
                    ??????
                </Button>
                <Button
                    className={typeButton2 ? valuationOpen ? clsx(classes.listButtonStyle, classes.listButtonStyle2, classes.focusListButtonStyle) : clsx(classes.listButtonStyle, classes.listButtonStyle2) : valuationOpen ? clsx(classes.listButtonStyle, classes.focusListButtonStyle) : classes.listButtonStyle}
                    aria-owns={valuationOpen ? 'simple-popper' : undefined}
                    onClick={handleClickEvaluationPopover}
                    disableRipple
                >
                    ??????
                </Button>
                <Button
                    className={typeButton2 ? taskOpen ? clsx(classes.listButtonStyle, classes.listButtonStyle2, classes.focusListButtonStyle) : clsx(classes.listButtonStyle, classes.listButtonStyle2) : taskOpen ? clsx(classes.listButtonStyle, classes.focusListButtonStyle) : classes.listButtonStyle}
                    aria-owns={taskOpen ? 'simple-popper' : undefined}
                    onClick={handleClickTaskPopover}
                    disableRipple
                >
                    ??????
                </Button>

                {/* /// */}
                <Popover
                    id="simple-popper"
                    open={videoOpen}
                    anchorEl={videoAnchorEl}
                    onClose={handleClosePopover}
                    className={classes.popoverBox}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handleClickVideo}>
                        ?????????
                    </MenuItem>
                    <Box className={classes.lineStyle} />
                    <MenuItem onClick={handleClickImage}>
                        ?????????
                    </MenuItem>
                    <Box className={classes.lineStyle} />
                    <MenuItem onClick={handleClickText}>
                        ?????????
                    </MenuItem>
                </Popover>

                <Popover
                    id="simple-popper"
                    open={trainingOpen}
                    anchorEl={trainingAnchorEl}
                    onClose={handleClosePopover}
                    className={classes.popoverBox}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handleClickImage}>
                        ?????????
                    </MenuItem>
                    <Box className={classes.lineStyle} />
                    <MenuItem onClick={handleClickText}>
                        ?????????
                    </MenuItem>
                    <Box className={classes.lineStyle} />
                    <MenuItem onClick={handleClickVirtualMachines}>
                        ????????????
                    </MenuItem>
                </Popover>

                <Popover
                    id="simple-popper"
                    open={valuationOpen}
                    anchorEl={evaluationAnchorEl}
                    onClose={handleClosePopover}
                    className={classes.popoverBox}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handleClickQuiz}>
                        ??????
                    </MenuItem>
                    <Box className={classes.lineStyle} />
                    <MenuItem onClick={handleClickImage}>
                        ?????????
                    </MenuItem>
                    <Box className={classes.lineStyle} />
                    <MenuItem onClick={handleClickText}>
                        ?????????
                    </MenuItem>
                </Popover>

                <Popover
                    id="simple-popper"
                    open={taskOpen}
                    anchorEl={taskAnchorEl}
                    onClose={handleClosePopover}
                    className={classes.popoverBox}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handleClickImage}>
                        ?????????
                    </MenuItem>
                    <Box className={classes.lineStyle} />
                    <MenuItem onClick={handleClickText}>
                        ?????????
                    </MenuItem>
                </Popover>
            </div>
        );
    }
}

export default withStyles(styles)(ButtonTopComponent);