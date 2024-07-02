import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

import { fetchTokenDetails, fetchTokens } from "../../api";
import { Token } from "../../../utils/tokenInterface";
import TokenDetail from "@/components/TokenDetail";

interface TokenDetailProps {
    token: Token;
}

const TokenDetailHome: React.FC<TokenDetailProps> = ({ token }) => {
    return (
        <>
            <TokenDetail token={token} />
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const tokens: Token[] = await fetchTokens();
    const paths = tokens.map((token) => ({
        params: {
            chainId: token.chainId.toString(),
            address: token.address,
        },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const chainId = params?.chainId as string;
    const address = params?.address as string;

    if (!chainId || !address) {
        return { notFound: true };
    }

    const token = await fetchTokenDetails(params);

    return {
        props: {
            token,
        },
        revalidate: 60,
    };
};

export default TokenDetailHome;
