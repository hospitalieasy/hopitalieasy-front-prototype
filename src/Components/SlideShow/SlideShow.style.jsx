import "..//..//utilities/fonts/font.css"

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
`;

export const Content = styled.div`
    padding: 8px 30px;
`;

export const Title = styled.div`
    font-size: 30px;
    color: ${props => props.color};
    margin-bottom: 30px;
    font-family: 'Montserrat', sans-serif;
`;

export const Label = styled.div`
    font-size: 22px;
    color: ${props => props.color};
    margin-bottom: 30px;
    font-family: 'Montserrat', sans-serif;
`;

export const Description = styled.div`
    font-size: 18px;
    color: ${props => props.color};
    font-family: 'Barlow', sans-serif;
`;

/* export const ButtonContainer = styled.div`
    height: 20%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`; */