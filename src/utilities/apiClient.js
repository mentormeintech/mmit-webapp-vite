import { setToken, useAxios } from "./axiosClient";
import { accessToken, getValidToken } from "./tokenClient";

setToken(getValidToken())
export const signInUser = async (url, formData) => {
    try {
        const response = await useAxios.post(`/${url}`, formData);
        const { data, status } = response;
        if (status !== 200 && data.success === false) {
            return { data: {}, status, success: data.success, message: data?.message };
        } else if (status === 200 && data.success === true) {
            sessionStorage.setItem(`${accessToken}`, data.token)
            localStorage.setItem(`${accessToken}`, data.token)
            await setToken(data.token)
            return { data: data.payload, status, success: data.success, message: data?.message, token: data.token };
        }
    } catch (error) {
        return { status: error?.response?.status || 500, message: error?.response?.data?.message || error?.message, success: false };
    }
};

export const signUpMentorStep2 = async (url, formData) => {
    try {
        const response = await useAxios.post(`/${url}`, formData);
        const { data, status } = response;
        if (status !== 200) {
            return { data: {}, status, success: false, message: data?.message || response?.response?.data?.message };
        } else if (status === 200 && data.success === true) {
            return { data: data.payload, status, success: data.success, message: data?.message };
        }
    } catch (error) {
        return { status: error?.response?.status || 500, message: error?.response?.data?.message || error?.message, success: false };
    }
};

export const createUser = async (url, formData) => {
    try {
        const response = await useAxios.post(`/${url}`, formData);
        const { data, status } = response;
        if (status === 200 && data.success === false) {
            return { data: {}, status, success: data.success, message: data?.message };
        } else if (status === 200 && data.success === true) {
            return { data: data.payload, status, success: data.success, message: data?.message };
        }
    } catch (error) {
        return { status: error?.response?.status || 500, message: error?.response?.data?.message || error?.message, success: false };
    }
};

export const userDashboard = async (url) => {
    try {
        await setToken(localStorage.getItem(accessToken))
        const response = await useAxios.get(`/${url}`);
        const { data, status } = response;
        if (status !== 200 && data.success === false) {
            return { data: {}, status, success: false, message: data?.message || error?.response?.data?.message };
        } else if (status === 200 && data.success === true) {
            return { data: data.payload, status, success: data.success, message: data?.message };
        }
    } catch (error) {
        return { status: error?.response?.status || 500, message: error?.response?.data?.message || error?.message, success: false };
    }
};

export const postRequest = async (url, formData) => {
    try {
        const response = await useAxios.post(`/${url}`, formData);
        const { data, status } = response;
        if (status !== 200) {
            return { data: {}, status, success: data.success, message: data?.message };
        } else if (status === 200 && data.success === true) {
            return { data: data.payload, status, success: data.success, message: data?.message };
        }
    } catch (error) {
        return { status: error?.response?.status || 500, message: error?.response?.data?.message || error?.message, success: false };
    }
};

export const userGetRequest = async (url) => {
    try {
        const response = await useAxios.get(`/${url}`);
        const { data, status } = response;
        if (status !== 200 && data.success === false) {
            return { data: {}, status, success: data.success, message: data?.message };
        } else if (status === 200 && data.success === true) {
            return { data: data.payload, status, success: data.success, message: data?.message };
        }
    } catch (error) {
        return { status: error?.response?.status || 500, message: error?.response?.data?.message || error?.message, success: false };
    }
};

export const putRequest = async (url, formData) => {
    try {
        const response = await useAxios.put(`/${url}`, formData);
        const { data, status } = response;
        if (status !== 200 && data.success === false) {
            return { data: {}, status, success: data.success, message: data?.message };
        } else if (status === 200 && data.success === true) {
            return { data: data.payload, status, success: data.success, message: data?.message };
        }
    } catch (error) {
        return { status: error?.response?.status || 500, message: error?.response?.data?.message || error?.message, success: false };
    }
};

export const logUserOut = async (url) => {
    try {
        sessionStorage.removeItem(`${accessToken}`)
        sessionStorage.removeItem('persist:MENTOR_ME_REDUX_STATE_STORE')
        localStorage.removeItem(`${accessToken}`)
        // return redirect('/auth/signin')
        // return window.location.href = '/auth/signin'
        // const response = await useAxios.delete(`/${url}`);
        // const { data, status } = response;
        // if (status === 200 && data.success === false) {
        //     return { data: {}, status, success: data.success, message: data?.message };
        // } else if (status === 200 && data.success === true) {
        //     return { data: data.payload, status, success: data.success, message: data?.message };
        // }
    } catch (error) {
        return { status: error?.response?.status || 500, message: error?.response?.data?.message || error?.message, success: false };
    }
};

// export const createUserWithGoogleSignIn = async (formData) => {
//     try {
//         const response = await useAxios.post(`/user/social`, formData);
//         const { data, status } = response;
//         if (status === 200 && data.success === false) {
//             return { data: {}, status, success: data.success, message: data?.message };
//         } else if (status === 200 && data.success === true) {
//             return { data: data.payload, status, success: data.success, message: data?.message };
//         }
//     } catch (error) {

//         return { status: error?.response?.status || 500, message: error?.response?.data?.message || error?.message, success: false };
//     }
// };


// export const signInUserUsingGoogle = async (formData) => {
//     try {
//         const response = await useAxios.post(`/user/social/google`, formData);
//         const { data, status } = response;
//         if (status === 200 && data.success === false) {
//             return { data: {}, status, success: data.success, message: data?.message };
//         } else if (status === 200 && data.success === true) {
//             await storeData(accessToken, data.token)
//             await AsyncStorage.setItem(`${accessToken}`, data.token)
//             setToken(getValidToken())
//             return { data: data.payload, status, success: data.success, message: data?.message, token: data.token };
//         }
//     } catch (error) {

//         return { status: error?.response?.status || 500, message: error?.response?.data?.message || error?.message, success: false };
//     }
// };


