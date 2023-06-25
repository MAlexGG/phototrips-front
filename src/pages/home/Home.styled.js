import styled from "styled-components";
import { ContainerFlex } from "../../App.styled";

export const CtHome = styled.div`
    ${ContainerFlex};
`;

export const TxtTitle = styled.h1`
    font-size: 7.5rem;
    color: var(--light-color);
    position: absolute;
    left: 25%;
    top: 40%;
`;

export const CtBackground = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    height: 100vh;
`;

export const ImgBackground = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.3);
    &:hover{
        filter: brightness(1);
    }
`;