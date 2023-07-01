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
    text-align: center;
    z-index: 1;
`;

export const BtClose = styled.button`
    position:absolute;
    top: 10px;
    right: 10px;    
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const ImgClose = styled.img`
    width: 100%;
    height: auto;
`;