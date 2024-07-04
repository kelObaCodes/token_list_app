import { css } from "styled-components";

const colors = {
    white: "#FFFFFF",
    black: "#000",
    liFiThemeColor: "#f5b5ff",
    grey: "#f4f2f2",
    shadowColor: "#00000005",
    borderCol: "#E6E6E6",
};

const boxShadow = css`
    box-shadow: 0 1px 6px ${colors.shadowColor};
`;
const thickBoxShadow = css`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px;
`;
const pTagtextSize = css`
    font-size: 1em;
`;
const headerTagtextSize = css`
    font-size: 2em;
`;
const borderRadius = css`
    border-radius: 5px;
`;
const borderColor = css`
    border: 1px solid ${colors.borderCol};
`;
const transparentBorder = css`
    border: 1px solid ${colors.borderCol};
`;

const backgroundStyle = css`
    padding: 5% 20%;
    background: linear-gradient(
            rgba(234, 243, 246, 0.95),
            rgba(234, 243, 246, 0.95)
        ),
        url("./checked.png");
    background-size: contain;
    background-repeat: no-repeat;

    .material-symbols-outlined {
        font-variation-settings: "FILL" 1, "wght" 300, "GRAD" 0, "opsz" 24;
    }
`;

export {
    colors,
    boxShadow,
    pTagtextSize,
    headerTagtextSize,
    backgroundStyle,
    borderRadius,
    borderColor,
    thickBoxShadow,
    transparentBorder,
};
