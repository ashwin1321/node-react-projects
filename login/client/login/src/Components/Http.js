import axios from "axios";
// import { useNavigate } from "react-router-dom";

const instance = axios.create();


export async function unauthorizedResponseHandlerInterceptor(err) {
    const originalRequest = err.config;
    // const navigate = useNavigate();

    if (!originalRequest) {
        return Promise.reject(err);
    }
    const errorCode = err.response.status;

    if (errorCode !== 401) {
        return Promise.reject(err);
    }
    // debugger;
    if (!originalRequest.headers.accessTokenn) {
        // redirect to logout 
        window.location.href = "/login";
    }

    // if (originalRequestURL === REFRESH_TOKEN_URL) {
    //   logout();

    //   return Promise.reject(err);
    // }

    // Refresh access token from refresh token, if error logout user.
    // try {
    //   // refresh access token 
    // } catch (error) {
    //   err.response && err.response.status === HttpStatus.UNAUTHORIZED && logout();
    // }
}

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => unauthorizedResponseHandlerInterceptor(err)
);

export default instance;