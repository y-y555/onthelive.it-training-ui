import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {IconButton, InputBase, Paper} from "@material-ui/core";
import {ReactComponent as MagnifyingGlassIcon} from "../../common/images/MagnifyingGlassIcon.svg";


const styles = _theme => ({
    root:{
    },
    searchBox:{
        display:'flex',
        boxShadow:'none',
        border:'1px solid #C4C4C4',
        padding:'4px 9px',
        margin: '50px 0 20px',
        borderRadius:7,
        "& .MuiInputBase-root":{
            width:'100%',
        },
        '& input':{
            width:'98%',
            fontSize:'0.75rem',
        },
    },
    iconButton:{
        padding:8,
        backgroundColor:'#f8f8f8',
        "&:hover":{
            backgroundColor:'#f8f8f8',
        }
    }
});


class ClassContentSearchComponent extends Component {
    render() {
        const { classes, classTab, classSelectTag, noticeBoard, setting, memberRequest, memberPermissionSetting, addAdmin } = this.props;

        return (
            <div>
                <Paper className={classes.searchBox}>
                    <InputBase
                        placeholder={
                            classSelectTag !== false?
                                "댓글, 파일, 등록자 검색"
                                :
                                classTab === 4 ?
                                    noticeBoard === true ?
                                        "글, 댓글 검색"
                                        :
                                        "커뮤니티 검색"
                                    :
                                    (classTab === 5 || setting === true || memberRequest === true || memberPermissionSetting === true || addAdmin === true) ?
                                        "멤버 검색"
                                        :
                                        "모임 내 일정, 작성자, 댓글 검색"
                        }
                    />
                    <IconButton className={classes.iconButton} aria-label="Search" disableRipple>
                        <MagnifyingGlassIcon/>
                    </IconButton>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(ClassContentSearchComponent);