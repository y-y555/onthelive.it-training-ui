import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, IconButton, Tab, Tabs} from "@material-ui/core";
import {ReactComponent as DownloadSimpleIcon} from "../../common/images/DownloadSimpleIcon.svg";
import {ReactComponent as FolderPlusFillIcon} from "../../common/images/FolderPlusFillIcon.svg";
import MemberCourseStatusManagementComponent from "./MemberCourseStatusManagementComponent";

const styles = theme => ({
    root:{
        backgroundColor:'#fff',
        border:'1px solid #bfbfbf',
        borderRadius:'7px 7px 0 0',
        padding:30,
        marginTop:50,
        width:790,
        margin:'0 auto -56px',
    },
    // flexCenter:{
    //     display:'flex',
    //     alignItems:'center',
    //     justifyContent:'center',
    // },

    tagBox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:7,
    },
    tag:{
        fontSize:'0.76rem',
        color:'#fff',
        fontWeight: 600,
        borderRadius:3,
        padding:'3px 6px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:6,
    },
    freeTxt:{
        fontSize:'0.875rem',
        color:'#1664f5',
        marginRight:12,
    },
    levelTxt:{
        display:'flex',
        alignItems:'center',
        fontSize:'0.875rem',
        fontWeight:600,
    },
    selectBadge:{
        fontSize:'0.75rem',
        marginLeft: 14,
        display:'flex',
        alignItems: 'center',
    },
    captionText:{
        fontSize:'0.75rem',
        fontWeight:600,
        paddingTop: 2,
        color:'#fff',
        width:30,
        height:16,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginLeft: 14,
    },
    captionLive:{
        backgroundColor:'#FB4A59',
        '& svg':{
            width: 5,
            height: 5
        }
    },
    captionVod:{
        backgroundColor:'#000',
        '& svg':{
            width: 9,
            height: 9
        }
    },
    captionGreen:{
        backgroundColor:'#00c880',
    },
    captionPrivate:{
        width: 60,
        backgroundColor:'transparent',
    },
    captionTextPrivate:{
        fontSize:'0.875rem',
        fontWeight:600,
        paddingTop: 2,
        color:'#0d0d0d'
    },
    captionEnd:{
        backgroundColor:'#1a5177'
    },
    btnStyle:{
        border:'1px solid #bfbfbf',
        padding:'2px 8px',
        marginLeft:20,
    },
    downloadBox:{
        border:'1px solid #bfbfbf',
        minWidth:33,
        height:28,
        padding:0,
        display:'flex',
        alignItems:'center',
        marginLeft:20,
        '& svg':{
            width:18,
            height:18,
            '& path':{
                stroke:'#000',
            }
        },
        '&:hover':{
            background:'transparent'
        }
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
            zIndex:1,
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
            margin:'0 15px',
            width:'70px!important',
            zIndex: 2,
        }
    },
});

class CourseClassManagementTableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

            checkBox:true,
            anchorEl: null,
            tableTd:[
                {
                    userName:'김온더',
                    className:'강의실명',
                    date:'2021.12.01.',
                },
                {
                    userName:'김온더',
                    className:'강의실명',
                    date:'2021.12.02.',
                },
                {
                    userName:'김온더',
                    className:'강의실명',
                    date:'2021.12.03.',
                },
                {
                    userName:'김온더',
                    className:'강의실명',
                    date:'2021.12.04.',
                },

            ],
            classTabs:0,
        };
    }
    handleChangeCheckBox= () => {
        this.setState({ checkBox: !this.state.checkBox });
    };

    clickMore = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    clickMoreClose = () => {
        this.setState({ anchorEl: null });
    };



    handleChangeTabs = (event, classTabs) => {
        this.setState({ classTabs });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl,  classTabs} = this.state;

        return (
            <div className={classes.root}>

                    <Tabs value={classTabs} onChange={this.handleChangeTabs} className={classes.tabStyle}>
                        <Tab label="멤버 (20)" disableRipple />
                        <Tab label="그룹 (3)" disableRipple />
                    </Tabs>

                <Box display='flex' alignItems='center' justifyContent='flex-end'>
                    <IconButton disableRipple>
                        <FolderPlusFillIcon/>
                    </IconButton>
                    <Button  disableRipple className={classes.btnStyle} >
                        + 새 그룹 만들기
                    </Button>
                <Button disableRipple className={classes.downloadBox}>
                    <DownloadSimpleIcon/>
                </Button>
                </Box>
                {classTabs === 0 &&

                <MemberCourseStatusManagementComponent
                    handleChangeCheckBox={this.handleChangeCheckBox}
                    checkBox={this.state.checkBox}
                    anchorEl={anchorEl}
                    clickMore={this.clickMore}
                    clickMoreClose={this.clickMoreClose}
                    tableTd={this.state.tableTd}
                />

                }
                {classTabs === 1 &&

                <MemberCourseStatusManagementComponent
                    handleChangeCheckBox={this.handleChangeCheckBox}
                    checkBox={this.state.checkBox}
                    anchorEl={anchorEl}
                    clickMore={this.clickMore}
                    clickMoreClose={this.clickMoreClose}
                    tableTd={this.state.tableTd}
                />
                }



            </div>
        );
    }
}

export default withStyles(styles)(CourseClassManagementTableComponent);

