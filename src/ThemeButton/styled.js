import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 15px;
   align-self: flex-start;
   width: 250px;
`;

export const Text = styled.div`
   font-weight: 700;
   font-size: 12px;
   line-height: 15.6px;
   color: ${({theme}) => theme.darkModeOffOn};
`;

export const Button = styled.div`
margin-top: -18px;
   label {
   width: 57px;
   height: 35px;
   position: relative;
   display: block;
   background: rgba(229, 229, 229, 1);
   border-radius: 30px;
   border: 1px solid rgba(209, 213, 218, 0.3);
   cursor: pointer;
   transition: 0.3s;
}
   label:after {
   content: "";
   width: 25px;
   height: 25px;
   border-radius: 50%;
   position: absolute;
   top: 4px;
   left: 4px;
   background: rgba(110, 126, 145, 1);
   border: 1px solid rgba(110, 126, 145, 1);
   transition: 0.3s;
}
input {
   width: 0;
   height: 0;
   visibility: hidden;
}
input:checked + label {
   background: rgba(54, 54, 54, 0.72);
   border: 1px solid rgba(255, 255, 255, 1);
}
input:checked + label:after {
   left: 52px;
   transform: translateX(-100%);
   background: rgba(255, 255, 255, 1);
}

 img {
   position: absolute;
   width: 15px;
   z-index: 100;
}

img.sun {
   top: 9.5px;
   left: 8.5px;
}

img.moon {
    top: 9.5px;
    left: 32px;
}

input:checked + label img.sun {
   
}

input:checked + label img.moon {
  
}
`;