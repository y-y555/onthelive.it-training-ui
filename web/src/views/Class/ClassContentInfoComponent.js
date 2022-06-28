import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {ReactComponent as AsideGlobalIcon} from "../../common/images/AsideGlobalIcon.svg";
import {ReactComponent as AsideUsersThreeIcon} from "../../common/images/AsideUsersThreeIcon.svg";
import {ReactComponent as AsideUserIcon} from "../../common/images/AsideUserIcon.svg";
import {ReactComponent as AsideSettingIcon} from "../../common/images/AsideSettingIcon.svg";
import {ReactComponent as AsideCalendarCheck} from "../../common/images/AsideCalendarCheck.svg";
import {ReactComponent as HandsClappingIcon} from "../../common/images/HandsClappingIcon.svg";
import {Button} from "@material-ui/core";


const styles = theme => ({
    root:{
        marginBottom: 80
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
            },
            '&:nth-child(3)':{
                '& svg': {
                    width: 20,
                    height: 20,
                    '& path': {
                        fill: '#a3a8af',
                    }
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
            <div className={classes.root}>
                <ul className={classes.listStyle}>
                    <li><AsideGlobalIcon/> <span>공개</span> </li>
                    <li><AsideUsersThreeIcon/> <span>수강생: 200명</span> </li>
                    <li><HandsClappingIcon/> <span>좋아요: 1,200</span> </li>
                    <li><AsideUserIcon/> <span>강사: 김파이</span> </li>
                    <li><AsideCalendarCheck/> <span>개설일: 2022. 5. 26</span> </li>
                    <li><Button className={classes.buttonStyle} disableRipple onClick={this.props.handleChangeSetting}><AsideSettingIcon/> <span>설정</span></Button></li>
                </ul>
            </div>
        );
    }
}

export default withStyles(styles)(ClassContentInfoComponent);