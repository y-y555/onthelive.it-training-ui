import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, IconButton, InputBase, Select, Typography} from "@material-ui/core";
import {ReactComponent as OntheliveLogo} from "../../common/images/ItLogo.svg";
import {ReactComponent as SelectArrow} from "../../common/images/SelectArrow.svg";
import {Link, withRouter} from "react-router-dom";
import {ReactComponent as SearchIcon} from "../../common/images/SearchIcon.svg";

const styles = theme => ({
    root:{
        display:'flex',
        justifyContent:'center',
        background:'#fff',
        borderBottom:'1px solid #C0C2C3'
    },
    appBar:{
        '@media all and (min-width: 1500px)': {
            width:1440,
        },
        width:1200,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'24px 32px',
        boxSizing:'border-box'
    },
    topBarRight:{
        '& button':{
            marginLeft: '2.5rem'
        }
    },
    selectBox: {
        width: '100%',
        fontSize: '0.875rem',
        "& svg":{
            marginLeft:-25
        }
    },
    buttonStyle: {
        background: 'transparent',
        color:'#0d0d0d',
        fontWeight:'bold',
        fontSize:'1rem',
        padding:0,
        "&:hover":{
            background: 'transparent',
        }
    },
    buttonStyle2: {
        background: 'transparent',
        color:'#333',
        fontWeight:600,
        fontSize:'1.063rem',
        padding:0,
        margin:'0 20px',
        "&:hover":{
            background: 'transparent',
        }
    },
    btnOutlineStyle:{
        border: '1px solid #bfbfbf',
        fontSize:'0.938rem',
        color:'#303030',
        "&:hover":{
            background: 'transparent',
        }
    },
    searchIcon:{
        padding:7,
        background:'#f8f8f8',
        "&:hover":{
            background:'#f8f8f8',
        }
    },
    search: {
        width:365,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        background: '#fff',
        border:'2px solid #e1e1e1',
        padding:'3px 6px 3px 22px',
        borderRadius:50,
        "& .MuiInputBase-input::placeholder":{
            opacity:1,
            fontSize:'1.125rem',
            color:'#92979e'
        },
        "& .MuiInputBase-input":{
            padding:'6px 7px 4px'
        }
    },
});

const BootstrapInput = withStyles((theme) => ({
    root: {
        marginRight:35
    },
    input: {
        background: '#fff',
        border: '1px solid #bfbfbf',
        padding: '8px 10px',
        borderRadius: 4,
        fontSize: '0.875rem',
        '&:focus': {
            borderRadius: 4,
            background: '#fff',
        },
        "&.MuiSelect-select":{
            paddingRight:25
        }
    },
}))(InputBase);

class HomeTopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language:'한국어',
            anchorEl: null,
        };
    }

    handleLanguageSelect = e => {
        this.setState({language: e.target.value})
    }

    handleClickLogin = e => {
        this.props.history.push("/login");
    };

    render() {
        const { classes } = this.props;


        return (
            <div className={classes.root} >
                <Box className={classes.appBar}>
                    <Box display='flex' alignItems='center' >
                        <Link to="/">
                            <OntheliveLogo/>
                        </Link>
                        <Button className={classes.buttonStyle2} disableRipple>강의</Button>
                        <Box className={classes.search}>
                            <InputBase
                                placeholder='강의를 검색해보세요.'
                                className={classes.inputRoot}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <IconButton className={classes.searchIcon} disableRipple>
                                <SearchIcon />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box display='flex' alignItems='center' className={classes.topBarRight}>
                        {/*<Select*/}
                        {/*    native*/}
                        {/*    value={this.state.language}*/}
                        {/*    onChange={(e) => this.handleLanguageSelect(e)}*/}
                        {/*    className={classes.selectBox}*/}
                        {/*    input={<BootstrapInput/>}*/}
                        {/*    IconComponent={() => <SelectArrow />}*/}
                        {/*>*/}
                        {/*    <option value='Korean'>한국어</option>*/}
                        {/*    <option value='English'>영어</option>*/}
                        {/*</Select>*/}
                        <Button className={classes.buttonStyle} disableRipple onClick={this.handleClickLogin}>로그인</Button>
                        <Button className={classes.buttonStyle} disableRipple>회원가입</Button>
                        <Button className={classes.btnOutlineStyle} disableRipple>기업 서비스</Button>
                    </Box>
                </Box>

            </div>
        );
    }
}

export default withRouter(withStyles(styles)(HomeTopBar));