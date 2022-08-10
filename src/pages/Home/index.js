/* eslint-disable no-shadow */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import {
  getAllPokemons,
  getPokemon,
} from '../../services/fetchAllPokemons.service';
import { Form, Error, ResultSearch } from './styles';
import Pokeball from '../../assets/pokeball.gif';
import StyledGrid from '../../components/StyledGrid';

const Home = () => {
  const [pokemon, setPokemon] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [newPokemon, setNewPokemon] = useState('');
  const [inputError, setInputError] = useState('');

  const loadAllPokemons = async () => {
    const allPokemons = await getAllPokemons();
    return setPokemons(allPokemons);
  };

  useEffect(() => {
    loadAllPokemons();
  }, []);

  async function handleSearch(event) {
    event.preventDefault();

    if (!newPokemon) {
      setInputError('Enter a pokémon name!');
      return;
    }
    try {
      const pokemon = await getPokemon(newPokemon);
      setPokemon(pokemon);
      setNewPokemon('');
      setInputError('');
    } catch (err) {
      setInputError('Error searching this pokémon!');
    }
  }
  return (
    <>
      <a href="/">
        <img src={Pokeball} alt="Pikachu and Diglett playing with a pokeball" />
      </a>
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <Form hasError={!!inputError} onSubmit={handleSearch}>
        <input
          value={newPokemon}
          onChange={(e) => setNewPokemon(e.target.value)}
          placeholder="What pokémon are you looking for?"
        />
        <button type="submit">Search</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}
      {pokemon ? (
        <ResultSearch>
          <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
            />
            <div>
              <strong>
                {pokemon.name?.toUpperCase()}
                {' '}
                #
                {pokemon.id?.toString().padStart(4, '0')}
              </strong>
            </div>
            <FiChevronRight size={20} />
          </Link>
        </ResultSearch>
      ) : (
        <StyledGrid pokemons={pokemons} />
      )}
    </>
  );
};

export default Home;
