"use client";

import React, { createContext, useState, useContext } from "react";

interface Props {
    children?: React.ReactNode;
}

export const HeadlessModalContext = createContext({
    isOpen: false,
    toggleOpen: () => {},
});

export const HeadlessModalProvider: React.FC<Props> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return (
        <HeadlessModalContext.Provider value={{ isOpen, toggleOpen }}>
            {children}
        </HeadlessModalContext.Provider>
    );
};

export const useHeadlessModal = () => useContext(HeadlessModalContext);
