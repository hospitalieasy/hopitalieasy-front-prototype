import styled from "styled-components";

export const HomeBase = styled.div`
    height: 85%;
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
    justify-content: center;
`;

export const SectionMap = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 904px) {
       margin-top: 20px;
    }
`;

export const ContentWrapper = styled.div`
    height: 90%;
    width: 45%;
    margin: 0px 16px;

    @media screen and (max-width: 904px) {
        width: 100%;
        margin: 0px 0px;
    }
`;

export const Title = styled.div`
    width: 100%;
    color: white;
    font-size: 24px;
    margin-top: 8px;
    margin-bottom: 16px;
    text-align: center;

    letter-spacing: 1px;
    font-family: 'Roboto Condensed', sans-serif;
    
    @media screen and (max-width: 585px) {
       font-size: 19px;
    }
`;

export const MapWrapper = styled.div`
    height: 70%;
    width: 100%;
    border-radius: 10px;
`;

