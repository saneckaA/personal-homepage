import React from 'react';
import { About, Image, Details, Name, Info, HireMe } from './styled';
import myPhoto from '../images/me.jpg';
import message from '../images/message.svg';
import ThemeButton from '../ThemeButton';

const AboutMe = ({setTheme}) => {
    return (
        <About>
            <Image>
                <img src={myPhoto} />
            </Image>
            <Details>
                <Name>Aleksandra Sanecka</Name>
                <Info>I'm a passionate Frontend Developer in love with React, currently looking for new job opportunities.</Info>
                <HireMe href='mailto: a.saneckaa@gmail.com'>
                    <img src={message} />
                    Hire Me
                </HireMe>
            </Details>
            <ThemeButton setTheme={setTheme}/>
        </About>
    )
}

export default AboutMe;