import styled from "styled-components";

export const ProfileBase = styled.div`
    height: 88%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Section = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    display: flex;
    margin: 15px 0px;
    align-items: center;
    justify-content: center;
`;

