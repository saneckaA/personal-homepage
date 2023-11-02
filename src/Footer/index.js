import React from 'react';
import { Wrapper, Mail, Text, Links, GitHub, LinkedIn, Link } from './styled';
import GitHubLogo from '../images/github.svg';
import LinkedInLogo from '../images/linked.svg';
const Footer = () => {
    return (
        <Wrapper>
            <Mail><Link target='_blank' href='mailto: a.saneckaa@gmail.com'>a.saneckaa@gmail.com</Link></Mail>
            <Text>
                I'm always open to new projects whenever I have the time.
                If you have a website, dashboard or mobile app in mind and need
                some help to make your ideas come to life, feel free to conatct me
            </Text>
            <Links>
                <GitHub target='_blank' href='https://github.com/saneckaA'>
                    <img src={GitHubLogo} />
                </GitHub>
                <LinkedIn target='_blank' href='https://www.linkedin.com/in/aleksandra-sanecka-84b359236/'>
                    <img src={LinkedInLogo} />
                </LinkedIn>
            </Links>
        </Wrapper>
    )
}

export default Footer;