import styled, { css, keyframes } from "styled-components";
import {
    colors,
    boxShadow,
    borderRadius,
    mediumHeaderTagtextSize,
} from "./mixins";

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
const visibleStyles = css`
    animation: ${fadeIn} 0.5s forwards;
`;

const hiddenStyles = css`
    animation: ${fadeOut} 0.5s forwards;
`;

export const NotificationContainer = styled.div`
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
    .visible {
        ${visibleStyles}
    }
    .not-visible {
        ${hiddenStyles}
    }

    @media (max-width: 768px) {
        right: 10px;
        left: 10px;
    }
`;

export const NotificationText = styled.p`
    ${mediumHeaderTagtextSize}
    padding-left : 1rem;
`;
export const NotificationIcon = styled.span`
  
`;
