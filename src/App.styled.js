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

export const ContainerInputs = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 354px;
    height: 354px;
    background-color: var(--dark-color);

`;