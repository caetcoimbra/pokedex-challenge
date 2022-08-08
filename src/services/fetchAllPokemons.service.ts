import api from './api';

export const getAllPokemons = async (): Promise<any> => {
  const response = await api.get('pokemon?limit=151');
  const data = response.data.results.map((pokemon: any, idx: any) => ({
    id: idx + 1,
    name: pokemon.name
  }));
  return data;
};

export const getPokemon = async (newPokemon: any) => {
  const [{ data }, { data: species }] = await Promise.all([
    api.get(`/pokemon/${newPokemon}`),
    api.get(`/pokemon-species/${newPokemon}`)
  ]);

  const description = species.flavor_text_entries.findIndex((entries: any) => {
    return entries.language.name === 'en' && entries.version.name === 'y';
  });
  data.description =
    description > 0 ? species.flavor_text_entries[description].flavor_text : '';
  // eslint-disable-next-line no-console
  console.log(data);
  return data;
};
