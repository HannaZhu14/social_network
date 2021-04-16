import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '27e621ae-a1ae-46df-85e0-bc00ee1a72a2'
    }
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    getUserData() {
        return instance.get(`auth/me`,)
            .then(response => response.data);
    },
    followUsers (id: number) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data);
    },
    unfollowUsers(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    }
}


// export const getUsers = (currentPage: number, pageSize: number) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(response => response.data);
// }

// export const getUserData = () => {
//     return instance.get(`auth/me`,)
//         .then(response => response.data);
// }

// export const followUsers = (id: number) => {
//     return instance.post(`follow/${id}`, {})
//         .then(response => response.data);
// }

// export const unfollowUsers = (id: number) => {
//     return instance.delete(`follow/${id}`)
//         .then(response => response.data);
// }
