import { useEffect, useState } from "react";

const useFavorites = (setNotificationMessage: (message: string) => void) => {
    const [favorites, setFavorites] = useState<string[]>([]);

    const handleToggleFavorite = (tokenAddress: string, TokenName: string) => {
        let updatedFavorites;
        let message;

        if (favorites.includes(tokenAddress)) {
            updatedFavorites = favorites.filter((fav) => fav !== tokenAddress);
            message = `${TokenName} removed from your favorites`;
        } else {
            updatedFavorites = [...favorites, tokenAddress];
            message = `${TokenName} Added to your favorites`;
        }

        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setNotificationMessage(message);
    };

    useEffect(() => {
        setFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
    }, []);

    return { favorites, handleToggleFavorite };
};

export default useFavorites;
