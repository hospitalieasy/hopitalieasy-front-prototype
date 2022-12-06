import styled from "styled-components";

export const SlideShowBase = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: ${props => props.padding};
    background: ${props => props.background};
    width: ${props => props.width};
    height: ${props => props.height};
`;

export const ImageContainer = styled.div`
    height: 100%;
    width: 100%;
    border: 1px solid;
    border-color: #fff;
    border-radius: 10px;
`;

export const Content = styled.div`
    display: flex;  
    justify-content: center;
    color: #fff;
`;

/* export const ButtonContainer = styled.div`
    height: 20%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`; */