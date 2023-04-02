import styled from "styled-components";

export const NavbarBase = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 24px 40px;

    @media screen and (max-width: 768px) {
        padding: 20px;
    }
`;

export const LeftSide = styled.div`
    height: 100%;
    width: 50%;
    color: #fff;

    @media screen and (max-width: 386px) {
        display: none;
    }
`;

export const RightSide = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    
    @media screen and (max-width: 386px) {
        width: 100%;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-left: auto;

    @media screen and (max-width: 768px) {
        width: 80%;
        justify-content: center;
    }

    @media screen and (max-width: 386px) {
        width: 100%;
        justify-content: space-between;
        padding: 10px 24px;
    }
`;






