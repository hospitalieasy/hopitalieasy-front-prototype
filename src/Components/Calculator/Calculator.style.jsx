import styled from "styled-components";

export const CalculatorBase = styled.div`
    width: 100%;
    height: 100%;
    padding: 25px;
`;


export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.div`
    width: 100%;
    height: 100%;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
`;


export const Kilogram = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 5px;
`;


export const Length = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 5px;
`;

export const ResultWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-top: 20px;
    align-items: center;
`;

export const Result = styled.div`
    width: 70%;
    height: 100%;  
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: 1px solid;
    color: ${props => props.color};
    animation:  0.5s ease-out 0s 1 slideInFromBottom;
    @keyframes slideInFromBottom {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
    }
`;


export const CalculateButton = styled.div`
    width: 100%;
    height: 100%;
`;