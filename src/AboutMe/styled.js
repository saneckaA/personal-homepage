import styled from "styled-components";

export const About = styled.div`
   width: 1216px;
   height: auto;
   display: flex;
   flex-direction: row;
   gap: 54px;
   align-items: center;
`;

export const Image = styled.div`
   width: 398px;
   height: 398px;

   img {
    width: 398px;
    height: 398px;
    border-radius: 50%;
    }
`;

export const Details = styled.div`
   width: 633px;
   height: 247px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 20px;
`;

export const Name = styled.div`
   font-weight: 900;
   font-size: 38px;
   line-height: 45.99px;
   color: rgba(37, 37, 37, 1);
`;

export const Info = styled.div`
   font-weight: 400;
   font-size: 20px;
   line-height: 28px;
   color: rgba(110, 126, 145, 1);
`;

export const HireMe = styled.div`
   width: 154px;
   height: 49px;
   border-radius: 4px;
   border: 1px;
   color: white;
   background: rgba(3, 102, 214, 1);
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;
`;