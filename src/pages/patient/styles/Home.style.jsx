import styled from "styled-components";

export const HomeBase = styled.div`
    height: 86%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Section = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const Box = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: white;
    border-radius: 10px;
    margin: 20px 12px;
`;
