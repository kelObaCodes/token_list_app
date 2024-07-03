import styled from "styled-components";
import { motion } from "framer-motion";

export const TokenItemWrapper = styled(motion.div)`
    text-align: center;
    border: 1px solid transparent;
    border-radius: 5px;
    transition: 0.8s;
    background-color: #fff;
    border: 1px solid #f0f2f3;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px;
    border: 1px solid #f0f2f3;
    box-shadow: 0 1px 6px #00000005;
    box-sizing: border-box;
    position: relative;
    padding: 20px;

    &:hover {
        transition: 0.8s;
        background-color: #f8f8f8;
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
    color: #666;
    word-wrap: break-word;
`;

export const FavoriteIcon = styled.span<{ isFavorite: boolean }>`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: ${(props) => (props.isFavorite ? "#f5b5ff" : "gray")};
`;
