import axios from "axios";

axios.defaults.baseURL = 'https://64b01d3dc60b8f941af54048.mockapi.io/api/v1/';


export const loadUsers = async function (page, filter) {
    let param = '';
    switch (filter) {
        case 'all': 
            param = `/users?page=${page}&limit=3`;
            break;
        case 'followings': 
            param = `/users?status=true&page=${page}&limit=3`;
            break;
        case 'follow': 
            param = `/users?status=false&page=${page}&limit=3`;
            break;
        default: {}
    }
    const response = await axios.get(param);
    return response.data;
}

export const updateFollowers = async function (id, followers, status) {
    const response = await axios.put(`/users/${id}`,{followers: followers, status: status});
    return response.data;
}


