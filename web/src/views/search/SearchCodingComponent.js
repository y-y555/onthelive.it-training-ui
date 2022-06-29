import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Typography} from "@material-ui/core";
import {ReactComponent as MagnifyingGlassMinus} from "../../common/images/MagnifyingGlassMinus.svg";

const styles = theme => ({
    root:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'calc(100vh - 323px)'
    },
    iconBox:{
        width:44,
        height:44,
        borderRadius:'50%',
        background:'#e9e9e9',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        fontSize:'1.063rem',
        color:'#a9adb4',
        margin:'14px 0 30px'
    },
    buttonStyle:{
        width:342,
        height:48,
        borderRadius: 8,
        background:'#0097ff',
        color:'#fff',
        fontSize:'1.125rem',
        fontWeight:600,
        "&:hover":{
            background:'#0097ff',
        }
    }
});


class SearchCodingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.iconBox}>
                    <MagnifyingGlassMinus/>
                </Box>

                <Typography className={classes.textStyle}>
                    검색 결과가 없습니다.
                </Typography>

                <Button className={classes.buttonStyle} disableRipple>
                    코딩 교육 모임 만들기
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(SearchCodingComponent);