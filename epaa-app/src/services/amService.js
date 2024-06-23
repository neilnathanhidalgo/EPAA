import axios from "axios";
import { EPAA_API_URL } from "@env";

export const getAsistenteById = async (id) => {
  try {
    const response = await axios.get(`${EPAA_API_URL}/adulto_mayor/${id}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error al obtener los datos:", error.message);
      console.error("Código de estado del error:", error.response.status);
      console.error("Mensaje del error:", error.response.data);
    } else if (error.request) {
      console.error("No se recibió respuesta para la petición:", error.request);
    } else {
      console.error("Error configurando la petición:", error.message);
    }
    return null;
  }
};
