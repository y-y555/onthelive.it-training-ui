import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import ClassWindowVideoContents from "./ClassWindowVideoContents";
import ConsoleComponent from "./ConsoleComponent";
import ClassWindowMultipleSingle from "./ClassWindowMultipleSingle";
import ClassWindowMultipleChoice from "./ClassWindowMultipleChoice";
import ClassWindowQuizContents from "./ClassWindowQuizContents";
import ClassWindowImgContents from "./ClassWindowImgContents";
import clsx from "clsx";
import {VodSource} from "../../common/TestSources";

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

class ViewStudentsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderVideos = () => {
        const {typeButton2} = this.props;
        return Object.values(VodSource).map(source => {
            return <ClassWindowVideoContents typeButton2={typeButton2} videoSource={source} />;
        })
    }

    render() {
        const { classes, typeButton1, previewPc, typeButton2, image1, classTab, students} = this.props;
        const VideoContents = this.renderVideos();

        return (
            <div className={classes.root}>
                {typeButton1 ?
                    previewPc ?
                        <Box display='flex' flexDirection='column' alignItems='center'>
                            {/*<ClassWindowVideoContents typeButton2={typeButton2}/>*/}
                            {VideoContents}
                            {/*<ConsoleComponent typeButton2={typeButton2} image1={image1}/>*/}
                            <ClassWindowMultipleSingle
                                typeButton2={typeButton2}
                                classTab={classTab}
                                students={students}
                            />
                            <ClassWindowMultipleChoice
                                typeButton2={typeButton2}
                                classTab={classTab}
                                students={students}
                            />
                            <ClassWindowQuizContents typeButton2={typeButton2} classTab={classTab} students={students}/>
                            <ClassWindowImgContents typeButton2={typeButton2} classTab={classTab} students={students}/>
                        </Box>
                        :
                        null
                    :
                    previewPc ?
                        <Box display='flex' justifyContent='space-between'>
                            <Box className={classes.leftBox} style={{height: 'calc(100vh - 59px - 111px)'}}>
                                {/*<ClassWindowVideoContents typeButton2={typeButton2}/>*/}
                                {VideoContents}
                                <ClassWindowMultipleSingle
                                    typeButton2={typeButton2}
                                    classTab={classTab}
                                    students={students}
                                />
                                <ClassWindowMultipleChoice
                                    typeButton2={typeButton2}
                                    classTab={classTab}
                                    students={students}
                                />
                                <ClassWindowQuizContents typeButton2={typeButton2} classTab={classTab} students={students}/>
                                <ClassWindowImgContents typeButton2={typeButton2} classTab={classTab} students={students}/>
                            </Box>
                            {/*<Box className={clsx(classes.leftBox, classes.rightBox)}*/}
                            {/*     style={{height: 'calc(100vh - 59px - 111px)'}}>*/}
                            {/*    <ConsoleComponent typeButton2={typeButton2} image1={image1} />*/}
                            {/*</Box>*/}
                        </Box>
                        :
                        null
                }
            </div>
        );
    }
}

export default withStyles(styles)(ViewStudentsComponent);