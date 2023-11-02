import styled from "styled-components";

export const Wrapper = styled.div`
   width: 1216px;
   height: auto;
   display: flex;
   flex-direction: column;
   gap: 10px;
   background: white;
   border-radius: 4px;
   box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
`; 

export const Title = styled.div`
   font-size: 30px;
   font-weight: 900;
   padding-bottom: 10px;
   border-bottom: 1px solid lightgray;
   margin-left: 40px;
   margin-right: 40px;
   margin-top: 40px;
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
`;