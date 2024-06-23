import axios from "axios";
import { PREDICTION_URL } from "@env";

export const predict = async (features) => {
  try {
    const response = await axios.post(`${PREDICTION_URL}/predict`, {
      features,
    });
    return response.data;
  } catch (error) {
    console.error("Error al hacer la predicción:", error.message);
    return null;
  }
};
