import {forwardRef} from 'react';
import cppImg from './../img/cpp_logo.png';
import cImg from './../img/C_Logo.png';
import cSImg from './../img/Logo_C_sharp.png';
import pythonImg from './../img/Python-logo-notext.svg.png';
import typeScriptImg from './../img/Typescript_logo_2020.svg.png';
import sqlImg from './../img/Sql_data_base_with_logo.png';
import javaScriptImg from './../img/JavaScript-logo.png';
import reactlogo from '../img/React.jpg'
import nodelogo from '../img/Nodejs.png'
import expresslogo from '../img/expressjs.jpg'
import dotnetlogo from '../img/Netlogo.png'
import headshot from '../img/elika.jpeg'
import azurelogo from '../img/azureLogo.png'
import mongologo from '../img/MongoDBLogo.png'
import firebaseLogo from '../img/firebaseLogo.png'
import postgreLogo from '../img/postgreLogo.png'
import { useState } from 'react';

import { BoxContainer, Headshot, Intro, SkillCard, SkillImg, SkillText } from '../styles/AboutMe.style';
import { PageContainer1, SectionContainer, SectionContainer2, TitleContainer } from '../styles/Container.style';
import { ParagraphText2, TitleText, TitleText2 } from '../styles/Text.style';

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import { TechList } from '../styles/Experiences.style';



export const AboutMe = forwardRef<HTMLDivElement>((_, targetRef) => {

    const [view, setView] = useState(0);
    
    const button = {
        border:'2px solid #b10076ff',
        backgroundColor:'white',
        color:'#b10076ff',
        margin:'5px',
        height:'30px',
        width:'auto',
        fontWeight:'bold',
        fontFamily:'Gill Sans',
        fontSize:'15px',
        borderRadius:'10px',
    } as React.CSSProperties;

    const buttonActive = {
        ...button,
        backgroundColor:'#b10076ff', 
        color: 'white'
    }

    


    const languages = [
        {
            title: 'C++',
            imgUrl: cppImg
        },
        {
            title: 'TypeScript',
            imgUrl: typeScriptImg
        },
        {
            title: 'JavaScript',
            imgUrl: javaScriptImg
        },
        {
            title: 'Python',
            imgUrl: pythonImg
        },
    ];
    const tools = [
        {
            title: 'React.js',
            imgUrl: reactlogo
        },

    ];
    const databases = [
        {
            title: 'FireBase',
            imgUrl: firebaseLogo
        },
    ];


    return (
        <div ref={targetRef}>
            
        <SectionContainer2> 
            <TitleContainer>
                <TitleText2>About Me.</TitleText2>
            </TitleContainer>
            <Intro> 
            <Headshot src={headshot}></Headshot>
            <TechList>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<LinkedInIcon />}
                    href="https://www.linkedin.com/in/elikafarokhi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: "white", color:'#b10076ff', marginRight:'5%' }}>Linkedin</Button>
                    <Button
                    variant="contained"
                    color="primary"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/elikafarokhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: "white", color:'#b10076ff' }}>
                        Github
                    </Button>
            </TechList>
            <ParagraphText2>I'm studying Computer Engineering at the University of  Waterloo, graduating April 2030.</ParagraphText2>
            <ParagraphText2>
            I'm a Junior Software Developer, specializing in C++, Java, Python, TypeScript, and React. I enjoy building scalable, user-friendly applications, circuit design & PCB fabrication, low-level interfacing and tackling challenges across the development stack.
            </ParagraphText2>
            </Intro>
            </SectionContainer2>
            <SectionContainer>
            <TitleText>
                My Skills.
            </TitleText>
            <div>
                <button style = {view == 0 ? buttonActive : button} onClick={() => setView(0)}>Languages</button>
                <button style = {view == 1 ? buttonActive : button} onClick={() => setView(1)}>Tools + Tech</button>
                <button style ={view == 2 ? buttonActive : button} onClick={() => setView(2)}>Databases</button>
            </div>

            <BoxContainer>
                {view == 0 && languages.map(language => <SkillCard>
                    <SkillImg src={language.imgUrl} alt="My Image"/>
                    <SkillText>{language.title}</SkillText>
                    </SkillCard>
                )}
                {view == 1 && tools.map(tools => <SkillCard>
                    <SkillImg src={tools.imgUrl} alt="My Image"/>
                    <SkillText>{tools.title}</SkillText>
                    </SkillCard>
                )}
                {view == 2 && databases.map(databases => <SkillCard>
                    <SkillImg src={databases.imgUrl} alt="My Image"/>
                    <SkillText >{databases.title}</SkillText>
                    </SkillCard>
                )}
            </BoxContainer>
            </SectionContainer>
            </div>
        
        
    );
}
)
export const AboutMePage = () => {
    return (
        <PageContainer1>
            <AboutMe/>
        </PageContainer1>
    )
}

