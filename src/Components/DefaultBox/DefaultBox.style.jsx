import styled from "styled-components";

export const DefaultBoxBase = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    margin-bottom: ${props => props.marginBottom};
    padding: ${props => props.padding};
    background: ${props => props.background};
    display: ${props => props.display};
    border: ${props => props.border};;
    border-radius: 10px;
    
    animation:  0.5s ease-out 0s 1 slideInFromBottom;
    @keyframes slideInFromBottom {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
    }

`;