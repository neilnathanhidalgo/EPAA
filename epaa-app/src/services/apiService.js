import axios from "axios";

const BASE_URL = "http://192.168.0.13:5000";

export const predict = async (features) => {
  try {
    const response = await axios.post(`${BASE_URL}/predict`, {
      features,
    });
    return response.data;
  } catch (error) {
    console.error("Error al hacer la predicción:", error.message);
    return null;
  }
};
