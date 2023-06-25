import styled from "styled-components";

export const CtInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
`;

export const Inpt = styled.input.attrs(props => ({
    type: props.type,
    placeholder: props.placeholder
    }))`
    width: 250px;
    height: 35px;
    background: var(--light-color);
    border: none;
    padding-left: 10px;
    color: var(--dark-color);
    box-shadow: 0px 2px 7px 0px var(--transparency-color);
`;

export const Labl = styled.label`
    color: var(--light-color);
    font-size: var(--text-font-size);
`;

export const TxtError = styled.span`
    color: var(--alert-color);
    font-size: var(--text-font-size);
`;