import styled from "styled-components";

export const LoginFormBase = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px 24px;
    margin-top: px;
`;

export const Title = styled.div`
    font-size: 28px;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1.1px;
    
    @media screen and (max-width: 585px) {
        font-size: 24px;
    }
`;

export const Label = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;


