import React from "react";
import { TabsContainer, TabButton } from "./styles/TabsStyle";

interface TabsProps {
    currentTab: "all" | "favorites";
    handleTabChange: (tab: "all" | "favorites") => void;
}

const Tabs: React.FC<TabsProps> = ({ currentTab, handleTabChange }) => {

    return (
        <TabsContainer>
            <TabButton
                className={currentTab === "all" ? "active" : ""}
                onClick={() => handleTabChange("all")}
            >
                All Tokens
            </TabButton>
            <TabButton
           className={`button-2 ${currentTab === "favorites" ? "active" : ""}`}
                onClick={() => handleTabChange("favorites")}
            >
                Favorites
            </TabButton>
        </TabsContainer>
    );
};

export default Tabs;
