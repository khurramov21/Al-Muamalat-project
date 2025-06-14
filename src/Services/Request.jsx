import axios from "axios";

const request = axios.create({
   headers: {
    "Content-Type": "application/json",
   },
   baseURL: "https://api.al-muamalat.uz/api",
   params: {}
})

request.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("testUserToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  

request.interceptors.request.use(
    (response) => {
        return response
    },
    (error) => {
        const statusCode = error?.response
        if(statusCode === 401){
            window.localStorage.clear()
        }
        return Promise.reject(error)
    }
)

export default request
 