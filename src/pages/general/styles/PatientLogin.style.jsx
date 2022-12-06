import styled from "styled-components";

export const PatientLoginBase = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center; 
    justify-content: center;
`;

export const FormWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`;

export const ContentWrapper = styled.div`
    height: 100%;
    width: 50%;
`;

export const LoginSide = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const Label = styled.div`
    width: 68%;
    height: 10%;
    margin-top: -135px;
    padding-left: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const IconWrapper = styled.div`
    padding-left: 30px;
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





