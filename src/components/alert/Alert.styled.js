import styled from "styled-components";

export const CtAlert = styled.div`
    display: ${(props) => props.isVisible ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 460px;
    height: 205px;
    background-color: var(--light-color);
    padding: 10px;
    position: absolute;
    color: var(--dark-color);
    font-size: var(--subtitle-font-size);
`;

export const BtClose = styled.button`
    position:absolute;
    top: 10px;
    right: 10px;    
    border: none;
    background-color: transparent;
`;

export const ImgClose = styled.img`
    width: 100%;
    height: auto;
`;