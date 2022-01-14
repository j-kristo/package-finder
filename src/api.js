import axios from 'axios';
const api = axios.create({ baseURL: 'https://ofcncog2cu-3.algolianet.com/1/indexes/npm-search' });
export default api;
