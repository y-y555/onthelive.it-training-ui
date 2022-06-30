import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    Button,
    Checkbox,
    Dialog,
    FormControlLabel,
    IconButton,
    Radio,
    RadioGroup,
    Typography
} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";
import {ReactComponent as UnCheckedIcon} from "../../common/images/UnCheckedIcon.svg";
import {ReactComponent as CheckedIcon} from "../../common/images/CheckedIcon.svg";
import {ReactComponent as UploadIcon} from "../../common/images/UploadIcon.svg";
import WindowsImg from "../../common/images/WindowsImg.png";
import WindowsImg2 from "../../common/images/WindowsImg2.png";
import LinuxImg from "../../common/images/LinuxImg.png";
import LinuxImg2 from "../../common/images/LinuxImg2.png";
import LinuxImg3 from "../../common/images/LinuxImg3.png";
import WindowsLogo from "../../common/images/WindowsLogo.png";
import LinuxLogo from "../../common/images/LinuxLogo.png";
import LinuxLogo2 from "../../common/images/LinuxLogo2.png";
import LinuxLogo3 from "../../common/images/LinuxLogo3.png";
import clsx from "clsx";

const style = theme => ({
    root:{
        '& *':{
            fontFamily: 'NanumSquareRoundOTF' ,
        }
    },
    dialogBox:{
        '& .MuiDialog-paper':{
            position:'relative',
            borderRadius:12,
            padding:'26px 22px',
            width: 936,
            minWidth: 936,
        },
        '& .MuiDialogContentText-root':{
            fontFamily: 'NanumSquareRoundOTF' ,
            fontSize:'1rem',
            color:'#000',
            letterSpacing: '-0.25px',
            marginBottom:14,
        },
        '& .MuiDialogContent-root':{
            padding:0,
        }
    },
    titleText:{
        fontSize:'1.25rem',
        color:'#000',
        fontWeight:600,
        fontFamily: 'NanumSquareRoundOTF' ,
    },
    closeBtn:{
        "&:hover":{
            background: 'transparent',
        }
    },
    textStyle:{
        fontSize: '0.875rem',
        color:'#404040'
    },
    boxStyle:{
        display:'flex',
        flexWrap:'wrap',
        '& .MuiButtonBase-root':{
            padding: 0
        },
        '& .MuiFormControlLabel-root':{
            margin: 0
        },
        '& .MuiIconButton-root':{
            marginRight: 8,
            '& .checked-icon2':{
                fill:'#1664f5'
            }
        },
        '& .MuiFormControlLabel-label':{
            fontSize:'0.75rem',
            color:'#0D0D0D',
            marginRight: 10
        }
    },
    boxIn:{
        marginTop: 20,
        marginRight: 30,
        '&:nth-child(3n)':{
            marginRight: 0
        }
    },
    boxIn2:{
        display:'flex',
        flexDirection: 'column',
        '&::before':{
            content:"''",
            width: 20,
            height: 35
        }
    },
    listTitleText:{
        fontSize:'1rem',
        color:'#333',
        marginLeft: 10,
        fontWeight: 600
    },
    settingButton:{
        padding:0,
        fontSize: '0.75rem',
        color:'#002670',
        textDecoration:'underline',
        '&:hover':{
            background:'transparent',
            textDecoration:'underline',
        }
    },
    imgBox:{
        marginTop: 5,
        width:292,
        height: 164,
        overflow:'hidden'
    },
    buttonStyle:{
        width:292,
        height: 164,
        border:'1px dashed #8C9196',
        '& span':{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'
        },
    },
    buttonIn:{
        border: '1px solid #BABFC3',
        borderRadius: 4,
        width: 177,
        height: 36,
        boxShadow:'0px 1px 0px rgba(0, 0, 0, 0.05)',
        color:'#000',
        marginTop: 17
    }
});

class VirtualMachinesDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: "a",
            selectedValue2: "a",
            selectedValue3: "a",
            selectedValue4: "a",
            selectedValue5: "a",
        }
    }

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
    };

    handleChange2 = event => {
        this.setState({ selectedValue2: event.target.value });
    };

    handleChange3 = event => {
        this.setState({ selectedValue3: event.target.value });
    };

    handleChange4 = event => {
        this.setState({ selectedValue4: event.target.value });
    };

    handleChange5 = event => {
        this.setState({ selectedValue5: event.target.value });
    };

    render() {
        const {classes, virtualMachinesDialogOpen, handleClose} = this.props;

        return (
            <div className={classes.root}>
                <Dialog
                    open={virtualMachinesDialogOpen}
                    // open={true}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.titleBox}>
                        <Typography className={classes.titleText}>사용자 가상머신 설정 및 관리</Typography>
                        <IconButton disableRipple onClick={handleClose} className={classes.closeBtn}>
                            <DialogCloseIcon/>
                        </IconButton>
                    </Box>
                    <Typography className={classes.textStyle}>
                        하단 등록 가이드를 확인하고 진행해주세요.<br/>
                        (복수 선택 가능)
                    </Typography>

                    <Box className={classes.boxStyle}>
                        <Box className={classes.boxIn}>
                            <Box display='flex' alignItems='center' >
                                <img src={WindowsLogo} alt={"logo"}/>
                                <Typography className={classes.listTitleText}>Windows 10</Typography>
                            </Box>

                            <Box display='flex' alignItems='center' className={classes.imgBox}>
                                <img src={WindowsImg} alt={"logo"}/>
                            </Box>

                            <Box display='flex' alignItems='center' style={{height: 21}} mt={1}>
                                <RadioGroup
                                    row
                                    aria-label="Radio"
                                    name="Radio"
                                    className={classes.group}
                                    value={this.state.selectedValue}
                                    onChange={this.handleChange}
                                >
                                    <FormControlLabel
                                        value="a"
                                        control={
                                            <Radio icon={<UnCheckedIcon/>} checkedIcon={<CheckedIcon/>} disableRipple/>
                                        }
                                        label="자동 환경 설정"
                                    />
                                    <FormControlLabel
                                        value="b"
                                        control={
                                            <Radio icon={<UnCheckedIcon/>} checkedIcon={<CheckedIcon/>} disableRipple/>
                                        }
                                        label="수동 환경 설정"
                                    />
                                </RadioGroup>
                                {this.state.selectedValue === "b" &&
                                <Button className={classes.settingButton} disableRipple>설정하기</Button>
                                }
                            </Box>
                        </Box>

                        <Box className={classes.boxIn}>
                            <Box display='flex' alignItems='center' >
                                <img src={WindowsLogo} alt={"logo"}/>
                                <Typography className={classes.listTitleText}>Windows Server 2019</Typography>
                            </Box>

                            <Box display='flex' alignItems='center' className={classes.imgBox}>
                                <img src={WindowsImg2} alt={"logo"}/>
                            </Box>

                            <Box display='flex' alignItems='center' style={{height: 21}} mt={1}>
                                <RadioGroup
                                    row
                                    aria-label="Radio"
                                    name="Radio"
                                    className={classes.group}
                                    value={this.state.selectedValue2}
                                    onChange={this.handleChange2}
                                >
                                    <FormControlLabel
                                        value="a"
                                        control={
                                            <Radio icon={<UnCheckedIcon/>} checkedIcon={<CheckedIcon/>} disableRipple/>
                                        }
                                        label="자동 환경 설정"
                                    />
                                    <FormControlLabel
                                        value="b"
                                        control={
                                            <Radio icon={<UnCheckedIcon/>} checkedIcon={<CheckedIcon/>} disableRipple/>
                                        }
                                        label="수동 환경 설정"
                                    />
                                </RadioGroup>
                                {this.state.selectedValue2 === "b" &&
                                <Button className={classes.settingButton} disableRipple>설정하기</Button>
                                }
                            </Box>
                        </Box>

                        <Box className={classes.boxIn}>
                            <Box display='flex' alignItems='center' >
                                <img src={LinuxLogo} alt={"logo"}/>
                                <Typography className={classes.listTitleText}>Linux CentOS</Typography>
                            </Box>

                            <Box display='flex' alignItems='center' className={classes.imgBox}>
                                <img src={LinuxImg} alt={"logo"}/>
                            </Box>

                            <Box display='flex' alignItems='center' style={{height: 21}} mt={1}>
                                <RadioGroup
                                    row
                                    aria-label="Radio"
                                    name="Radio"
                                    className={classes.group}
                                    value={this.state.selectedValue3}
                                    onChange={this.handleChange3}
                                >
                                    <FormControlLabel
                                        value="a"
                                        control={
                                            <Radio icon={<UnCheckedIcon/>} checkedIcon={<CheckedIcon/>} disableRipple/>
                                        }
                                        label="자동 환경 설정"
                                    />
                                    <FormControlLabel
                                        value="b"
                                        control={
                                            <Radio icon={<UnCheckedIcon/>} checkedIcon={<CheckedIcon/>} disableRipple/>
                                        }
                                        label="수동 환경 설정"
                                    />
                                </RadioGroup>
                                {this.state.selectedValue3 === "b" &&
                                <Button className={classes.settingButton} disableRipple>설정하기</Button>
                                }
                            </Box>
                        </Box>

                        <Box className={classes.boxIn}>
                            <Box display='flex' alignItems='center' >
                                <img src={LinuxLogo2} alt={"logo"}/>
                                <Typography className={classes.listTitleText}>Windows 10</Typography>
                            </Box>

                            <Box display='flex' alignItems='center' className={classes.imgBox}>
                                <img src={LinuxImg2} alt={"logo"}/>
                            </Box>

                            <Box display='flex' alignItems='center' style={{height: 21}} mt={1}>
                                <RadioGroup
                                    row
                                    aria-label="Radio"
                                    name="Radio"
                                    className={classes.group}
                                    value={this.state.selectedValue4}
                                    onChange={this.handleChange4}
                                >
                                    <FormControlLabel
                                        value="a"
                                        control={
                                            <Radio icon={<UnCheckedIcon/>} checkedIcon={<CheckedIcon/>} disableRipple/>
                                        }
                                        label="자동 환경 설정"
                                    />
                                    <FormControlLabel
                                        value="b"
                                        control={
                                            <Radio icon={<UnCheckedIcon/>} checkedIcon={<CheckedIcon/>} disableRipple/>
                                        }
                                        label="수동 환경 설정"
                                    />
                                </RadioGroup>
                                {this.state.selectedValue4 === "b" &&
                                <Button className={classes.settingButton} disableRipple>설정하기</Button>
                                }
                            </Box>
                        </Box>

                        <Box className={classes.boxIn}>
                            <Box display='flex' alignItems='center' >
                                <img src={LinuxLogo3} alt={"logo"}/>
                                <Typography className={classes.listTitleText}>Windows 10</Typography>
                            </Box>

                            <Box display='flex' alignItems='center' className={classes.imgBox}>
                                <img src={LinuxImg3} alt={"logo"}/>
                            </Box>

                            <Box display='flex' alignItems='center' style={{height: 21}} mt={1}>
                                <RadioGroup
                                    row
                                    aria-label="Radio"
                                    name="Radio"
                                    className={classes.group}
                                    value={this.state.selectedValue5}
                                    onChange={this.handleChange5}
                                >
                                    <FormControlLabel
                                        value="a"
                                        control={
                                            <Radio icon={<UnCheckedIcon/>} checkedIcon={<CheckedIcon/>} disableRipple/>
                                        }
                                        label="자동 환경 설정"
                                    />
                                    <FormControlLabel
                                        value="b"
                                        control={
                                            <Radio icon={<UnCheckedIcon/>} checkedIcon={<CheckedIcon/>} disableRipple/>
                                        }
                                        label="수동 환경 설정"
                                    />
                                </RadioGroup>
                                {this.state.selectedValue5 === "b" &&
                                <Button className={classes.settingButton} disableRipple>설정하기</Button>
                                }
                            </Box>
                        </Box>
                        <Box className={clsx(classes.boxIn, classes.boxIn2)}>
                            <Button display='flex' alignItems='center' className={classes.buttonStyle} disableRipple>
                                <UploadIcon/>
                                <span className={classes.buttonIn}>내 라이브러리에서 선택</span>
                            </Button>

                        </Box>
                    </Box>
                </Dialog>

            </div>
        );
    }
}

export default withStyles(style)(VirtualMachinesDialog);