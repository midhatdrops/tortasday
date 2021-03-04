import React from 'react';
import styled from 'styled-components';

import { Discord } from '../components/discord';

import { Navbar } from '../components/navBar';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #121212;
  color: whitesmoke;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Comunnity: React.FC = () => {
  return (
    <Background>
      <Navbar />
      <a
        style={{
          width: '80%',
          height: '80%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        href="https://discord.gg/JZrUBxr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Discord width="50%" height="50%" />
      </a>
    </Background>
  );
};
