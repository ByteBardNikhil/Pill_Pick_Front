import axios from "axios"

const REST_API_BASE_URL = 'http://localhost:8080/api/people';
const REST_API_BASE_URL2 = 'http://localhost:8080';


export const createUser=(user)=>axios.post(REST_API_BASE_URL,user);

export const getUser = (email) => axios.get(REST_API_BASE_URL + '/' + email);

export const sendPrescription = (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);
  console.log("Calling REST API");
    return axios.post(`${REST_API_BASE_URL2}/uploadImage`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};