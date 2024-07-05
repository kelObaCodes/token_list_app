import styled from "styled-components";
import { headerTagtextSize, pTagtextSize } from "./mixins";

export const NoTokens = styled.div`
    display: flex;
    height: 60vh;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    flex-direction: column;

    @media (max-width: 768px) {
        img {
            width: 150px;
            height: 150px;
        }
    }
`;
export const NoTokensDescription = styled.p`
    ${pTagtextSize}
    font-weight: 600;
`;
