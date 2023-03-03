import styled from "styled-components";

export const SingUpFormBase = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`;

export const FormWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px;

    @media screen and (max-width: 585px) {
        padding: 40px;
    }
`;

export const UserAcceptContent = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 585px) {
        flex-direction: column;
    }
`;

export const Label = styled.div`
    font-size: 16px;
    margin-left: 10px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 585px) {
        margin-bottom: 20px;
    }
`;

export const Text = styled.div`
    padding-right: 30px;
    
`;

export const Title = styled.div`
    font-size: 30px;
    margin-bottom: 30px;
`;



