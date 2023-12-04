import React from 'react';
import { Wrapper, Header, Projects, Logo, Title, SubTitle, Project, Content, Name, Description, DemoAndCode, Demo, Code, Link } from './styled';
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
                        <Description>This application allows you to search through a list of movies and actors.</Description>
                        <DemoAndCode>
                            <Demo>Demo: <Link target='_blank' href='https://saneckaa.github.io/Movies-browser-react/'>https://saneckaa.github.io/Movies-browser-react/</Link></Demo>
                            <Code>Code: <Link target="_blank" href='https://github.com/saneckaA/Movies-browser-react'>https://github.com/saneckaA/Movies-browser-react</Link></Code>
                        </DemoAndCode>
                    </Content>
                </Project>
                <Project>
                    <Content>
                        <Name>Wallet</Name>
                        <Description>Using this application you can manage your budget by adding income and transactions.</Description>
                        <DemoAndCode>
                            <Demo>Demo: <Link target='_blank' href='https://saneckaa.github.io/wallet-react/'>https://saneckaa.github.io/wallet-react/</Link></Demo>
                            <Code>Code: <Link target='_blank' href='https://github.com/saneckaA/wallet-react'>https://github.com/saneckaA/wallet-react</Link></Code>
                        </DemoAndCode>
                    </Content>
                </Project>
                <Project>
                    <Content>
                        <Name>To do list</Name>
                        <Description>This app allows you to create your own to-do list where you can mark tasks as completed.</Description>
                        <DemoAndCode>
                            <Demo>Demo: <Link target='_blank' href='https://saneckaa.github.io/to-do-list-react/#/zadania'>https://saneckaa.github.io/to-do-list-react/#/zadania</Link></Demo>
                            <Code>Code: <Link target='_blank' href='https://github.com/saneckaA/to-do-list-react'>https://github.com/saneckaA/to-do-list-react</Link></Code>
                        </DemoAndCode>
                    </Content>
                </Project>
                <Project>
                    <Content>
                        <Name>Currency exchange</Name>
                        <Description>Using this application you can check currency rates.</Description>
                        <DemoAndCode>
                            <Demo>Demo: <Link target='_blank' href='https://saneckaa.github.io/currency-converter-react/'>https://saneckaa.github.io/currency-converter-react/</Link></Demo>
                            <Code>Code: <Link target='_blank' href='https://github.com/saneckaA/currency-converter-react'>https://github.com/saneckaA/currency-converter-react</Link></Code>
                        </DemoAndCode>
                    </Content>
                </Project>
                <Project>
                    <Content>
                        <Name>Email subscribe card</Name>
                        <Description>This is my first mini project while learning Tailwind CSS.</Description>
                        <DemoAndCode>
                            <Demo>Demo: <Link target='_blank' href='https://saneckaa.github.io/Email-subscribe-card-react/'>https://saneckaa.github.io/Email-subscribe-card-react/</Link></Demo>
                            <Code>Code: <Link target='_blank' href='https://github.com/saneckaA/Email-subscribe-card-react'>https://github.com/saneckaA/Email-subscribe-card-react</Link></Code>
                        </DemoAndCode>
                    </Content>
                </Project>
                <Project>
                    <Content>
                        <Name>Pricing grids</Name>
                        <Description>This is my one of the mini projects while learning Tailwind CSS.</Description>
                        <DemoAndCode>
                            <Demo>Demo: <Link target='_blank' href='https://saneckaa.github.io/pricing-grids-card-react-tailwind/'>https://saneckaa.github.io/product-modal-card-react-tailwind/</Link></Demo>
                            <Code>Code: <Link target='_blank' href='https://github.com/saneckaA/pricing-grids-card-react-tailwind'>https://github.com/saneckaA/product-modal-card-react-tailwind</Link></Code>
                        </DemoAndCode>
                    </Content>
                </Project>
                <Project>
                    <Content>
                        <Name>Product modal</Name>
                        <Description>This is my one of the mini projects while learning Tailwind CSS.</Description>
                        <DemoAndCode>
                            <Demo>Demo: <Link target='_blank' href='https://saneckaa.github.io/product-modal-card-react-tailwind/'>https://saneckaa.github.io/product-modal-card-react-tailwind/</Link></Demo>
                            <Code>Code: <Link target='_blank' href='https://github.com/saneckaA/product-modal-card-react-tailwind'>https://github.com/saneckaA/product-modal-card-react-tailwind</Link></Code>
                        </DemoAndCode>
                    </Content>
                </Project>
                <Project>
                    <Content>
                        <Name>Image gallery</Name>
                        <Description>This is my one of the mini projects while learning Tailwind CSS.</Description>
                        <DemoAndCode>
                            <Demo>Demo: <Link target='_blank' href='https://saneckaa.github.io/image-gallery-card-react-tailwind/'>https://saneckaa.github.io/image-gallery-card-react-tailwind/</Link></Demo>
                            <Code>Code: <Link target='_blank' href='https://github.com/saneckaA/image-gallery-card-react-tailwind'>https://github.com/saneckaA/image-gallery-card-react-tailwind</Link></Code>
                        </DemoAndCode>
                    </Content>
                </Project>
                <Project>
                    <Content>
                        <Name>Login modal</Name>
                        <Description>This is my one of the mini projects while learning Tailwind CSS.</Description>
                        <DemoAndCode>
                            <Demo>Demo: <Link target='_blank' href='https://saneckaa.github.io/login-modal-react-tailwind/'>https://saneckaa.github.io/login-modal-react-tailwind/</Link></Demo>
                            <Code>Code: <Link target='_blank' href='https://github.com/saneckaA/login-modal-react-tailwind'>https://github.com/saneckaA/login-modal-react-tailwind</Link></Code>
                        </DemoAndCode>
                    </Content>
                </Project>
                <Project>
                    <Content>
                        <Name>My travel - first project</Name>
                        <Description>This project is my first one while learing JavaScript and it's about my travel to South Korea. </Description>
                        <DemoAndCode>
                            <Demo>Demo: <Link target='_blank' href='https://saneckaa.github.io/South_Korea-travel/'>https://saneckaa.github.io/South_Korea-travel/</Link></Demo>
                            <Code>Code: <Link target='blank' href='https://github.com/saneckaA/South_Korea-travel'>https://github.com/saneckaA/South_Korea-travel</Link></Code>
                        </DemoAndCode>
                    </Content>
                </Project>

            </Projects>
        </Wrapper>
    )
}

export default Portfolio;