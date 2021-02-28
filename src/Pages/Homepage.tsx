import React, { useState } from 'react';
import styled from 'styled-components';

import { Navbar } from '../components/navBar';
import { PieGif } from '../components/pieGif';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #121212;
  color: whitesmoke;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: none;
`;

export const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [lang, setLang] = useState('eng');
  return (
    <Background>
      <Navbar lang={lang} />
      <PieGif lang={lang} />
    </Background>
  );
};
