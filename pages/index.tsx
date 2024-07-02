import Overview from "../components/Overview";
import { GetServerSideProps } from "next";
import { Token } from "../utils/tokenInterface";
import { fetchTokens } from "./api";

interface HomePageProps {
    tokens: Token[];
}

const Home: React.FC<HomePageProps> = ({ tokens }) => {
    return (
        <>
            <Overview tokens={tokens} />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const tokens = await fetchTokens();
    return { props: { tokens } };
};

export default Home;
