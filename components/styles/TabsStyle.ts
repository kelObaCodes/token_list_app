import styled from "styled-components";
import { colors } from "./mixins";

export const TabsContainer = styled.div`
    margin-top: 1rem;
`;

export const TabButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: ${colors.white};
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s, color 0.3s;
    &.button-2 {
        margin-left: 17px;
    }
    &.active {
        background-color: ${colors.liFiThemeColor};
        color: ${colors.black};
    }

    &:hover {
        background-color: ${colors.liFiLightColor};
    }

    &:focus {
        outline: none;
    }
`;
