/* eslint-disable func-names */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #121212;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Span = styled.span`
  width: 50%;
  font-family: 'Sacramento', cursive;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 8px;
  color: whitesmoke;
  text-align: center;
`;

const BarBackground = styled.div`
  width: 50%;
  height: 20px;
  border: 2px solid whitesmoke;
  box-sizing: border-box;
`;

const BarFill = styled.div`
  background-color: whitesmoke;
  height: 100%;
  transition: width 1s easy-in-out;
`;

export const LoadingPage: React.FC = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setInterval(() => {
      let newWidth = width;
      newWidth++;
      setWidth(newWidth);
    });
  });
  return (
    <Background>
      <Span>Teste</Span>
      <BarBackground>
        <BarFill style={{ width: `${width}%` }} />
      </BarBackground>
    </Background>
  );
};
