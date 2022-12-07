import styled from "styled-components";

export const UserInfoBase = styled.div`
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
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Section1 = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    display: flex;
    margin: 15px 0px;
    align-items: center;
`;


export const Section2 = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    display: flex;
    margin: 15px 0px;
    align-items: center;
    justify-content: space-between;
`;


export const Title = styled.div`
`;
