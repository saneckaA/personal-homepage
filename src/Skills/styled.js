import styled from "styled-components";

export const Wrapper = styled.div`
   width: 1216px;
   height: auto;
   display: flex;
   flex-direction: column;
   gap: 10px;
   background: ${({theme}) => theme.tileBcg};
   border-radius: 4px;
   box-shadow: ${({theme}) => theme.boxshadow};
`; 

export const Title = styled.div`
   font-size: 30px;
   font-weight: 900;
   padding-bottom: 10px;
   border-bottom: 1px solid ${({theme}) => theme.skillsBorderBottom};
   margin-left: 40px;
   margin-right: 40px;
   margin-top: 40px;
   color: ${({theme}) => theme.text};
`;

export const SkillsList = styled.ul`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 10px;
   margin-bottom: 40px;
`;

export const Skill = styled.li`
   font-size: 18px;
   list-style-type: none;
   display: grid;
   grid-template-columns: auto 1fr;
   gap: 24px;
   align-items: center;
   color: ${({theme}) => theme.text}
`;