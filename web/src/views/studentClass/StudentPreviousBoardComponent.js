import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Box, Typography} from '@material-ui/core';

const styles = theme => ({
    root: {
        '@media all and (min-width: 1500px)': {
            width: 730,
        },
        width: 620,
        padding: '10px 16px',
        boxSizing: 'border-box',
        marginBottom: 20,
    },
    boxStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media all and (min-width: 1500px)': {
            width: 100,
        },
        minWidth: 92,
        minHeight: 67,
        borderRadius: 10,
        border: '1px solid #d9d9d9',
        boxSizing: 'border-box',
        padding: '5px 10px',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.25)',
        margin: '0 5px',
    },
    tabText: {
        fontSize: '0.938rem',
        color: '#1e2121',
    },
    tabSpanColor: {
        display: 'block',
        textAlign: 'center',
        color: '#ff0000',
        fontWeight: 'bold',
    },
});

// let id = 0;
// function createData(name, count) {
//     id += 1;
//     return { id, name, count };
// }
// const boardList = [createData('과제', '3'), createData('제출 완료', '2'), createData('미제출', '1')];

class StudentPreviousBoardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Box display="flex" alignItems="center" justifyContent="center">
                    {this.props.boardList.map((list, i) => (
                        <Box className={classes.boxStyle}>
                            <Typography className={classes.tabText}>
                                {list.name}
                                <br />
                                <span className={classes.tabSpanColor}>{list.count}개</span>
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(StudentPreviousBoardComponent);
