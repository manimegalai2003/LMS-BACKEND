import axios from "axios";

const API = "http://localhost:5000/api/issues";

export const getIssues = () => axios.get(API);
export const addIssue = (data) => axios.post(API, data);
export const returnIssue = (id) => axios.delete(`${API}/${id}`);
