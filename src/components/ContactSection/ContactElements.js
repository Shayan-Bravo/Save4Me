import styled from 'styled-components';
import {Link} from 'react-scroll';

export const InfoContainer = styled.div`
    color: #fff;
    background-color: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 960px;
    max-width: 1100px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({videoThmbn}) => (videoThmbn ? `'col2 col1'` : `'col1 col2'`)};
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({videoThmbn}) => (videoThmbn ? `'col1' 'col2'` : `'col2 col2' 'col1 col1'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    @media screen and (max-width: 768px) {
        visibility: hidden;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    font-size:18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 35px;
`

export const ImgWrap = styled.div`
    visibility: show;
    max-width: 360px;
    height: 100%;
    margin: 0 15px 0 0;
    @media screen and (max-width: 768px) {
        visibility: hidden;
    }
`

export const Img = styled.img`
    width: 100%;
`

export const Button = styled(Link)`
    background-color: #01bf71;
    color: #fff;
    align-text: center;
    justify-content: center;
    border-radius: .7rem;
    cursor: pointer;
    white-space: nowrap;
    height: 48px;
    padding: 13px;
    &:hover {
        background-color: #026d40;
        transition: 0.3s all ease-in-out;
    }
`