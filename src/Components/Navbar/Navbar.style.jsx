import "..//..//Animations-CSS/Fonts/font.css"

import styled from "styled-components";

export const NavbarBase = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 50px;
    font-family: 'Roboto', sans-serif;
`;

export const LeftSide = styled.div`
    font-size: 30px;
    height: 100%;
    width: 33%;
    color: #fff;
    padding-left: 15px;
`;

export const MidSide = styled.div`
    height: 100%;
    width: 35%;
    display: flex;
`;

export const RightSide = styled.div`
    height: 100%;
    width: 33%;
    display: flex;
`;

export const NavItemContainer = styled.div`
    width: 80%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    
`;

export const NavItem = styled.div`
    font-size: 15px;
    cursor: pointer;
    border-radius: 5px;
    color: #fff;
    padding: 5px 20px;
   
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-left: auto;
`;

export const ButtonItem = styled.div`
    padding: 0px 15px;
`;



