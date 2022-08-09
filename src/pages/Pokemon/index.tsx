/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { getPokemon } from '../../services/fetchAllPokemons.service';
import Stats from '../../components/Stats';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';

import Pokeball from '../../assets/pokeball.gif';

import { Header, PokemonInfo } from './styles';

interface Pokemon {
  id: number;
  name: string;
  description: string;
  height: number;
  weight: number;
  base_experience: number;
  types: Array<Type>;
  stats: Array<Stat>;
}

interface Type {
  type: { name: string };
}

interface Stat {
  type: { name: string };
}

const PokemonPage: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const { pokemon: pokemonParam } = useParams();

  useEffect(() => {
    const loadPokemon = async () => {
      const pokemon = await getPokemon(pokemonParam);
      setPokemon(pokemon);
    };
    loadPokemon();
  }, [pokemonParam]);

  return (
    <>
      <Header>
        <img src={Pokeball} alt="Pikachu and Diglett playing with a pokeball" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {pokemon && (
        <PokemonInfo>
          <header>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
            />
            <div>
              <strong>
                {pokemon.name.toUpperCase()} #
                {pokemon.id.toString().padStart(3, '0')}
              </strong>
              {pokemon.types.map((type) => (
                <span key={pokemon.id}>{type.type.name.toUpperCase()}</span>
              ))}
              <p>{pokemon.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{pokemon.height}m</strong>
              <span>Height</span>
            </li>
            <li>
              <strong>{pokemon.weight}kg</strong>
              <span>Weight</span>
            </li>
            <li>
              <strong>{pokemon.base_experience}xp</strong>
              <span>Base XP</span>
            </li>
          </ul>
          <Stats stats={pokemon.stats} />
          <CommentForm pokemon={pokemon} />
          <CommentList pokemon={pokemon} />
        </PokemonInfo>
      )}
    </>
  );
};

export default PokemonPage;
