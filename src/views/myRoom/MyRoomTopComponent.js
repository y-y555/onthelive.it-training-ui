import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, FormControl, InputBase, MenuItem, Select, Tab, Tabs, Typography} from "@material-ui/core";
import {ReactComponent as CaretDown} from "../../common/images/CaretDown.svg";
import {ReactComponent as BedgeNewIcon} from "../../common/images/BedgeNewIcon.svg";

const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:1440,
        },
        display:'flex',
        justifyContent:'space-between',
        alignItems:'flex-start',
        width:1200,
        padding:'16px 30px 0',
        margin:'0 auto',
        boxSizing:'border-box',
    },
    textStyle:{
        fontSize:'1.5rem'
    },
    lineStyle:{
        width: 95,
        height: 4,
        background:'#1664f5',
        marginTop: 18,
        borderRadius: 4,
    },
    buttonStyle:{
        padding: '4px 9px',
        background:'#fff',
        border:'1px solid #bfbfbf',
        color:'#303030',
        fontSize: '0.938rem',
        '&:hover':{
            background:'#fff'
        }
    },
    formControlBox:{
        marginTop: 3,
        marginLeft: 35,
        '& svg':{
            marginTop: -10
        }
    },
    menuText:{
        fontFamily: 'NanumSquareRoundOTF' ,
        fontSize:'1.125rem',
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
        fontSize:'1.5rem',
        color:'#000',
        '&:focus': {
            background:'transparent'
        },
        '&.MuiSelect-select':{
            paddingRight:5,
        }
    },
}))(InputBase);

class MyRoomTopComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '강의 관리',
        };
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        const { classes, classTab, handleChangeTabs } = this.props;

        return (
            <div className={classes.root}>
                <Box>
                    <Tabs value={classTab} onChange={handleChangeTabs} className={classes.trigger}>
                        <Tab label="내 강의실" disableRipple/>
                        <Tab label="강의 관리" disableRipple/>
                    </Tabs>
                    {/*<Box>*/}
                    {/*    <Typography className={classes.textStyle}>내 강의실</Typography>*/}
                    {/*    <Box className={classes.lineStyle}/>*/}
                    {/*</Box>*/}
                    {/*<FormControl className={classes.formControlBox}>*/}
                    {/*    <Select*/}
                    {/*        value={this.state.value}*/}
                    {/*        onChange={this.handleChange}*/}
                    {/*        input={<BootstrapInput name="type" id="type-select" />}*/}
                    {/*        IconComponent={() => <CaretDown/>}*/}
                    {/*    >*/}
                    {/*        <MenuItem value={"강의 관리"} className={classes.menuText}>강의 관리</MenuItem>*/}
                    {/*        <MenuItem value={"강의1"} className={classes.menuText}>강의1</MenuItem>*/}
                    {/*    </Select>*/}
                    {/*</FormControl>*/}

                </Box>
                <Button className={classes.buttonStyle} disableRipple>기업 서비스</Button>
            </div>
        );
    }
}

export default withStyles(styles)(MyRoomTopComponent);