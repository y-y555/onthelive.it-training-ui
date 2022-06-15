import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Typography} from "@material-ui/core";

const styles = theme => ({
    root:{
        width:'100%',
        minHeight: 'calc(100vh - 59px)',
        background:'#fafafa',
        padding: 20,
        boxSizing:'border-box'
    },
    topText:{
        width: 70,
        fontSize: '1.25rem',
    },
    chip:{
        padding: '4px 10px',
        background: '#eee',
        borderRadius: 30,
        margin: '3px 6px',
        '&:hover':{
            background:'#eee'
        }
    }
});

class ContentLecturePreviewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chipList: [
                {name: 'Spring Security'},
                {name: '암호화'},
                {name: '윈도우 파일 시스템'},
                {name: '네트워크 프로토콜'},
                {name: 'SSL'},
                {name: 'IPSEC'},
                {name: '윈도우 및 리눅스 방화벽'},
            ]
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box display='flex' alignItems='flex-start'>
                    <Typography className={classes.topText}>태그</Typography>
                    <Box display='flex' alignItems='center' flexWrap='wrap'>
                        {this.state.chipList.map((chip, i) => (
                            <Button key={i} className={classes.chip} disableRipple>{chip.name}</Button>
                        ))}
                    </Box>
                </Box>

                <Box>

                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(ContentLecturePreviewComponent);