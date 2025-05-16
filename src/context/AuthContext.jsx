import { createContext, useState } from "react";

const defaultProvider = {
    loading:true,
    setLoading:()=> Boolean,
    register:()=> Promise.resolve(),
    login:()=> Promise.resolve(),
}

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(defaultProvider?.loading)

    const handleRegister = (submitData) => {
        setLoading(false)
        request.post("/auth/signup", submitData)
        .then((response) => {
            console.log(response?.data?.data)
            window.localStorage.setItem("testUserToken", response?.data?.data?.tokens.accessToken)
        })
        .catch((err) => {
            console.log(err); 
        })
        .finally(() => {
            setLoading(true)
        })
    }

    const handleLogin = (submitData) => {
        setLoading(false)
        request.post("/auth/signin", submitData)
        .then((response) => {
            console.log(response?.data?.data)
            window.localStorage.setItem("testUserToken", response?.data?.data?.tokens.accessToken)
        })
        .catch((err) => {
            console.log(err); 
        })
        .finally(() => {
            setLoading(true)
        })
    }

    const values = {
        loading,
        register:handleRegister,
        login:handleLogin,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}
