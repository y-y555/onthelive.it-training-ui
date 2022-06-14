import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, IconButton, InputBase, Paper, Tab, Tabs} from "@material-ui/core";
import {ReactComponent as FolderPlusIcon} from "../../common/images/FolderPlusIcon.svg";
import FreeBoardComponent from "./FreeBoardComponent";
import SecretBoardComponent from "./SecretBoardComponent";
import WritingDialogComponent from "../dialog/WritingDialogComponent";
import TopicDialogComponent from "../dialog/TopicDialogComponent";


const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width:620,
        paddingBottom:70
    },
    tabStyle:{
        display: 'inline-flex',
        position: 'relative',
        '&:after':{
            content:'""',
            width: '100%',
            height:3,
            backgroundColor:'#eee',
            display:'block',
            position:'absolute',
            bottom:0,
            left:0,
            zIndex:-1,
        },
        '& button':{
            minWidth: 100,
            fontSize:'0.938rem',
            '&.Mui-selected':{
                fontWeight:700,
                color:'#000'
            },
        },
        '& .MuiTabs-indicator':{
            height:3,
            backgroundColor:'#1664f5',
        }
    },
    optionBox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
    },
    btnStyle:{
        border: '1px solid #0097ff',
        borderRadius:7,
        color:'#0097ff',
        padding:'7px 23px',
        fontWeight:600,
        '&:hover':{
            background: 'transparent',
        }
    },
});


class ClassCommunityComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: 0,
            writingDialogOpen:false,
            topicDialogOpen:false
        };
    }

    handleChangeTab = (event, tabs) => {
        this.setState({ tabs });
    };

    handleChangeWritingDialogOpen= () => {
        this.setState({ writingDialogOpen: true });
    };

    handleChangeTopicDialogOpen= () => {
        this.setState({ topicDialogOpen: true });
    };

    handleClose= () => {
        this.setState({
            writingDialogOpen: false,
            topicDialogOpen: false,

        });
    };


    render() {
        const { classes } = this.props;
        const { tabs} = this.state;

        return (
            <div className={classes.root}>
                <Tabs value={tabs} onChange={this.handleChangeTab} className={classes.tabStyle}>
                    <Tab label="자유 게시판" disableRipple/>
                    <Tab label="비밀 게시판" disableRipple/>
                </Tabs>
                <Box className={classes.optionBox}>
                    <Button className={classes.btnStyle} onClick={this.handleChangeWritingDialogOpen} disableRipple>글쓰기</Button>
                </Box>
                {tabs === 0 &&
                <FreeBoardComponent handleChangeNoticeBoard={this.props.handleChangeNoticeBoard} handleChangeTopicDialogOpen={this.handleChangeTopicDialogOpen}/>
                }
                {tabs === 1 &&
                <SecretBoardComponent handleChangeNoticeBoard={this.props.handleChangeNoticeBoard} handleChangeTopicDialogOpen={this.handleChangeTopicDialogOpen}/>
                }

                <WritingDialogComponent writingDialogOpen={this.state.writingDialogOpen} handleClose={this.handleClose}/>
                <TopicDialogComponent topicDialogOpen={this.state.topicDialogOpen} handleClose={this.handleClose}/>
            </div>
        );
    }
}

export default withStyles(styles)(ClassCommunityComponent);