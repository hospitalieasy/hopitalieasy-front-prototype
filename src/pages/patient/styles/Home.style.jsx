import styled from "styled-components";

export const HomeBase = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Section = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    display: flex;
    justify-content: space-between;
    margin: 15px 0px;
`;


export const Title = styled.div`
`;
