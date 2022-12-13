import styled from "styled-components";

export const ChangePasswordBase = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${props => props.padding};;
    margin-top: px;
`;

export const Title = styled.div`
    margin-left: 15px;
    width: 100%;
    font-size: ${props => props.fontSize};
    font-family: 'Libre Franklin', sans-serif;
`;

export const Label = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;


