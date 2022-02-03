import axios from 'axios';

const api = (url?:string) => {
  const apiInstance = axios.create({ baseURL: url ? url:  process.env.REACT_APP_API_URL });
  return apiInstance;
};

export default api;
