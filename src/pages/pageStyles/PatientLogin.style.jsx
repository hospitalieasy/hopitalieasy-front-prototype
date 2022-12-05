import styled from "styled-components";

export const PatientLoginBase = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center; 
    justify-content: center;
`;

export const LoginSection = styled.div`
    height: 85vh;
    width: 90%;
    background-color: #fff;
    display: flex;
    border-radius: 7px;
`;

export const FormSide = styled.div`
    height: 100%;
    width: 50%;
    background-color: #fff;
    border-radius: 7px;
    display: flex;
    align-items: center;
`;

export const FormContent = styled.div`
    width: 350px;
    margin-left: 50px;
`;

export const Title = styled.div`
    font-size: 30px;
    margin-left: 20px;
    font-weight: 500;
`;

export const Label = styled.div`
    font-size: 16px;
    margin-left: 26px;
`;

export const FormWrapper = styled.div`
    width: 350px;
    height: 250px;
    margin: 16px 0;
`;

export const SliderSide = styled.div`
    height: 100%;
    width: 50%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    animation: gradient 15s ease infinite;
    background: linear-gradient(to right, #8d2eb9, #3ab1c8);
	background-size: 200% 200%;
	animation: gradient 12s ease infinite;

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





