import styled from "styled-components";
import { ContainerFlex, ContainerForm, ContainerInputs } from "../../App.styled";

export const CtForm = styled.div`
    ${ContainerForm};
`;

export const CtInputs = styled.div`
    ${ContainerInputs};
    justify-content: space-evenly;
`;

export const TxtTitle = styled.h3`
    color: var(--light-color);
    font-size: var(--subtitle-font-size);
`;

export const CtButtons = styled.div`
    ${ContainerFlex};
    gap: 20px;
`;