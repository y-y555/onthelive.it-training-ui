import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {Box, TextareaAutosize, Typography} from "@material-ui/core";

const style = theme => ({
    root:{
        [theme.breakpoints.up('xl')]: {
            width: '80%',
        },
        width:'100%',
        marginBottom: 40
    },
    textStyle:{
        fontSize: '0.875rem',
        color: '#0d0d0d',
        fontWeight: 600,
    },
    inputStyle: {
        width: '100%',
        padding: '7px 13px',
        borderRadius: 5,
        border: '1px solid #bec3da',
        background: '#fff',
        marginTop:7,
        boxSizing:'border-box',
        "&::placeholder": {
            color: '#a3a8af',
            fontWeight: 300
        },
        "&:focus": {
            outline: 'none',
        },
    },
    textareaStyle: {
        width: "100%",
        border: '1px solid #bec3da',
        padding: '7px 13px',
        borderRadius: 5,
        overflowY: 'scroll',
        overflowX: 'hidden',
        resize: 'none',
        marginTop:7,
        boxSizing:'border-box',
        "&::placeholder": {
            color: '#a3a8af',
            fontWeight: 300
        },
        "&:focus": {
            outline: 'none',
        },
        "&::-webkit-scrollbar": {
            width: '5px',
            marginRight:10,
        },
        "&::-webkit-scrollbar-thumb": {
            background: '#dbdbdb',
            borderRadius: '10px',
            backgroundClip: 'padding-box',
        },
        "&::-webkit-scrollbar-track": {
            background: 'transparent',
            marginTop: 10,
        },
    },
});

class Paragraph extends Component {
    render() {
        const { classes, title, titleExplanation } = this.props;
        return (
            <div className={classes.root}>
                <Box>
                    <Typography className={classes.textStyle}>제목 <span style={{color:'#ff0000'}}>*</span></Typography>
                    <input
                        name="title"
                        type="text"
                        id="title"
                        maxLength="1000"
                        placeholder="설문지 제목을 입력하세요 (최대 1,000자)"
                        className={clsx(classes.textStyle, classes.inputStyle)}
                        value={title}
                    />
                </Box>
                <Box mt={3}>
                    <Typography className={classes.textStyle}>설명</Typography>
                    <TextareaAutosize
                        rows={3}
                        rowsMax={3}
                        aria-label="maximum height"
                        placeholder="설문지 설명을 입력하세요 (최대 10,000자)"
                        value={titleExplanation}
                        className={clsx(classes.textStyle, classes.textareaStyle)}
                    />
                </Box>
            </div>
        );
    }
}

export default withStyles(style)(Paragraph);