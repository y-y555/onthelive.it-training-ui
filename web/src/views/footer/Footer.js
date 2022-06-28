import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {ReactComponent as LogoFooterImg} from "../../common/images/LogoFooterImg.svg";
import {Select, Typography, Box, FormControl, InputLabel, OutlinedInput, MenuItem, Link} from "@material-ui/core";

const styles = theme => ({
    root:{
        borderTop:'1px solid #c0c2c3',
    },
    wrap:{
        '@media all and (min-width: 1500px)': {
            width:1440,
        },
        width:1200,
        margin:'0 auto',
        padding:'50px 32px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        '& > div':{
            display: 'flex',
            alignItems: 'center',
        }
    },
    ftTerms:{
        listStyle:'none',
        marginBlock:0,
        display:'flex',
        marginLeft:40,
        '& li':{
            marginRight:20,
            position:'relative',
            '&:before':{
                content:'""',
                width:1,
                height:18,
                backgroundColor:'#a8a8a8',
                display:'block',
                position:'absolute',
                left:-10,
                top:0,
            },
            '&:first-child:before':{
                display:'none',
            },
            '& a':{
                fontSize:'0.875rem',
                fontWeight:600,
                color:'#787878',
                cursor:'pointer',
                '&:hover':{
                    textDecoration:'none',
                }
            }
        },
    },
    ftFormControl:{
        '& .MuiOutlinedInput-input':{
            padding:'9px 32px 9px 11px',
            fontSize: '0.875rem',
            color:'#303030',
            '&:focus, :focus-visible, :hover, &.Mui-focused':{
                outline:'none',
                backgroundColor: 'transparent',
                border:'0 none',
            }
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #bfbfbf'
        }
    },
    ftLangItem:{
        fontSize:'0.875rem',
        color:'#787878',
    },
    copyright:{
        fontSize: '0.875rem',
        color:'#787878',
        fontWeight: 600,
        marginLeft: 24,
    }
});
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: '',
            name: '한국어',
            labelWidth: 0,
        };
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.wrap}>
                    <Box>
                        <LogoFooterImg/>
                        <ul className={classes.ftTerms}>
                            <li><Link>이용약관</Link></li>
                            <li><Link>개인정보처리방침</Link></li>
                            <li><Link>고객센터</Link></li>
                        </ul>
                    </Box>
                    <Box>
                        <FormControl variant="outlined" className={classes.ftFormControl}>
                            <Select
                                value={this.state.lang}
                                onChange={this.handleChange}
                                displayEmpty
                            >
                                <MenuItem value="" className={classes.ftLangItem}>한국어</MenuItem>
                                <MenuItem value={10} className={classes.ftLangItem}>영어</MenuItem>
                            </Select>
                        </FormControl>
                        <Typography className={classes.copyright}>ITRAINNG© 2022</Typography>
                    </Box>
                </Box>
            </div>
        );
    }
}
export default withStyles(styles)(Footer);