import axios from 'axios';

export const login = async (email, password) => axios.get('https://jsonplaceholder.typicode.com/todos');
