
import React, { useState, useRef, MutableRefObject, forwardRef } from "react";
import swe from '../img/swe_clipart.png'
import { ContentWrapper, IntroContainer, NameContainer, IntroText, LearnMore, HeaderImage} from "../styles/Header.style";
import { ParagraphText, TitleText } from "../styles/Text.style";
import { ReactTyped } from "react-typed";

const Header = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, targetRef) => {

    const scrollToSection = () => {
        if (targetRef && 'current' in targetRef){
            const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
            const targetPosition =
            (targetRef as MutableRefObject<HTMLDivElement>).current!.getBoundingClientRect().top +
            window.scrollY;
  
            window.scrollTo({
            top: targetPosition - navbarHeight, // Adjust for navbar height
            behavior: 'smooth',
            });
        }
      };
    

    return (
        <ContentWrapper>
            <HeaderImage src={swe}/>
            <IntroContainer>
                <IntroText>Hello, I'm</IntroText>
                <TitleText>
                    <ReactTyped strings={["Elika Farokhi."]} typeSpeed={120}/>
                </TitleText>
                
                <ParagraphText>Aspiring Software Engineer | Junior Full-Stack Developer | University of Waterloo Computer Engineering Student | Passionate Problem Solver & Thrill Seeker</ParagraphText>
                <LearnMore onClick={scrollToSection}>Learn More</LearnMore>
            </IntroContainer>
        </ContentWrapper>


        
    );
  });
  
  export default Header;