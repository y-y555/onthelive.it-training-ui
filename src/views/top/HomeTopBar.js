import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, InputBase, Select, Typography} from "@material-ui/core";
import {ReactComponent as OntheliveLogo} from "../../common/images/OntheliveLogo.svg";
import {ReactComponent as SelectArrow} from "../../common/images/SelectArrow.svg";
import {Link, withRouter} from "react-router-dom";

const styles = theme => ({
    root:{
        display:'flex',
        justifyContent:'center',
        background:'#f5f5f5',
    },
    appBar:{
        '@media all and (min-width: 1500px)': {
            width:1440,
        },
        width:1200,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'13px 40px',
        boxSizing:'border-box'
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
    }
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
                    <Link to="/">
                        <OntheliveLogo/>
                    </Link>
                    <Box display='flex' alignItems='center'>
                        <Select
                            native
                            value={this.state.language}
                            onChange={(e) => this.handleLanguageSelect(e)}
                            className={classes.selectBox}
                            input={<BootstrapInput/>}
                            IconComponent={() => <SelectArrow />}
                        >
                            <option value='Korean'>한국어</option>
                            <option value='English'>영어</option>
                        </Select>
                        <Button className={classes.buttonStyle} disableRipple onClick={this.handleClickLogin}>로그인</Button>
                    </Box>
                </Box>

            </div>
        );
    }
}

export default withRouter(withStyles(styles)(HomeTopBar));