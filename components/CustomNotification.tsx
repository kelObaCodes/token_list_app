import React, { useState, useEffect } from "react";
import {
    NotificationContainer,
    NotificationText,
    NotificationIcon
} from "./styles/CustomNotification";

interface NotificationProps {
    message: string;
    keyProp: string;
    duration?: number;
}

const CustomNotification: React.FC<NotificationProps> = ({
    message,
    keyProp,
    duration = 3000,
}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [message, keyProp, duration]);

    if (!visible) return null;

    return (
        <NotificationContainer className={visible ? "visible" : "not-visible"}>
            <NotificationIcon className="material-symbols-outlined">
                notifications_active
            </NotificationIcon>
            <NotificationText>{message}</NotificationText>
        </NotificationContainer>
    );
};

export default CustomNotification;
