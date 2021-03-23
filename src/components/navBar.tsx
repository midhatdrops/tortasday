/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from './button';

const AppBar = styled.nav`
  @media (max-width: 540px) {
    width: 100vw;
    height: 30px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0px;
    z-index: 2;
    background-color: #121212;
  }

  @media (max-width: 280px) {
    width: 100vw;
    height: 30px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 2;
    background-color: #121212;
  }
`;

const TypoArea = styled.div`
  width: 100%;
  height: 30px;
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
    font-size: 1.5rem;
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

  @media (max-width: 540px) {
    width: 100%;
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 2px;
    margin-top: 5px;
    margin-left: 30px;
    z-index: 2;

    & button {
      font-family: 'Ubuntu', sans-serif;
      color: whitesmoke;
      font-weight: 400;
      font-size: 0.7rem;
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

  @media (max-width: 280px) {
    width: 100%;
    height: 30px;
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction: row;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
    margin-top: 5px;
    line-height: 10px;
    padding: 0px;
    /* margin-left: 30px; */
    z-index: 2;

    & button {
      width: 20%;
      font-family: 'Ubuntu', sans-serif;
      color: whitesmoke;
      font-weight: 400;
      font-size: 0.6rem;
      opacity: 0.6;
      transition: 0.5s opacity easy-in-out;
      /* margin-right: 30px; */
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
  lang?: string | 'eng';
  activated?: string;
  setActive?: React.Dispatch<React.SetStateAction<string>>;
}

export const Navbar: React.FC<NavBarProps> = ({ lang }) => {
  const [activated, setActive] = useState('homepage');
  return (
    <>
      <style />
      <AppBar>
        <TypoArea>
          <Link to="/tortasday">
            <Button
              id="Homepage"
              style={{ opacity: activated === 'History' ? '1' : '0.5' }}
              onClick={() => setActive('homepage')}
            >
              {lang === 'ptbr' ? 'Início' : 'Homepage'}
            </Button>
          </Link>
          <Link to="/tortasday/history" onClick={() => setActive('History')}>
            <Button
              id="History"
              style={{ opacity: activated === 'History' ? '1' : '0.5' }}
              onClick={() => setActive('homepage')}
            >
              {lang === 'ptbr' ? 'História' : 'History'}
            </Button>
          </Link>

          <Link
            to="/tortasday/community"
            onClick={() => setActive('Community')}
          >
            <Button
              id="Comunnity"
              style={{ opacity: activated === 'History' ? '1' : '0.5' }}
              onClick={() => setActive('homepage')}
            >
              {lang === 'ptbr' ? 'Comunidade' : 'Community'}
            </Button>
          </Link>
        </TypoArea>
      </AppBar>
    </>
  );
};
