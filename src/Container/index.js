import React from 'react';
import { Wrapper } from './styled';
import AboutMe from '../AboutMe';
import Skills from '../Skills';

const Container = () => {
    return (
        <Wrapper>
            <AboutMe />
            <Skills skillsTitle='My skillset includes' skills='my skills' />
            <Skills skillsTitle='What I want to learn next' skills='next skills' />
        </Wrapper>
    )
}

export default Container;