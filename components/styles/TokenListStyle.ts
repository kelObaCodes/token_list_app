import styled from "styled-components";
import { pTagtextSize } from "./mixins";
import { motion } from "framer-motion";

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

export const TokenListWrapper = styled(motion.div)`
   display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 5%;
`;
