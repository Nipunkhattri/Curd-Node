import axios from "axios"

const Api = axios.create({
    baseURL:"http://localhost:5000/"
})

export const getdata = () => Api.get("/api/get/"); 
export const postcontact = (values) => Api.post("/api/post/",values); 
export const deletecontact = (email) => Api.delete(`/api/remove/${email}/`);
export const updatecontact = (values,email) => Api.put(`/api/update/${email}/`,values);