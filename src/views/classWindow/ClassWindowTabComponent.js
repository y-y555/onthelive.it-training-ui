import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Tab, Tabs} from "@material-ui/core";

const styles = theme => ({
    root:{
        width: 690,
        margin: '0 auto'
    },
    trigger:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin: '30px 0 30px',
        '& .MuiTabs-flexContainer':{
            borderBottom: '3px solid #eeeeee',
            // width: 330,
            justifyContent:'center'
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
    },
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
            width: '100%',
            background:'#1664f5'
        },
    },
}))(props => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

class ClassWindowTabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes, classTab, handleChangeTabs } = this.props;

        return (
            <div className={classes.root}>
                <StyledTabs value={classTab} onChange={handleChangeTabs} className={classes.trigger}>
                    <Tab
                        label='강의'
                        disableRipple
                    />
                    <Tab
                        label='학습현황'
                        disableRipple
                    />
                    <Tab
                        label='수강생별 보기'
                        disableRipple
                    />
                </StyledTabs>
            </div>
        );
    }
}

export default withStyles(styles)(ClassWindowTabComponent);