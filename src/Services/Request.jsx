import axios from "axios";

const request = axios.create({
   headers: {
    "Content-Type": "application/json",
   },
   baseURL: "https://api.al-muamalat.uz/api",
   params: {}
})

request.interceptors.response.use(
    (response) => {
        const token = localStorage.getItem("testUserToken")
        if(token){
            response.headers["Authorization"] = `Bearer ${token}`
        }
        return response
    },
    (error) => {
        console.log(error);
        return Promise.reject(error)
    }
)

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

export {request}
 