import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const sendEmail = async (formData) => {
  if (USE_MOCK) {
    console.log("Mock sendEmail called with:", formData);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ status: "success", message: "Mock email sent successfully!" });
      }, 1000);
    });
  }

  try {
    const response = await axios.post(`${API_BASE_URL}/api/contact`, formData);
    return response.data;
  } catch (error) {
    console.error("Error sending email:", error.response?.data || error.message);
    throw error;
  }
};
