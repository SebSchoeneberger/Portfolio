import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const requestCV = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/api/request-cv`, data);
  return response.data;
};
