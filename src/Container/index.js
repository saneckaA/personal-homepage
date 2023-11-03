import React from 'react';
import { Wrapper } from './styled';
import AboutMe from '../AboutMe';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import Footer from '../Footer';

const Container = ({setTheme}) => {
    return (
        <Wrapper>
            <AboutMe setTheme={setTheme} />
            <Skills skillsTitle='My skillset includes' skills='my skills' />
            <Skills skillsTitle='What I want to learn next' skills='next skills' />
            <Portfolio />
            <Footer />
        </Wrapper>
    )
}

export default Container;