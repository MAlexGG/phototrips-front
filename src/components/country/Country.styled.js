import styled from "styled-components";

export const CtCountry = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 350px;
    height: 400px;
    background-color: var(--light-color);
    box-shadow: 0px 4px 15px 0px var(--transparency-color);
`;

export const CtImgCountry = styled.div`
    width: 300px;
    height: 300px;
    overflow: hidden;
    margin: 25px;
`;

export const ImgCountry = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const TxtTitle = styled.h3`
    color: var(--dark-color);
    font-size: var(--title-font-size);
`;