import styled from "styled-components";

export const DoctorLoginBase = styled.div`
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

export const LoginSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center; 
    justify-content: center;
`;

export const SliderSide = styled.div`
    height: 100%;
    width: 50%;
    background: linear-gradient(to right, #f9c840, #9000ff);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
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




