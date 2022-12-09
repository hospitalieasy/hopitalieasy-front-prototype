import styled from "styled-components";

export const LoginFormBase = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${props => props.padding};;
    margin-top: px;
`;

export const Title = styled.div`
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: ${props => props.fontSize};
`;

export const Label = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;


