import React, { useEffect } from "react";
import { TabsContainer, TabButton } from "./styles/TabsStyle";
import { useRouter } from "next/router";

interface TabsProps {
  currentTab: "all" | "favorites";
  handleTabChange: (tab: "all" | "favorites") => void;
  setSearchTerm: (term: string) => void;
  setCurrentTab: (tab: "all" | "favorites") => void;
}

const Tabs: React.FC<TabsProps> = ({
  currentTab,
  handleTabChange,
  setSearchTerm,
  setCurrentTab,
}) => {
  const router = useRouter();

  const handleTabClick = (tab: "all" | "favorites") => {
    handleTabChange(tab);
    setSearchTerm("");

    router.push(
      {
        pathname: router.pathname,
        query: { tab },
      },
      undefined,
      { shallow: true }
    );
  };

  useEffect(() => {
    const tab = router.query.tab as string;
    if (tab === "all" || tab === "favorites") {
      setCurrentTab(tab);
    }
  }, [router.query.tab, setCurrentTab]);

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
