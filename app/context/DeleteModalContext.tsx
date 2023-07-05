"use client";

import React, { createContext, useState, useContext } from "react";

interface Props {
    children?: React.ReactNode;
}

export const DeleteModalContext = createContext({
    isOpen: false,
    toggleOpen: () => {},
});

export const DeleteModalProvider: React.FC<Props> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return (
        <DeleteModalContext.Provider value={{ isOpen, toggleOpen }}>
            {children}
        </DeleteModalContext.Provider>
    );
};

export const useDeleteModal = () => useContext(DeleteModalContext);
