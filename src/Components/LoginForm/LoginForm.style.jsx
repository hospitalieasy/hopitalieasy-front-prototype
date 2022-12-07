import "..//..//utilities/fonts/font.css"

import styled from "styled-components";

export const LoginFormBase = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
`;

export const FormWrapper = styled.div`
    /* width: 70%;
    height: 70%; */
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px;
`;

export const Title = styled.div`
    font-size: ${props => props.fontSize};
    width: 100%;
    font-family: 'Montserrat', sans-serif;
`;

export const Label = styled.div`
    
`;

export const Text = styled.div`
    
`;


