import styled from "styled-components";

export const CtBackground = styled.div`
    height: 100vh;
`;

export const CtImgBackground = styled.div`
    width: 100vw;
    height: 20%;
    overflow: hidden;
`;

export const ImgBackground = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.3);
    &:hover{
        ${({isHover}) => isHover ? 'filter: brightness(1)' : 'filter: brightness(0.3)'}
    }
`;