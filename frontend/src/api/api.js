import axios from 'axios';

const API_URL = 'http://localhost:8080/api/posts';

export const fetchPosts = () => axios.get(API_URL);
export const fetchPostsByCategory = (category) => axios.get(`${API_URL}/category/${category}`);
export const createPost = (post) => axios.post(API_URL, post);
export const deletePost = (id) => axios.delete(`${API_URL}/${id}`);
