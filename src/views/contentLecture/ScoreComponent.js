import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {ReactComponent as ClipboardTextIcon} from "../../common/images/ClipboardTextIcon.svg";
import {Box, Button, InputAdornment, MenuItem, Popover, TextField, Typography} from "@material-ui/core";
import CalendarButtonComponent from "./CalendarButtonComponent";

const styles = theme => ({
    root:{
        marginBottom: 20
    },
    textStyle:{
        fontSize: '0.875rem'
    },
    buttonStyle:{
        padding:0,
        color:'#0097ff',
        fontSize:'0.875rem',
        textDecoration:'underline',
        marginLeft: 8,
        '&:hover':{
            background:'transparent',
            textDecoration:'underline',
        }
    },
    scoreBox:{
        width: '70%',
        boxSizing:'border-box',
        padding: '10px 15px',
        background:'#eee',
        border: '1px solid #c4c4c4',
        marginTop: 10,
        display:'flex',
        alignItems:'center',
        '& path':{
            stroke:'#1664f5'
        }
    },
    scoreText:{
        fontSize: '0.875rem',
        color:'#1664f5',
        marginLeft: 8
    },
    lineStyle:{
        width: 2,
        height: 14,
        background:'#1664f5',
        margin: '0 8px'
    },
    input:{
        width: 67,
        boxSizing: 'border-box',
        background: '#fff',
        '& .MuiInputBase-root':{
            padding: '0 10px 0 0'
        },
        '& .MuiOutlinedInput-input':{
            padding:'10px 0 10px 10px'
        },
        '& .MuiInputAdornment-positionEnd':{
            marginLeft:0
        },
        '& .MuiTypography-colorTextSecondary':{
            color:'#000'
        },
        '& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover  .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-notchedOutline':{
            border: '1px solid rgba(196,196,196,0.8)'
        }
    },
    popoverBox:{
        '& .MuiPaper-root':{
            display:'flex',
            alignItems:'center',
            borderRadius: 7,
            boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.25)',
            '& .MuiMenuItem-root':{
                paddingTop: 10,
                paddingBottom: 10,
                fontSize: '0.75rem',
                color:'#000'
            }
        }
    }
});

class ScoreComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scoreOpen : false,
            anchorEl: null,
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

    handleClickScore = () => {
        this.setState({ scoreOpen: !this.state.scoreOpen });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <div className={classes.root}>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Box display='flex' alignItems='center'>
                        <Typography className={classes.textStyle}>여기에 점수 항목을 추가하려면</Typography>
                        <Button className={classes.buttonStyle} onClick={this.handleClickScore} disableRipple>+ 점수 추가</Button>
                        <Typography className={classes.textStyle}>를 눌러주세요.</Typography>
                    </Box>
                    <CalendarButtonComponent/>
                </Box>

                {this.state.scoreOpen &&
                    <Box className={classes.scoreBox}>
                        <ClipboardTextIcon/>
                        <Typography className={classes.scoreText}>점수</Typography>
                        <Box className={classes.lineStyle} />
                        <TextField
                            variant="outlined"
                            placeholder=""
                            className={classes.input}
                            defaultValue='100'
                            InputProps={{
                                endAdornment: <InputAdornment position="end">점</InputAdornment>,
                            }}
                            aria-owns={open ? 'simple-popper' : undefined}
                            onClick={this.handleClickPopover}
                        />

                        <Popover
                            id="simple-popper"
                            open={open}
                            anchorEl={anchorEl}
                            onClose={this.handleClosePopover}
                            className={classes.popoverBox}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <MenuItem onClick={this.handleClosePopover}>
                                미채점
                            </MenuItem>
                        </Popover>
                    </Box>
                }
            </div>
        );
    }
}

export default withStyles(styles)(ScoreComponent);