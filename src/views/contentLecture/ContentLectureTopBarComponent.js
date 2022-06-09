import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, FormControl, IconButton, InputBase, MenuItem, Select, Typography} from "@material-ui/core";
import {ReactComponent as ArrowCounterClockwise} from "../../common/images/ArrowCounterClockwise.svg";
import {ReactComponent as Desktop} from "../../common/images/Desktop.svg";
import {ReactComponent as Eye} from "../../common/images/Eye.svg";
import {ReactComponent as Info} from "../../common/images/Info.svg";
import clsx from "clsx";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";

const styles = theme => ({
    root:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottom:'1px solid #c0c2c3',
        padding:'13px 12px',
    },
    lineStyle:{
        width: 1,
        height: 24,
        background: '#a3a8af',
        margin: '0 10px',
    },
    textStyle:{
        fontSize: '0.875rem',
        fontWeight: 600,
        color:'rgba(0, 0, 0, 0.5)'
    },
    iconButton:{
        padding: 0,
        margin: '0 10px',
        '&:hover':{
            background:'transparent'
        }
    },
    buttonStyle:{
        width: 126,
        height: 30,
        boxSizing:'border-box',
        background:'#fff',
        border:'1px solid #c4c4c4',
        borderRadius: 2,
        fontSize:'0.938rem',
        color:'#1e2121',
        margin: '0 10px',
        '&:hover':{
            background:'#fff'
        }
    },
    saveButton:{
        background:'#c7c9cc',
        border:'1px solid #c7c9cc',
        color:'#fff',
        '&:hover':{
            background:'#c7c9cc'
        }
    },
    menuText:{
        fontFamily: 'NanumSquareRoundOTF' ,
        fontSize:'0.75rem',
        color:'#0d0d0d',
        "&:hover":{
            background:'#d3d7db'
        }
    },
});

const BootstrapInput = withStyles(theme => ({
    root: {
    },
    input: {
        borderRadius: 0,
        position: 'relative',
        backgroundColor: 'transparent',
        border: '0',
        fontSize:'0.75rem',
        fontWeight:600,
        color:'#000',
        '&:focus': {
            background:'transparent'
        },
        '&.MuiSelect-select':{
            paddingRight:5,
        }
    },
}))(InputBase);

const BootstrapInputIcon = withStyles(theme => ({
    root: {
        marginLeft: 10,
    },
    input: {
        borderRadius: 0,
        position: 'relative',
        backgroundColor: 'transparent',
        border: '0',
        '&:focus': {
            background:'transparent'
        },
        '&.MuiSelect-select':{
            paddingRight:5,
            paddingBottom: 0
        }
    },
}))(InputBase);

class ContentLectureTopBarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '웹 해킹 보안 입문',
            iconValue: 'PC',
        };
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    handleChangeIcon = event => {
        this.setState({ iconValue: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box display='flex' alignItems='center'>
                    <Typography className={classes.textStyle}>강사 강의실</Typography>
                    <Box className={classes.lineStyle}/>
                    <Box display='flex' alignItems='center'>
                        <Info style={{marginRight: 5}}/>
                        <FormControl>
                            <Select
                                value={this.state.value}
                                onChange={this.handleChange}
                                input={<BootstrapInput name="type" id="type-select" />}
                                IconComponent={() => <ArrowDownIcon/>}
                            >
                                <MenuItem value={"웹 해킹 보안 입문"} className={classes.menuText}>웹 해킹 보안 입문</MenuItem>
                                <MenuItem value={"웹 해킹 보안 입문2"} className={classes.menuText}>웹 해킹 보안 입문2</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                </Box>
                <Box display='flex' alignItems='center'>
                    <IconButton className={classes.iconButton} disableRipple>
                        <ArrowCounterClockwise/>
                    </IconButton>
                    <IconButton className={classes.iconButton} disableRipple>
                        <ArrowCounterClockwise style={{transform: 'scaleX(-1)'}}/>
                    </IconButton>

                    <Box className={classes.lineStyle}/>

                    <FormControl>
                        <Select
                            value={this.state.iconValue}
                            onChange={this.handleChangeIcon}
                            input={<BootstrapInputIcon name="type" id="type-select" />}
                            IconComponent={() => <ArrowDownIcon/>}
                        >
                            <MenuItem value={"PC"} className={classes.menuText}><Desktop/></MenuItem>
                            <MenuItem value={"PC2"} className={classes.menuText}><Eye/></MenuItem>
                        </Select>
                    </FormControl>

                    <IconButton className={classes.iconButton} disableRipple>
                        <Eye/>
                    </IconButton>

                    <Button className={clsx(classes.buttonStyle, classes.saveButton)} disableRipple>
                        저장
                    </Button>

                    <Box className={classes.lineStyle}/>

                    <Button className={classes.buttonStyle} disableRipple>
                        나가기
                    </Button>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(ContentLectureTopBarComponent);