import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {ReactComponent as AsideGlobalIcon} from "../../common/images/AsideGlobalIcon.svg";
import {ReactComponent as AsideUsersThreeIcon} from "../../common/images/AsideUsersThreeIcon.svg";
import {ReactComponent as AsideUserIcon} from "../../common/images/AsideUserIcon.svg";
import {ReactComponent as AsideSettingIcon} from "../../common/images/AsideSettingIcon.svg";
import {Button} from "@material-ui/core";


const styles = theme => ({
    root:{
    },
    listStyle:{
        '& li':{
            display:'flex',
            alignItems:'center',
            marginBottom:'7px!important',
            '& svg':{
                marginRight:5,
            },
            "& button":{
                display:'flex',
                alignItems:'center',
                marginBottom:'7px!important',
                "& span":{
                    justifyContent:'flex-start'
                }
            }
        }
    },
    buttonStyle:{
        padding:0,
        "&:hover":{
            background:'transparent'
        }
    }
});

class ClassContentInfoComponent extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <ul className={classes.listStyle}>
                    <li><AsideGlobalIcon/> <span>공개</span> </li>
                    <li><AsideUsersThreeIcon/> <span>맴버: 200명</span> </li>
                    <li><AsideUserIcon/> <span>주최자: 김온더</span> </li>
                    <li><Button className={classes.buttonStyle} disableRipple onClick={this.props.handleChangeSetting}><AsideSettingIcon/> <span>설정</span></Button></li>
                </ul>
            </div>
        );
    }
}

export default withStyles(styles)(ClassContentInfoComponent);