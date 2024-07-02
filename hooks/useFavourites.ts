import { useEffect, useState } from "react";

const useFavorites = () => {
    const [favorites, setFavorites] = useState<string[]>([]);

    const handleToggleFavorite = (tokenAddress: string) => {
        let updatedFavorites;
        if (favorites.includes(tokenAddress)) {
            updatedFavorites = favorites.filter((fav) => fav !== tokenAddress);
        } else {
            updatedFavorites = [...favorites, tokenAddress];
        }
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    useEffect(() => {
        setFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
    }, []);

    return { favorites, handleToggleFavorite };
};

export default useFavorites;
