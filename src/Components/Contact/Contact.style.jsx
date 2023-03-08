import styled from "styled-components";

export const ContactBase = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

`;

export const Title = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 32px;
    margin-bottom: 60px;
    color: white;

    @media screen and (max-width: 585px) {
        font-size: 24px;
    }
`;

export const FromWrapper = styled.div`
    width: 95%;
    height: 100%;
    padding: 24px;
    background: linear-gradient(to right, #27296d, #161122);
    border-radius: 10px;
    margin-bottom: 60px;
`;

export const InputWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 24px 0px;
`;