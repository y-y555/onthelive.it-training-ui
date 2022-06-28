import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Button, Typography } from '@material-ui/core';
import IntroductionDialogComponent from '../dialog/IntroductionDialogComponent';
import { getNoticeContents } from '../../common/Validation';
import { ClassMainPath } from '../../common/ClassMainPath';
import { withRouter } from '../../components/WithRouter';

const styles = _theme => ({
    root: {
        '@media all and (min-width: 1500px)': {
            width: 1440,
        },
        width: 1200,
        margin: '30px auto 20px',
        padding: '0 30px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    visualBox: {
        '@media all and (min-width: 1500px)': {
            width: 730,
        },
        width: 620,
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: '0 0 auto',
        overflow: 'hidden',
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
    },
    classTitle: {
        cursor: 'pointer',
    },
    titleBox: {
        '@media all and (min-width: 1500px)': {
            width: 235,
            marginLeft: 90,
        },
        width: 230,
        marginLeft: 30,
        '&>h3': {
            fontSize: '1.5rem',
            fontWeight: 600,
            marginBottom: 24,
        },
    },
    subTextBox: {
        fontSize: '1.063rem',
        color: '#000',
        width: '100%',
        textAlign: 'left',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        whiteSpace: 'pre-wrap',
    },
    buttonStyle: {
        minWidth: 20,
        padding: '0',
        '& span': {
            fontSize: '0.875rem',
            color: '#a3a8af',
            fontWeight: 400,
        },
        '&:hover': {
            background: 'transparent',
        },
    },
});

class StudentClassTitleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moreButton: false,
            dialogOpen: false,
        };
    }

    handleClickOpen = () => {
        this.setState({ dialogOpen: true });
    };

    handleClose = () => {
        this.setState({ dialogOpen: false });
    };

    handleClickTitle = () => {
        this.props.handleChange(ClassMainPath.todaySchedule);
        this.props.scrollMove(0);
    };

    render() {
        const { classes, selectedGroupDetail } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.visualBox}>
                    {/*<BackgroundImageIcon />*/}
                    <img src={selectedGroupDetail.image} />
                </Box>
                <Box className={classes.titleBox}>
                    <Typography
                        variant="h3"
                        className={classes.classTitle}
                        // onClick={this.handleClickTitle}
                    >
                        {selectedGroupDetail.group.name}
                    </Typography>
                    <Box>
                        <span id="text-box" className={classes.subTextBox}>
                            {getNoticeContents(selectedGroupDetail.group.comment)}
                        </span>

                        {selectedGroupDetail.group.comment.length > 0 && (
                            <Button className={classes.buttonStyle} onClick={this.handleClickOpen} disableRipple>
                                더보기
                            </Button>
                        )}
                    </Box>
                </Box>

                <IntroductionDialogComponent
                    dialogOpen={this.state.dialogOpen}
                    handleClose={this.handleClose}
                    selectedGroupDetail={selectedGroupDetail}
                />
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(StudentClassTitleComponent));
