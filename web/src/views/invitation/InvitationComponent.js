import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Box, Button, Typography} from '@material-ui/core';
import {ReactComponent as OntheliveLogo} from '../../common/images/OntheliveLogo.svg';
import RoomTestImg1 from '../../common/images/RoomTestImg1.png';

const styles = theme => ({
    root:{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxStyle:{
        width: 340,
        background: '#fff',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
        borderRadius: 10,
        marginTop: 18,
        '& img':{
            width: 340,
            height: 200,
            borderRadius: 10,
        },
    },
    logoStyle:{
        width: 165,
        height: 38
    },
    textBox:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '18px 14px 22px',
    },
    textStyle:{
        fontSize: '1.063rem',
        color: '#000',
        lineHeight: 1.3,
        textAlign: 'center',
        marginBottom: 16
    },
    spanStyle:{
        fontWeight: 800
    },
    buttonStyle:{
        width: 240,
        height: 48,
        background: '#0097ff',
        fontSize: '1rem',
        color: '#fff',
        borderRadius: 7,
        '&:hover':{
            background: '#0097ff',
        }
    }
});

class InvitationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box display='flex' flexDirection='column' alignItems='center'>
                    <OntheliveLogo className={classes.logoStyle} />
                    <Box className={classes.boxStyle}>
                        <img src={RoomTestImg1} alt='room image'/>
                        <Box className={classes.textBox}>
                            <Typography className={classes.textStyle}><span className={classes.spanStyle}>&#123;초대한 사람 모임에서 사용하는 이름&#125;</span> 님이<span className={classes.spanStyle}>&#123;모임명&#125;</span> 모임으로 초대합니다.</Typography>
                            <Button className={classes.buttonStyle} disableRipple>모임 초대장 보기</Button>
                        </Box>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(InvitationComponent);