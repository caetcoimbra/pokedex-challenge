import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PokemonPage from './pages/Pokemon';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:pokemon" element={<PokemonPage />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
