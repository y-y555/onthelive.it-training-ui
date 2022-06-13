import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Typography} from "@material-ui/core";
import {ReactComponent as VideoInputImage} from "../../common/images/VideoInputImage.svg";
import {FileUploader} from "react-drag-drop-files";

const styles = theme => ({
    videoBox:{
        width: '100%',
        height: 360,
        border: '2px dashed rgba(0, 0, 0, 0.5)',
        borderRadius: 8,
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom:20
    },
    videoText:{
        fontSize:'1.25rem',
        color:'#202123',
    },
    videoText2:{
        fontSize: '0.875rem',
        color:'#6d7175',
        margin: '10px 0 20px',
        textAlign:'center'
    },
    videoButton:{
        width: 120,
        height: 40,
        boxSizing:'border-box',
        border:'1px solid #c4c4c4',
        borderRadius: 2,
        '&:hover':{
            background:'transparent'
        }
    },
});

const fileTypes = ["JPEG", "PNG", "GIF", "JPG"];

class ImageContentsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
        };
    }

    handleClickUploaderFile = (file) => {
        this.setState({ file: file });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <FileUploader
                    multiple={true}
                    handleChange={this.handleClickUploaderFile}
                    name="file"
                    types={fileTypes}
                    children={
                        <Box className={classes.videoBox}>
                            <VideoInputImage/>
                            <Typography className={classes.videoText}>
                                이미지 콘텐츠가 여기에 표시됩니다.
                            </Typography>
                            <Typography className={classes.videoText2}>
                                업로드 버튼을 눌러 이미지 파일을 선택하거나 마우스로 끌어오세요.<br/>
                                용량이 큰 경우 표시되기까지 몇 분 정도 걸릴 수 있습니다.
                            </Typography>
                            <Button className={classes.videoButton} disableRipple>
                                파일올리기
                            </Button>
                        </Box>
                    }
                />
            </div>
        );
    }
}

export default withStyles(styles)(ImageContentsComponent);