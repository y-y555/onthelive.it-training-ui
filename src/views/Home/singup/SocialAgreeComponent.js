import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Box, Button, Checkbox, Typography} from "@material-ui/core";
import {ReactComponent as CheckCircleAgreeOnIcon} from "../../../common/images/CheckCircleAgreeOnIcon.svg";
import {ReactComponent as CheckCircleAgreeOffIcon} from "../../../common/images/CheckCircleAgreeOffIcon.svg";
import {ReactComponent as LogoNaverIcon} from "../../../common/images/LogoNaverIcon.svg";

const styles = theme => ({
    root:{
        width:'100%',
        height:'calc(100vh - 130px)',
        display:'inline-flex',
        justifyContent:'center',
        alignItems:'center'
    },
    boxLine:{
        width:540,
        display:'flex',
        flexDirection:'column',
        border:'1px solid #e5e6e8',
        padding:'50px 0 30px',
        boxSizing:'border-box',
        borderRadius:12,
        marginTop:45
    },
    titleText:{
        fontSize:'1.75rem',
        color:'#333',
        textAlign:'center',
        marginBottom:12,
    },
    subText:{
        textAlign: 'center',
        fontSize:'1rem',
        color:'#808080',
        display:'flex',
        alignItems:'center',
        justifyContent: 'center'
    },
    checkBoxMargin:{
        margin:'30px 0',
        background:'rgba(242, 245, 248, 0.5)',
        padding:'20px 80px'

    },
    buttonStyle:{
        background:'#0097ff',
        color:'#fff',
        fontSize:'1.125rem',
        padding:'15px 0',
        borderRadius:7,
        marginLeft:80,
        marginRight:80,
        "&:hover":{
            background:'#0097ff',
        },
        "&.Mui-disabled":{
            background:'#c2c2c2',
            color:'#fff'
        }
    },
    checkedListBoxIn:{
        "& .MuiCheckbox-colorSecondary:hover":{
            "&:hover":{
                background:'transparent'
            }
        },
        "& label":{
            fontSize:'0.875rem',
            color:'#333',
        }
    },
    allCheckedBox:{
        "& .MuiCheckbox-colorSecondary:hover":{
            "&:hover":{
                background:'transparent'
            }
        },
        "& label":{
            fontSize:'0.938rem',
            fontWeight:600,
            color:'#000',
        }
    },
    checkedViewButton:{
        fontSize:'0.875rem',
        color:'#9a9a9a',
        textDecoration:'underline',
        padding:0,
        "&:hover":{
            background:'transparent',
            textDecoration:'underline',
        }
    }
});

function CheckBox({name, value, tick, onCheck, type}) {
    return (
        <label>
            <Checkbox
                name={name}
                value={value}
                checked={tick || false}
                onChange={onCheck}
                checkedIcon={<CheckCircleAgreeOnIcon/>}
                icon={<CheckCircleAgreeOffIcon/>}
                disableRipple
            />
            {name === "select-all" ?
                null
                :
                type === "select" ?
                    <span>[??????] </span>
                    :
                    <span style={{color:'#ff0000'}}>[??????] </span>
            }

            {value}
        </label>
    );
}

function CheckBoxList ({options, isCheckedAll, onCheck, classes}) {
    const checkBoxOptions = (
        <div className="checkbox-list">
            {options.map((option, index) => {
                return (
                    <Box display='flex' alignItems='center' justifyContent='space-between' className={classes.checkedListBoxIn}>
                        <CheckBox key={index} name={option.name} value={option.value} tick={option.checked} type={option.type} onCheck={(e) => onCheck(option.value, e.target.checked)} />
                        <Button className={classes.checkedViewButton} disableRipple>??????</Button>
                    </Box>
                );
            })}
        </div>
    );

    return (
        <Box className="checkbox-list">
            <Box display='flex' alignItems='center' className={classes.allCheckedBox} >
                <CheckBox name="select-all" value="?????? ????????????" tick={isCheckedAll} onCheck={(e) => onCheck('all', e.target.checked)}/>
            </Box>
            {checkBoxOptions}
        </Box>
    );
}

class SocialAgreeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAllSelected: false,
            checkList: [
                {
                    name: "agree",
                    value: "????????? ????????????",
                    checked: false,
                    type: "basic"
                },
                {
                    name: "agree",
                    value: "???????????? ?????? ??? ????????????",
                    checked: false,
                    type: "basic"
                },
                {
                    name: "agree",
                    value: "?????????, ???????????? ?????? ?????? ??????",
                    checked: false,
                    type: "select"
                }
            ]
        };
    }

    onCheckBoxChange(checkName, isChecked) {
        let isAllChecked = (checkName === 'all' && isChecked);
        let isAllUnChecked = (checkName === 'all' && !isChecked);
        const checked = isChecked;

        const checkList = this.state.checkList.map((help, index) => {
            if(isAllChecked || help.value === checkName) {
                return Object.assign({}, help, {
                    checked,
                });
            } else if (isAllUnChecked) {
                return Object.assign({}, help, {
                    checked: false,
                });
            }

            return help;
        });

        let isAllSelected = (checkList.findIndex((item) => item.checked === false) === -1) || isAllChecked;

        this.setState({
            checkList,
            isAllSelected,
        });

    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box className={classes.boxLine}>
                    <Typography className={classes.titleText}>????????????</Typography>
                    <Typography className={classes.subText}>
                        <LogoNaverIcon/>&nbsp;<span style={{color:'#333'}}>?????????</span> ???????????? ???????????? ?????? ????????????.
                    </Typography>
                    <Typography className={classes.subText}>
                        ?????? ?????????????????? ????????? ???????????????.
                    </Typography>

                    <Box className={classes.checkBoxMargin}>
                        <CheckBoxList classes={this.props.classes} options={this.state.checkList} isCheckedAll={this.state.isAllSelected} onCheck={this.onCheckBoxChange.bind(this)} />
                    </Box>

                    <Button className={classes.buttonStyle} disableRipple>
                        ??????
                    </Button>

                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(SocialAgreeComponent);