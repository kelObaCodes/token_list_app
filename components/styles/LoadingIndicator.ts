import styled,  { keyframes } from "styled-components";
import {
    colors
} from "./mixins";


const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;

    &::before {
        content: "";
        width: 50px;
        height: 50px;
        border-top: 5px solid ${colors.black};
        border-radius: 50%;
        animation: ${spin} 1s linear infinite;
    }
`;

export default Loader;
