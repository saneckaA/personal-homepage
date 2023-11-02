import React from 'react';
import { Wrapper, Mail, Text, Links, GitHub, LinkedIn } from './styled';
import GitHubLogo from '../images/github.svg';
import LinkedInLogo from '../images/linked.svg';
const Footer = () => {
    return (
        <Wrapper>
            <Mail>a.saneckaa@gmail.com</Mail>
            <Text>
                I'm always open to new projects whenever I have the time.
                If you have a website, dashboard or mobile app in mind and need
                some help to make your ideas come to life, feel free to conatct me
            </Text>
            <Links>
                <GitHub>
                    <img src={GitHubLogo} />
                </GitHub>
                <LinkedIn>
                    <img src={LinkedInLogo} />
                </LinkedIn>
            </Links>
        </Wrapper>
    )
}

export default Footer;