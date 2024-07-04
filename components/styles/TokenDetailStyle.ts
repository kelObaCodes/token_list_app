import styled from "styled-components";
import {
    colors,
    pTagtextSize,
    headerTagtextSize,
    backgroundStyle,
    borderRadius,
    mediumHeaderTagtextSize
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
    ${mediumHeaderTagtextSize};
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
    ${borderRadius};
    background: ${colors.liFiLightColor};
    border: none;
    padding: 0;
    cursor: pointer;
    font-weight: 600;
    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:hover .proceed-btn,
    &:hover .is-fav-hover {
        transform: translateY(-8px);
    }

    &:active .proceed-btn {
        transform: translateY(-3px);
    }
    &:active .is-fav-hover {
        transform: translateY(-3px);
    }

    .proceed-btn,
    .is-fav-hover {
        display: block;
        padding: 12px 42px;
        ${borderRadius};
        ${pTagtextSize};
        color: ${colors.black};
        background: ${colors.white};
        transform: translateY(-6px);
        will-change: transform;
        transition: transform 250ms;
        width: 230px;
    }

    .is-fav-hover {
        padding: 12px 42px;
        background: ${colors.liFiThemeColor};
    }

    &.is-fav {
        background-color: ${colors.liFiLightColor};
    }
    /* display: block;
  padding: 12px 42px;
  border-radius: 12px;
  font-size: 15px;
  color: white;
  background:blue;
  transform: translateY(-4px);
  cursor: pointer;

  .pushable:focus:not(:focus-visible) {
  outline: none;
}

.proceed-btn {
  will-change: transform;
  transition: transform 250ms;
}

.pushable:hover .proceed-btn {
  transform: translateY(-6px);
}

.pushable:active .proceed-btn {
  transform: translateY(-2px);
} */
    /* padding: 10px 20px;
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
    } */
`;
