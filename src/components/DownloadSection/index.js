import React, {useState} from 'react'
import { DownloadContainer, DownloadRow, DownloadWrapper, TextWrapper, Column1, Column2, MediaTitle, Heading, Subtitle, BtnWrap, Img, ImgWrap, Button, Separator } from './DownloadElements'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const DownloadSection = ({mediaID, mediaResolutions, lightBg, id, videoThmbn, title, lightText, primary, headLine, img, darkText, buttonLabel, alt, includeBtn}) => {
    const [format, setFormat] = useState('video');
    const [quality, setQuality] = useState('144');
    const acceptedResolutions = ['1080', '720', '480', '360', '240', '144','1440', '2160'];
    let resolutionsList = [];

    const processResolutions = resolutions => {
        resolutionsList = [];
        resolutions.map((resolution, index) => {
            if (resolution.qualityLabel !== null){
                if (acceptedResolutions.includes(resolution.qualityLabel.split('p')[0])){
                    if (!resolutionsList.includes(resolution.qualityLabel.split('p')[0])){
                        resolutionsList.push(resolution.qualityLabel.split('p')[0]);
                    }
                }
            }
            return 1;
        });
    }

    const renderResolutions = resolutions => {
        processResolutions(resolutions);
        resolutionsList.sort((a, b) => a - b);
        return resolutionsList.map((resolution, index) => {
            return (
                <FormControlLabel
                    key={index}
                    value={resolution}
                    control={<Radio color="secondary" onChange={(e) => {setQuality(resolution)}} />}
                    label={`${resolution}p`}
                    checked={quality === resolution}
                />
            )
        });
    }

    const fetchDownload = () => {
        let videoURL = `https://blissful-shore-337401.nn.r.appspot.com/download?id=${mediaID}&format=${format}&resolution=${quality}`;
        let audioURL = `https://blissful-shore-337401.nn.r.appspot.com/download?id=${mediaID}&format=${format}`;
        if (format === 'audio'){
            window.open(audioURL);
        } else {
            window.open(videoURL);
        }
    }

    return (
        <>
            <DownloadContainer lightBg={lightBg} id={id}>
                <DownloadWrapper>
                    <DownloadRow videoThmbn={videoThmbn}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headLine}</Heading>
                            </TextWrapper>
                            <TextWrapper>
                                <Subtitle darkText={darkText}>Format</Subtitle>
                                <BtnWrap>
                                    <RadioGroup
                                    sx={{color:"#010606"}}
                                    row 
                                    value={format}
                                    color="primary"
                                    >
                                        <FormControlLabel value="audio" label="Audio" checked={format === 'audio'} control={<Radio color="secondary" onChange={(e) => {setFormat('audio')}} />} />
                                        <FormControlLabel value="video" label="Video" checked={format === 'video'} control={<Radio color="secondary" onChange={(e) => {setFormat('video')}} />} />
                                    </RadioGroup>
                                </BtnWrap>
                                {format === 'video' ?
                                    <Subtitle darkText={darkText}>Quality</Subtitle> : null}
                                {format === 'video' ? 
                                    <BtnWrap>
                                        <RadioGroup
                                        sx={{color:"#010606"}}
                                        row 
                                        value={quality}
                                        color="primary">
                                        {renderResolutions(mediaResolutions)}
                                        </RadioGroup>
                                    </BtnWrap> : null}
                                {includeBtn && <BtnWrap>
                                    <Button
                                     primary={primary ? 1 : 0}
                                     smooth={true}
                                     duration={500}
                                     spy={true}
                                     exact={true}
                                     offset={-80}
                                     onClick={() => {fetchDownload()}}
                                    >{buttonLabel}</Button>
                            </BtnWrap>}
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                            <MediaTitle>{title}</MediaTitle>
                            <Separator/>
                        </Column2>
                    </DownloadRow>
                </DownloadWrapper>
            </DownloadContainer>
        </>
    )
}

export default DownloadSection