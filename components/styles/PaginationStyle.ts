import styled from "styled-components";

import { colors, borderRadius, borderColor } from "./mixins";

export const PaginationContainer = styled.div`
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    position: sticky;
    bottom: 0;
    left: 20%;
    right: 20%;
    background-color: ${colors.white};
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const PaginationButton = styled.button`
    ${borderRadius}
    ${borderColor}
  margin: 0 5px;
    background-color: ${colors.white};
    height: 30px;
    width: 90px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    transition: 0.8s;

    &:hover {
        transition: 0.8s;
        background-color: ${colors.liFiLightColor};
    }
`;
export const RightPaginationButton = styled(PaginationButton)`
    right: 0;
`;
export const LeftPaginationButton = styled(PaginationButton)`
    left: 0;
`;
