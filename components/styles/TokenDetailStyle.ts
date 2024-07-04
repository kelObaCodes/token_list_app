import styled from "styled-components";
import { colors, pTagtextSize, headerTagtextSize, backgroundStyle } from "./mixins";

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
`;

export const TokenInfo = styled.p`
    ${pTagtextSize};
    color: ${colors.black};
    margin: 5px 0;
`;

interface FavoriteButtonProps {
    isFavorite: boolean;
}

export const FavoriteButton = styled.button<FavoriteButtonProps>`
    ${pTagtextSize};
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: ${(props) =>
        props.isFavorite ? `${colors.liFiThemeColor}` : `${colors.white}`};
    color: ${colors.black};
    transition: background-color 0.3s;

    &:hover {
        background-color: ${colors.grey};
    }
`;
