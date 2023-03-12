import styled from "styled-components";

export const HomeBase = styled.div`
    height: 88%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Box = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: white;
    border-radius: 10px;
    margin: 20px 12px;
`;
