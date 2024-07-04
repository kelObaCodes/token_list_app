import styled from "styled-components";
import {
    colors,
    pTagtextSize,
    headerTagtextSize,
    backgroundStyle,
} from "./mixins";

export const TokenDetailWrapper = styled.div`
    ${backgroundStyle}
`;

export const TokenImage = styled.img`
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
`;

export const TokenName = styled.h1`
    ${headerTagtextSize};
    margin-bottom: 20px;
    word-wrap: break-word;
`;

export const TokenTitle = styled.p`
    ${pTagtextSize};
    color: ${colors.black};
    font-weight: 600;
`;
export const TokenInfo = styled.p`
    ${pTagtextSize};
    color: ${colors.black};
    margin: 5px 0;
    font-weight: 200;
    word-wrap: break-word;
    margin-bottom: 1rem;
`;

export const FavoriteButton = styled.button`
    ${pTagtextSize};
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: ${colors.white};
    color: ${colors.black};
    transition: background-color 0.3s;
    &.is-fav {
        background-color: ${colors.liFiThemeColor};
    }
    &:hover {
        background-color: ${colors.liFiLightColor};
    }
`;
