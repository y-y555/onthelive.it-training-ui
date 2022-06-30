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
    RadioGroup, Tab, Tabs,
    Typography
} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";
import {ReactComponent as UnCheckedIcon} from "../../common/images/UnCheckedIcon.svg";
import {ReactComponent as CheckedIcon} from "../../common/images/CheckedIcon.svg";
import {ReactComponent as UploadIcon} from "../../common/images/UploadIcon.svg";
import {ReactComponent as PasswordNumberCheckedIcon} from "../../common/images/PasswordNumberCheckedIcon.svg";
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
        },
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
        },
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
    },
    trigger:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin: '0 0 20px',
        '& .MuiTabs-flexContainer':{
            borderBottom: '3px solid #eeeeee',
            width: 600
        },
        '& button':{
            width:100,
            minHeight:40,
            position:'relative',
            opacity:1,
            fontSize:'0.938rem',
            '&:hover':{
                fontWeight: 600,
            }
        },
        '& button.Mui-selected':{
            width:100,
            minHeight:40,
            color:'#000',
            fontWeight:600,
            borderRadius:50,
            overflow:'inherit',
            boxSizing:'border-box'
        },
        '& .MuiTab-root':{
            minWidth: 195
        }
    },
    tabText:{
        fontSize: '0.813rem',
        fontWeight: 600,
        marginTop: 30
    },
    tabSubtext:{
        fontSize: '0.75rem'
    },
    bottomButton:{
        width: 400,
        height: 48,
        background:'#1890FF',
        color:'#fff',
        marginTop: 40,
        '&:hover':{
            background:'#1890FF'
        }
    }
});

const StyledTabs = withStyles(theme => ({
    root: {

    },
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height: 3,
        '& > span': {
            width: '70%',
            background:'#1664f5'
        },
    },
}))(props => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

class VirtualMachinesDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: "a",
            selectedValue2: "a",
            selectedValue3: "a",
            selectedValue4: "a",
            selectedValue5: "a",
            classTab: 0,
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

    handleChangeTabs = (event, classTab) => {
        this.setState({ classTab });
    };
    
    render() {
        const {classes, virtualMachinesDialogOpen, handleClose} = this.props;
        const {classTab} = this.state;

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

                    <Box>
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
                    </Box>
                    <Box>
                        <Typography className={classes.tabText}>[설정 방식별 가이드]</Typography>
                        <StyledTabs value={classTab} onChange={this.handleChangeTabs} className={classes.trigger}>
                            <Tab
                                label='자동 환경 설정 방식'
                                disableRipple
                            />
                            <Tab
                                label='수동 환경 설정 방식'
                                disableRipple
                            />
                            <Tab
                                label='내 라이브러리에서 선택'
                                disableRipple
                            />
                        </StyledTabs>
                        {classTab === 0 &&
                            <Typography className={classes.tabSubtext}>
                                ① 시스템에서 제공하는 기본 설정값으로 설치하는 방식입니다.<br/>
                                ② 자동 환경 설정하려는 가상머신을 선택하고 ‘선택 등록' 버튼을 눌러주세요.<br/>
                                ③ 선택 등록한 VM 과 기본 이미지가 실습 설정 화면에 나타납니다.<br/>
                            </Typography>
                        }
                        {classTab === 1 &&
                        <Typography className={classes.tabSubtext}>
                            ① 가상머신에 로그인하고 직접 프로그램을 설치하는 방식입니다.<br/>
                            ② 설치하려는 가상머신을 선택하고 ‘설정하기' 버튼을 눌러주세요.<br/>
                            ③ 로그인 후 가상머신과 원하는 프로그램을 설치해주세요.<br/>
                            ④ 가상머신 설정 및 관리 화면으로 돌아가서 추가 가상머신을 선택하여 설정하거나 ‘선택 등록' 버튼을 눌러주세요.<br/>
                            ⑤ 선택 등록한 VM 과 기본 이미지가 실습 설정 화면에 나타납니다.<br/>
                        </Typography>
                        }
                        {classTab === 2 &&
                        <Typography className={classes.tabSubtext}>
                            ① 이전 수업에서 사용했거나 미리 생성해놓은 가상머신으로 설정하는 방식입니다.<br/>
                            ② ‘내 라이브러리에서 선택' 버튼을 누르면 다음 화면에 생성된 가상머신 목록이 보입니다.<br/>
                            ③ 선택 등록한 VM 과 기본 이미지가 실습 설정 화면에 나타납니다.<br/>
                        </Typography>
                        }
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Button className={classes.bottomButton} disableRipple>선택 등록(0)</Button>
                    </Box>
                </Dialog>

            </div>
        );
    }
}

export default withStyles(style)(VirtualMachinesDialog);