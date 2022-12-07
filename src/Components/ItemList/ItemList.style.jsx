import styled from "styled-components";

export const ItemListBase = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #20224d, #140e24);
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const ItemWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
`;

export const TextWrapper = styled.div`
    width: 100%;
    text-align: center;
    @media screen and (max-width: 768px){
        display: none;
    }
`;