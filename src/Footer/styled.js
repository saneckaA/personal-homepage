import styled from "styled-components";

export const Wrapper = styled.div`
   width: 691px;
   height: 282px;
   align-self: flex-start;
   display: flex;
   flex-direction: column;
   gap: 24px;
   margin-left: 75px;
   margin-top: 30px;
`;

export const Mail = styled.div`
   font-weight: 900;
   font-size: 32px;
   line-height: 38px;
`;

export const Link = styled.a`
   text-decoration: none;
   &:hover {
    color: rgb(66, 135, 245);
   }

   &:active {
    color: violet;
   }
`;

export const Text = styled.div`
   font-weight: 400;
   font-size: 18px;
   line-height: 25px;
   text-align: justify;
`;

export const Links = styled.div`
   display: flex;
   flex-direction: row;
   gap: 15px;
`;

export const GitHub = styled.a`

`;

export const LinkedIn = styled.a`

`;