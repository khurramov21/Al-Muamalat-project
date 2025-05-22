import { createContext, useEffect, useState } from "react";
import request from "../Services/Request";

const defaultProvider = {
    loading: true,
    setLoading: () => Boolean,
    register: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true); // boshlanishda true

    //  loadingni render paytida emas, faqat bir marta o'zgartirish
    useEffect(() => {
        setLoading(false);
    }, []);

    const handleRegister = (submitData) => {
        setLoading(true); // register boshlanishida true qilish mumkin
        request.post("/auth/signup", submitData)
            .then((response) => {
                console.log(response?.data?.data);
                window.localStorage.setItem("testUserToken", response?.data?.data?.tokens?.accessToken);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    const handleLogin = (submitData) => {
        setLoading(true);
        request.post("/auth/signin", submitData)
            .then((response) => {
                console.log(response?.data?.data);
                window.localStorage.setItem("testUserToken", response?.data?.data?.tokens?.accessToken);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const value = {
        loading,
        register: handleRegister,
        login: handleLogin,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };