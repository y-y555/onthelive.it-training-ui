import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Typography, Box, IconButton, MenuItem, Popover} from "@material-ui/core";
import clsx from "clsx";
import {ReactComponent as MoreIcon} from "../../common/images/MoreIcon.svg";
const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width:620,
        paddingBottom:70
    },
    titleStyle:{
        borderBottom:'1px solid #e1e1e1',
        paddingBottom: 14,
        marginBottom:37,
        '& .MuiTypography-h3':{
            fontSize: '1.875rem'
        },
    },
    iconButton:{
        padding: 0,
        '&:hover':{
            background:'transparent'
        }
    },
    moreBtn:{
        width: 40,
        height: 40,
        zIndex:1000,
        '&:hover':{
            background:'#fff'
        }
    },
    menuItem:{
        fontFamily: 'NanumSquareRoundOTF' ,
        fontSize:'0.75rem',
        color:'#0d0d0d',
        "&:hover":{
            background:'#d3d7db'
        },
        "&.Mui-selected":{
            background:'transparent'
        },
        "&.Mui-selected:hover":{
            background:'#d3d7db'
        },
    },
});

class ClassLectureIntroductionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl:null
        };
    }
    handleClickPopover = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };
    handleClosePopover = () => {
        this.setState({
            anchorEl: null,
        });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popover' : undefined;

        return (
            <div className={classes.root}>
                <Box display='flex' alignItems='center' justifyContent='space-between' className={classes.titleStyle}>
                    <Typography variant={'h3'}>초급자를 위한 준비한 기본 강의입니다.</Typography>
                    <IconButton
                        aria-describedby={id}
                        onClick={this.handleClickPopover}
                        className={clsx(classes.iconButton, classes.moreBtn)}
                        disableRipple>
                        <MoreIcon style={{width:30, height:30}}/>
                    </IconButton>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={this.handleClosePopover}
                        className={classes.popoverBox}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem value="수정" className={classes.menuItem}>
                            수정
                        </MenuItem>
                    </Popover>

                </Box>
            </div>
        );
    }
}


export default withStyles(styles)(ClassLectureIntroductionComponent);