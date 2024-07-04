import React from "react";
import { TabsContainer, TabButton } from "./styles/TabsStyle";
import { useRouter } from "next/router";

interface TabsProps {
    currentTab: "all" | "favorites";
    handleTabChange: (tab: "all" | "favorites") => void;
    setSearchTerm: (term: string) => void;
}

const Tabs: React.FC<TabsProps> = ({
    currentTab,
    handleTabChange,
    setSearchTerm,
}) => {
    const router = useRouter();

    const handleTabClick = (tab: typeof currentTab) => {
        handleTabChange?.(tab);

        setSearchTerm("");
        const { search, ...rest } = router.query;
        router.push(
            {
                pathname: router.pathname,
                query: "",
            },
            undefined,
            { shallow: true }
        );
    };

    return (
        <TabsContainer>
            <TabButton
                className={currentTab === "all" ? "active" : ""}
                onClick={() => handleTabClick("all")}
            >
                All Tokens
            </TabButton>
            <TabButton
                className={`button-2 ${
                    currentTab === "favorites" ? "active" : ""
                }`}
                onClick={() => handleTabClick("favorites")}
            >
                Favorites
            </TabButton>
        </TabsContainer>
    );
};

export default Tabs;
