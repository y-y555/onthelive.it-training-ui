import React, {Component} from 'react';
import RoomTestImg1 from "../../common/images/RoomTestImg1.png";
import RoomTestImg2 from "../../common/images/RoomTestImg2.png";
import {withStyles} from "@material-ui/core/styles";
import {Tab, Tabs, Typography} from "@material-ui/core";
import {ReactComponent as BedgeNewIcon} from "../../common/images/BedgeNewIcon.svg";


const styles = theme => ({
    root:{
        '@media all and (min-width: 1500px)': {
            width:730,
        },
        width: 620,
        padding: '10px 16px',
        boxSizing:'border-box',
        borderBottom:'1px solid rgba(211, 215, 219, 0.5)'
    },
    tabText:{
        fontSize:'0.938rem',
        color:'#1e2121'
    },
    tabSpanColor:{
        color:'#ff0000',
        fontWeight:'bold'
    },
    trigger:{
        width: '100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        '& .MuiTabs-flexContainer':{
            justifyContent:'space-between',
        },
        '& button':{
            '@media all and (min-width: 1500px)': {
                width:100,
            },
            minWidth:92,
            minHeight:67,
            position:'relative',
            opacity:1,
            backgroundColor:'#fff',
            boxSizing:'border-box',
            padding: 0,
        },
        '& button > span':{
            borderRadius:10,
            border: '1px solid #d9d9d9',
            boxSizing:'border-box',
            padding: '5px 10px',
            boxShadow:'0 2px 2px 0 rgba(0, 0, 0, 0.25)',
        },
        '& button.Mui-selected > span':{
            overflow:'inherit',
            border: '2px solid rgba(22, 100, 245, 0.8)',
            boxSizing:'border-box',
        },
        '& .MuiTabs-indicator':{
            display:'none',
            width:0,
        }
    },
});

class ClassHomeTypeTabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classTab: 0,
        };
    }

    handleChangeTabs = (event, classTab) => {
        this.setState({ classTab });
    };

    render() {
        const { classes } = this.props;
        const { classTab } = this.state;

        return (
            <div className={classes.root}>
                <Tabs value={classTab} onChange={this.handleChangeTabs} className={classes.trigger}>
                    <Tab
                        label={<Typography className={classes.tabText}>수강생<br/><span className={classes.tabSpanColor}>200명</span></Typography>}
                        disableRipple
                    />
                    <Tab
                        label={<Typography className={classes.tabText}>실습 강의<br/><span className={classes.tabSpanColor}>2개</span></Typography>}
                         disableRipple 
                    />
                    <Tab
                        label={<Typography className={classes.tabText}>VOD 강의<br/><span className={classes.tabSpanColor}>2개</span></Typography>}
                        disableRipple
                    />
                    <Tab
                        label={<Typography className={classes.tabText}>LIVE 강의<br/><span className={classes.tabSpanColor}>10개</span></Typography>}
                        disableRipple
                    />
                    <Tab
                        label={<Typography className={classes.tabText}>평가<br/><span className={classes.tabSpanColor}>2개</span></Typography>}
                        disableRipple
                    />
                    <Tab
                        label={<Typography className={classes.tabText}>과제<br/><span className={classes.tabSpanColor}>2개</span></Typography>}
                        disableRipple
                    />
                </Tabs>
            </div>
        );
    }
}

export default withStyles(styles)(ClassHomeTypeTabComponent);