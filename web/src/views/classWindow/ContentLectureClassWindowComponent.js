import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Typography} from "@material-ui/core";
import ClassWindowTabComponent from "./ClassWindowTabComponent";
import ClassComponent from "./ClassComponent";
import LearningStatus from "./LearningStatus";
import ViewStudentsComponent from "./ViewStudentsComponent";
import {LoginState} from "../../stores/AuthStore";

const styles = _theme => ({
    root:{
        width:'100%',
        minHeight: 'calc(100vh - 59px)',
        background:'#fafafa',
        padding: '0 20px 0',
        boxSizing:'border-box'
    },
    topText:{
        width: 70,
        fontSize: '1.25rem',
    },
    chip:{
        padding: '4px 10px',
        background: '#eee',
        borderRadius: 30,
        margin: '3px 6px',
        '&:hover':{
            background:'#eee'
        }
    },
    tabContentsBox:{
        width: 690,
        margin:'0 auto',
        display:'flex',
        justifyContent:'center'
    },
});

class ContentLectureClassWindowComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chipList: [
                {name: 'Spring Security'},
                {name: '암호화'},
                {name: '윈도우 파일 시스템'},
                {name: '네트워크 프로토콜'},
                {name: 'SSL'},
                {name: 'IPSEC'},
                {name: '윈도우 및 리눅스 방화벽'},
            ],
            previewPc: true,

            //1단, 2단
            typeButton1:false,
            typeButton2:true,

            //이미지 1개
            image1:true,

            //수강생
            students: true,

            selectedValue: "a",
        };
    }

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
    };

    render() {
        const { classes, classTab, handleChangeTabs, isGuestUser } = this.props;
        const { previewPc, typeButton1, typeButton2, image1, students } = this.state;
        const isLoginUser = this.props.loginState === LoginState.Authenticated;

        return (
            <div className={classes.root}>
                <Box display='flex' alignItems='flex-start' pt={3} mb={6}>
                    <Typography className={classes.topText}>태그</Typography>
                    <Box display='flex' alignItems='center' flexWrap='wrap'>
                        {this.state.chipList.map((chip, i) => (
                            <Button key={i} className={classes.chip} disableRipple>{chip.name}</Button>
                        ))}
                    </Box>
                </Box>

                {
                    !isGuestUser &&
                    <Box className={classes.tabContentsBox} >
                        <ClassWindowTabComponent
                            classTab={classTab}
                            handleChangeTabs={handleChangeTabs}
                        />
                    </Box>
                }


                {classTab === 0 ?
                    <ClassComponent
                        typeButton1={typeButton1}
                        typeButton2={typeButton2}
                        previewPc={previewPc}
                        image1={image1}
                        isLoginUser={isLoginUser}
                    />
                    :
                    classTab === 1 ?
                        <LearningStatus
                            typeButton1={typeButton1}
                            typeButton2={typeButton2}
                            previewPc={previewPc}
                        />
                        :
                        classTab === 2 ?
                            <ViewStudentsComponent
                                typeButton1={true}
                                typeButton2={false}
                                previewPc={previewPc}
                                image1={image1}
                                classTab={classTab}
                                students={students}
                            />
                            :
                            null
                }
            </div>
        );
    }
}

export default withStyles(styles)(ContentLectureClassWindowComponent);