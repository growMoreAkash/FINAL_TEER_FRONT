import React, { useState, createContext, useContext } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    const updateIsLogin = (newValue) => {
        setIsLogin(newValue);
    };

    return (
        <LoginContext.Provider value={{ isLogin, updateIsLogin }}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error('useLogin must be used within a LoginProvider');
    }
    return context;
};

export default LoginProvider;
