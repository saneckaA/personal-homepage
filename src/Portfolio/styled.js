import styled from "styled-components";

export const Wrapper = styled.div`
   width: 1216px;
   height: auto;
   display: flex;
   flex-direction: column;
   gap: 24px;
`;

export const Header = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
`;

export const Logo = styled.div`

`;

export const Title = styled.div`
   font-weight: 900;
   font-size: 30px;
   line-height: 36.31px;
   color: ${({theme}) => theme.text};
`;
export const SubTitle = styled.div`
   font-weight: 400;
   font-size: 20px;
   line-height: 28px;
   color: ${({theme}) => theme.text};
`;

export const Projects = styled.div`
   width: 100%;
   height: auto;
   display: grid;
   grid-template-columns: repeat(2, 592px);
   grid-gap: 30px;
`;

export const Project = styled.div`
   width: 592px;
   height: 322px;
   background: ${({theme}) => theme.tileBcg};
   border: 6px solid rgba(209, 213, 218, 0.3);
   cursor: pointer;

   &:hover {
    outline: 3px solid violet;
   }
`;

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   gap: 24px;
   margin: 60px;
`;

export const Name = styled.div`
   font-weight: 700;
   font-size: 24px;
   line-height: 29px;
   color: ${({theme}) => theme.projectTitle};
`;

export const Description = styled.div`
   font-weight: 400;
   font-size: 18px;
   line-height: 25.2px;
   color: ${({theme}) => theme.projectDescription};
   text-align: justify;
`;

export const DemoAndCode = styled.div`
   color: ${({theme}) => theme.projectDescription};
`;

export const Demo = styled.div`

`;
export const Link = styled.a`
   color: rgba(3, 102, 214, 1);
`;

export const Code = styled.div`

`;