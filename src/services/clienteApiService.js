import axios from 'axios';

export async function getClientes() {
  const response = await axios.get('https://glacial-stream-24243.herokuapp.com/clientes');
  const newClientes = await response.data;
  return newClientes;
}

export async function getPromedioEdades() {
  const response = await axios.get('https://glacial-stream-24243.herokuapp.com/clientes/promedio-edades');
  const promedio = await response.data;
  return promedio;
}

export async function getGruposPorEdad() {
  const response = await axios.get('https://glacial-stream-24243.herokuapp.com/clientes/grupos-por-edad');
  const gruposXEdad = await response.data;
  return gruposXEdad;
}
