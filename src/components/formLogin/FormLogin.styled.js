import styled from "styled-components";

import { ContainerContentForm, ContainerFlex, ContainerForm, ContainerInputs } from "../../App.styled";

export const CtForm = styled.form`
    ${ContainerForm};
`;

export const CtContentForm = styled.div`
    ${ContainerContentForm};
`;

export const CtInputs = styled.div`
    ${ContainerInputs};
`;

export const TxtTitle = styled.h3`
    color: var(--light-color);
    font-size: var(--subtitle-font-size);
`;

export const CtButtons = styled.div`
    ${ContainerFlex};
    gap: 20px;
`;