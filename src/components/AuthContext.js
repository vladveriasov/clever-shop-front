// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState({
        id: null,
        email: null,
        role: null,
    });

    const login = (user) => {
        setCurrentUser(user);
        setIsAuthenticated(true);
    };

    const logout = () => {
        setCurrentUser({
            id: null,
            email: null,
            role: null,
        });
        setIsAuthenticated(false);
        window.localStorage.clear();
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
