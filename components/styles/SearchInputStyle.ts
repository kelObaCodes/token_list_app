import styled from "styled-components";
import { colors, borderRadius, transparentBorder, thickBoxShadow } from "./mixins";

export const InputCover = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 1000;
`;

export const SearchInput = styled.input`
    ${thickBoxShadow}
    ${transparentBorder}
    ${borderRadius}

    padding: 10px;
    background: ${colors.white};
    outline: none;
    outline: none;
    width: 100%;
    height: 45px;
    padding: 0 10px 0 40px;
`;

export const ClearSearch = styled.span`
    margin-left: 10px;
    cursor: pointer;
    position: absolute;
    right: 12px;
    top: 10px;
`;
export const SearchIcon = styled.span`
    margin-left: 10px;
    cursor: pointer;
    position: absolute;
    top: 10px;
`;
