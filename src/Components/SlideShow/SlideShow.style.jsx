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
    height: 100%;
    padding: 24px;
    
    @media screen and (min-width: 881px) and (max-width: 1500px) {
        margin-bottom: 30px;
    }

    @media screen and (min-width: 856px) and (max-width: 1028px) {
        margin-top: 30px;
    }

    
    @media screen and (min-width: 701px) and (max-width: 880px) {
        margin-bottom: 10px;
    }

    @media screen and (min-width: 586px) and (max-width: 700px) {
        margin-bottom: 0px;
        margin-top: 20px;
    }
`;

export const ContentImage = styled.div`
    padding: ${props => props.padding};
`;

export const Title = styled.div`
    font-size: 30px;
    color: ${props => props.color};
    margin-bottom: 30px;

    @media screen and (max-width: 635px) {
        font-size: 24px;
    }

    @media screen and (min-width: 636px) and (max-width: 768px) {
        font-size: 28px;
    }
`;

export const Label = styled.div`
    font-size: 22px;
    color: ${props => props.color};
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

export const DescriptionHero = styled.div`
    font-size: 18px;
    color: ${props => props.color};

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

export const DescriptionAppScreen = styled.div`
    font-size: 18px;
    color: ${props => props.color};
`;

export const Image = styled.img`
   width: 100%;
   height: 100%;
`;

