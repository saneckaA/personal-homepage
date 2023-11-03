import styled from "styled-components";

export const About = styled.div`
   width: 1216px;
   height: auto;
   display: flex;
   flex-direction: row;
   gap: 19px;
   align-items: center;

   @media (max-width: 767px) {
    width: 80%;
    flex-direction: column;
    justify-content: center;
    padding-right: 10px;
    padding-left: 10px;
   }
`;

export const Image = styled.div`
   width: 398px;
   height: 398px;

   img {
    width: 398px;
    height: 398px;
    border-radius: 50%;
    }

    @media (max-width: 797px) {
        width: 128px;
        height: 128px;

        img {
            width: 128px;
            height: 128px;
        }
    }
`;

export const Details = styled.div`
   width: auto;
   height: 247px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 20px;

   @media (max-width: 767px) {
    height: auto;
   }
`;

export const Name = styled.div`
   font-weight: 900;
   font-size: 38px;
   line-height: 45.99px;
   color: ${({theme}) => theme.text};

   @media (max-width: 767px) {
    font-size: 22px;
    line-height: 26px;
   }
`;

export const Info = styled.div`
   font-weight: 400;
   font-size: 20px;
   line-height: 28px;
   color: ${({theme}) => theme.subtitle};

   @media (max-width: 767px) {
    font-size: 17px;
    line-height: 23.8px;
   }

`;

export const HireMe = styled.a`
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
   text-decoration: none;
   cursor: pointer;
   transition: 0.8s;

   &:hover {
     transform: scale(1.1);
   }

   @media (max-width: 767px) {
    width: 138px;
    height: 46px;
   }
`;