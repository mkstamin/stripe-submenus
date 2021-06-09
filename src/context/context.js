import React, { useState } from 'react';
import sublinks from '../data/data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [subPage, setSubPage] = useState({ page: '', links: [] });
    const [usbmenuLocation, setUsbmenuLocation] = useState({});

    const sidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const submenuOpen = (e) => {
        const navValue = e.target.textContent;
        const position = e.target.getBoundingClientRect();
        const center = (position.left + position.right) / 2;

        setUsbmenuLocation({ center });

        if (navValue) {
            const page = sublinks.find((link) => link.page === navValue);
            setSubPage(page);
        }

        setIsSubmenuOpen(true);
    };

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    return (
        <AppContext.Provider
            value={{
                isSidebarOpen,
                sidebarToggle,
                isSubmenuOpen,
                submenuOpen,
                subPage,
                closeSubmenu,
                usbmenuLocation,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
