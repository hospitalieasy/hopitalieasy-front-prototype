import styled from "styled-components";

export const TestResultBase = styled.div`
    height: 100%;
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const TestImage = styled.img`
    height: 350px;
    width: 400px;
    margin-bottom: 32px;
    border-radius: 5px;

    @media screen and (max-width: 441px) {
        height: 200px;
        width: 250px;
    }
    
    @media screen and (max-width: 585px) and (min-width: 442px) {
        height: 250px;
        width: 325px;
    }
`;

export const Title = styled.div`
    height: 100%;
    width: 100%;
    margin-bottom: 12px;
    font-weight: 700;

    @media screen and (max-width: 441px) {
        font-size: 14px;
    }
    
    @media screen and (max-width: 585px) and (min-width: 442px) {
        font-size: 16px;
    }
`;

export const Text = styled.div`
    height: 100%;
    width: 95%;
    margin-left: 12px;

    @media screen and (max-width: 441px) {
        font-size: 12px;
    }
    
    @media screen and (max-width: 585px) and (min-width: 442px) {
        font-size: 14px;
    }
`;