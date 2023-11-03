import styled from "styled-components";

export const Wrapper = styled.div`
   width: 1368px;
   height: auto;
   display: flex;
   flex-direction: column;
   margin: auto;
   align-items: center;
   gap: 34px;
   margin-top: 34px;

   @media (max-width: 767px) {
    width: auto;
    padding-left: 30px;
    padding-right: 30px;
   }
`;
