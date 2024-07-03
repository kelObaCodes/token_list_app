import styled from "styled-components";

export const TokenDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 20px auto;
    max-width: 600px;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
`;

export const TokenImage = styled.img`
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
`;

export const TokenName = styled.h1`
    font-size: 2em;
    margin-bottom: 20px;
`;

export const TokenInfo = styled.p`
    font-size: 1em;
    color: #666;
    margin: 5px 0;
`;

interface FavoriteButtonProps {
    isFavorite: boolean;
}

export const FavoriteButton = styled.button<FavoriteButtonProps>`
    padding: 10px 20px;
    margin-top: 20px;
    font-size: 1em;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: ${(props) => (props.isFavorite ? "#ff4d4d" : "#4caf50")};
    color: white;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${(props) =>
            props.isFavorite ? "#ff1a1a" : "#45a049"};
    }
`;
