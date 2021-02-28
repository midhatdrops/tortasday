/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styled from 'styled-components';

const AppBar = styled.nav`
  @media (max-width: 540px) and (max-height: 720px) {
    width: 100vw;
    height: 30px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0px;
  }
`;

const TypoArea = styled.div`
  @media (max-width: 540px) and (max-height: 720px) {
    width: 100%;
    height: 30;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 2px;
    margin-top: 5px;
    margin-left: 30px;

    & button {
      font-family: 'Ubuntu', sans-serif;
      color: whitesmoke;
      font-weight: 400;
      font-size: 15px;
      opacity: 0.6;
      transition: 0.5s opacity easy-in-out;
      margin-right: 30px;
      background: none;
      border: 0px;
      :focus {
        border: 0px;
        outline: none;
      }
      :active {
        border: 0px;
        outline: none;
      }
    }
  }
`;

interface NavBarProps {
  lang: string;
}

export const Navbar: React.FC<NavBarProps> = ({ lang = 'ptbr' as string }) => {
  const [activated, setActive] = useState('homepage');
  return (
    <AppBar>
      <TypoArea>
        <button
          id="homepage"
          style={{ opacity: activated === 'homepage' ? '1' : '0.5' }}
          onClick={() => setActive('homepage')}
        >
          {lang === 'ptbr' ? 'Início' : 'Homepage'}
        </button>
        <button
          id="History"
          style={{ opacity: activated === 'History' ? '1' : '0.5' }}
          onClick={() => setActive('History')}
        >
          {lang === 'ptbr' ? 'História' : 'History'}
        </button>
        <button
          id="Community"
          style={{ opacity: activated === 'Community' ? '1' : '0.5' }}
          onClick={() => setActive('Community')}
        >
          {lang === 'ptbr' ? 'Comunidade' : 'Community'}
        </button>
      </TypoArea>
    </AppBar>
  );
};
