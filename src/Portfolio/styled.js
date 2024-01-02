import styled from "styled-components";

export const Wrapper = styled.div`
   width: 1216px;
   height: auto;
   display: flex;
   flex-direction: column;
   gap: 24px;

   @media (max-width: 767px) {
    width: auto;
   }
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

   @media (max-width: 767px) {
    font-size: 18px;
    line-height: 21.78px;
   }
`;

export const SubTitle = styled.div`
   font-weight: 400;
   font-size: 20px;
   line-height: 28px;
   color: ${({theme}) => theme.text};

   @media (max-width: 767px) {
    font-size: 17px;
    line-height: 23.8px;
   }
`;

export const Projects = styled.div`
   width: 100%;
   height: auto;
   display: grid;
   grid-template-columns: repeat(2, 592px);
   grid-gap: 30px;

   @media (max-width: 767px) {
    grid-template-columns: 1fr;
    margin-right: 10px;
    margin-left: 10px;
   }
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

   @media (max-width:767px) {
    width: 288px;
    height: 230px;
   }
`;

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   gap: 24px;
   margin: 60px;

   @media (max-width: 767px) {
    margin: 20px;
    gap: 12px;
   }
`;

export const Name = styled.div`
   font-weight: 700;
   font-size: 24px;
   line-height: 29px;
   color: ${({theme}) => theme.projectTitle};

   @media (max-width: 767px) {
    font-size: 16px;
    line-height: 19.36px;
   }
`;

export const Description = styled.div`
   font-weight: 400;
   font-size: 18px;
   line-height: 25.2px;
   color: ${({theme}) => theme.projectDescription};
   text-align: justify;

   @media (max-width: 767px) {
    font-size: 14px;
    line-height: 16.94px;
   }
`;

export const DemoAndCode = styled.div`
   color: ${({theme}) => theme.projectDescription};

   @media (max-width: 767px) {
    font-size: 14px;
    line-height: 16.94px;
   }
`;

export const Demo = styled.div`
   span {
      font-weight: 700;
   }
`;
export const Link = styled.a`
   color: rgba(3, 102, 214, 1);
`;

export const Code = styled(Demo)`

`;