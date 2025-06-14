import { createContext, useEffect, useState } from "react";
import request from "../Services/Request";
import {toast} from "react-toastify";

const defaultProvider = {
    loading: true,
    setLoading: () => Boolean,
    register: () => Promise.resolve(),
    login: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true); // boshlanishda true

    //  loadingni render paytida emas, faqat bir marta o'zgartirish
    useEffect(() => {
        setLoading(false);
    }, []);

    const handleRegister = (submitData, onSuccess, onError) => {
        setLoading(true); // register boshlanishida true qilish mumkin
        request.post("/auth/signup", submitData)
            .then((response) => {
               const token = response?.data?.data?.tokens?.accessToken;
               
               if (token) {
                localStorage.setItem("testUserToken", token);
                toast.success("Register successfully");

                if (onSuccess) onSuccess();
                navigate("/profile");
               }
               else {
                toast.error("Register failed");
               }
            })
            .catch((error) => {
                console.log(error);
                toast.error("Register failed");
                if (onError) onError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleLogin = (submitData, onSuccess, onError) => {
        setLoading(true);
      
        request.post("/auth/signin", submitData)
          .then((response) => {
            const token = response?.data?.data?.tokens?.accessToken;
      
            if (token) {
              localStorage.setItem("testUserToken", token);
              toast.success("Login successfully");
      
              if (onSuccess) onSuccess(); // optional callback
              navigate("/profile"); // login muvaffaqiyatli bo‘lsa, profile sahifasiga yo‘naltirish
            } else {
              toast.error("Token not found");
            }
          })
          .catch((error) => {
            toast.error("Login failed");
            console.error(error);
            if (onError) onError(error); // optional error callback
          })
          .finally(() => {
            setLoading(false);
          });
      };

          // const handleLogin = async (userData, onSuccess, onError) => {
    //     try {
    //       const res = await request.post("/auth/signin", userData);
    //       const token = res?.data?.data?.tokens?.accessToken;
    //       localStorage.setItem("testUserToken", token);
    //       onSuccess();
    //       toast.success("Login successfully");
    //       navigate("/profile");
    //     } catch (err) {
    //       toast.error("Login failed");
    //       if (onError) onError(err);
    //     }
    //   };

    // const handleLogin = (submitData) => {
    //     setLoading(true);
    //     request.post("/auth/signin", submitData)
    //         .then((response) => {
    //             console.log(response?.data?.data);
    //             window.localStorage.setItem("testUserToken", response?.data?.data?.tokens?.accessToken);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // };

    const value = {
        loading,
        register: handleRegister,
        login: handleLogin,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };