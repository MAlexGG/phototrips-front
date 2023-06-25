import styled from "styled-components";
import { ContainerFlex } from "../../App.styled";

export const Bt = styled.button`
    ${ContainerFlex};
    width: 135px;
    height: 45px;
    border: none;
    font-size: var(--button-font-size);
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
    box-shadow: 0px 2px 7px 0px var(--transparency-color);
    
`;