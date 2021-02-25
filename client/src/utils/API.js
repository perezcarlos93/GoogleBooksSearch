/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
	getAllBooks: (q) => {
		return axios.get('/api/google', { params: { q: 'title' + q } });
	},
	getSaved: () => {
		return axios.get('api/books');
	},
	delete: (id) => {
		return axios.delete('api/books/:' + id);
	},
	save: (data) => {
		return axios.post('/api/books', data);
	},
};
