import styled, { css } from "styled-components";
import { ContainerFlex } from "../../App.styled";

export const CtMenuNav = styled.div`
    ${ContainerFlex};
    flex-direction: column;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 1;
    width: 280px;
`;

export const CtMenuNavClose = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 280px;
`;

export const CtNav = styled.div`
    ${ContainerFlex};
    justify-content: space-between;
    width: 157px;
`;

export const ImgNav = styled.img`
    width: auto;
    height: 38px;
`;

export const CtUser = styled.button`
    width: 50px;
    height: 50px;
    background-color: var(--dark-color);
    ${ContainerFlex};
    box-shadow: 0px 2px 7px 0px var(--transparency-color);    
    border: none;
    z-index: 1;
`;

export const ImgUser = styled.img`
    width: auto;
    height: 38px;
`;

export const CtAuth = styled.div`
    ${ContainerFlex};
    flex-direction: column;
    width: 280px;
    background-color: var(--dark-color);
    padding-top: 5px;
`;

const TxtNav = css`
    color: var(--light-color);
    font-size: var(--subtitle-font-size);
    padding: 10px;
`;

export const TxtNavProfile = styled.p`
    ${TxtNav};
    border-bottom: 2px solid var(--light-color);
`;

export const TxtNavLogout = styled.button`
    ${TxtNav};
    border: none;
    background-color: transparent;
`;