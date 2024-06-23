import axios from "axios";
import { EPAA_API_URL } from "@env";

export const getAlertaByType = async (type) => {
  try {
    const response = await axios.get(`${EPAA_API_URL}/alerta/tipo/${type}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener alertas por tipo:", error);
    return handleError(error);
  }
};

export const createAlerta = async (alerta) => {
  try {
    const response = await axios.post(`${EPAA_API_URL}/alerta`, alerta);
    return response.data;
  } catch (error) {
    console.error("Error al crear la alerta:", error);
    return handleError(error);
  }
};

export const updateAlerta = async (id, alerta) => {
  try {
    const response = await axios.put(`${EPAA_API_URL}/alerta/${id}`, alerta);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar la alerta:", error);
    return handleError(error);
  }
};

export const deleteAlerta = async (id) => {
  try {
    const response = await axios.delete(`${EPAA_API_URL}/alerta/id/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar la alerta:", error);
    return handleError(error);
  }
};

export const deleteAllAlertas = async () => {
  try {
    const response = await axios.delete(`${EPAA_API_URL}/alerta/all`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar todas las alertas:", error);
    return handleError(error);
  }
};

export const deleteByType = async (type) => {
  try {
    const response = await axios.delete(`${EPAA_API_URL}/alerta/tipo/${type}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar las alertas por tipo:", error);
    return handleError(error);
  }
};

export const getAllAlertas = async () => {
  try {
    const response = await axios.get(`${EPAA_API_URL}/alerta`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener todas las alertas:", error);
    return handleError(error);
  }
};

function handleError(error) {
  if (error.response) {
    console.error("Código de estado del error:", error.response.status);
    console.error("Mensaje del error:", error.response.data);
  } else if (error.request) {
    console.error("No se recibió respuesta para la petición:", error.request);
  } else {
    console.error("Error configurando la petición:", error.message);
  }
  return null;
}
