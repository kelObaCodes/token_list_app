import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, boxShadow  } from "./mixins";

export const TokenItemWrapper = styled(motion.div)`
${boxShadow}
    text-align: center;
    border-radius: 5px;
    transition: 0.8s;
    background-color: ${colors.white};
    border: 1px solid #f0f2f3;
    box-sizing: border-box;
    position: relative;
    padding: 20px;

    &:hover {
        transition: 0.8s;
        background-color: ${colors.grey};
        box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 0px;
        cursor: pointer;
    }
`;

export const TokenImage = styled.img`
    width: 130px;
    height: 130px;
    margin-bottom: 10px;
`;

export const TokenName = styled.h3`
    margin: 10px 0;
    word-wrap: break-word;
    box-sizing: border-box;
`;

export const TokenAddress = styled.p`
    color: ${colors.black};
    word-wrap: break-word;
`;

export const FavoriteIcon = styled.span<{ isFavorite: boolean }>`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: ${(props) => (props.isFavorite ? colors.liFiThemeColor : colors.grey)};
`;
