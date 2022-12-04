import styled from "styled-components";

export const SlideShowBase = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px;
`;

export const ImageContainer = styled.div`
    height: 100%;
    width: 70%;
    border: 1px solid;
    border-color: #fff;
    border-radius: 10px;
`;

export const Content = styled.div`
    display: flex;  
    justify-content: center;
    color: #fff;
`;

export const ButtonContainer = styled.div`
    height: 20%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;