import { css } from "styled-components";

export const ContainerFlex = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerForm = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-evenly;
    width: 394px;
    height: 473px;
    background-color: var(--light-color);
    box-shadow: 0px 4px 15px 0px var(--transparency-color);
    position: absolute;
`;

export const ContainerContentForm = css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 354px;
    height: 354px;
    background-color: var(--dark-color);
`;

export const ContainerInputs = css`
    ${ContainerFlex};
    flex-direction: column;
`;

export const ContainerInput = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
`;

export const Input = css`
    width: 270px;
    height: 35px;
    background: var(--light-color);
    border: none;
    padding-left: 10px;
    color: var(--dark-color);
    box-shadow: 0px 2px 7px 0px var(--transparency-color) inset;
`;

export const Label = css`
    color: var(--light-color);
    font-size: var(--text-font-size);
`;

export const TextError = css`
    color: var(--alert-color);
    font-size: var(--small-font-size);
    width: 270px;
    margin-top: 5px;
`;