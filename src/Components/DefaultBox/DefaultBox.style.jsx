import styled from "styled-components";

export const DefaultBoxBase = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    background: ${props => props.background};
    display: ${props => props.display};
    border-radius: 10px;
`;