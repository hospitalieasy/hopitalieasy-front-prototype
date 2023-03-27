import styled from "styled-components";

export const HomeBase = styled.div`
    height: 88%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const SectionBanner = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const SectionMap = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
`;

export const ContentWrapper = styled.div`
    height: 90%;
    width: 45%;
    margin: 0px 20px;

    @media screen and (max-width: 904px) {
        width: 100%;
    }
`;

export const Title = styled.div`
    width: 100%;
    color: white;
    font-size: 24px;
    margin: 24px 0px;

    letter-spacing: 1px;
    font-family: 'Roboto Condensed', sans-serif;
    
    @media screen and (max-width: 585px) {
       font-size: 19px;
    }
`;

export const MapWrapper = styled.div`
    height: 65%;
    width: 100%;
    border-radius: 10px;
`;

