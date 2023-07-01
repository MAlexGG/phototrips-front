import styled from "styled-components";

import { ContainerContentForm, ContainerFlex, ContainerForm, ContainerInput, ContainerInputs, Input, Label, TextError } from "../../App.styled";

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

export const CtInput = styled.div`
    ${ContainerInput};
`;

export const Inpt = styled.input`
    ${Input};
`;

export const Labl = styled.label`
    ${Label};
`;

export const TxtError = styled.span`
    ${TextError};
`;