import styled from "styled-components";

export const HomeBase = styled.div`
    height: 88%;
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

