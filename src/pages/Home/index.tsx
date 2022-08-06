import React, { useEffect, useState } from 'react';
import { getAllPokemons } from '../../services/fetchAllPokemons.service';
import { Form, Grid } from './styles';
import Pokeball from '../../assets/pokeball.gif';

interface Pokemon {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const loadAllPokemon = async (): Promise<any> => {
    const allPokemons = await getAllPokemons();
    return setPokemons(allPokemons);
  };

  useEffect(() => {
    loadAllPokemon();
  }, []);

  return (
    <>
      <img src={Pokeball} alt="Pokebola rolando" />
      <Form>
        <input placeholder="Digite o nome de um pokémon" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Grid>
        <div className="container">
          {pokemons.map((pokemon) => (
            <div className="content" key={pokemon.name}>
              <a href="#top">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  alt={pokemon.name}
                />
              </a>
              <div>
                <strong>{pokemon.name}</strong>
              </div>
            </div>
          ))}
        </div>
      </Grid>
    </>
  );
};

export default Home;
