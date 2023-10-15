import axios from "axios";

axios.defaults.baseURL = 'https://64b01d3dc60b8f941af54048.mockapi.io/api/v1/';


export const loadUsers = async function (page) {
    const response = await axios.get(`/users?page=${page}&limit=3`);
    return response.data;
}

export const updateFollowers = async function (id, followers) {
    const response = await axios.put(`/users/${id}`,{followers: followers} );
    return response.data;
}


