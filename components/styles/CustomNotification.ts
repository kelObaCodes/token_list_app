import styled, { keyframes } from "styled-components";
import { colors, boxShadow, borderRadius } from "./mixins";

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-20px);
    }
`;

export const NotificationContainer = styled.div<{ visible: boolean }>`
    ${boxShadow}
    ${borderRadius}
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.liFiThemeColor};
    color: ${colors.black};
    padding: 10px 20px;
    z-index: 1000;
    animation: ${({ visible }) => (visible ? fadeIn : fadeOut)} 0.5s forwards;
`;
