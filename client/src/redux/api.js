import axios from "axios"

const Api = axios.create({
    baseURL:"http://localhost:5000/"
})

export const getdata = () => Api.get("/api/get/"); 
export const postcontact = (values) => Api.post("/api/post/",values); 
export const deletecontact = (email) => Api.delete(`/api/remove/${email}/`);
export const updatecontact = (values,email) => Api.patch(`/api/update/${email}/`,values);
export const signUp = (formData) => Api.post("/api/register", formData);
export const login = (formData) => Api.post("/api/login", formData);