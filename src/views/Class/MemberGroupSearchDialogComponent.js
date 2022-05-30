import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {
    Box,
    Dialog,
    IconButton,
    Typography,
    InputBase, Button, Avatar,
    Checkbox
} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";
import {ReactComponent as MagnifyingGlassIcon} from "../../common/images/MagnifyingGlassIcon.svg";
import {ReactComponent as AsideUserIcon} from "../../common/images/AsideUserIcon.svg";
import TestAvatar from "../../common/images/TestAvatar.jpg";

const styles = theme => ({
    root:{

    },
    dialogBox:{
        "& .MuiPaper-root":{
            width:400,
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
    searchBox:{
        display:'flex',
        boxShadow:'none',
        border:'1px solid #C4C4C4',
        padding:'4px 9px',
        margin: '10px 0 20px',
        borderRadius:7,
        "& .MuiInputBase-root":{
            width:'100%',
        },
        '& input':{
            width:'98%',
            // fontSize:'1rem',
        },
    },
    searchIconButton:{
        padding:8,
        backgroundColor:'#f8f8f8',
        "&:hover":{
            backgroundColor:'#f8f8f8',
        }
    },
    boxStyle:{
        height:250,
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
    titleBoxIn:{
        display: 'flex',
        alignItems:'center',
        marginBottom:10,
        "& svg":{
            width:20,
            height:20,
            marginRight:2,
        },
        '& p':{
            color:'#a3a8af',
            fontSize:'0.813rem',
        }
    },
    avatar:{
        width:45,
        height:45
    },
    nameText:{
        color:'#333',
        fontWeight:600,
        marginLeft:10
    },
    checkedBox:{
        '& svg':{
            width:18,
            height:18,
            '& path':{
                color:'#a3a8af'
            },
        },
        '&:hover, .Mui-checked:hover': {
            background: 'transparent!important',
        },
        '&.Mui-checked':{
            '& svg path':{
                color:'#0097ff',
            }
        }
    },
    buttonStyle:{
        marginTop:26,
        background:'#0097ff',
        color:'#fff',
        fontSize:'1.125rem',
        padding:'12px 0',
        borderRadius:7,
        "&:hover":{
            background:'#0097ff',
        },
        "&.Mui-disabled":{
            background:'#c2c2c2',
            color:'#fff'
        }
    },
});

class MemberGroupSearchDialogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberList: [
                {img:TestAvatar, name:"김민희"},
                {img:"", name:"박은미"},
                {img:"", name:"김준석"},
                {img:TestAvatar, name:"안은찬"},
                {img:"", name:"한선아"},
                {img:"", name:"김민희"},
                {img:"", name:"박은미"},
                {img:"", name:"김준석"},
                {img:"", name:"안은찬"},
                {img:"", name:"한선아"},

            ],
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Dialog
                    open={this.props.memberGroupSearch}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Typography className={classes.titleText}>멤버</Typography>
                        <IconButton className={classes.iconButton} onClick={this.props.handleClose} disableRipple>
                            <DialogCloseIcon/>
                        </IconButton>
                    </Box>

                    <Typography>아래 멤버에서 선택해주세요.</Typography>
                    <Box className={classes.searchBox}>
                        <InputBase placeholder="이름검색"/>
                        <IconButton className={classes.searchIconButton} aria-label="Search" disableRipple>
                            <MagnifyingGlassIcon/>
                        </IconButton>
                    </Box>

                    <Box display='flex' alignItems='center' className={classes.titleBoxIn}>
                        <AsideUserIcon/>
                        <Typography>17명 </Typography>
                    </Box>
                    <Box className={classes.boxStyle}>
                        {this.state.memberList.map((member, i) => (
                            <Box display='flex' alignItems='center' justifyContent='space-between' mt={1} mb={2}>
                                <Box display='flex' alignItems='center'>
                                    <Avatar src={member.img} alt="profile image" className={classes.avater} />
                                    <Typography className={classes.nameText}>{member.name}</Typography>
                                </Box>
                                <Checkbox className={classes.checkedBox} disableRipple />
                            </Box>
                        ))}
                    </Box>

                    <Button className={classes.buttonStyle} disableRipple>
                        선택
                    </Button>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(MemberGroupSearchDialogComponent);