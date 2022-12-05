import styled from "styled-components";

export const ErrorBase = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Label = styled.div`
    background: linear-gradient(to right, #ad06fa, #019ef3);
    padding: 50px;
    border-radius: 10px;
    color: #ffa2cf;
    font-size: 30px;
    font-weight: 600;
    background-size: 200% 200%;
    animation: gradient 5s ease infinite;

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