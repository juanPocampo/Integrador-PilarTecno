const axios = require("axios");

const get = async (url) => {
  console.log("get: ", url);
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
const post = async (url, body) => {
  try {
    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
const patch = async (url, body) => {
  try {
    const response = await axios.patch(url, body);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
const delet = async (url, sectorId) => {
  try {
    const response = await axios.delete(url, { data: { sectorId } });
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
const api = {
  get: (url) => get(url),
  post: (url, body) => post(url, body),
  patch: (url, body) => patch(url, body),
  delete: (url, body) => delet(url, body),
};
export default api;
