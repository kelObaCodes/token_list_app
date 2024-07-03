import React, { useState, useEffect } from 'react';
import {
    NotificationContainer
} from "./styles/CustomNotification";


interface NotificationProps {
    message: string;
    keyProp: string;
    duration?: number;
}

const CustomNotification: React.FC<NotificationProps> = ({ message, keyProp, duration = 3000 }) => {
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
        <NotificationContainer visible={visible}>
            <span>{message}</span>
        </NotificationContainer>
    );
};

export default CustomNotification;
