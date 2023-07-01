import styled from "styled-components";
import bg from "../../assets/img/background/Asia.webp";
import { ContainerFlex } from "../../App.styled";

export const CtCountriesPage = styled.div`
    ${ContainerFlex};
    flex-direction: column;
    background-image: linear-gradient(to right,rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(${bg});
    width: 100%;
    padding: 50px;
`;

export const CtCountries = styled.div`
    ${ContainerFlex};
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 50px;
    width: 100%;
`;

export const TxtTitle = styled.h2`
    color: var(--light-color);
    font-size: var(--title-font-size);
`;

