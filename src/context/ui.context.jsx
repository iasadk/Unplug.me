"use client";
import React from "react";

const initialState = {
    displayInfoModal: false,
    displayMainInfoModal: false,
    displayBlockListSidebar: false,
    mode: "home",
    forceRerenderBlockList: true
};

export const UIContext = React.createContext(initialState);

UIContext.displayName = "UIContext";

function uiReducer(state, action) {
    switch (action.type) {
        case "OPEN_INFO_MODAL": {
            return {
                ...state,
                displayInfoModal: true,
            };
        }
        case "CLOSE_INFO_MODAL": {
            return {
                ...state,
                displayInfoModal: false,
            };
        }
        case "OPEN_MAIN_INFO_MODAL": {
            return {
                ...state,
                displayMainInfoModal: true,
            };
        }
        case "CLOSE_MAIN_INFO_MODAL": {
            return {
                ...state,
                displayMainInfoModal: false,
            };
        }
        case "OPEN_BLOCK_LIST_SIDEBAR": {
            return {
                ...state,
                displayBlockListSidebar: true,
            };
        }
        case "CLOSE_BLOCK_LIST_SIDEBAR": {
            return {
                ...state,
                displayBlockListSidebar: false,
            };
        }
        case "SET_MODE": {
            return {
                ...state,
                mode: action.mode,
            };
        }
        case "SET_FORCE_RENDER_BLOCKLIST": {
            return {
                ...state,
                forceRerenderBlockList: action.rerender,
            };
        }
        default:
            return null;
    }
}


export function UIProvider(props) {
    const [state, dispatch] = React.useReducer(uiReducer, initialState);

    const openInfoModal = () => { dispatch({ type: "OPEN_INFO_MODAL" }); }
    const closeInfoModal = () => { dispatch({ type: "CLOSE_INFO_MODAL" }); }
    const openMainInfoModal = () => { dispatch({ type: "OPEN_MAIN_INFO_MODAL" }); }
    const closeMainInfoModal = () => { dispatch({ type: "CLOSE_MAIN_INFO_MODAL" }); }
    const openBlockListSidebar = () => { dispatch({ type: "OPEN_BLOCK_LIST_SIDEBAR" }); }
    const closeBlockListSidebar = () => { dispatch({ type: "CLOSE_BLOCK_LIST_SIDEBAR" }); }
    const setMode = (mode) => {
        dispatch({ type: "SET_MODE", mode });
    }
    const setForceRender = (rerender) => {
        dispatch({ type: "SET_FORCE_RENDER_BLOCKLIST", rerender });
    }

    const value = React.useMemo(
        () => ({
            ...state,
            openInfoModal,
            closeInfoModal,
            openBlockListSidebar,
            closeBlockListSidebar,
            setMode,
            openMainInfoModal,
            closeMainInfoModal,
            setForceRender
        }),
        [state]
    );

    return <UIContext.Provider value={value} {...props} />;
}

export const useUI = () => {
    const context = React.useContext(UIContext);
    if (context === undefined) {
        throw new Error(`useUI must be used within a UIProvider`);
    }
    return context;
};

export function ManagedUIContext({ children }) {
    return (

        <UIProvider>{children}</UIProvider>

    );
}