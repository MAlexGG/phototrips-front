import styled, { css } from "styled-components";
import { ContainerFlex } from "../../App.styled";

export const CtMenuAuth = styled.div`
    ${ContainerFlex};
    flex-direction: column; 
    align-items: flex-end;
    width: 280px;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 1;
`;

export const BtMenuAuth = styled.button`
    ${ContainerFlex}; 
    border: none;
    background-color: transparent;   
    margin-bottom: 5px;
`;

export const CtAuth = styled.div`
    ${ContainerFlex};
    flex-direction: column;
    width: 215px;
    background-color: var(--light-color);
    padding-top: 5px;
`;

const TxtNav = css`
    color: var(--dark-color);
    font-size: var(--subtitle-font-size);
    padding: 10px;
`;

export const TxtNavSignIn = styled.p`
    ${TxtNav};
    border-bottom: 2px solid var(--dark-color);
`;

export const TxtNavLogIn = styled.p`
    ${TxtNav};
`;