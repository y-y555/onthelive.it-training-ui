import React, {Component} from 'react';
import {Box, Button, ClickAwayListener, Paper, Popper, Typography} from "@material-ui/core";
import {ReactComponent as CalendarBlank2} from "../../common/images/CalendarBlank2.svg";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import CalendarComponent from "./CalendarComponent";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    calendarBtn:{
        padding: '0 5PX',
        height: 30,
        border:'1px solid #BFBFBF',
        '&:hover':{
            background:'transparent'
        },
        '& span':{
            display:'flex',
            alignItems:'center'
        },
        '& p':{
            fontSize: '0.875rem',
            margin: '0 5px'
        }
    },
    popper:{
        zIndex: 1400,
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            left: 0,
            marginTop: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '0 1em 1em 1em',
                borderColor: `transparent transparent ${theme.palette.common.white} transparent`,
            },
        },
        '&[x-placement*="top"] $arrow': {
            bottom: 0,
            left: 0,
            marginBottom: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '1em 1em 0 1em',
                borderColor: `${theme.palette.common.white} transparent transparent transparent`,
            },
        },
        '&[x-placement*="right"] $arrow': {
            left: 0,
            marginLeft: '-0.9em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 1em 1em 0',
                borderColor: `transparent ${theme.palette.common.white} transparent transparent`,
            },
        },
        '&[x-placement*="left"] $arrow': {
            right: 0,
            marginRight: '-0.9em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 0 1em 1em',
                borderColor: `transparent transparent transparent ${theme.palette.common.white}`,
            },
        },
    },
    arrow: {
        position: 'absolute',
        fontSize: 7,
        width: '3em',
        height: '3em',
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        },
    },
    paper: {
        padding:0,
        maxWidth: 500,
        overflow: 'auto',
        boxShadow:'0 4px 15px rgba(0, 0, 0, 0.25)',
        borderRadius:10,
    },
});


class CalendarButtonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrow: true,
            arrowRef: null,
            open: false,
        };
    }

    handleClickButton = () => {
        this.setState(state => ({
            open: !state.open,
        }));
    };

    handleArrowRef = node => {
        this.setState({
            arrowRef: node,
        });
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        const { classes, allDate } = this.props;
        const { open, arrow, arrowRef } = this.state;

        return (
            <div>
                <Button
                    buttonRef={node => {this.anchorEl = node;}}
                    className={classes.calendarBtn}
                    onClick={this.handleClickButton}
                    disableRipple
                >
                    <CalendarBlank2/>
                    <Typography> {allDate ? '전체 기간' : '기한 없음'}</Typography>
                    <ArrowDownIcon/>
                </Button>

                <Popper
                    open={open}
                    anchorEl={this.anchorEl}
                    placement="bottom"
                    disablePortal={false}
                    className={classes.popper}
                    modifiers={{
                        preventOverflow: {
                            enabled: true,
                            boundariesElement: 'scrollParent',
                        },
                        arrow: {
                            enabled: true,
                            element: arrowRef,
                        },
                    }}
                >
                    {arrow ? <span className={classes.arrow} ref={this.handleArrowRef} /> : null}
                    <Paper className={classes.paper}>
                        <ClickAwayListener onClickAway={this.handleClose}>
                            {open &&
                            <CalendarComponent allDate={allDate}/>
                            }
                        </ClickAwayListener>
                    </Paper>
                </Popper>
            </div>
        );
    }
}

export default withStyles(styles)(CalendarButtonComponent);