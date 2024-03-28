import axios from "axios"

const REST_API_BASE_URL = 'http://localhost:8080/api/people';

export const createUser=(user)=>axios.post(REST_API_BASE_URL,user);

export const getUser = (email) => axios.get(REST_API_BASE_URL + '/' + email);

