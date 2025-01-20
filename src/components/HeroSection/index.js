import React, {useContext} from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import {HeroContainer, HeroBg, HeroLeftContainer, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton, } from './HeroStyle'
import Typewriter from 'typewriter-effect';
import {Bio} from '../../data/constants';
import {DiNodejsSmall} from 'react-icons/di'
import {SiExpress} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {BiLogoMongodb} from 'react-icons/bi'
import {SiCockroachlabs, } from 'react-icons/si'
import {SiSequelize} from 'react-icons/si'
import {ThemeContext} from '../../context/theme'
import {darkTheme, lightTheme} from '../../utils/Themes'

const HeroSection = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton style={{color:`${theme==='darkTheme'?darkTheme.color:lightTheme.color}`}} href='https://drive.google.com/file/d/11XUZ5J4bOR-u-v5qaqQJIghnz1070yOi/view?usp=sharing' target='_blank'>View & Download Resume</ResumeButton>

                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <div><DiNodejsSmall size={50} color='rgb(133, 76, 230)' /></div>
                        <div><SiExpress size={50} color='rgb(133, 76, 230)' /></div>
                        <div><SiMysql size={50} color='rgb(133, 76, 230)' /></div>
                        <div><BiLogoMongodb size={50} color='rgb(133, 76, 230)' /></div>
                        <div><SiCockroachlabs size={50} color='rgb(133, 76, 230)' /></div>
                        <div><SiSequelize size={50} color='rgb(133, 76, 230)' /></div>
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection