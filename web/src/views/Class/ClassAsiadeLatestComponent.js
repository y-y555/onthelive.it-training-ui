import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {ReactComponent as FileFillIcon} from "../../common/images/FileFillIcon.svg";
import {Box, Button, Typography} from "@material-ui/core";

const styles = theme => ({
    root:{
    },
    latestBox:{
        border:'1px solid #C4C4C4',
        borderRadius:7,
        boxShadow:'0 1px 1px 0 #BEBEBE',
    },
    latestTitle:{
        display:'flex',
        alignItems:'flex-end',
        justifyContent:'space-between',
        borderBottom:'1px solid #D3D7DB',
        padding:'10px 14px',
        '& h4':{
            fontSize: '1.125rem'
        },
        '& button':{
            color:'#A3A8AF',
            fontSize:'0.75rem',
            padding:0,
            '& span':{
                display: 'initial',
                textAlign: 'right',
            },
            '&:hover':{
                backgroundColor:'#fff',
            }
        },
    },
    latestList:{
        '& li': {
            padding:'12px 14px!important',
            borderTop: '1px solid #F8F8F8',
            color:'#4D5A69',
            fontSize:'0.75rem',
            display:'flex',
            alignItems:'center',
            '&:first-child': {
                borderTop: 0,
            },
            '& svg':{
                marginRight:5,
            }
        }
    }
});


class ClassAsiadeLatestComponent extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Box className={classes.latestBox}>
                    <Box className={classes.latestTitle}>
                        <Typography variant="h4">최근자료</Typography>
                        <Button className={classes.btnStyle}>더보기</Button>
                    </Box>
                    <ul className={classes.latestList}>
                        <li><FileFillIcon/> Figma.fig</li>
                        <li><FileFillIcon/> FreelanceFreelanceFreela</li>
                        <li><FileFillIcon/> Student Loans.doc</li>
                    </ul>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(ClassAsiadeLatestComponent);