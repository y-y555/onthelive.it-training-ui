import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Avatar, Box, Dialog, IconButton, Typography} from "@material-ui/core";
import {ReactComponent as DialogCloseIcon} from "../../common/images/DialogCloseIcon.svg";
import TestAvatar from "../../common/images/TestAvatar.jpg";
import {ReactComponent as AsideUsersThreeIcon} from "../../common/images/AsideUsersThreeIcon.svg";

const styles = theme => ({
    root:{

    },
    dialogBox:{
        "& .MuiPaper-root":{
            width:380,
            padding:'11px 12px 0 16px',
            boxSizing:'border-box',
            borderRadius:10,
            boxShadow:'0 2.5px 5px 0 rgba(0, 0, 0, 0.25)'
        },
        "& *": {
            fontFamily: 'NanumSquareRoundOTF' ,
        }
    },
    titleBox:{
        marginBottom:15
    },
    titleBoxIn:{
        "& svg":{
            width:27,
            height:27
        }
    },
    titleText:{
        fontSize:'1.063rem',
        color:'#000',
        fontWeight:600,
        marginLeft:7
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
    avatar:{
        width:40,
        height:40
    },
    nameText:{
        fontSize:'0.875rem',
        color:'#0d0d0d',
        fontWeight:600,
        marginLeft:10
    },
    iconButton:{
        padding: 0,
        '&:hover':{
            background: 'transparent'
        }
    }
});

class MemberProfileDialogComponent extends Component {
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
                    open={this.props.memberDialog}
                    className={classes.dialogBox}
                >
                    <Box display='flex' justifyContent='space-between' className={classes.titleBox} >
                        <Box display='flex' alignItems='center' className={classes.titleBoxIn}>
                            <AsideUsersThreeIcon/>
                            <Typography className={classes.titleText}>멤버: 17명 </Typography>
                        </Box>
                        <IconButton className={classes.iconButton} onClick={this.props.handleClose} disableRipple>
                            <DialogCloseIcon/>
                        </IconButton>
                    </Box>
                    <Box className={classes.boxStyle}>
                        {this.state.memberList.map((member, i) => (
                            <Box display='flex' alignItems='center' justifyContent='flex-start' mt={1} mb={1}>
                                <Avatar src={member.img} alt="profile image" className={classes.avater} />
                                <Typography className={classes.nameText}>{member.name}</Typography>
                            </Box>
                        ))}
                    </Box>

                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(MemberProfileDialogComponent);