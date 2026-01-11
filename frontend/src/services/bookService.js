import axios from "axios";

const API_URL = "http://localhost:5000/api/books";

export const fetchBooks = () => {
  return axios.get(API_URL);
};

export const deleteBook = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
