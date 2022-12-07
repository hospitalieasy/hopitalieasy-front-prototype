import "..//..//utilities/fonts/font.css"

import styled from "styled-components";

export const FooterBase = styled.div`
    width: 100%;
    height: 100%;
    color: #fff;
    background: linear-gradient(to right, #27296d, #161122);
`;

export const PatternLayout = styled.div`
    height: 100%;
    width: 100%;
    background-image: 
    radial-gradient(rgb(128, 128, 128) 1%, transparent 8%);
    background-size: 16px 16px;
`;

export const TopMenu = styled.div`
    width: 100%;
    height: 75%;
    padding: 30px 0px;
`;


export const MenuContainer = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    margin: auto;
`;


export const MenuItem = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-family: 'Montserrat', sans-serif;
`;

export const Title = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 21px;
    font-family: 'Raleway', sans-serif;
`;

export const Link = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 13px;
`;

export const Description = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 13px;
`;

export const BottomMenu = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin: auto;
    background: linear-gradient(to right, #4b4ef7, #19004b);
    padding: 15px 0px;
    background-size: 200% 200%;
    animation: gradient 10s ease infinite;

    @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const CreditWrapper = styled.div`
    display: flex;
    margin: auto;
    width: 100%;
    font-family: 'Barlow', sans-serif;
    border-right: 1px solid;
    align-items: center;
`;
