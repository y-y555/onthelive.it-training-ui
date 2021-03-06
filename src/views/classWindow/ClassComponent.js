import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import ClassWindowVideoContents from "./ClassWindowVideoContents";
import ClassWindowMultipleSingle from "./ClassWindowMultipleSingle";
import ClassWindowMultipleSingle2 from "./ClassWindowMultipleSingle2";
import ClassWindowMultipleSingle3 from "./ClassWindowMultipleSingle3";
import ClassWindowMultipleSingle4 from "./ClassWindowMultipleSingle4";
import ClassWindowMultipleSingle5 from "./ClassWindowMultipleSingle5";
import ClassWindowMultipleSingle6 from "./ClassWindowMultipleSingle6";
import ClassWindowMultipleSingle7 from "./ClassWindowMultipleSingle7";
import ClassWindowMultipleSingle8 from "./ClassWindowMultipleSingle8";
import ClassWindowMultipleSingle9 from "./ClassWindowMultipleSingle9";
import ClassWindowMultipleChoice from "./ClassWindowMultipleChoice";
import ClassWindowImgContents from "./ClassWindowImgContents";
import ClassWindowQuizContents from "./ClassWindowQuizContents";
import clsx from "clsx";
import ConsoleComponent from "./ConsoleComponent";

const styles = theme => ({
    root:{
        width: '100%'
    },
    leftBox:{
        width:'50%',
        boxSizing:'border-box',
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        padding: '0 30px 0 15px',
        borderRight:'1px solid #dbdbdb',
        overflowY:'auto',
        overflowX:'hidden',
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
    rightBox:{
        padding: '0 15px 0 30px',
        borderRight: 0
    },
});

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {classes, typeButton1, previewPc, typeButton2, image1} = this.props;

        return (
            <div className={classes.root}>
                {typeButton1 ?
                    previewPc ?
                        <Box display='flex' flexDirection='column' alignItems='center'>
                            <ClassWindowVideoContents typeButton2={typeButton2}/>
                            <ConsoleComponent typeButton2={typeButton2} image1={image1}/>
                            <ClassWindowMultipleSingle typeButton2={typeButton2}/>
                            <ClassWindowMultipleChoice typeButton2={typeButton2}/>
                            <ClassWindowQuizContents typeButton2={typeButton2}/>
                            <ClassWindowImgContents typeButton2={typeButton2}/>
                        </Box>
                        :
                        null
                    :
                    previewPc ?
                        <Box display='flex' justifyContent='space-between'>
                            <Box className={classes.leftBox} style={{height: 'calc(100vh - 59px - 111px)'}}>
                                <ClassWindowVideoContents typeButton2={typeButton2}/>
                                <ClassWindowImgContents typeButton2={typeButton2}/>
                                {/*<ClassWindowQuizContents typeButton2={typeButton2}/>*/}
                                <ClassWindowMultipleSingle typeButton2={typeButton2}/>
                                <ClassWindowMultipleSingle2 typeButton2={typeButton2}/>
                                <ClassWindowMultipleSingle3 typeButton2={typeButton2}/>
                                <ClassWindowMultipleSingle4 typeButton2={typeButton2}/>
                                <ClassWindowMultipleSingle5 typeButton2={typeButton2}/>
                                <ClassWindowMultipleSingle6 typeButton2={typeButton2}/>
                                <ClassWindowMultipleSingle7 typeButton2={typeButton2}/>
                                <ClassWindowMultipleSingle8 typeButton2={typeButton2}/>
                                <ClassWindowMultipleSingle9 typeButton2={typeButton2}/>
                            </Box>
                            <Box className={clsx(classes.leftBox, classes.rightBox)}
                                 style={{height: 'calc(100vh - 59px - 111px)'}}>
                                <ConsoleComponent typeButton2={typeButton2} image1={image1} />
                            </Box>
                        </Box>
                        :
                        null
                }
            </div>
        );
    }
}

export default withStyles(styles)(ClassComponent);