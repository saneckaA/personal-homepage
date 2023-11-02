import React from 'react';
import { Wrapper, Header, Projects, Logo, Title, SubTitle, Project, Content, Name, Description, DemoAndCode, Demo, Code } from './styled';
import ProjectsLogo from '../images/logo.svg';

const Portfolio = () => {
    return (
        <Wrapper>
            <Header>
                <Logo>
                    <img src={ProjectsLogo} />
                </Logo>
                <Title>Portfolio</Title>
                <SubTitle>My recent projects</SubTitle>
            </Header>
            <Projects>
                <Project>
                    <Content>
                        <Name>Movies Browser</Name>
                        <Description></Description>
                        <DemoAndCode>
                            <Demo>Demo:</Demo>
                            <Code>Code:</Code>
                        </DemoAndCode>
                    </Content>
                </Project>
                <Project>
                    <Content>
                        <Name>Wallet</Name>
                        <Description></Description>
                        <DemoAndCode>
                            <Demo>Demo:</Demo>
                            <Code>Code:</Code>
                        </DemoAndCode>
                    </Content>
                </Project>
                <Project>
                    <Content>
                        <Name>To do list</Name>
                        <Description></Description>
                        <DemoAndCode>
                            <Demo>Demo:</Demo>
                            <Code>Code:</Code>
                        </DemoAndCode>
                    </Content>
                </Project>
                <Project>
                    <Content>
                        <Name>Currency exchange</Name>
                        <Description></Description>
                        <DemoAndCode>
                            <Demo>Demo:</Demo>
                            <Code>Code:</Code>
                        </DemoAndCode>
                    </Content>
                </Project>
                <Project>
                    <Content>
                        <Name>Weather app</Name>
                        <Description></Description>
                        <DemoAndCode>
                            <Demo>Demo:</Demo>
                            <Code>Code:</Code>
                        </DemoAndCode>
                    </Content>
                </Project>

            </Projects>
        </Wrapper>
    )
}

export default Portfolio;