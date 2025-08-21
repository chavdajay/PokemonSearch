import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const fetchPokemon = (name) => API.get(`/masters/${name}`);
export const createPokemon = (pokemonData) => API.post("/masters", pokemonData);
export const deletePokemon = (id) => API.delete(`/masters/${id}`);
export const fetchAbilities = (masterId) =>
  API.get(`/abilities/master/${masterId}`);
export const createAbility = (abilityData) =>
  API.post("/abilities", abilityData);
export const deleteAbility = (id) => API.delete(`/abilities/${id}`);
