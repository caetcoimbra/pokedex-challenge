/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

describe('Teste de toda a aplicação', () => {
  it('Verifica se o Rapidash (meu pokemón preferido) está sendo renderizado', async () => {
    render(<App />);
    const imgRapidash = await screen.findByAltText('rapidash');
    const nameRapidash = await screen.findByTestId('rapidash');

    expect(imgRapidash).toBeInTheDocument();
    expect(nameRapidash.textContent).toBe('rapidash');
  });

  it('Verifica se os 151 pokémons estão sendo renderizados', async () => {
    render(<App />);
    const divPokemons = await screen.findAllByTestId('pokemon-div');
    expect(divPokemons).toHaveLength(151);
  });

  it('Verifica se o Rapidash pode ser encontrado na barra de busca', async () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(
      'What pokémon are you looking for?',
    );
    const searchButton = screen.getByTestId('search-button');

    await userEvent.type(searchInput, 'rapidash');
    await userEvent.click(searchButton);

    const divResult = await screen.findByTestId('div-result-rapidash');

    expect(divResult).toBeInTheDocument();
  });
});