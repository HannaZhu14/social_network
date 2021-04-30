import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'bd399e39-afaa-4044-9756-7495ba9042f7'
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
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },
    unfollowUsers(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
    setUserProfile(userId: number) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    }
}

