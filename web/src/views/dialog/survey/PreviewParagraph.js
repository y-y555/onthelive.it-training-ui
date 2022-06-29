import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {Box, Typography} from "@material-ui/core";

const style = theme => ({
    root:{
        width:'100%',
        marginBottom: 70,
        boxSizing:'border-box'
    },
    textStyle:{
        fontSize: '1.125rem',
        color: '#a3a8af',
        fontWeight: 600,
    },
    typoStyle:{
        fontSize: '0.875rem',
        fontWeight: 400,
    },
});

class PreviewParagraph extends Component {
    render() {
        const { classes} = this.props;
        return (
            <div className={classes.root}>
                <Typography className={classes.textStyle}>좌측 설문지 제목이 노출됩니다</Typography>
                <Box style={{marginTop: 50}}>
                    <Typography className={clsx(classes.textStyle, classes.typoStyle)}>좌측 설문지 설명이 노출됩니다</Typography>
                </Box>
            </div>
        );
    }
}

export default withStyles(style)(PreviewParagraph);