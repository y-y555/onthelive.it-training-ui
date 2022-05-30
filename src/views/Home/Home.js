import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Typography} from "@material-ui/core";
import MainImage from '../../common/images/main_bg.png';

const styles = theme => ({
    root:{
    },
    mainBox:{
        backgroundImage: `url(${MainImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center center',
        width:'100%',
        height:'calc(100vh - 63px)',
        position:'relative'
    },
    titleBox:{
        display : 'flex',
        paddingTop:'12%',
        paddingLeft:'10%',
        paddingRight:'10%',
        justifyContent : 'space-between',
    },
    titleText:{
        fontSize:'3.563rem',
        fontWeight:700,
        color:'#fff',
        lineHeight:1.32
    },
    subText:{
        fontSize:'1.313rem',
        color:'#fff',
        marginTop:21
    },
});


class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.mainBox} >
                    <Box className={classes.titleBox}>
                        <Box>
                            <Typography className={classes.titleText} component={"p"}>
                                온택트시대,<br/>
                                안전하고 편리한<br/>
                                화상 서비스 플랫폼
                            </Typography>
                            <Typography className={classes.subText}>
                                쌍방향 화상회의와 관리형 교육이 가능한 탁월한 플랫폼
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(TopBar);