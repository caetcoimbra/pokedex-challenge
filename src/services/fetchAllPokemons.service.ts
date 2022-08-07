import api from './api';

export const getAllPokemons = async (): Promise<any> => {
  const response = await api.get('pokemon?limit=151');
  const data = response.data.results.map((pokemon: any, idx: any) => ({
    id: idx + 1,
    name: pokemon.name
  }));
  return data;
};

export const getPokemon = async (newPokemon: string) => {
  return (await api.get(`pokemon/${newPokemon}`)).data;
};
