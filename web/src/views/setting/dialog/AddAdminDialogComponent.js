import React, {Component} from 'react';
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Dialog,
    FormControlLabel,
    IconButton,
    InputBase,
    Typography
} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../../common/images/DialogCloseIcon.svg";
import {withStyles} from "@material-ui/core/styles";
import {ReactComponent as MagnifyingGlassIcon} from "../../../common/images/MagnifyingGlassIcon.svg";
import {ReactComponent as AsideUserIcon} from "../../../common/images/AsideUserIcon.svg";
import TestAvatar from "../../../common/images/TestAvatar.jpg";
import {ReactComponent as UnCheckedIcon} from "../../../common/images/UnCheckedIcon.svg";
import {ReactComponent as CheckedIcon} from "../../../common/images/CheckedIcon.svg";

const styles = theme => ({
    root:{

    },
    dialogBox:{
        "& .MuiPaper-root":{
            width:390,
            padding:24,
            boxSizing:'border-box',
            borderRadius:10,
            boxShadow:'0 2.5px 5px 0 rgba(0, 0, 0, 0.25)'
        },
        "& *": {
            fontFamily: 'NanumSquareRoundOTF' ,
        }
    },
    titleText:{
        fontSize:'1.25rem',
        color:'#000',
        fontWeight:600
    },
    iconButton:{
        padding:0,
        "&:hover":{
            background:'transparent'
        }
    },
    textStyle:{
        fontSize:'1rem',
        color:'#333'
    },
    marginTop:{
        marginTop:27
    },
    searchBox:{
        display:'flex',
        boxShadow:'none',
        border:'1px solid #C4C4C4',
        padding:'4px 9px',
        margin: '12px 0 21px',
        borderRadius:7,
        "& .MuiInputBase-root":{
            width:'100%',
        },
        '& input':{
            width:'100%',
            fontSize:'1rem',
        },
    },
    searchIconButton:{
        padding:6,
        backgroundColor:'#f8f8f8',
        "&:hover":{
            backgroundColor:'#f8f8f8',
        }
    },
    numberText:{
        fontSize:'0.813rem',
        marginLeft:4,
        color:'#a3a8af'
    },
    listBox:{
        maxHeight:280,
        marginTop:20,
        overflowY:'auto',
        "&::-webkit-scrollbar": {
            width: '15px',
        },
        "&::-webkit-scrollbar-thumb": {
            background: '#dbdbdb',
            borderRadius: '10px',
            backgroundClip: 'padding-box',
            border: '5px solid transparent'
        },
        "&::-webkit-scrollbar-track": {
            background: 'transparent',
            marginTop: 5,
        },
    },
    marginBottom:{
        marginBottom:15
    },
    avatar:{
        width:45,
        height:45
    },
    nameText:{
        marginLeft:7,
        fontSize:'1rem',
        color:'#333',
        fontWeight:600
    },
    checkedBox:{
        "& .MuiIconButton-root":{
            padding:0
        },
    },
    buttonStyle1:{
        width:'100%',
        height:48,
        borderRadius:8,
        background:'#0097ff',
        color:'#fff',
        fontSize:'1.125rem',
        marginTop:25,
        "&:hover":{
            background:'#0097ff'
        },
        "&.Mui-disabled":{
            background:'#c2c2c2',
            color:'#fff'
        }
    },
});

class AddAdminDialogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Dialog
                    open={this.props.addAdminDialogOpen}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Typography className={classes.titleText}>관리자 추가</Typography>
                        <IconButton className={classes.iconButton} onClick={this.props.handleCloseAddAdminDialog} disableRipple>
                            <DialogCloseIcon/>
                        </IconButton>
                    </Box>

                    <Box className={classes.marginTop}>
                        <Typography className={classes.textStyle}>아래 멤버에서 선택해주세요.</Typography>
                        <Box className={classes.searchBox}>
                            <InputBase placeholder="이름검색"/>
                            <IconButton className={classes.searchIconButton} aria-label="Search" disableRipple>
                                <MagnifyingGlassIcon/>
                            </IconButton>
                        </Box>
                    </Box>

                    <Box>
                        <Box display="flex" alignItems='center'><AsideUserIcon/> <span className={classes.numberText}>17명</span></Box>
                        <Box className={classes.listBox}>
                            <Box display="flex" justifyContent='space-between' alignItems='center' className={classes.marginBottom}>
                                <Box display="flex" alignItems='center'>
                                    <Avatar src={TestAvatar} alt="profile image" className={classes.avatar} />
                                    <Typography className={classes.nameText}>김민희</Typography>
                                </Box>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={<UnCheckedIcon />}
                                            checkedIcon={<CheckedIcon />}
                                            value="checkA"
                                        />
                                    }
                                    label=""
                                    className={classes.checkedBox}
                                />
                            </Box>

                            <Box display="flex" justifyContent='space-between' alignItems='center' className={classes.marginBottom}>
                                <Box display="flex" alignItems='center'>
                                    <Avatar src={TestAvatar} alt="profile image" className={classes.avatar} />
                                    <Typography className={classes.nameText}>김민희</Typography>
                                </Box>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={<UnCheckedIcon />}
                                            checkedIcon={<CheckedIcon />}
                                            value="checkA"
                                        />
                                    }
                                    label=""
                                    className={classes.checkedBox}
                                />
                            </Box>
                        </Box>

                        <Button className={classes.buttonStyle1} disableRipple>
                            선택 (1)
                        </Button>
                    </Box>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(AddAdminDialogComponent);