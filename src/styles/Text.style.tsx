import styled from "styled-components";

export const TitleText = styled.h1`
    font-size: 40px;
    color:#b10076ff;
    font-family: 'Gill Sans';
    display: block;
`

export const TitleText2 = styled(TitleText)`
    color:white;
`

export const ParagraphText = styled.p`
    font-size: 20px;
    font-family: 'Gill Sans';
    color: #b10076ff; 
`

export const ParagraphText2 = styled(ParagraphText)`
    color: white;
    width: 50%;
    @media (max-width:700px) {
        width:80%;
    }
`