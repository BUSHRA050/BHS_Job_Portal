import axios from "axios";
let baseUrl = "http://192.168.10.13:5000/api/";
// let baseUrl = "https://web-production-ec73.up.railway.app/api/";
// let baseUrl = "https://web-production-ab509.up.railway.app/api/";
// let baseUrl = "https://bhs-server.vercel.app/api/"

 
const api = async (path, params, method) => {
    let options;
    options = {
        headers: {
            "Content-Type": "application/json",
        },
        method: method,
        ...(params && { data: JSON.stringify(params) }),
    };
    console.log("options", options);
    return axios(baseUrl + path, options)
        .then((response) => {
            return response;
        })
        .catch(async (error) => {
            return error.response;
        });
};

export default api;
